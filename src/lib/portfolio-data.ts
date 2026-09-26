import profileImg from "@/assets/profile.png";
import projectCaas from "@/assets/project-caas.png";
import projectStylopay from "@/assets/project-stylopay.png";
import projectFoodorder from "@/assets/project-foodorder.jpg";
import projectTaskbook from "@/assets/project-taskbook.jpg";
import projectTictactoe from "@/assets/project-tictactoe.jpg";

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  photoUrl: string;
  resumeUrl: string;
  socials: { label: string; url: string; icon: "github" | "linkedin" | "twitter" | "mail" }[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  description: string;
  tech: string[];
  imageUrl: string;
  github?: string;
  live?: string;
  status?: string;
  order?: number;
};

export type Skill = { group: string; items: string[] };
export type Education = {
  id: string;
  degree: string;
  school: string;
  year: string;
  score: string;
};
export type Certification = { id: string; name: string; issuer: string; year: string };
export type Interest = { id: string; title: string; description: string; icon: string };

export const profile: Profile = {
  name: "Sandeep Sharma",
  role: "Software Engineer",
  tagline: "I build clean, scalable backend systems and full-stack experiences.",
  bio: "Java Software Engineer with hands-on experience in fintech — currently shipping wallet & prefund microservices at StyloPay. I care about clean code, sharp APIs, and systems that age well. Previously freelanced for Uber and trained at mthree (Wiley Edge).",
  location: "Kolkata, India",
  email: "sandeepsharma96744@gmail.com",
  phone: "+91 96744 17830",
  photoUrl: profileImg,
  resumeUrl: "/sandeep_resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { label: "Email", url: "mailto:sandeepsharma96744@gmail.com", icon: "mail" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "stylopay",
    company: "StyloPay",
    role: "Software Engineer",
    location: "Kolkata",
    start: "Jul 2025",
    end: "Present",
    highlights: [
      "Owning Wallet & Prefund Management microservices — API updates, hardened validations, secure-by-default logging, and a controller-level refactor for cleaner separation of concerns.",
      "Led migration of User Onboarding microservices from Java 8 to Java 17 with a full restructuring pass per code-review committee standards.",
      "Designed and built API documentation from scratch using React.js with a Node.js wrapper layer over Spring Boot APIs.",
      "Made the internal CRM dashboard fully responsive across mobile and tablet, and shipped continuous UI improvements based on team feedback.",
    ],
  },
  {
    id: "uber",
    company: "Uber (via eTeams)",
    role: "Freelance Coding Specialist",
    location: "Remote",
    start: "Sept 2024",
    end: "Jan 2025",
    highlights: [
      "Resolved tickets through targeted Java code changes — added meaningful inline comments and aligned structure for readability.",
      "Collaborated remotely on task-based assignments, debugging and improving existing codebases to meet quality bars.",
    ],
  },
  {
    id: "mthree",
    company: "Mthree (formerly Wiley Edge)",
    role: "Java Software Developer Intern",
    location: "Remote",
    start: "Apr 2024",
    end: "Sept 2024",
    highlights: [
      "Intensive training in Java development, DBMS, and software engineering best practices with a clean-code focus.",
      "Built scalable Java solutions with RESTful APIs — Spring Boot, JDBC, SQL, and Git in team workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "caas",
    name: "Card-as-a-Service (CaaS) Platform",
    summary: "Backend microservices powering cardholder onboarding and wallet/prefund management for a card issuing platform.",
    description:
      "Backend REST APIs for a card issuing platform, focused on cardholder onboarding and wallet/prefund management. Onboarding APIs register new cardholders and hand off into the KYC-verified flow before a wallet and card are provisioned. Wallet and prefund APIs handle balance management and funding operations. Backend is structured as independent microservices (Onboarding, Wallet, Prefund) with clear API contracts between them. Integrated the transaction webhook system and built the notification templates used to send external systems updates on wallet events. Implemented structured logging across services with Grafana dashboards for monitoring and troubleshooting.",
    tech: ["Java 17", "Spring Boot", "MySQL", "REST API", "API Gateway", "Jenkins", "Grafana", "Microservices"],
    imageUrl: projectCaas,
    order: 1,
  },
  {
    id: "stylopay-docs",
    name: "StyloPay API Documentation Portal",
    summary: "Internal API documentation portal for HashDT, ZOQQ, and HashTag.",
    description:
      "Built at StyloPay covering the complete API collection across three products — HashDT, ZOQQ, and HashTag. Features a live API testing playground where engineers can fire requests directly from the docs, with collection import for quick onboarding. Documentation is split across Docusaurus and Mintlify, with different products hosted on each platform. Replaces scattered internal docs with a single, interactive source of truth for issuer and internal engineering teams.",
    tech: ["Docusaurus", "Mintlify", "React", "Node.js", "Spring Boot", "REST API", "Postman"],
    imageUrl: projectStylopay,
    order: 2,
  },
  {
    id: "online-food",
    name: "Online Food Ordering System",
    summary: "Full-stack web app for browsing menus, placing orders, and managing restaurants.",
    description:
      "User/restaurant login, menu browsing, order placement and tracking, plus an admin panel. Backend built with Spring Boot + MySQL REST APIs handling users, menus, and orders.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "HTML/CSS/JS"],
    imageUrl: projectFoodorder,
    github: "https://github.com/",
    order: 3,
  },
  {
    id: "taskbook",
    name: "Taskbook Web-App",
    summary: "Task manager with Google auth and real-time persistence.",
    description:
      "Create, edit, delete and complete tasks. Firebase for storage, Gmail authentication, vanilla HTML/CSS/JavaScript on the frontend.",
    tech: ["JavaScript", "Firebase", "HTML", "CSS"],
    imageUrl: projectTaskbook,
    github: "https://github.com/",
    order: 4,
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe Game",
    summary: "Classic 2-player browser game.",
    description: "A simple 2-player Tic-Tac-Toe to test your strategy against a friend. Pure HTML, CSS, JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectTictactoe,
    github: "https://github.com/",
    order: 5,
  },
];

