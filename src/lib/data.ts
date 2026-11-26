// Portfolio content aligned with the supplied resume.

export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  typewriterStrings: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  points: string[];
  github?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Ranjeet Prajapati",
  location: "Noida, Uttar Pradesh, India",
  email: "ranjeet75504@gmail.com",
  linkedin: "https://linkedin.com/in/ranjeet-prajapati",
  github: "https://github.com/prajapatiiranjeet",
  summary:
    "Final-year B.Tech Computer Science student with hands-on backend development experience using Java, Spring Boot, REST APIs, and relational databases. Experienced in Spring Security, JPA/Hibernate, JWT authentication, and AI-powered RAG applications with Spring AI. Seeking a Backend Software Engineering opportunity.",
  typewriterStrings: [
    "Backend Software Engineer",
    "Java and Spring Boot",
    "REST API Development",
    "B.Tech Computer Science Student",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "SQL", "JavaScript"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST API Design",
      "Microservices",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "PGVector (Vector Similarity Search)"],
  },
  {
    name: "AI Integration",
    icon: "BookOpen",
    skills: ["Spring AI", "Retrieval-Augmented Generation (RAG)", "Ollama"],
  },
  {
    name: "Testing",
    icon: "Wrench",
    skills: ["JUnit", "Mockito"],
  },
  {
    name: "Tools and System Design",
    icon: "Monitor",
    skills: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Basic High-Level Design (HLD)"],
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered College ERP System",
    subtitle: "College ERP backend and RAG chatbot",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Spring AI",
      "PostgreSQL",
      "PGVector",
    ],
    points: [
      "Building a college ERP backend with JWT authentication and role-based access control across Admin, Faculty, and Student modules.",
      "Designed a normalized PostgreSQL schema with Hibernate and Spring Data JPA to model academic and administrative workflows and enforce data integrity.",
      "Built secure REST APIs using a layered Controller-Service-Repository architecture, Spring Security, and role-based authorization.",
      "Developed a standalone RAG chatbot with Spring AI, Ollama, and PostgreSQL/PGVector; implemented PDF and DOCX ingestion, document chunking, and embedding pipelines, and am integrating it into the ERP.",
    ],
  },
  {
    title: "SpringGuard - JWT Security Setup",
    subtitle: "Reusable Spring Boot authentication and authorization setup",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "PostgreSQL"],
    points: [
      "Built a reusable Spring Boot security setup with stateless JWT authentication, role-based authorization, and BCrypt password hashing.",
      "Designed a layered Controller-Service-Repository architecture with JPA/Hibernate entities and PostgreSQL persistence for secure application bootstrapping.",
      "Implemented a JWT filter chain to validate Bearer tokens, extract claims, and populate the Spring Security context for stateless request authentication.",
      "Exposed registration and login REST APIs as a reusable setup for integration into new Spring Boot projects.",
    ],
  },
];

export const education: Education = {
  institution: "Noida International University, Greater Noida",
  degree: "B.Tech, Computer Science and Engineering, Data Science Specialization",
  duration: "Aug 2023 - May 2027",
  cgpa: "8.82 / 10.0",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
  ],
};

export const navLinks = ["About", "Skills", "Projects", "Education", "Contact"];
