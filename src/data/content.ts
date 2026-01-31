export const personalInfo = {
  name: "Pawel Lisowski",
  title: "Senior Software Engineer",
  location: "Gdynia, Poland",
  linkedin: "https://linkedin.com/in/paweljlisowski",
  github: "https://github.com/anpaaan",
  summary: `I build scalable full-stack web applications. With 8+ years of experience across enterprise environments in pharma, aviation, and financial services, I specialize in crafting high-performance systems using modern technologies.`,
  aboutParagraphs: [
    `I'm a Senior Software Engineer who enjoys building things that live on the web. My journey in software development started back in 2016 when I moved to Dublin to work as a Software Engineer in Test at Fenergo, which quickly evolved into full-stack development.`,
    `Fast forward to today, I've had the privilege of working with major organizations including Novartis, British Council, Lufthansa Systems, and clients like Boeing, Danfoss, and Signal Ocean. My focus these days is on architecting executive dashboards and data pipelines that deliver real-time insights to stakeholders.`,
    `I leverage AI-assisted development tools to accelerate delivery while maintaining code quality. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.`,
  ],
};

export const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Angular", "Redux", "Tailwind CSS"],
  backend: ["Java", "Spring Boot", "Node.js", "NestJS", "Python", "FastAPI", "GraphQL"],
  data: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "MySQL", "Elasticsearch"],
  devops: ["Docker", "Kubernetes", "AWS", "GCP", "Jenkins", "GitHub Actions"],
  testing: ["Jest", "Playwright", "JUnit", "pytest", "React Testing Library"],
};

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Novartis",
    companyUrl: "https://www.novartis.com",
    type: "Contract",
    location: "Remote, Poland",
    period: "Dec 2023 - Present",
    highlights: [
      "Architected executive financial analytics dashboard using React/TypeScript, Java/Spring Boot, and Python/FastAPI, delivering real-time insights to director-level stakeholders across global pharma operations",
      "Engineered data pipelines processing millions of financial records daily, improving data retrieval performance by 40% through query optimisation and strategic indexing",
      "Built interactive data visualisation components with Recharts and D3.js, presenting complex R&D spending trends and clinical trial cost analytics",
      "Designed modular component architecture with comprehensive Storybook documentation, enabling rapid feature development across 4 distributed teams",
      "Implemented Docker containerisation and GCP Cloud Run deployment workflows with automated rollbacks, cutting deployment time by 50%",
      "Developed role-based access control system with OAuth 2.0 and JWT, ensuring secure access to sensitive financial data across organizational hierarchies",
    ],
  },
  {
    title: "Software Engineer",
    company: "British Council",
    companyUrl: "https://www.britishcouncil.org",
    type: "Contract",
    location: "Remote, Poland",
    period: "Sep 2022 - Dec 2023",
    highlights: [
      "Built and maintained React/Node.js applications supporting global education services including exam registration systems with 100k+ monthly active users",
      "Developed exam scheduling and booking system handling peak traffic during IELTS enrollment periods with zero downtime",
      "Designed scalable backend microservices with Java/Spring Boot deployed on AWS ECS, achieving 99.9% uptime during high-demand periods",
      "Implemented GraphQL API gateway to unify data access across 6 microservices, reducing frontend data-fetching complexity by 40%",
      "Optimised PostgreSQL queries and implemented Redis caching layer, reducing API response times by 60% for frequently accessed endpoints",
      "Built comprehensive testing suite with Jest and Playwright, achieving 85% code coverage and enabling confident continuous deployment",
    ],
  },
  {
    title: "Software Engineer",
    company: "Lufthansa Systems",
    companyUrl: "https://www.lhsystems.com",
    type: "Contract",
    location: "Remote, Poland",
    period: "Jan 2021 - Sep 2022",
    highlights: [
      "Developed Angular/Java fuel efficiency platform calculating consumption metrics and cost optimisation strategies for major airline clients",
      "Built real-time flight analytics dashboards processing 15,000+ daily flight records, enabling data-driven decisions for fleet management",
      "Integrated external aviation data sources including weather APIs and NOTAM feeds to enhance fuel consumption predictions and route planning",
      "Designed RESTful APIs with Spring Boot handling complex flight plan calculations and performance analytics for operations teams",
      "Implemented CI/CD pipelines with Jenkins, Ansible, and SonarQube quality gates, reducing deployment time by 40% while improving code quality",
      "Collaborated directly with airline operations specialists to translate complex aviation domain requirements into intuitive technical solutions",
    ],
  },
  {
    title: "Software Engineer",
    company: "Jit Team",
    companyUrl: "https://jit.team",
    type: "Full-time",
    location: "Gdynia, Poland",
    period: "Sep 2017 - Jan 2021",
    clients: ["Danfoss", "Jeppesen", "Signal Ocean"],
    highlights: [
      "Delivered frontend and full-stack solutions for enterprise clients across aviation, maritime logistics, and industrial manufacturing sectors",
      "Built React/NestJS industrial IoT dashboards for Danfoss, processing real-time sensor telemetry from 500+ HVAC and refrigeration devices with WebSocket streaming",
      "Developed Angular/Java applications for Jeppesen's aviation flight planning platform, implementing navigation data processing and route optimization features",
      "Built React frontend and Python/FastAPI backend for Signal Ocean's maritime analytics platform, tracking real-time vessel positions and freight market intelligence",
      "Implemented event-driven architecture with Kafka for processing high-volume sensor data streams with sub-second latency requirements",
      "Established frontend testing practices and component libraries using Jest and Cypress, reducing regression bugs by 35% across client projects",
    ],
  },
  {
    title: "Software Engineer in Test",
    company: "Fenergo",
    companyUrl: "https://www.fenergo.com",
    type: "Full-time",
    location: "Dublin, Ireland",
    period: "Jun 2016 - Sep 2017",
    highlights: [
      "Developed automated testing frameworks using C# and Selenium for enterprise KYC/AML compliance software serving global financial institutions",
      "Built regression test suites covering critical client onboarding workflows, reducing manual testing effort by 60% and accelerating release cycles",
      "Collaborated with cross-functional development teams to implement shift-left testing practices, catching defects earlier in the development lifecycle",
    ],
  },
];

