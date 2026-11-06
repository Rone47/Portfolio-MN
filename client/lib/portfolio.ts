export type PortfolioProject = {
  title: string;
  summary: string;
  details: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  deployment?: string;
};

export const PILLARS = [
  {
    id: "software",
    title: "Software",
    description: "Web applications, APIs, and digital products built around real user needs.",
    href: "/work/software",
  },
  {
    id: "soc",
    title: "Cybersecurity & SOC",
    description: "Security operations, monitoring, alert triage, and incident investigation.",
    href: "/work/soc",
  },
  {
    id: "servers",
    title: "Servers & Infrastructure",
    description: "Self-hosting, Linux server administration, and dependable online services.",
    href: "/work/servers",
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Deployment, automation, monitoring, and keeping services running smoothly.",
    href: "/work/devops",
  },
];

export const SOFTWARE_PROJECTS: PortfolioProject[] = [
  {
    title: "SIS — School Inventory System",
    summary: "A live school inventory system for managing school resources and related workflows.",
    liveUrl: "https://school-inventory-2p4l.onrender.com/login",
    githubUrl: "https://github.com/Rone47",
    technologies: ["React", "Node.js", "MongoDB"],
    details: [
      "School-focused inventory management",
      "Live application hosted on Render",
    ],
  },
  {
    title: "Flank Funded",
    summary: "A live proprietary trading platform with trader-facing product workflows.",
    liveUrl: "https://flankfunded.com/",
    details: [
      "Trader and account management experience",
      "Production website and platform workflows",
    ],
  },
  {
    title: "House of Scents",
    summary: "A live fragrance e-commerce website, self-hosted on my own server.",
    liveUrl: "https://thehouseofscents.org/",
    deployment: "Self-hosted",
    details: [
      "Product discovery and online shopping experience",
      "Self-hosted deployment—connecting application development with server operations",
    ],
  },
];

export const CYBERSECURITY_PROJECTS: PortfolioProject[] = [
  {
    title: "SOC Monitoring & Incident Investigation",
    summary: "Security operations work covering security monitoring, alert triage, and incident investigation.",
    technologies: ["Wazuh", "Linux", "Windows", "Nmap", "OpenVAS", "OWASP ZAP", "Burp Suite"],
    details: [
      "Monitor endpoint and system security events",
      "Triage alerts and investigate suspicious activity",
      "Document findings and remediation steps",
    ],
  },
];

export const INFRASTRUCTURE_PROJECTS: PortfolioProject[] = [
  {
    title: "Self-Hosted Websites & Server Operations",
    summary: "Live self-hosted website work that brings server management and production operations into the portfolio.",
    liveUrl: "https://thehouseofscents.org/",
    deployment: "Live · Self-hosted",
    technologies: ["Linux", "Web hosting", "DNS", "SSL", "Server administration"],
    details: [
      "House of Scents runs live on my own server",
      "Manage the hosting environment behind a public production website",
      "Connect website delivery with server and service operations",
    ],
  },
];

export const DEVOPS_PROJECTS: PortfolioProject[] = [
  {
    title: "Deployment & Service Operations",
    summary: "DevOps work supporting live web projects, from deployment through ongoing service operations.",
    liveUrl: "https://thehouseofscents.org/",
    deployment: "In production",
    technologies: ["Deployment", "Self-hosting", "Service operations", "Monitoring"],
    details: [
      "Deploy and operate a live, self-hosted e-commerce website",
      "Keep the application and its hosting environment working together",
      "Build operational experience from a real production service",
    ],
  },
];

export type WorkCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  projects: PortfolioProject[];
  note?: string;
};

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    slug: "software",
    title: "Software projects",
    eyebrow: "Software",
    description: "Live applications and software projects I have built.",
    projects: SOFTWARE_PROJECTS,
  },
  {
    slug: "soc",
    title: "Security operations",
    eyebrow: "Cybersecurity · SOC",
    description: "Security monitoring, alert triage, and incident investigation work.",
    projects: CYBERSECURITY_PROJECTS,
    note: "Security testing is limited to systems I own or have explicit permission to assess.",
  },
  {
    slug: "servers",
    title: "Servers & infrastructure",
    eyebrow: "Infrastructure",
    description: "Live hosting and server operations supporting real websites.",
    projects: INFRASTRUCTURE_PROJECTS,
  },
  {
    slug: "devops",
    title: "DevOps & service operations",
    eyebrow: "DevOps",
    description: "Deployment and ongoing operations for live services.",
    projects: DEVOPS_PROJECTS,
  },
];

export const getWorkCategory = (slug: string) =>
  WORK_CATEGORIES.find((category) => category.slug === slug);

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Rone47" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/byrone-aketch-701b95237/" },
  { label: "Facebook", href: "https://www.facebook.com/share/19xXBVvKEm/" },
];

export const TECHNOLOGY_GROUPS = [
  { title: "Programming", items: ["Python", "JavaScript"] },
  { title: "Software development", items: ["Django", "Django REST Framework", "MERN Stack", "Full-Stack Development"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "IT & digital systems", items: ["System Administration", "Digital Records Management", "Workflow Automation"] },
  { title: "Cybersecurity", items: ["Security Fundamentals", "Risk Awareness", "Secure Systems"] },
  { title: "Programme & leadership", items: ["Programme Coordination", "Youth Mentorship", "Budget Monitoring", "Stakeholder Management"] },
];

export const CASE_STUDY_SECTIONS = [
  "Objective",
  "Architecture",
  "Technologies",
  "Implementation",
  "Security",
  "Monitoring",
  "Challenges",
  "Results",
  "Evidence",
];

export const PORTFOLIO_PHASES = [
  {
    title: "Phase 1 · Professional foundation",
    items: [
      "Keep the professional identity, portfolio, and project index current",
      "Add verified GitHub, LinkedIn, and CV links when the profile details and CV are ready",
      "Publish complete case studies for the three software projects",
    ],
  },
  {
    title: "Phase 2 · Infrastructure evidence",
    items: [
      "Document the actual Ubuntu/server and hosting environment",
      "Add monitoring, backup, and recovery evidence",
      "Publish a sanitized deployment architecture",
    ],
  },
  {
    title: "Phase 3 · SOC practice",
    items: [
      "Build a Wazuh lab with Windows and Linux endpoints",
      "Investigate simulated security alerts and document findings",
      "Publish incident reports and detection notes",
    ],
  },
  {
    title: "Phase 4 · Integrated operations platform",
    items: [
      "Develop the Secure Infrastructure & Operations Platform",
      "Connect monitoring, uptime, security events, and alert workflows",
      "Publish its architecture, source code, and demonstration",
    ],
  },
];
