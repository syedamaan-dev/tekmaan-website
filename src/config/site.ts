export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isFounder?: boolean;
  image: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  categoryFilter?: string;
  categoryLabel?: string;
  badge?: string;
  isClientProject?: boolean;
  tagline?: string;
  summary?: string;
  clientOrContext?: string;
  heroImage?: string;
  technologies?: string[];
  officialUrl?: string;
}

export const siteConfig = {
  name: "TEKMAAN",
  legalName: "TEKMAAN Studio",
  tagline: "Independent Digital Studio",
  headline: "We Build. You Grow.",
  subheadline:
    "An independent, founder-led digital studio delivering thoughtfully designed, reliable, and scalable digital experiences.",
  url: "https://www.tekmaan.in",
  founded: "2026",
  positioning: "Modern websites, digital products, and software engineering.",
  ogImage: "/images/og-image.jpg",

  identity: {
    type: "Independent Digital Studio",
    established: "2026",
    model: "Founder-Led Direct Engineering & Design",
    philosophy:
      "Direct technical ownership without agency layers. You collaborate directly with senior engineers and designers delivering bespoke, high-performance software from day one.",
    location: "Global Remote Collaboration",
  },

  contact: {
    email: process.env.NEXT_PUBLIC_STUDIO_EMAIL || "tekmaan.connect@gmail.com",
    phone: "+91 9063127547",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 9063127547",
    whatsappLink: "https://wa.me/919063127547",
    website: "https://www.tekmaan.in",
    displayWebsite: "www.tekmaan.in",
  },

  nav: [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Team", href: "#team" },
    { title: "Contact", href: "#contact" },
  ] as NavItem[],

  stats: {
    projectsShipped: "10+",
    label: "Projects Done",
  },

  services: [
    {
      id: "website-design-development",
      number: "01",
      title: "Website Design & Development",
      shortDesc:
        "High-performance marketing websites and interactive brand experiences engineered with clean code, sub-second load times, and fluid responsive interactions.",
      fullDesc:
        "We craft bespoke, lightning-fast web experiences engineered from scratch. Every layout is tailored to convert, optimized for Core Web Vitals, and designed to position your brand at the absolute forefront.",
      deliverables: [
        "Custom Visual Architecture",
        "Sub-Second Page Performance",
        "Interactive Micro-Animations",
        "Zero-Bloat Next.js Codebase",
        "Responsive Mobile Perfection",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    },
    {
      id: "full-stack-web-applications",
      number: "02",
      title: "Full-Stack Web Applications",
      shortDesc:
        "Robust, scalable web applications built with modern architectures, secure APIs, real-time database synchronization, and resilient production infrastructure.",
      fullDesc:
        "End-to-end full-stack software tailored to your specific operational workflows. We construct clean serverless APIs, robust data layers, and secure authentication to build products that scale seamlessly.",
      deliverables: [
        "Full-Stack Application Architecture",
        "REST & GraphQL API Endpoints",
        "Secure Authentication & RBAC",
        "Database Design & Migration",
        "Serverless Cloud Infrastructure",
      ],
      techStack: ["Node.js", "PostgreSQL", "Next.js", "Prisma", "Docker"],
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "UI/UX Design",
      shortDesc:
        "Human-centered product design combining rigorous user journey mapping, design systems, modern aesthetic clarity, and friction-free interaction workflows.",
      fullDesc:
        "Design that bridges user needs and business metrics. We establish comprehensive typography hierarchies, modular design tokens, and high-fidelity prototypes ready for immediate engineering execution.",
      deliverables: [
        "End-to-End User Journey Flows",
        "Design Systems & Component Libraries",
        "High-Fidelity Wireframes",
        "Interactive Prototypes",
        "Accessibility (WCAG 2.1 AA)",
      ],
      techStack: ["Figma", "Design Tokens", "Wireframing", "Interaction Design"],
    },
    {
      id: "custom-portals-dashboards",
      number: "04",
      title: "Custom Portals & Dashboards",
      shortDesc:
        "Data-dense operational consoles, client portals, and administrative dashboards engineered for clarity, real-time analytics, and role-based data workflows.",
      fullDesc:
        "Transform complex datasets and multi-user operations into intuitive, low-latency control centers. Built with modular widgets, dynamic filtering, automated exports, and comprehensive activity auditing.",
      deliverables: [
        "Operational Telemetry & Metrics",
        "Multi-Tenant Role Permissions",
        "Dynamic Filtering & Visual Charts",
        "Automated Export & Reporting",
        "Real-Time Event Streams",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Data Visualization", "REST APIs"],
    },
    {
      id: "ai-integration-automation",
      number: "05",
      title: "AI Integration & Automation",
      shortDesc:
        "Intelligent automation workflows, LLM-powered interfaces, and cognitive data pipelines integrated reliably into existing software ecosystems.",
      fullDesc:
        "Supercharge your operational velocity with targeted AI systems. We integrate modern language models, smart automation pipelines, and custom agents that reduce manual effort without compromising data privacy.",
      deliverables: [
        "AI Workflow Automation",
        "LLM API Integration & Guardrails",
        "Custom Intelligent Chatbots",
        "Document Parsing & Classification",
        "Background Task Queues",
      ],
      techStack: ["OpenAI / Gemini APIs", "Python", "LangChain", "Vector Databases", "Webhooks"],
    },
    {
      id: "maintenance-optimisation",
      number: "06",
      title: "Maintenance & Optimisation",
      shortDesc:
        "Proactive technical maintenance, security patches, performance tuning, Core Web Vitals remediation, and continuous infrastructure monitoring.",
      fullDesc:
        "Software demands continuous precision. We handle routine security patching, database optimization, asset bundling reductions, and continuous uptime monitoring so your platforms run flawlessly 24/7.",
      deliverables: [
        "Continuous Performance Auditing",
        "Core Web Vitals Optimization",
        "Security Updates & Patching",
        "Zero-Downtime Dependency Updates",
        "Direct Engineering Support",
      ],
      techStack: ["Lighthouse", "Vercel Analytics", "Sentry", "Cloudflare", "CI/CD"],
    },
  ] as ServiceItem[],

  team: [
    {
      id: "syed-amaan",
      name: "Syed Amaan",
      role: "Founder",
      isFounder: true,
      image: "/team/syed-amaan.png",
    },
    {
      id: "mohammed-khaja-fakruddin",
      name: "Mohammed Khaja Fakruddin",
      role: "Team Member",
      isFounder: false,
      image: "/team/mohammed-khaja-fakruddin.jpg",
    },
    {
      id: "abul-ala-hamza",
      name: "Abul Ala Hamza",
      role: "Team Member",
      isFounder: false,
      image: "/team/abul-ala-hamza.png",
    },
  ] as TeamMember[],
};
