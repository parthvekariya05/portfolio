export const META = {
  name: "Parth Vekariya",
  role: "Full Stack Developer",
  email: "parthvekariya05@gmail.com",
  phone: "+91 8128759852",
  location: "Gujarat, India",
  github: "https://github.com/parthvekariya05",
  linkedin: "https://linkedin.com/in/parthvekariya05",
  university: "Darshan University",
  cgpa: "7.99",
  graduation: "December 2026",
  available: true,
};

export const ROLES = [
  "Full Stack Developer",
  "React.js Developer",
  "ASP.NET Core Engineer",
  "AI Integration Dev",
  "Open to Remote Work",
];

export const STATS = [
  { value: "3+", label: "Projects Built" },
  { value: "1", label: "Internship" },
  { value: "7.99", label: "CGPA" },
  { value: "5+", label: "Tech Stacks" },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: "⚡",
    color: "#22D3EE",
    items: [
      { name: "React.js", level: 88 },
      { name: "Vite", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Flutter", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    color: "#8B5CF6",
    items: [
      { name: "ASP.NET Core 8", level: 88 },
      { name: "Node.js / Express", level: 75 },
      { name: "REST API Design", level: 87 },
      { name: "JWT Auth", level: 85 },
      { name: "ADO.NET", level: 82 },
      { name: "Middleware / DI", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#10B981",
    items: [
      { name: "SQL Server 2022", level: 86 },
      { name: "Stored Procedures", level: 83 },
      { name: "LINQ", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Query Optimization", level: 76 },
    ],
  },
  {
    category: "AI & Tools",
    icon: "🤖",
    color: "#F59E0B",
    items: [
      { name: "Google Gemini API", level: 85 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Visual Studio", level: 87 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Interview Simulator",
    tagline: "Your AI-powered career coach",
    description:
      "A full-stack platform that conducts adaptive mock interviews using Google Gemini 2.5 Flash. Features aptitude tests, PDF resume analysis with PdfPig, real-time leaderboard, streak tracking, certificates, and automated email reports.",
    tech: ["React.js", "ASP.NET Core 8", "SQL Server", "Gemini API", "ADO.NET", "PdfPig", "JWT"],
    github: "https://github.com/parthvekariya05/AI-Interview-Simulator",
    live: null,
    featured: true,
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    highlights: ["Mock Interviews", "Resume Analysis", "Leaderboard", "Certificates", "Email Reports", "Streak System"],
    icon: "🤖",
    year: "2025–26",
  },
  {
    id: 2,
    title: "Online Mobile Shop",
    tagline: "E-commerce with admin dashboard",
    description:
      "Full-stack e-commerce app for mobile phones with JWT-secured authentication, admin dashboard, PDF invoice generation, product management, and a purple-accent modern UI connected to a .NET backend.",
    tech: ["React.js", "ASP.NET Core", "SQL Server", "JWT", "PDF Gen"],
    github: "#",
    live: null,
    featured: false,
    color: "#22D3EE",
    gradient: "linear-gradient(135deg, #22D3EE, #0891B2)",
    highlights: ["JWT Auth", "Admin Panel", "PDF Invoices", "Cart System"],
    icon: "📱",
    year: "2024–25",
  },
  {
    id: 3,
    title: "MyJio-Style Flutter App",
    tagline: "Mobile-first recharge & usage tracker",
    description:
      "A Flutter mobile application inspired by MyJio with recharge plan browsing, data usage tracking, plan comparison, and a clean mobile-first UI built entirely in Dart.",
    tech: ["Flutter", "Dart", "REST API", "Material UI"],
    github: "#",
    live: null,
    featured: false,
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    highlights: ["Cross-platform", "Usage Tracking", "Recharge Plans"],
    icon: "📡",
    year: "2024",
  },
];

export const EXPERIENCE = [
  {
    type: "work",
    role: "Full Stack Developer Intern",
    org: "SaiKet Systems",
    period: "Mar 2026 – Apr 2026",
    location: "Remote",
    desc: "Built and maintained full-stack features with React.js frontend and ASP.NET Core backend. Worked on REST API design, SQL Server integration, JWT authentication, and UI component development.",
    skills: ["React.js", "ASP.NET Core", "SQL Server", "REST APIs", "JWT"],
    color: "#8B5CF6",
  },
  {
    type: "education",
    role: "B.Tech Computer Engineering",
    org: "Darshan University",
    period: "2022 – Dec 2026",
    location: "Gujarat, India",
    desc: "Final-year student with CGPA 7.99. Focused on full-stack development, data structures, and building AI-integrated production-grade applications as portfolio projects.",
    skills: ["Data Structures", "DBMS", "OS", "Web Dev", "AI/ML Basics"],
    color: "#22D3EE",
  },
];

export const TESTIMONIALS = [
  {
    text: "Parth's AI Interview Simulator is genuinely impressive — it handles adaptive questioning and resume parsing in a single cohesive flow.",
    author: "Project Reviewer",
    role: "GitHub Community",
  },
];
