"use client";

import { useEffect } from "react";

/** Enhances already visible HTML. No hidden/pending state or scroll loop. */
export function MotionController() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 767px)");
    const tokens = getComputedStyle(document.documentElement);
    const duration = (name: string) =>
      Number.parseFloat(tokens.getPropertyValue(name));
    const easing = tokens.getPropertyValue("--motion-ease-out").trim();
    const seen = new WeakSet<Element>();
    const running = new Map<Animation, HTMLElement>();
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;

    function animate(target: HTMLElement, kind: string, delay = 0) {
      if (typeof target.animate !== "function") return;
      const distance =
        kind === "quiet" || kind === "line"
          ? 0
          : Number.parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--motion-distance",
              ),
            );
      const animation = target.animate(
        [
          {
            opacity: kind === "image" ? 0.72 : 0.94,
            translate: kind === "aside" ? "6px 0" : `0 ${distance}px`,
          },
          { opacity: 1, translate: "0 0" },
        ],
        {
          duration: duration(
            kind === "image" ? "--motion-slow" : "--motion-normal",
          ),
          delay,
          easing,
        },
      );
      running.set(animation, target);
      animation.onfinish = animation.oncancel = () => running.delete(animation);
    }

    function observe() {
      observer?.disconnect();
      for (const animation of running.keys()) animation.cancel();
      if (reduced.matches) {
        for (const target of targets)
          target.removeAttribute("data-motion-entered");
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const target = entry.target as HTMLElement;
            observer?.unobserve(target);
            if (seen.has(target)) continue;
            seen.add(target);
            if (target.contains(document.activeElement)) continue;
            target.dataset.motionEntered = "true";
            if (target.dataset.reveal === "line") continue;
            if (
              target.dataset.reveal === "pipeline" ||
              target.dataset.reveal === "group"
            ) {
              Array.from(target.children).forEach((stage, index) => {
                animate(
                  stage as HTMLElement,
                  "quiet",
                  index *
                    duration(
                      target.dataset.reveal === "group"
                        ? "--motion-group-stagger"
                        : "--motion-stagger",
                    ),
                );
              });
            } else {
              animate(target, target.dataset.reveal ?? "quiet");
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" },
      );
      for (const target of targets) {
        const rect = target.getBoundingClientRect();
        // Restored scroll positions and initial viewport never wait for an entrance.
        if (
          rect.top < innerHeight ||
          (compact.matches && target.hasAttribute("data-motion-desktop"))
        )
          seen.add(target);
        if (!seen.has(target)) observer.observe(target);
      }
    }

    function focus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      for (const [animation, target] of running) {
        if (target.contains(event.target)) animation.cancel();
      }
    }
    observe();
    reduced.addEventListener("change", observe);
    document.addEventListener("focusin", focus);

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".primary-navigation a[href^='#']",
      ),
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section, [data-motion-hero]",
      ),
    );
    const visible = new Set<Element>();
    let navigation: IntersectionObserver;
    function observeNavigation() {
      navigation?.disconnect();
      visible.clear();
      navigation = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          }
          const active = sections
            .filter((section) => visible.has(section))
            .at(-1);
          for (const link of links) {
            if (active?.id && link.hash === `#${active.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          }
        },
        {
          rootMargin: `${-innerHeight * 0.1}px 0px ${-innerHeight * 0.65}px 0px`,
        },
      );
      sections.forEach((section) => {
        navigation.observe(section);
      });
    }
    observeNavigation();
    window.addEventListener("resize", observeNavigation);
    return () => {
      observer?.disconnect();
      navigation.disconnect();
      window.removeEventListener("resize", observeNavigation);
      reduced.removeEventListener("change", observe);
      document.removeEventListener("focusin", focus);
      for (const animation of running.keys()) animation.cancel();
      links.forEach((link) => {
        link.removeAttribute("aria-current");
      });
    };
  }, []);
  return null;
}
