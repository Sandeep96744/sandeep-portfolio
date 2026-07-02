import profileImg from "@/assets/profile.png";
import projectStylopay from "@/assets/project-stylopay.jpg";
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
  resumeUrl: "/resume.pdf",
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
    id: "online-food",
    name: "Online Food Ordering System",
    summary: "Full-stack web app for browsing menus, placing orders, and managing restaurants.",
    description:
      "User/restaurant login, menu browsing, order placement and tracking, plus an admin panel. Backend built with Spring Boot + MySQL REST APIs handling users, menus, and orders.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "HTML/CSS/JS"],
    imageUrl: projectFoodorder,
    github: "https://github.com/",
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
  },
  {
    id: "stylopay-docs",
    name: "StyloPay API Documentation Portal",
    summary: "React + Node docs layer wrapping Spring Boot fintech APIs.",
    description:
      "Built from scratch at StyloPay — a React.js documentation site with a Node.js wrapper over Spring Boot APIs, giving issuer teams a clean reference for wallet and prefund endpoints.",
    tech: ["React", "Node.js", "Spring Boot", "REST"],
    imageUrl: projectStylopay,
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe Game",
    summary: "Classic 2-player browser game.",
    description: "A simple 2-player Tic-Tac-Toe to test your strategy against a friend. Pure HTML, CSS, JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectTictactoe,
    github: "https://github.com/",
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
