import type { organizations } from "./facts";

type Certification = {
  id: string;
  issuer: keyof typeof organizations;
  name: string;
  nameLanguage: "en" | "es";
  kind: "individual" | "group";
  documents: readonly {
    id: string;
    url: string;
    credentialId: string;
    name: string | null;
  }[];
};

// URLs and official names: docs/Certifications.txt.
// Coderhouse course order confirmed by Federico: React, JavaScript, Backend.
export const certifications = [
  {
    id: "openai-cyber",
    issuer: "openai",
    name: "Cyber Deployment Practitioner",
    nameLanguage: "en",
    kind: "individual",
    documents: [
      {
        id: "openai-cyber-1",
        url: "https://drive.google.com/file/d/1arvGAEbzKVROR_iB2xfsh6v1uqW7mqct/view?usp=drive_link",
        credentialId: "openai-cyber",
        name: null,
      },
    ],
  },
  {
    id: "epam-engx",
    issuer: "epam",
    name: "ENGX BOOTCAMP COURSE",
    nameLanguage: "en",
    kind: "individual",
    documents: [
      {
        id: "epam-engx-1",
        url: "https://drive.google.com/file/d/1Rpw1JobnFUYaYeQSlSEOZCzlNT0Iahdo/view?usp=drive_link",
        credentialId: "epam-engx",
        name: null,
      },
    ],
  },
  {
    id: "utn-fullstack",
    issuer: "utn",
    name: "Diplomatura en programación web fullstack",
    nameLanguage: "es",
    kind: "individual",
    documents: [
      {
        id: "utn-fullstack-1",
        url: "https://drive.google.com/file/d/1gmjXqhPagECBAbpQ6MqCrdbL2IcfNELa/view?usp=drive_link",
        credentialId: "utn-fullstack",
        name: null,
      },
    ],
  },
  {
    id: "unc-english",
    issuer: "unc",
    name: "Consolidación y uso de la lengua II (B2) de Inglés",
    nameLanguage: "es",
    kind: "individual",
    documents: [
      {
        id: "unc-english-1",
        url: "https://drive.google.com/file/d/1Aa3-kqTgvX6mWIx2q0SITUbePXb9CutH/view?usp=drive_link",
        credentialId: "unc-english",
        name: null,
      },
    ],
  },
  {
    id: "coderhouse-mern",
    issuer: "coderhouse",
    name: "Stack MERN Courses",
    nameLanguage: "en",
    kind: "group",
    documents: [
      {
        id: "coderhouse-mern-1",
        url: "https://drive.google.com/file/d/1pHSVMqRBoMLcSWOB-fGqiSW2MELGdGUq/view?usp=drive_link",
        credentialId: "coderhouse-react",
        name: "React Js Course",
      },
      {
        id: "coderhouse-mern-2",
        url: "https://drive.google.com/file/d/1JDTOh5_dxi5gm74E9lqvQSXhFOVZ5v69/view?usp=drive_link",
        credentialId: "coderhouse-javascript",
        name: "JavaScript Course",
      },
      {
        id: "coderhouse-mern-3",
        url: "https://drive.google.com/file/d/1CsmajC7dN3hqyfAjK73yZ3VbPjbFjLQ8/view?usp=drive_link",
        credentialId: "coderhouse-backend",
        name: "Backend Course",
      },
    ],
  },
] as const satisfies readonly Certification[];
