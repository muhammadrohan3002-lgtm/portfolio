export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: "Mobile" | "Full-Stack" | "Frontend" | "Upcoming";
  technologies: string[];
  features: string[];
  status: "Completed" | "Active Development" | "Planned";
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    icon: string;
    tags?: string[];
  }[];
}

export interface EducationDetail {
  institution: string;
  department: string;
  degree: string;
  batch: string;
  period: string;
  location: string;
  description: string;
  relevantCoursework: string[];
  keyHighlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Rohan Ali",
    brandName: "ROHAN.",
    title: "Full-Stack Developer | CSE Student",
    headline: "Building Digital Experiences That Make an Impact.",
    department: "Computer Science & Engineering",
    university: "City University",
    bioShort:
      "I'm Rohan Ali, a CSE student and aspiring Full-Stack Developer passionate about building modern web and mobile applications.",
    bioLong:
      "I build modern, responsive, and user-focused web and mobile applications. I enjoy transforming ideas into practical digital solutions using modern technologies. With a strong foundation in Computer Science & Engineering at City University, I combine academic engineering rigor with hands-on development across frontend, backend, databases, and cross-platform mobile frameworks.",
    careerGoal:
      "Seeking software development opportunities, internships, and collaboration with developers and technology teams.",
    availableForOpportunities: true,
    location: "Dhaka, Bangladesh",
    avatarUrl: "/rohan-profile.jpg",
    email: "muhammadrohan3002@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-rohan-094494373/",
    github: "https://github.com/muhammadrohan3002-lgtm",
    vercel: "https://vercel.com/muhammadrohan3002-lgtms-projects",
    resumeDownloadUrl: "/cv/Rohan_Ali_CV.pdf",
  },

  about: {
    academicSummary:
      "Currently pursuing my Bachelor's degree in Computer Science & Engineering at City University, cultivating a strong grounding in algorithms, system design, and software engineering practices.",
    developmentPhilosophy:
      "I believe great software emerges at the intersection of robust architectural principles and obsessive attention to user experience. Rather than settling for surface-level implementations, I focus on clean code, maintainability, and real-world performance.",
    coreStrengths: [
      {
        title: "CSE Academic Foundation",
        desc: "Structured problem-solving backed by core computer science fundamentals and disciplined software engineering methodologies.",
      },
      {
        title: "Hands-on Project Experience",
        desc: "Building practical web and cross-platform mobile applications through rigorous academic and self-directed initiatives.",
      },
      {
        title: "Full-Stack & Mobile Breadth",
        desc: "Comfortable navigating the entire stack — from pixel-perfect UI with React & Tailwind to Flutter mobile apps, RESTful APIs, and MongoDB.",
      },
      {
        title: "Continuous Learning Mindset",
        desc: "Actively experimenting with modern tooling, AI-assisted development workflows, and modern web architectures.",
      },
    ],
  },

  services: [
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Crafting responsive, accessible, and high-performance interfaces with modern component architectures and micro-interactions.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
      capabilities: [
        "Responsive, mobile-first web applications",
        "Modern component-driven UI architecture",
        "Interactive states and accessible UX patterns",
        "Performance optimization and Core Web Vitals",
      ],
      icon: "Layout",
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description:
        "Connecting intuitive client interfaces with robust server architectures, RESTful APIs, and clean data modeling.",
      technologies: ["Next.js App Router", "Node.js Fundamentals", "REST APIs", "MongoDB", "Better Auth"],
      capabilities: [
        "End-to-end full-stack web applications",
        "REST API development and CRUD operations",
        "Database modeling with MongoDB & Mongoose",
        "Authentication and secure session handling",
      ],
      icon: "Server",
    },
    {
      id: "mobile",
      title: "Cross-Platform Mobile App Development",
      description:
        "Engineering cross-platform mobile applications that deliver native performance, clean state management, and unified UX.",
      technologies: ["Flutter", "Dart", "REST APIs", "State Management", "Mobile UI/UX"],
      capabilities: [
        "Cross-platform iOS & Android mobile development",
        "Clean Flutter widget hierarchies and reactive state",
        "Seamless REST API backend integration",
        "Offline caching and persistent local storage",
      ],
      icon: "Smartphone",
    },
  ] as ServiceItem[],

  skills: [
    {
      name: "Frontend",
      description: "Building responsive, modern, and high-performance web user interfaces.",
      skills: [
        { name: "HTML5", levelDescription: "Semantic structure & accessibility", icon: "Code2" },
        { name: "CSS3", levelDescription: "Modern layouts, animations & flex/grid", icon: "Palette" },
        { name: "JavaScript", levelDescription: "ES6+, asynchronous JS & DOM manipulation", icon: "Braces" },
        { name: "React.js", levelDescription: "Component lifecycle, hooks & state management", icon: "Atom" },
        { name: "Next.js", levelDescription: "App Router, SSR, SSG & API integration", icon: "Layers" },
        { name: "Tailwind CSS", levelDescription: "Utility-first design & modern theme systems", icon: "Sparkles" },
      ],
    },
    {
      name: "Backend",
      description: "Developing robust API services, endpoints, and server-side business logic.",
      skills: [
        { name: "Node.js Fundamentals", levelDescription: "Event loop, npm ecosystem & asynchronous runtime", icon: "Cpu" },
        { name: "Next.js API Routes", levelDescription: "Serverless endpoints & route handlers", icon: "Network" },
        { name: "REST APIs", levelDescription: "RESTful architecture, status codes & payload design", icon: "Share2" },
        { name: "CRUD Operations", levelDescription: "Reliable data persistence & validation logic", icon: "DatabaseZap" },
      ],
    },
    {
      name: "Database",
      description: "Storing, indexing, and querying application data reliably.",
      skills: [
        { name: "MongoDB", levelDescription: "Document modeling, collections, queries & aggregations", icon: "Database" },
      ],
    },
    {
      name: "Mobile",
      description: "Creating cross-platform mobile experiences with expressive UI.",
      skills: [
        { name: "Flutter", levelDescription: "Multiplatform UI framework & stateful widgets", icon: "Smartphone" },
        { name: "Dart", levelDescription: "Strongly typed object-oriented programming", icon: "Terminal" },
      ],
    },
    {
      name: "Tools & Workflow",
      description: "Professional tools and modern development workflows.",
      skills: [
        { name: "Git", levelDescription: "Version control, branching & commit hygiene", icon: "GitBranch" },
        { name: "GitHub", levelDescription: "Repository collaboration, PRs & code hosting", icon: "Github" },
        { name: "VS Code", levelDescription: "Optimized developer workflow & extensions", icon: "Laptop" },
        { name: "Google Antigravity", levelDescription: "Agentic AI development & modern CLI tooling", icon: "Zap" },
        { name: "AI-Assisted Dev Tools", levelDescription: "Accelerated development, testing & debugging", icon: "Bot" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "smart-routine",
      title: "Smart Routine & Management App",
      tagline: "Cross-platform academic productivity & routine tracking suite for students",
      description:
        "A cross-platform academic productivity application designed to help students manage their class routines, tasks, exams, attendance, and study sessions.",
      fullDescription:
        "Smart Routine & Management App is designed specifically to eliminate academic friction for university students. Built with Flutter and Dart on the mobile frontend and backed by Next.js and MongoDB REST APIs, the application provides an integrated digital cockpit for tracking daily class timetables, upcoming exam deadlines, attendance thresholds, and dedicated study intervals.",
      category: "Mobile",
      technologies: ["Flutter", "Dart", "Next.js", "MongoDB", "REST APIs"],
      features: [
        "Secure user authentication & student profile management",
        "Dynamic class routine management with time-slot notifications",
        "Task and upcoming exam tracking with priority tags",
        "Attendance percentage calculator with warning thresholds",
        "Integrated study session tracking with focus timer",
        "Interactive dashboard displaying overall academic progress",
        "Cross-platform responsive mobile experience for Android and iOS",
      ],
      status: "Active Development",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm",
      liveUrl: "https://github.com/muhammadrohan3002-lgtm",
      featured: true,
      accentColor: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    },
    {
      id: "skillsphere",
      title: "SkillSphere – Online Learning Platform",
      tagline: "Modern web-based learning hub with structured curricula & secure auth",
      description:
        "A modern online learning platform focused on providing an organized digital learning experience.",
      fullDescription:
        "SkillSphere is a full-stack educational web platform engineered with Next.js App Router, React, and Tailwind CSS. It empowers learners to explore structured coursework, review video materials, monitor completion milestones, and maintain authentication securely using Better Auth with MongoDB persistence.",
      category: "Full-Stack",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Better Auth"],
      features: [
        "Structured curriculum layout with modular course progression",
        "Secure authentication and session verification via Better Auth",
        "Dynamic course catalog with category filters and search",
        "Interactive student dashboard with progress milestones",
        "Rich markdown-compatible lesson viewer and content delivery",
        "Responsive, mobile-optimized dark/light interface",
      ],
      status: "Active Development",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm",
      liveUrl: "https://github.com/muhammadrohan3002-lgtm",
      featured: true,
      accentColor: "from-purple-500/20 via-pink-500/10 to-indigo-500/20",
    },
    {
      id: "upcoming-lab",
      title: "Next-Gen Developer Productivity Tool",
      tagline: "Exploring modern AI workflows & distributed full-stack architecture",
      description:
        "An upcoming project focusing on modern developer tooling, automated workflows, and high-performance reactive UI.",
      fullDescription:
        "This project is currently in the architectural and prototyping phase. It focuses on combining full-stack TypeScript capabilities with real-time state synchronization to deliver an ultra-responsive developer experience.",
      category: "Upcoming",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
      features: [
        "Real-time state synchronization",
        "High-performance client UI with optimistic updates",
        "Modular microservice-ready backend APIs",
        "Comprehensive automated testing coverage",
      ],
      status: "Planned",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm",
      featured: false,
      accentColor: "from-cyan-500/20 via-blue-500/10 to-teal-500/20",
    },
  ] as Project[],

  education: {
    institution: "City University",
    department: "Department of Computer Science & Engineering (CSE)",
    degree: "Bachelor of Science in Computer Science and Engineering",
    batch: "59th Batch (CSE)",
    period: "2023 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Undertaking rigorous undergraduate study covering fundamental computer science theory, algorithms, software engineering principles, database architectures, and hands-on system implementation.",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Software Engineering & Design",
      "Web Technologies & Applications",
      "Computer Networks & Data Communication",
      "Operating Systems Concepts",
    ],
    keyHighlights: [
      "Consistent academic engagement in core engineering coursework",
      "Active participant in technical problem-solving and programming labs",
      "Building practical software solutions alongside academic theory",
    ],
  } as EducationDetail,
};