export const skills: Skill[] = [
  { group: "Languages", items: ["Java", "SQL", "C++", "C", "JavaScript"] },
  { group: "Frameworks & Tools", items: ["Spring Boot", "React.js", "Node.js", "REST API", "JDBC", "Firebase"] },
  { group: "Developer Tools", items: ["Git", "GitHub", "IntelliJ", "Eclipse", "VS Code", "Postman", "Grafana"] },
  { group: "IT Constructs", items: ["Microservices", "OOP", "Data Structures", "DBMS"] },
];

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech, Computer Science & Engineering",
    school: "Govt. College of Engineering & Ceramic Technology",
    year: "2019 – 2023",
    score: "9.66 CGPA",
  },
  {
    id: "isc",
    degree: "Higher Secondary (ISC)",
    school: "St. Sebastian's School",
    year: "2018",
    score: "85.8%",
  },
  {
    id: "icse",
    degree: "Secondary (ICSE)",
    school: "St. Sebastian's School",
    year: "2016",
    score: "89.66%",
  },
];

export const certifications: Certification[] = [
  { id: "infytq", name: "InfyTQ Certification", issuer: "Infosys", year: "2022" },
  { id: "nptel-cpp", name: "Programming in C++", issuer: "NPTEL", year: "2021" },
  { id: "nptel-speak", name: "Speaking Effectively", issuer: "NPTEL", year: "2020" },
  { id: "nptel-r", name: "R Programming", issuer: "NPTEL", year: "2019" },
  { id: "cognizant", name: "Foundational Java & MySQL", issuer: "Cognizant", year: "—" },
];

export const interests: Interest[] = [
  {
    id: "java",
    title: "Core Java",
    description: "My first love. Deep, expressive, and the foundation of most of what I build today.",
    icon: "code",
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "Breaking hard problems into small, testable steps — the most satisfying part of the craft.",
    icon: "brain",
  },
  {
    id: "competitive",
    title: "Competitive Programming",
    description: "Short, sharp contests that keep my fundamentals current and my mind quick.",
    icon: "trophy",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Designing for scale, reliability, and the next engineer who has to read the code.",
    icon: "layers",
  },
];
