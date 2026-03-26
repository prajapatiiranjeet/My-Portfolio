// Portfolio data — all real, no fabrication

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
  github: string;
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
  location: "Noida, India",
  email: "ranjeet75504@gmail.com",
  linkedin: "https://www.linkedin.com/in/ranjeet-prajapati-286956394/",
  github: "https://github.com/prajapatiiranjeet",
  summary:
    "Java Backend Developer with hands-on experience building scalable web applications using Java, Spring Boot, and REST APIs. Proficient in authentication systems, relational database design with Spring Data JPA and Hibernate, and delivering end-to-end features for backend services. Seeking a backend engineering role to contribute to production-grade systems.",
  typewriterStrings: [
    "Java Backend Developer",
    "Spring Boot Engineer",
    "REST API Specialist",
    "CS Student @ NIU",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Java", "Core Java", "OOP", "Collections", "Exception Handling"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "REST API Development"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "Spring Data JPA", "Hibernate", "Database Design"],
  },
  {
    name: "Frontend",
    icon: "Monitor",
    skills: ["HTML", "CSS", "JavaScript", "Thymeleaf", "React"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Maven"],
  },
  {
    name: "Concepts",
    icon: "BookOpen",
    skills: ["Authentication", "Authorization", "RBAC", "API Integration", "Layered Architecture"],
  },
];

export const projects: Project[] = [
  {
    title: "MyDoctorApp",
    subtitle: "Healthcare Management Platform",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "Spring Data JPA", "Java Mail API", "Zego Video SDK"],
    points: [
      "Full-stack healthcare platform: patients search doctors, book appointments, attend video consultations",
      "Secure auth + RBAC using Spring Security",
      "10+ RESTful API endpoints for scheduling, availability, profiles",
      "MySQL + JPA/Hibernate with normalized schemas",
      "Automated email via Java Mail API + real-time video via Zego Video SDK",
      "Modular layered architecture: UI / Service / Data layers",
    ],
    github: "https://github.com/prajapatiiranjeet/MyDoctorApp",
  },
  {
    title: "Email Writer",
    subtitle: "AI-Powered Email Generation Tool",
    tech: ["Java", "Spring Boot", "REST API", "React", "Browser Extension", "AI API Integration"],
    points: [
      "AI tool that converts short prompts into professional email drafts",
      "Spring Boot REST APIs for prompt processing + AI API integration",
      "React frontend with copy-to-clipboard functionality",
      "Browser extension for one-click email generation from any browser tab",
      "Three-tier architecture: React frontend + Spring Boot backend + Browser Extension",
    ],
    github: "https://github.com/prajapatiiranjeet/SpringBootEmailWriter",
  },
];

export const education: Education = {
  institution: "Noida International University, Greater Noida",
  degree: "B.Tech in Computer Science and Engineering (Data Science)",
  duration: "2023 – 2027",
  cgpa: "8.79 / 10.0",
  coursework: ["OOP", "Data Structures & Algorithms", "DBMS", "Software Engineering"],
};

export const navLinks = ["About", "Skills", "Projects", "Education", "Contact"];
