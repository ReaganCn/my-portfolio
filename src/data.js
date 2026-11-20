// Projects mirror the client engagements on the CV (newest first), plus open-source work.
// `github` / `live` render as links only when non-empty; otherwise the row shows "private · client work".
const Projects = [
  {
    id: 31,
    title: "Goodless",
    role: "Senior Software Engineer",
    period: "2025 — now",
    place: "Belgium, remote",
    description:
      "RFID-enabled payments and reusable-cup tracking for live events, sustaining 5,000+ simultaneous transactions. Go and Python services run in Docker on Linux edge devices beside smart bins and mats, with an offline-first sync layer (local queues, idempotent replay) so scanning and payments keep working when the venue's connection drops. The backend runs on Kubernetes in AWS at 99%+ uptime through peak event load.",
    technologies: ["Go", "Python", "Docker", "Kubernetes", "AWS", "Prometheus", "Grafana"],
    github: "",
    live: "",
  },
  {
    id: 30,
    title: "Goomza",
    role: "Senior Software Engineer",
    period: "2023 — 2024",
    place: "Nairobi",
    description:
      "Led the move of a conversational learning platform from rule-based logic to an LLM/RAG architecture, serving 10,000+ active users at 99% uptime. Built Go and Python services and gRPC gateways for partner integrations, moved the core services onto Kubernetes (EKS) with Helm and Terraform, and created a no-code chatbot builder for non-technical users.",
    technologies: ["Go", "Python", "Node.js", "LLMs & RAG", "gRPC", "Kubernetes", "Terraform"],
    github: "https://github.com/italanta/elewa",
    live: "",
  },
  {
    id: 29,
    title: "Spotlights",
    role: "Full-stack Engineer",
    period: "2022",
    place: "Brussels",
    description:
      "A talent-matching platform with complex search over a large candidate pool. Built the backend APIs and data models, tuned PostgreSQL indexes and queries to keep search fast as the pool grew, and built the React interfaces for recruiter search, with GDPR-compliant handling of candidate data.",
    technologies: ["Node.js", "React", "PostgreSQL"],
    github: "",
    live: "",
  },
  {
    id: 28,
    title: "Domeincatch",
    role: "Backend Engineer — Go",
    period: "2022",
    place: "Brussels, remote",
    description:
      "A platform for catching expiring domains and bidding on them. Built Go backend services on AWS, hosted close to the domain registries, and tuned TLS session reuse and TCP connection handling to bring registry communication into the microsecond range. Automated the scheduling, bidding and monitoring pipelines that kept it available during peak bidding.",
    technologies: ["Go", "AWS", "TCP/TLS", "DNS"],
    github: "",
    live: "",
  },
  {
    id: 27,
    title: "Novacom Systems",
    role: "Software Consultant",
    period: "2019 — 2022",
    place: "Nairobi",
    description:
      "ERP, payment and reporting software for clients, often installed on their own servers in offices with unreliable internet. Integrated client systems with banks, mobile money APIs and accounting tools, including the reconciliation edge cases, and ran requirements workshops and user training.",
    technologies: ["Node.js", "Python", "MySQL"],
    github: "",
    live: "",
  },
  {
    id: 21,
    title: "Filewatch",
    role: "Open source",
    period: "",
    place: "",
    description:
      "A Golang command-line tool that watches files and folders for modifications, creations and deletions and sends an event for each.",
    technologies: ["Go", "Docker", "Amazon ECS", "SQLite"],
    github: "https://github.com/ReaganCn/filewatch",
    live: "",
  },
];

// `logo` is a file in public/imgs/skills_logos/ (and dist/public/imgs/skills_logos/ for the live site).
// Skills without a logo render as text only.
const Skills = [
  { id: 1, name: "Go", logo: "55.png" },
  { id: 2, name: "Python" },
  { id: 3, name: "Node.js", logo: "56.png" },
  { id: 4, name: "Kubernetes" },
  { id: 5, name: "Docker" },
  { id: 6, name: "AWS", logo: "54.png" },
  { id: 7, name: "Terraform" },
  { id: 8, name: "gRPC" },
  { id: 9, name: "MQTT" },
  { id: 10, name: "PostgreSQL" },
  { id: 11, name: "MongoDB", logo: "58.png" },
  { id: 12, name: "Redis" },
  { id: 13, name: "Prometheus & Grafana" },
  { id: 14, name: "LLMs & RAG" },
  { id: 15, name: "CI/CD", logo: "52.png" },
  { id: 16, name: "React", logo: "react.png" },
  { id: 17, name: "Angular", logo: "533.png" },
  { id: 18, name: "TypeScript" },
];

export { Projects, Skills };
