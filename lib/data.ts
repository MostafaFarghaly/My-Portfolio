export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  categoryGroup: "Full-Stack" | "Frontend" | "Systems & Backend";
  year: string;
  description: string;
  impact: string;
  features: string[];
  stack: string[];
  github: string;
  live: string;
  accent: string;
  visual: "grid" | "orb" | "bars";
  image?: string;
};

export type SkillCategory = {
  name: string;
  iconName: string;
  items: {
    name: string;
    level: number;
    description: string;
  }[];
};

export const profile = {
  name: "Mostafa Farghaly",
  role: "Full Stack Software Engineer",
  location: "Egypt",
  email: "mostafafarghaly2004@gmail.com",
  github: "https://github.com/MostafaFarghaly",
  linkedin: "https://www.linkedin.com/in/mostafa-farghaly-026760289/",
  whatsapp: "https://wa.me/201060752138",
  phone: "+20 106 075 2138",
  resume: "/resume.pdf",
  avatar: "/profile.jpg",
  availability: "Available for Software Engineering Roles",
  tagline: "Building high-performance, responsive, and scalable web solutions.",
  intro:
    "Full Stack Software Engineer graduated from the Faculty of Computers & Informatics, Suez Canal University. Building modern, responsive, and scalable web applications with React, Next.js, Node.js, and TypeScript, with a focus on clean code, performance, and great user experiences."
};

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Bootstrap",
  "REST APIs",
  "SignalR",
  "MongoDB",
  "Python",
  "Git & GitHub",
  "Responsive UI/UX",
  "Web Performance",
  "Authentication & JWT",
  "Socket Programming"
];

export const categorizedSkills: SkillCategory[] = [
  {
    name: "Frontend Architecture",
    iconName: "Layout",
    items: [
      { name: "React.js / Next.js (App Router)", level: 95, description: "SSR, SSG, RSC, server actions & hooks" },
      { name: "TypeScript", level: 92, description: "Strict typing, generics, robust interfaces" },
      { name: "Tailwind CSS & Modern CSS3", level: 95, description: "Responsive layouts, micro-animations, design systems" },
      { name: "State Management & Responsive UI", level: 90, description: "Component composition, zero layout shift" }
    ]
  },
  {
    name: "Backend & Real-Time",
    iconName: "Server",
    items: [
      { name: "Node.js & Express.js", level: 90, description: "Modular APIs, routing, middleware & auth" },
      { name: "RESTful API Engineering", level: 94, description: "Clean endpoint contracts, status codes & validation" },
      { name: "SignalR & Socket Programming", level: 85, description: "Real-time bi-directional streaming & events" },
      { name: "Authentication (JWT / Sessions)", level: 90, description: "Secure cookies, role-based access control" }
    ]
  },
  {
    name: "Data & Systems",
    iconName: "Database",
    items: [
      { name: "MongoDB & NoSQL Design", level: 88, description: "Schema modeling, aggregation & indexes" },
      { name: "Python", level: 85, description: "Multi-threading, network sockets & scripting" },
      { name: "Git, GitHub & CI Workflows", level: 92, description: "Branching strategies, code reviews & versioning" },
      { name: "Web Performance & Core Web Vitals", level: 90, description: "Bundle reduction, lazy loading, LCP/CLS tuning" }
    ]
  }
];

export const stats = [
  { value: 5, suffix: "+", label: "Featured Projects", sublabel: "Full-stack & open-source" },
  { value: 100, suffix: "%", label: "Type-Safe Code", sublabel: "Strict TypeScript standards" },
  { value: 98, suffix: "%", label: "Lighthouse Speed", sublabel: "Optimized Core Web Vitals" },
  { value: 100, suffix: "%", label: "Commitment to Clean UI", sublabel: "Intuitive UX & motion" }
];

