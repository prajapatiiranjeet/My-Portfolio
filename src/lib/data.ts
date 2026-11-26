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
  description: string;
  category: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
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
    title: "AI-Powered ERP",
    description:
      "A role-based academic ERP for Admin, Faculty, and Students, with attendance workflows and SHERPAL, a document-grounded RAG assistant.",
    category: "AI & Data",
    tech: ["Java 21", "Spring Boot", "React", "PostgreSQL", "PGVector", "Spring AI"],
    github: "https://github.com/prajapatiiranjeet/Ai-Powered-ERP",
    featured: true,
  },
  {
    title: "System Design",
    description:
      "An interactive course with 40 lessons, step-by-step scenes, lesson search, keyboard navigation, language and theme controls, and saved progress.",
    category: "Learning",
    tech: ["Interactive Lessons", "System Design", "Search", "Saved Progress"],
    github: "https://github.com/prajapatiiranjeet/System-Design",
    liveDemo: "https://system-design-4upg.vercel.app/",
  },
  {
    title: "GRAB",
    description:
      "A lightweight web app for fetching public video and audio with yt-dlp, with playlist selection and live job progress.",
    category: "Backend & Tools",
    tech: ["Preact", "FastAPI", "Python", "yt-dlp", "Docker"],
    github: "https://github.com/prajapatiiranjeet/GRAB",
  },
  {
    title: "Vectorless Intelligence",
    description:
      "A document Q&A system that navigates a hierarchical document tree and retrieves original passages without embeddings or a vector database.",
    category: "AI & Data",
    tech: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "React", "Server-Sent Events"],
    github: "https://github.com/prajapatiiranjeet/Vectorless-Intelligence",
  },
  {
    title: "VectorScope",
    description:
      "A local-first workspace for importing embedding CSVs, exploring a 3D PCA map, and comparing vectors with similarity search in the browser.",
    category: "AI & Data",
    tech: ["JavaScript", "PCA", "3D Visualization", "Vector Search", "CSV"],
    github: "https://github.com/prajapatiiranjeet/VectorScope",
    liveDemo: "https://vectorscope.onrender.com",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "A React and Spring AI app that turns a written profile description into structured resume data and a formatted preview.",
    category: "AI & Data",
    tech: ["React", "Java", "Spring Boot", "Spring AI", "Resume Generation"],
    github: "https://github.com/prajapatiiranjeet/Ai-Powered-Resume_Analyzer",
  },
  {
    title: "JWT Security Setup",
    description:
      "A Spring Boot authentication example with stateless JWTs, role-based authorization, BCrypt password hashing, and PostgreSQL persistence.",
    category: "Backend & Tools",
    tech: ["Java 21", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL"],
    github: "https://github.com/prajapatiiranjeet/security_setup_with-JWT",
  },
  {
    title: "DSA Practice",
    description:
      "A growing collection of LeetCode practice problems, organized by topic across arrays, strings, trees, searching, and more.",
    category: "Learning",
    tech: ["LeetCode", "Data Structures", "Algorithms"],
    github: "https://github.com/prajapatiiranjeet/DSA-practice",
  },
  {
    title: "Spring AI with RAG",
    description:
      "A document question-answering demo that extracts PDF and DOCX content, chunks it, stores embeddings in PGVector, and answers with Ollama.",
    category: "AI & Data",
    tech: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "PGVector", "Ollama"],
    github: "https://github.com/prajapatiiranjeet/Spring-ai_with-RAG",
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
