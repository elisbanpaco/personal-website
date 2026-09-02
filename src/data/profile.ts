export interface Profile {
  name: string;
  preferredName?: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  x?: string;
  websites?: { label: string; url: string }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
    notes: string[];
  }[];
  honors: string[];
}

export const profile: Profile = {
  name: "Elisban Pacco Accha",
  preferredName: "Elisban Pacco",
  role: "Software Engineer · Backend, AI & Data Systems",
  tagline: "I build systems that turn data into useful software.",
  location: "Puno, Peru",
  email: "paccoacchaelias@gmail.com",
  phone: "+51 999 995 083",
  github: "https://github.com/elisbanpaco",
  linkedin: "https://www.linkedin.com/in/elisbanpaco",
  x: "https://x.com/elisbanpaco",
  websites: [
    { label: "brevio.link", url: "https://brevio.link" },
    { label: "platanito.dev", url: "https://platanito.dev" }
  ],
  education: [
    {
      institution: "Universidad Nacional del Altiplano",
      degree: "B.S. in Systems Engineering",
      period: "2022 — 2026",
      location: "Puno, Peru",
      notes: [
        "Specialization: Distributed Systems, Algorithmic Engineering & Machine Learning",
        "PRONABEC Academic Scholarship Awardee"
      ]
    }
  ],
  honors: [
    "PRONABEC Academic Scholarship Awardee",
    "ICPC (International Collegiate Programming Contest) South America Regional Qualifier",
    "Algorithmic Problem Solver (Data Structures & Graph Theory)",
    "Member of IEEE Student Branch"
  ]
};