export const projects = [
  {
    title: "Gawra",
    description:
      "AI-powered household management app helping families organise budgets, calendars, and daily tasks. Features natural language input, smart calendar with AI-powered event extraction from photos, and multi-user household sharing.",
    tech: ["Next.js 15", "React 19", "TypeScript", "NestJS", "PostgreSQL", "Capacitor"],
    github: "https://github.com/anpaaan/gawra",
    external: "https://gawra.io",
    image: "/images/projects/gawra.webp",
    featured: true,
  },
  {
    title: "Skeech",
    description:
      "Self-hosted AI design tool that generates production-grade UI components through natural language using Claude. Features live preview, Monaco-based code editor, and flexible authentication with local agent support.",
    tech: ["Next.js 14", "React 18", "TypeScript", "FastAPI", "WebSocket", "Monaco Editor"],
    github: "https://github.com/anpaaan/skeech",
    external: "https://skeech.dev",
    image: "/images/projects/skeech.webp",
    featured: true,
  },
  {
    title: "Lisium",
    description:
      "Unified product development platform with workspaces, tasks, documents, and real-time collaboration. Built as a microservices architecture with 7 services handling auth, workspaces, canvas, tasks, and more.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Elasticsearch"],
    github: "https://github.com/anpaaan/lisium",
    image: "/images/projects/lisium.webp",
    featured: true,
  },
  {
    title: "Synthwave API",
    description:
      "High-performance REST API gateway with built-in rate limiting, caching, and observability. Handles 10k+ requests per second with sub-millisecond latency using async Rust.",
    tech: ["Rust", "Actix-web", "Redis", "Prometheus", "Grafana"],
    github: "https://github.com/anpaaan/synthwave-api",
    featured: false,
  },
  {
    title: "DataForge",
    description:
      "ETL pipeline framework for processing large-scale data transformations. Features declarative pipeline definitions, automatic parallelization, and built-in data quality checks.",
    tech: ["Python", "Apache Spark", "Airflow", "Delta Lake", "dbt"],
    github: "https://github.com/anpaaan/dataforge",
    featured: false,
  },
  {
    title: "Nimbus CLI",
    description:
      "Developer CLI tool for managing cloud infrastructure across multiple providers. Unified interface for AWS, GCP, and Azure with infrastructure-as-code templates.",
    tech: ["Go", "Cobra", "Terraform", "AWS SDK", "GCP SDK"],
    github: "https://github.com/anpaaan/nimbus-cli",
    featured: false,
  },
];

export const education = {
  degree: "BSc Software Systems Development",
  school: "Waterford Institute of Technology",
  location: "Ireland",
  year: "2016",
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
