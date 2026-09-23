import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { experiences, organizations, profile } from "@/content/facts";
import { socialImage } from "@/content/metadata";

const size = { width: socialImage.width, height: socialImage.height };
export const dynamic = "force-static";

export async function GET() {
  // Local reduced JPEG derived from the approved portrait. Satori cannot decode WebP.
  const portrait = await readFile(
    join(process.cwd(), "src/content/assets/social-portrait.jpg"),
  );
  const [firstName, ...surname] = profile.name.split(" ");
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f7f5ef",
        color: "#272c29",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 0,
          top: 0,
          width: 430,
          height: 630,
          background: "#285447",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: 64,
          top: 87,
          width: 706,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            lineHeight: 1.05,
            letterSpacing: -5,
            fontWeight: 700,
          }}
        >
          <span>{firstName}</span>
          <span>{surname.join(" ")}</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 34,
            letterSpacing: -1,
          }}
        >
          {profile.currentRole}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 28,
            color: "#285447",
          }}
        >
          {organizations[experiences.data.employer]}
        </div>
      </div>
      {/* ImageResponse renders this into PNG; next/image optimization is not applicable. */}
      {/* biome-ignore lint/performance/noImgElement: Native img is required by the server-side ImageResponse renderer. */}
      <img
        src={`data:image/jpeg;base64,${portrait.toString("base64")}`}
        alt=""
        width={350}
        height={502}
        style={{ position: "absolute", right: 48, top: 48, objectFit: "cover" }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: 64,
          bottom: 64,
          width: 650,
          height: 2,
          background: "#285447",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 48,
          bottom: 48,
          width: 350,
          height: 2,
          background: "#f7f5ef",
          opacity: 0.5,
        }}
      />
    </div>,
    size,
  );
}