export const projects: Project[] = [
  {
    slug: "smartfinishing",
    number: "01",
    title: "SmartFinishing",
    category: "Graduation Project · Full-Stack",
    categoryGroup: "Full-Stack",
    year: "2025",
    description:
      "A web platform connecting customers with finishing professionals to simplify apartment finishing and project management. Features customer/worker portals, project requests, and real-time updates.",
    impact:
      "Built the responsive frontend using Next.js, React, TypeScript, and Tailwind CSS. Developed multi-step forms, authentication, and integrated REST APIs & SignalR for real-time notifications.",
    features: [
      "Customer and worker multi-tier authentication portals",
      "Interactive multi-step finishing request workflow with dynamic pricing estimations",
      "Real-time SignalR notifications for job status updates and direct messaging",
      "Comprehensive project management dashboard with milestones and progress tracking",
      "Full responsive design optimized for mobile contractors and desktop users"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "SignalR"],
    github: "https://github.com/MostafaFarghaly/SmartFinishing_graduation",
    live: "",
    accent: "#d5ff3f",
    visual: "grid"
  },
  {
    slug: "webshop",
    number: "02",
    title: "Web shop",
    category: "Full-Stack Project",
    categoryGroup: "Full-Stack",
    year: "2025",
    description:
      "A full-stack e-commerce project featuring product catalog management, user authentication, shopping cart workflows, and persistent order data.",
    impact:
      "Implemented modular server routes, persistent session and cart management, responsive UI layouts, and MongoDB database schemas.",
    features: [
      "Dynamic product catalog with filtering, sorting, and live search",
      "Persistent cart state with local storage and database sync",
      "Secure user authentication with session management and password hashing",
      "Admin inventory controls for creating, updating, and removing products",
      "Express.js RESTful API architecture paired with MongoDB aggregation"
    ],
    stack: ["TypeScript", "React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/MostafaFarghaly/web-shop",
    live: "",
    accent: "#ff855e",
    visual: "orb"
  },
  {
    slug: "trend",
    number: "03",
    title: "Trend Tracker",
    category: "Web Application",
    categoryGroup: "Frontend",
    year: "2024",
    description:
      "A web application designed to track and discover emerging trends and creative works across the artistic and design fields.",
    impact:
      "Developed responsive dynamic views, category-based content filtering, and interactive UI states for smooth user exploration.",
    features: [
      "Real-time visual feeds for design and creative trends",
      "Instant category filtering and tag-based discovery",
      "Interactive lightbox preview modal for high-resolution media",
      "Bookmark and favorites collection persisted in browser storage",
      "Optimized DOM rendering with zero layout shifts on image load"
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Responsive UI"],
    github: "https://github.com/MostafaFarghaly/trend",
    live: "",
    accent: "#a6a0ff",
    visual: "bars"
  },
  {
    slug: "bakery",
    number: "04",
    title: "Bakery Delight",
    category: "Frontend Web Design",
    categoryGroup: "Frontend",
    year: "2024",
    description:
      "A modern, responsive bakery showcase website presenting baked goods, interactive menus, and seamless ordering experiences across all devices.",
    impact:
      "Crafted clean semantic HTML5 and modern CSS3 animations, ensuring high performance, responsive layouts, and cross-browser compatibility.",
    features: [
      "Interactive visual bakery menu with dietary badges and ingredients",
      "Mobile-first responsive layout with custom touch-friendly sliders",
      "Smooth CSS animations and micro-interactions for culinary engagement",
      "Online order inquiry form with dynamic order summary",
      "100/100 Lighthouse performance and accessibility scores"
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/MostafaFarghaly/Bakery",
    live: "",
    accent: "#ffcf56",
    visual: "grid"
  },
  {
    slug: "chatroom-python",
    number: "05",
    title: "Python Network Chat Room",
    category: "Systems & Networking",
    categoryGroup: "Systems & Backend",
    year: "2024",
    description:
      "A real-time multi-client chat room application built with Python socket programming and multi-threading for seamless concurrent communication.",
    impact:
      "Implemented socket-level client-server protocol, multi-threaded connection handling, and instant broadcast message distribution.",
    features: [
      "Multi-threaded TCP socket server supporting concurrent client connections",
      "Custom client-server broadcast protocol with connection heartbeat",
      "User nickname registration and real-time online presence tracking",
      "Graceful disconnect handling and room broadcast notifications",
      "Low-overhead latency benchmarks with minimal CPU footprint"
    ],
    stack: ["Python", "Socket Programming", "Multi-threading", "Networking"],
    github: "https://github.com/MostafaFarghaly/chatRoom-python",
    live: "",
    accent: "#4deeea",
    visual: "orb"
  }
];

export const experience = [
  {
    period: "Education · 2020 — 2024",
    title: "Faculty of Computers & Informatics, Suez Canal University",
    badge: "B.Sc. Degree",
    detail:
      "Graduated with a solid foundation in computer science, software engineering principles, data structures, algorithms, object-oriented design, database systems, and computer networks."
  },
  {
    period: "2024 — Present",
    title: "Full Stack Software Engineering",
    badge: "Specialization",
    detail:
      "Building modern, responsive, and scalable web applications with React, Next.js, Node.js, and TypeScript. Focused on clean code, web performance, and maintainable architecture."
  },
  {
    period: "2024 — 2025",
    title: "SmartFinishing — Full-Stack Lead",
    badge: "Graduation Project",
    detail:
      "Led the frontend and full-stack integration for the SmartFinishing platform. Developed responsive dashboards, multi-step service workflows, and integrated real-time SignalR communications."
  }
];
