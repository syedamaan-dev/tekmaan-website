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
  category: string;
  deliverables: string[];
  techStack: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  categoryFilter: "web-design" | "development" | "ai" | "dashboards";
  categoryLabel: string;
  badge: "Client Engagement" | "Engineering Platform" | "Research & Development" | "Studio Framework";
  isClientProject: boolean;
  tagline: string;
  summary: string;
  clientOrContext: string;
  heroImage: string;
  technologies: string[];
  officialUrl?: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  verifiedOutcomes: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const siteConfig = {
  name: "TEKMAAN",
  legalName: "TEKMAAN Studio",
  tagline: "Independent Digital Studio",
  headline: "Crafting Digital Experiences.",
  subheadline:
    "We design and build websites, business platforms, and AI-powered solutions for ambitious teams.",
  url: "https://www.tekmaan.in",
  ogImage: "/images/og-image.jpg",

  identity: {
    type: "Independent Digital Studio",
    established: "2026",
    model: "Direct Senior Engineer & Creative Partnership",
    philosophy:
      "Direct technical ownership without agency overhead. You collaborate directly with the architect shaping your visual identity and software from day zero to production.",
    location: "Global Remote Collaboration",
  },

  contact: {
    email: process.env.NEXT_PUBLIC_STUDIO_EMAIL || "tekmaan.connect@gmail.com",
    phone: "+91 9063127547",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 9063127547",
    whatsappLink: "https://wa.me/919063127547",
    githubUrl: "https://github.com/syedamaan-dev",
    instagramUrl: "https://www.instagram.com/tekmaan.in/",
    linkedinUrl: "https://www.linkedin.com/company/tekmaan/",
  },

  nav: [
    { title: "WORK", href: "#work" },
    { title: "SERVICES", href: "#services" },
    { title: "ABOUT", href: "#about" },
    { title: "CONTACT", href: "#contact" },
  ] as NavItem[],

  projects: [
    {
      slug: "pragathi-expo",
      title: "SR University PRAGATHI Expo",
      categoryFilter: "dashboards",
      categoryLabel: "WEB DESIGN / DASHBOARDS",
      badge: "Client Engagement",
      isClientProject: true,
      tagline: "National Innovation Expo Web Hub & Live Mobile Jury Evaluation Console",
      summary:
        "Architected and deployed the comprehensive digital ecosystem for SR University's flagship national project expo & hackathon. Comprising a high-concurrency public registration portal and a dedicated mobile-first Jury Evaluation Console used by 50+ faculty and industry jurors walking between physical stalls.",
      clientOrContext: "SR University, Warangal (Verified Client Project)",
      heroImage: "/images/projects/pragathi-expo.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Firebase / Firestore", "QR Evaluation Engine"],
      officialUrl: "https://www.sruprojectexpo.in/",
      challenge:
        "The national expo required handling hundreds of team submissions, concurrent student registrations, and a high-stakes judging round where 50+ faculty and industry jurors needed to evaluate projects live on tablets while walking between stalls without network stalls or data collisions.",
      solution:
        "Engineered a decoupled, dual-interface architecture: a public landing and schedule portal alongside an independent, standalone Jury Evaluation System. Designed touch-friendly scoring steppers, instant grade calculation, dynamic rubric tiers, quick-score preset pills, and QR badge lookups for instant stall identification.",
      architectureHighlights: [
        "Zero-horizontal-overflow mobile/tablet layout optimized for physical walking evaluators",
        "Real-time rubric aggregate scoring with instant letter-grade tier assignments",
        "Dual viewing modes: immersive card review and dense data table view",
        "Instant search by Project ID, Team Name, Innovation Category, and Stall Number",
        "Graceful offline handling and local storage persistence to prevent lost evaluation marks",
      ],
      verifiedOutcomes: [
        "Official live production deployment at sruprojectexpo.in",
        "Successfully evaluated multi-department student projects during the live national expo",
        "Sub-second search and responsive real-time grading feedback on handheld tablet devices",
      ],
    },
    {
      slug: "aegis-x",
      title: "AEGIS-X Telemetry Platform",
      categoryFilter: "ai",
      categoryLabel: "AI / DASHBOARDS",
      badge: "Engineering Platform",
      isClientProject: false,
      tagline: "Model-Agnostic AI Reliability, Uncertainty Estimation & Early Warning System",
      summary:
        "An advanced independent engineering framework that wraps production machine learning models to detect out-of-distribution (OOD) inputs, calculate epistemic prediction uncertainty, track feature drift, and output actionable reliability diagnostics.",
      clientOrContext: "Personal Engineering Platform (Independent Technical R&D)",
      heroImage: "/images/projects/aegis-x.jpg",
      technologies: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Statistical Drift Diagnostics", "Mahalanobis OOD"],
      challenge:
        "Machine learning models in production silently degrade when encountering out-of-distribution edge cases or shifting real-world data patterns. Existing tools either require intrusive retraining or fail to provide unified reliability warning signals.",
      solution:
        "Designed AEGIS-X to surround models externally without modifying weights. Implemented a multi-stage reliability pipeline: reference contract validation, OOD density scoring, epistemic uncertainty measurement, feature drift detection, and fused reliability score calculation.",
      architectureHighlights: [
        "Completely model-agnostic integration layer supporting tabular, embedding, and classification models",
        "Signal fusion engine combining OOD detection, uncertainty estimation, and feature drift into unified health metrics",
        "Stress & failure analysis modules simulating severe environmental noise and data corruptions",
        "Interactive executive reliability reporting console with automated early-warning alerts",
      ],
      verifiedOutcomes: [
        "Developed comprehensive Phase A integration layer and model validation contract",
        "Demonstrated proactive failure prediction on distribution-shifted test datasets",
        "Documented architecture with automated testing and telemetry monitoring",
      ],
    },
    {
      slug: "aegis-prism",
      title: "AEGIS-PRISM Research Engine",
      categoryFilter: "ai",
      categoryLabel: "AI / DEVELOPMENT",
      badge: "Research & Development",
      isClientProject: false,
      tagline: "Research-Grade Neural Network Boundary Evaluation & Adversarial Stress Engine",
      summary:
        "An advanced research initiative exploring algorithmic robustness, boundary collapse conditions, and perturbation vulnerability in deep neural architectures and neuromorphic edge deployments.",
      clientOrContext: "Research & Development Initiative (Independent Research)",
      heroImage: "/images/projects/aegis-prism.jpg",
      technologies: ["PyTorch", "Neuromorphic AI", "Adversarial Stress Testing", "Mathematical Modeling", "TypeScript"],
      challenge:
        "Understanding where neural decision boundaries rupture under extreme environmental noise or targeted adversarial perturbations requires high-dimensional mathematical analysis that standard testing suites do not provide.",
      solution:
        "Engineered an empirical boundary exploration engine that subjects neural weights to controlled gradient-based perturbations, measuring gradient divergence, confidence collapse, and topological decision margin breakdown.",
      architectureHighlights: [
        "Parametric noise injection pipelines across Gaussian, impulse, and structured adversarial vectors",
        "Decision boundary curvature estimation and topological stability scoring",
        "Hardware-aware neuromorphic simulation compatibility targeting low-power spike-based architectures",
        "Scientific data export for research peer review and rigorous experimental verification",
      ],
      verifiedOutcomes: [
        "Rigorous algorithmic test suite verifying neural boundary perturbation limits",
        "Research benchmark methodology applied to experimental AI models",
      ],
    },
    {
      slug: "atelier-monochrome",
      title: "Atelier Monochrome",
      categoryFilter: "web-design",
      categoryLabel: "WEB DESIGN",
      badge: "Studio Framework",
      isClientProject: false,
      tagline: "Digital Exhibition Archive for Brutalist Architecture & Haute Horlogerie",
      summary:
        "An editorial digital experience built to explore high-fashion monochrome photography, Swiss grid layouts, and buttery smooth canvas transitions. Inspired by classical European atelier archives.",
      clientOrContext: "Studio Exhibition & Design Archive",
      heroImage: "/images/projects/atelier-monochrome.jpg",
      technologies: ["Next.js", "React", "Motion", "Tailwind CSS", "Editorial Typography"],
      challenge:
        "Creating a digital space that embodies the physical materiality of heavy stone, concrete textures, and fine Swiss horology while maintaining sub-second performance and liquid fluid responsiveness.",
      solution:
        "Formulated an asymmetrical Swiss grid system with variable type scales, high-contrast monochrome image filters, and friction-less gesture scrolling.",
      architectureHighlights: [
        "Adaptive high-contrast monochrome media rendering",
        "Asymmetrical column balancing with fluid responsive breakpoints",
        "Sub-100ms page transitions with persistent scroll memory",
      ],
      verifiedOutcomes: [
        "Awwwards-level typographic rhythm and visual discipline",
        "100/100 Core Web Vitals score on mobile and desktop",
      ],
    },
    {
      slug: "kinetic-system",
      title: "Kinetic Motion Matrix",
      categoryFilter: "development",
      categoryLabel: "DEVELOPMENT",
      badge: "Studio Framework",
      isClientProject: false,
      tagline: "Architectural Design System Tokens & Physics-Driven Animation Matrix",
      summary:
        "A proprietary tokenized design system and motion component matrix developed by TEKMAAN to power high-end interactive client applications with architectural precision.",
      clientOrContext: "TEKMAAN Studio Internal Framework",
      heroImage: "/images/projects/kinetic-system.jpg",
      technologies: ["TypeScript", "Tailwind CSS", "Motion", "CSS Variable Architecture"],
      challenge:
        "Standard UI libraries rely on generic easing curves and bloated component wrappers that degrade runtime frame rates and visual distinctiveness.",
      solution:
        "Engineered a zero-dependency motion token library mapping spring physics, bezier curves, and editorial typography directly into lightweight Tailwind tokens.",
      architectureHighlights: [
        "Type-safe design token generator with instant CSS variable synchronization",
        "Sub-pixel spring dynamics calibrated for 120Hz ProMotion displays",
        "Accessible reduced-motion fallback system embedded at the token layer",
      ],
      verifiedOutcomes: [
        "Used across all TEKMAAN production deployments for consistent motion feel",
        "Zero layout shifts (0.000 CLS) across all responsive breakpoints",
      ],
    },
    {
      slug: "hyperion-os",
      title: "Hyperion Orbital OS",
      categoryFilter: "dashboards",
      categoryLabel: "DASHBOARDS / DEVELOPMENT",
      badge: "Engineering Platform",
      isClientProject: false,
      tagline: "High-Density Space Mission Telemetry & Orbital Trajectory Console",
      summary:
        "An exploratory mission control interface designed for satellite ground stations, visualizing orbital tracks, sensor calibrations, telemetry packets, and link health in a distraction-free dark interface.",
      clientOrContext: "Exploratory Telemetry Interface",
      heroImage: "/images/projects/hyperion-os.jpg",
      technologies: ["React", "TypeScript", "Canvas 2D", "WebSocket Telemetry Protocol", "Tailwind CSS"],
      challenge:
        "Rendering thousands of real-time coordinate updates and mission event logs simultaneously without causing UI thread stutter or frame drops.",
      solution:
        "Implemented high-performance canvas overlay rendering for orbital vectors alongside an ergonomic dark layout optimized for low-light operations rooms.",
      architectureHighlights: [
        "Hardware-accelerated 60fps telemetry graph rendering",
        "High-density data matrix with multi-parameter threshold monitoring",
        "Emergency packet playback and historical sensor replay",
      ],
      verifiedOutcomes: [
        "Demonstrated real-time rendering of complex satellite orbits with zero frame drop",
        "Clean architectural aesthetic pairing technical density with editorial legibility",
      ],
    },
  ] as ProjectItem[],

  services: [
    {
      id: "website-design",
      number: "01",
      title: "Website Design",
      shortDesc:
        "Distinctive, editorial-grade web platforms designed with architectural precision, bespoke typography, and unforgettable visual presence.",
      fullDesc:
        "We build digital flagship platforms that position brands with undisputed authority. From typography curation and Swiss layout grids to fluid responsive scaling, we craft websites that feel like works of art.",
      category: "Aesthetic Architecture",
      deliverables: [
        "Custom editorial design system & typography hierarchy",
        "Fluid motion design & scroll-triggered reveals",
        "Sub-second load times & Core Web Vitals 95+",
        "Technical SEO & OpenGraph social cards",
      ],
      techStack: ["Next.js", "Tailwind CSS", "Motion", "Editorial Typography"],
    },
    {
      id: "fullstack-dev",
      number: "02",
      title: "Full-Stack Development",
      shortDesc:
        "Scalable, type-safe web applications engineered with Next.js App Router, resilient APIs, and clean modular code architecture.",
      fullDesc:
        "From complex SaaS applications to mission-critical portals, we architect robust software solutions with strict TypeScript types, secure authentication flows, and resilient database schemas.",
      category: "Software Engineering",
      deliverables: [
        "Next.js App Router architecture with Server Components",
        "Type-safe API routes and database schemas (PostgreSQL / Supabase)",
        "Authentication, session management & RBAC",
        "Automated CI/CD deployment pipelines on Vercel or cloud",
      ],
      techStack: ["TypeScript", "Next.js", "React 19", "PostgreSQL", "Supabase"],
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "UI/UX Design",
      shortDesc:
        "Pixel-perfect interfaces and ergonomic user journeys that turn complex product workflows into effortless, delightful digital interactions.",
      fullDesc:
        "We bridge the gap between creative visual direction and production implementation. We create high-fidelity design systems, interactive prototypes, and design tokens that translate into real code without translation loss.",
      category: "Product Design",
      deliverables: [
        "Comprehensive Figma design systems with unified tokens",
        "Interactive desktop and mobile user journey wireframes",
        "Micro-animation specifications and gesture dynamics",
        "Accessibility audit (WCAG 2.1 AA compliance)",
      ],
      techStack: ["Figma", "Design Tokens", "Wireframing", "Interaction Design"],
    },
    {
      id: "portals-dashboards",
      number: "04",
      title: "Custom Portals & Dashboards",
      shortDesc:
        "Data-intensive control panels, evaluation consoles, and administrative portals optimized for operational speed and tablet mobility.",
      fullDesc:
        "We engineer high-throughput business dashboards and specialized management portals—such as live jury evaluation systems, operational monitors, and telemetry views—optimized for dense data and on-ground mobility.",
      category: "Operational Systems",
      deliverables: [
        "Real-time telemetry and data visualization charts",
        "Touch-optimized input steppers & quick-action presets",
        "Dual viewing modes (responsive cards & high-density tables)",
        "Instant filtering, multi-column search, and CSV/PDF export",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Data Visualizations"],
    },
    {
      id: "ai-automation",
      number: "05",
      title: "AI Integration & Automation",
      shortDesc:
        "Practical AI capabilities, LLM interfaces, and reliability monitoring integrated directly into your business workflows.",
      fullDesc:
        "Cut through the generative AI hype with functional, production-ready AI implementations. We build structured LLM pipelines, automated document processing, model reliability monitoring, and automated business workflows.",
      category: "Applied Intelligence",
      deliverables: [
        "Integration of OpenAI, Anthropic, Gemini, or local model APIs",
        "Out-of-distribution monitoring & model health wrappers",
        "Structured JSON extraction and automated validation",
        "Event-driven webhook automations and background job queues",
      ],
      techStack: ["Python", "FastAPI", "LLM APIs", "JSON Schemas", "LangChain"],
    },
    {
      id: "maintenance-optimization",
      number: "06",
      title: "Maintenance & Optimisation",
      shortDesc:
        "Dedicated technical stewardship ensuring your digital platforms stay fast, robustly secured, and continuously maintained.",
      fullDesc:
        "Keep your digital platforms running at peak performance. We provide ongoing code maintenance, security patches, Lighthouse score tuning, and dedicated technical support without agency retainers or hidden fees.",
      category: "Sustained Quality",
      deliverables: [
        "Scheduled dependency updates and vulnerability patching",
        "Performance regression monitoring and asset optimization",
        "Uptime alerting and edge cache tuning",
        "Direct engineer hotline for critical incident response",
      ],
      techStack: ["Lighthouse", "Edge Caching", "Security Patches", "SLA Support"],
    },
  ] as ServiceItem[],

  processSteps: [
    {
      number: "01",
      title: "DISCOVER",
      subtitle: "Deconstruct & Strategy",
      description:
        "We dissect your business model, target audience, core objectives, and technical constraints. We cut through fluff to identify the exact levers that move your project forward.",
      deliverables: [
        "Technical scope & architecture roadmap",
        "User persona & critical journey mapping",
        "Competitive differentiation strategy",
        "Fixed project timeline & milestone agreement",
      ],
    },
    {
      number: "02",
      title: "DESIGN",
      subtitle: "Visual Architecture & Prototyping",
      description:
        "We translate strategy into high-impact visual design. Every layout, typography pair, micro-interaction, and color choice is crafted to communicate luxury, authority, and ease.",
      deliverables: [
        "High-fidelity design system with custom tokens",
        "Clickable interactive prototypes for key flows",
        "Motion design & interaction principles",
        "Stakeholder alignment & aesthetic sign-off",
      ],
    },
    {
      number: "03",
      title: "DEVELOP",
      subtitle: "Precision Engineering",
      description:
        "We engineer your product with clean, type-safe code using Next.js, modern CSS, and scalable APIs. Zero bloat, sub-second load times, and comprehensive accessibility.",
      deliverables: [
        "Modular, maintainable Next.js/TypeScript codebase",
        "Complete responsive implementation (mobile, tablet, desktop)",
        "API integrations & serverless backend handlers",
        "Staging preview environment with continuous deployment",
      ],
    },
    {
      number: "04",
      title: "LAUNCH",
      subtitle: "Deployment & Guard",
      description:
        "We perform meticulous QA, Lighthouse optimization, SEO verification, and DNS cutover to ensure a flawless public launch—backed by direct senior engineer support.",
      deliverables: [
        "Production deployment on high-availability edge networks",
        "100% full code ownership & git repository transfer",
        "Core Web Vitals & technical SEO verification",
        "Post-launch warranty & optional ongoing maintenance",
      ],
    },
  ] as ProcessStep[],

  technologies: [
    { name: "Next.js", category: "Framework", desc: "Production React & Server Components" },
    { name: "React", category: "Frontend", desc: "Modern UI Architecture & State" },
    { name: "TypeScript", category: "Language", desc: "Strict Type Safety & Zero Runtime Regressions" },
    { name: "Python", category: "AI & Data", desc: "Machine Learning & Mathematical Modeling" },
    { name: "FastAPI", category: "Backend", desc: "High-Throughput Asynchronous APIs" },
    { name: "Supabase", category: "Database", desc: "PostgreSQL & Realtime Data Synchronization" },
    { name: "PostgreSQL", category: "Storage", desc: "Relational Integrity & Complex Queries" },
    { name: "UI/UX", category: "Design", desc: "Editorial Typography & Design Systems" },
    { name: "AI Integration", category: "Applied ML", desc: "Model Reliability & Production LLM Pipelines" },
  ],

  principles: [
    {
      title: "Thoughtful Design",
      desc: "Every pixel, spacing unit, and typographic hierarchy is intentionally chosen. We reject generic SaaS templates in favor of bespoke architectural identity.",
    },
    {
      title: "Transparent Collaboration",
      desc: "Zero middleman dilution or bloated agency hierarchy. You speak directly with the senior engineer and designer executing your project every day.",
    },
    {
      title: "Maintainable Engineering",
      desc: "Clean, documented, type-safe codebases built to stand the test of time. 100% intellectual property ownership transferred cleanly to you upon delivery.",
    },
    {
      title: "Personalised Approach",
      desc: "We accept only a limited number of studio engagements simultaneously, ensuring undivided focus, meticulous attention to detail, and rapid delivery.",
    },
  ],

  serviceTicker: [
    "Web Application Engineering",
    "Bespoke Product Design",
    "Jury & Event Portals",
    "AI Reliability Integration",
    "High-Performance Frontends",
    "Custom Admin Dashboards",
    "Workflow Automation",
    "Cloud Architecture & SLA Tuning",
  ],

  faqs: [
    {
      category: "Engagement",
      question: "Are you an agency or an independent developer?",
      answer:
        "TEKMAAN is an independent freelance digital technology studio operated directly by a senior engineer and designer. You will never be handed off to junior contractors or account managers. You work directly with the builder who executes the code.",
    },
    {
      category: "Engagement",
      question: "How do we get started on a new project?",
      answer:
        "Simply fill out our contact enquiry form or reach out directly. We will schedule a focused 20-minute discovery conversation to review your goals, discuss architecture, and provide a transparent, fixed-price proposal within 48 hours.",
    },
    {
      category: "Technical",
      question: "What technology stack do you specialize in?",
      answer:
        "Our primary stack centers on modern web standards: Next.js (App Router), TypeScript, Tailwind CSS, Motion for fluid animations, and serverless edge backends. For backend and data systems, we work with PostgreSQL, Supabase, Firebase, Node.js, and Python for specialized AI/ML workflows.",
    },
    {
      category: "Technical",
      question: "Who owns the code once the project is finished?",
      answer:
        "You do. You receive 100% full intellectual property and code ownership upon final project milestone payment. All git repositories, design assets, and deployment keys are transferred cleanly to your organization.",
    },
    {
      category: "Pricing & Timelines",
      question: "How long does a typical project take to build?",
      answer:
        "A premium business website or high-impact landing page typically launches in 2 to 3 weeks. Full-stack web applications and custom management portals typically span 4 to 8 weeks depending on integration complexity. We provide clear milestone commitments upfront.",
    },
    {
      category: "Pricing & Timelines",
      question: "How do project pricing and milestone payments work?",
      answer:
        "We work predominantly on transparent fixed-scope project agreements so you never encounter surprise billing. Payments are tied to concrete deliverables: typically an initial kickoff deposit, a midpoint prototype review, and a final launch milestone.",
    },
    {
      category: "Technical",
      question: "Do you offer post-launch support and ongoing maintenance?",
      answer:
        "Yes. Every project includes a 30-day post-launch warranty where any technical edge cases are addressed immediately at no extra charge. We also offer dedicated monthly maintenance packages for continuous updates, security patching, and new feature iterations.",
    },
  ],
};

export const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Flexible / To be discussed",
] as const;

