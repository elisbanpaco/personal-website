export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    period: "Apr. 2026 — Jul. 2026",
    role: "Backend Software Engineer",
    company: "Oficina de Tecnologías de Información (OTI) · UNAP",
    companyUrl: "https://portal.unap.edu.pe",
    location: "Puno, Peru",
    description: "Engineered and optimized core institutional backend services, high-concurrency RESTful APIs, and database migrations in PostgreSQL for campus-wide administrative platforms and digital student services.",
    skills: ["FastAPI", "PostgreSQL", "TypeScript", "RESTful APIs", "Docker", "Git"]
  },
  {
    period: "Feb. 2025 — Mar. 2025",
    role: "Mobile & Systems Developer",
    company: "Municipalidad Distrital de Coasa",
    location: "Carabaya, Puno",
    description: "Architected and deployed a native Android citizen-facing mobile application using Kotlin and Jetpack Compose, modernizing municipal workflows, citizen requests, and REST backend integrations.",
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "REST APIs", "Mobile Architecture"]
  }
];
