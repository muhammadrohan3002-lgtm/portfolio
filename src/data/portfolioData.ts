export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  description: string;
  fullDescription: string;
  tagline?: string;
  technologies: string[];
  features: string[];
  status: "Completed" | "Active Development" | "Planned";
  liveUrl?: string;
  githubUrl?: string;
  thumbnailUrl: string;
  featured: boolean;
  accentColor?: string;
}

export interface LearningMilestone {
  id: string;
  title: string;
  period?: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  icon: string;
}

export interface ToolkitGroup {
  category: string;
  skills: {
    name: string;
    description?: string;
  }[];
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
    brandName: "Rohan Ali",
    title: "Computer Science Student & Aspiring Full-Stack Developer",
    headline: "Hi, I'm Rohan Ali.",
    intro:
      "I build web applications, explore new technologies, and continuously improve my problem-solving skills through programming.",
    bioShort:
      "I'm Rohan Ali, a CSE student and aspiring Full-Stack Developer passionate about building modern web and mobile applications.",
    bioLong:
      "I build modern, responsive, and user-focused web and mobile applications. I enjoy transforming ideas into practical digital solutions using modern technologies. With a strong foundation in Computer Science & Engineering at City University, I combine academic engineering rigor with hands-on development across frontend, backend, databases, and cross-platform mobile frameworks.",
    careerGoal:
      "Seeking software development opportunities, internships, and collaboration with developers and technology teams.",
    department: "Department of Computer Science & Engineering",
    university: "City University",
    location: "Savar, Dhaka, Bangladesh",
    email: "muhammadrohan3002@gmail.com",
    github: "https://github.com/muhammadrohan3002-lgtm",
    linkedin: "https://www.linkedin.com/in/muhammad-rohan-094494373/",
    vercel: "https://vercel.com/muhammadrohan3002-lgtms-projects",
    avatarUrl: "/rohan-profile.jpg",
    resumeDownloadUrl: "/cv/Rohan_Ali_CV.pdf",
    availableForOpportunities: true,
  },

  about: {
    heading: "A little about me.",
    narrative: [
      "I am an undergraduate Computer Science & Engineering student at City University with a dedicated passion for building practical, robust applications using modern web technologies.",
      "Alongside web development, I am active in Competitive Programming, solving algorithmic challenges in C++ and continuously deepening my understanding of Data Structures and Algorithms.",
      "My long-term goal is to grow into a skilled Software Engineer, designing scalable systems, writing clean and maintainable code, and contributing to high-impact products.",
    ],
    highlights: [
      {
        label: "University",
        value: "City University (CSE, 64th Batch)",
      },
      {
        label: "Primary Focus",
        value: "Full-Stack Web Development & Modern UI Engineering",
      },
      {
        label: "Problem Solving",
        value: "C++ Competitive Programming & Core DSA",
      },
      {
        label: "Location",
        value: "Savar, Dhaka, Bangladesh",
      },
    ],
  },

  learningJourney: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      tagline: "Modern web architectures & reactive user interfaces",
      description:
        "Building modern responsive web applications using React, Next.js, Tailwind CSS, and REST APIs. Focusing on component-driven design, accessibility, and smooth user interactions.",
      focusAreas: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Modern State Management"],
      icon: "Layers",
    },
    {
      id: "personal-projects",
      title: "Personal Software Projects",
      tagline: "End-to-end practical application engineering",
      description:
        "Developing real-world applications including academic management tools and modern web platforms. Engineering complete solutions from UI design to data persistence.",
      focusAreas: ["SkillSphere EdTech", "Keen Keepers", "Smart Routine App", "Full-Stack Web Architectures"],
      icon: "Code2",
    },
    {
      id: "competitive-programming",
      title: "Competitive Programming",
      tagline: "Rigorous problem solving with C++",
      description:
        "Regularly practicing algorithmic problem solving using C++ to build analytical and computational thinking. Competing on programming platforms to strengthen efficiency under constraints.",
      focusAreas: ["C++ Standard Library (STL)", "Time & Space Complexity", "Greedy & Math", "Modular Code"],
      icon: "Terminal",
    },
    {
      id: "dsa",
      title: "Data Structures and Algorithms",
      tagline: "Solid algorithmic principles & engineering fundamentals",
      description:
        "Deepening understanding of arrays, trees, graphs, sorting, and dynamic programming through structured academic coursework and hands-on implementation.",
      focusAreas: ["Arrays & Hash Maps", "Binary Trees & BST", "Graph Traversals", "Dynamic Programming"],
      icon: "Cpu",
    },
  ] as LearningMilestone[],

  toolkit: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C++" },
        { name: "Dart" },
      ],
    },
    {
      category: "Tools & Environments",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
      ],
    },
  ] as ToolkitGroup[],

  projects: [
    {
      id: "keen-keepers",
      title: "Keen Keepers",
      year: "2024",
      category: "Frontend / Productivity Web App",
      summary:
        "A personal record-keeping and task management web application with interactive analytics, visual data charts, and dynamic status tracking.",
      description:
        "A personal record-keeping and task management web application with interactive analytics, visual data charts, and dynamic status tracking.",
      tagline: "Personal record-keeping & productivity tracking suite",
      fullDescription:
        "Keen Keepers is a productivity and personal tracking web application designed to help users organize, monitor, and visualize daily records, habits, and tasks. Built with React and Tailwind CSS with DaisyUI components, it incorporates Recharts for intuitive progress visualization and browser-native LocalStorage for rapid persistence.",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Recharts", "LocalStorage"],
      features: [
        "Interactive record and task management with real-time state updates",
        "Visual analytics and graphical progress reporting via Recharts",
        "Responsive, modern user interface built with Tailwind CSS & DaisyUI",
        "Persistent local client storage with zero setup friction",
      ],
      status: "Completed",
      liveUrl: "https://keen-keepers-two.vercel.app",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm/keen-keepers",
      thumbnailUrl: "/projects/keen-keepers-preview.png",
      featured: true,
      accentColor: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    },
    {
      id: "skillsphere",
      title: "SkillSphere – Online Learning Platform",
      year: "2024",
      category: "Full-Stack / EdTech",
      summary:
        "An online learning platform designed to help learners explore industry-focused courses, discover trending technologies, and improve technical skills.",
      description:
        "An online learning platform designed to help learners explore industry-focused courses, discover trending technologies, and improve technical skills.",
      tagline: "Explore industry-focused courses, discover trending technologies & build skills",
      fullDescription:
        "SkillSphere is a modern online learning portal built with Next.js, React, and Tailwind CSS. The platform enables students to explore curated course catalogs, browse trending technical subjects, learn study techniques, and subscribe to tech newsletters, all delivered through a polished, typography-rich user interface.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      features: [
        "Curated popular courses catalog and categorized exploration",
        "Trending course release highlights and tech skill paths",
        "Structured learning resources and effective study techniques",
        "Newsletter subscription section with interactive forms",
        "Responsive, high-performance architecture built on Next.js",
      ],
      status: "Completed",
      liveUrl: "https://online-learning-platform-five-orpin.vercel.app/",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm/Online-Learning-Platform",
      thumbnailUrl: "/projects/skillsphere-preview.png",
      featured: true,
      accentColor: "from-purple-500/20 via-pink-500/10 to-indigo-500/20",
    },
    {
      id: "smart-routine",
      title: "Smart Routine & Management App",
      year: "2024",
      category: "Mobile & Web / Student Productivity",
      summary:
        "A cross-platform academic productivity application designed to help students manage class routines, tasks, exams, attendance, and study sessions.",
      description:
        "A cross-platform academic productivity application designed to help students manage class routines, tasks, exams, attendance, and study sessions.",
      tagline: "Cross-platform academic productivity & routine tracking suite for students",
      fullDescription:
        "Smart Routine & Management App solves day-to-day academic scheduling challenges for university students. Engineered with Flutter and Dart on the mobile frontend and powered by Next.js and MongoDB REST APIs, the application provides an integrated digital cockpit for tracking timetable schedules, attendance thresholds, and upcoming academic deadlines.",
      technologies: ["Flutter", "Dart", "Riverpod", "Next.js", "MongoDB"],
      features: [
        "Dynamic class routine scheduler with time-slot alerts",
        "Exam and deadline tracker with priority tagging",
        "Attendance percentage calculator with warning thresholds",
        "Cross-platform responsive design for mobile and web screens",
        "MongoDB REST API integration for persistent cloud synchronization",
      ],
      status: "Active Development",
      liveUrl: "https://online-class-routine.vercel.app",
      githubUrl: "https://github.com/muhammadrohan3002-lgtm/online-class-routine",
      thumbnailUrl: "/projects/smart-routine-preview.png",
      featured: true,
      accentColor: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    },
  ] as Project[],

  education: {
    institution: "City University",
    department: "Department of Computer Science & Engineering (CSE)",
    degree: "Bachelor of Science in Computer Science and Engineering",
    batch: "64th Batch (CSE)",
    period: "2023 – Present",
    location: "Savar, Dhaka, Bangladesh",
    description:
      "Undertaking undergraduate study covering fundamental computer science theory, algorithms, software engineering principles, database architectures, and hands-on system implementation.",
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
      ],
    },
  ] as SkillCategory[],

  services: [
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Crafting responsive, accessible, and high-performance interfaces with modern component architectures.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
      capabilities: [
        "Responsive, mobile-first web applications",
        "Modern component-driven UI architecture",
        "Interactive states and accessible UX patterns",
      ],
      icon: "Layout",
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description:
        "Connecting intuitive client interfaces with robust server architectures, RESTful APIs, and clean data modeling.",
      technologies: ["Next.js App Router", "Node.js Fundamentals", "REST APIs", "MongoDB"],
      capabilities: [
        "End-to-end full-stack web applications",
        "REST API development and CRUD operations",
        "Database modeling with MongoDB & Mongoose",
      ],
      icon: "Server",
    },
  ] as ServiceItem[],
};
