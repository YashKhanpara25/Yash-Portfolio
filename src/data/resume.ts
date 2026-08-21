export const resumeData = {
  basics: {
      name: "Yash Khanpara",
      title: "Associate Software Engineer at Deutsche Bank",
      summary: "Backend Software Engineer with 3+ years of experience at Deutsche Bank, specializing in building high-throughput distributed systems, micro-frontends, and config-driven platforms.\n\nAt Deutsche Bank, I focus on driving core architectural transformations. My recent work includes co-designing a multi-tenant platform that enabled multi-department adoption without duplicating infrastructure, as well as building a versioned configuration platform managing 800+ configurations across 200+ reconciliations.\n\nI specialize in performance optimization and data engineering—recently reducing compliance pipeline execution times by 75% by migrating workloads to DuckDB and achieving a 95% reduction in database write latency using batch processing.\n\nPassionate about system architecture, performance tuning, and clean code, I also utilize AI-assisted development tools to streamline delivery and build reliable, scalable infrastructure.",
      location: "Bengaluru, India",
      email: "yashkhanpara25@gmail.com",
      phone: "+91 9157873606",
      links: [
        "https://www.linkedin.com/in/yash-khanpara-7b93321b6/",
        "https://github.com/YashKhanpara25"
      ]
    },
  experience: [
    {
      company: "Deutsche Bank",
      role: "Associate Software Engineer",
      dates: "Oct 2025 - Present",
      location: "Bengaluru, India",
      bullets: [
        "Co-designed a multi-tenant platform separating a central Control Plane from isolated Tenant Planes — solving data residency constraints that had blocked 2 departments from adopting the system, growing the platform from 1 to 3 departments without duplicating core infrastructure.",
        "Built a versioned configuration management platform from scratch, replacing a git-only workflow with no rollback capability — introducing database-backed snapshots, single-config rollback, and TEST / UAT / PROD promotion controls, now managing 800+ configurations across 200+ reconciliations with ~70 change deployments per month.",
        "Designed a config-driven archiving and purging framework that replaced uncontrolled daily deletions with a safe, dependency-aware weekly process — resolving table relationships via DAG-based topological ordering before executing partition drops or batch deletions across tables with millions of rows, processing 15-20 GB/week of financial data without integrity risk."
      ]
    },
    {
      company: "Deutsche Bank",
      role: "Senior Software Analyst",
      dates: "Oct 2024 - Oct 2025",
      location: "Bengaluru, India",
      bullets: [
        "Eliminated SLA breaches and accelerated end-of-day compliance reporting by reducing reconciliation pipeline execution time by 75% (4 hours to ~60 minutes) across 200+ reconciliations processing 5-6M records per run — by migrating from a single-node Spark setup to DuckDB's in-memory columnar execution model and parallelising independent steps.",
        "Resolved a write throughput bottleneck on a 500-600K record dataset by replacing JPA row-by-row inserts with JdbcTemplate batch updates (20-30K records per batch) using parameterised statements — achieving a 95% reduction in write time by eliminating per-row database round-trips."
      ]
    },
    {
      company: "Deutsche Bank",
      role: "Software Analyst",
      dates: "Jul 2023 - Oct 2024",
      location: "Bengaluru, India",
      bullets: [
        "Decomposed a monolithic frontend into 5 independently deployable React + Redux feature modules wired via Webpack Module Federation into a container application — eliminating cross-team release coordination and doubling release frequency from monthly to fortnightly deployments with lower risk and faster feedback cycles."
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Software Engineering Summer Intern",
      dates: "May 2022 - Jul 2022",
      location: "Bengaluru, India",
      bullets: [
        "Optimised a loan risk calculation engine by introducing CompletableFuture-based parallel task execution — concurrently processing independent risk evaluation tasks and reducing end-to-end execution time from ~55 to ~35 minutes."
      ]
    }
  ],
  achievements: [
    {
      item: "€45M",
      label: "Cost Savings",
      context: "Streamlining 14 legacy applications into a unified strategic solution"
    },
    {
      item: "80%",
      label: "Performance Boost",
      context: "Migrated underlying big data structure processing from Spark to DuckDB with 50% fewer resources"
    },
    {
      item: "95%",
      label: "Write Time Reduction",
      context: "Resolved database bottlenecks via JdbcTemplate batch updates for large datasets"
    },
    {
      item: "60%",
      label: "Reduction in Manual Efforts",
      context: "Designed user-centric utilities for config creation and promotion process, achieving cost savings per deployment"
    },
    {
      item: "2x",
      label: "Release Frequency Increased",
      context: "Achieved fortnightly deployments by decomposing a frontend monolith into micro-frontends"
    }
  ],
  projects: [
    {
      title: "Distributed Job Scheduler",
      dates: "2023",
      context: "Personal Project",
      bullets: [
        "Designed a distributed job scheduler using Redis as the scheduling backbone",
        "Leveraged Sorted Sets with ZPOPMIN for atomic, contention-free job dispatch across multiple workers",
        "Implemented distributed locks (SET NX) to prevent duplicate execution of tasks",
        "Built a Janitor service to automatically detect and recover stuck jobs from crashed workers"
      ],
      skills: ["Java", "Spring Boot", "Redis", "Docker", "Distributed Systems"],
      link: "https://github.com/YashKhanpara25/Job-Schedular",
      report: "https://github.com/YashKhanpara25/Job-Schedular"
    },
    {
      title: "weCare - Health Management System",
      dates: "Academic Project",
      context: "Hospital Web-Application",
      bullets: [
        "Developed a comprehensive hospital web application featuring dedicated patient and doctor portals, lab test booking, and appointment scheduling.",
        "Implemented modules for patient health profiles, departmental information, critical care machinery details, and a career portal for job openings.",
        "Built full-stack functionality utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) along with HTML and CSS."
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack", "HTML", "CSS"],
      link: "https://github.com/YashKhanpara25/weCare",
      report: "https://github.com/YashKhanpara25/weCare"
    }
  ],
  skills: [
      {
        group: "Core Backend & Infrastructure Architecture",
        skills: [
          "Java",
          "Spring Boot",
          "Distributed Systems",
          "System Design",
          "Microservices",
          "REST APIs",
          "Concurrency",
          "Multi-tenant Architecture",
          "DAG Workflows",
          "Micro-frontends"
        ]
      },
      {
        group: "Data Engineering & AI Acceleration",
        skills: [
          "DuckDB",
          "GitHub Copilot",
          "Cursor",
          "Apache Spark",
          "Redis Caching",
          "Oracle & SQL Tuning",
          "Prompt Engineering"
        ]
      },
      {
        group: "Frontend, Supporting Databases & DevOps",
        skills: [
          "React",
          "Redux",
          "Webpack Module Federation",
          "Node.js",
          "MongoDB",
          "Docker",
          "CI/CD",
          "Git",
          "ChatGPT / Claude"
        ]
      }
    ],
  education: [
    {
      institution: "Dhirubhai Ambani Institute of Information and Communication Technology",
      degree: "Bachelor's Degree in Computer Science",
      dates: "Graduated",
      coursework: ["Data Structures & Algorithms", "Database Management", "System Design", "Distributed Systems", "Operating Systems"],
      research: ""
    }
  ],
  certifications: [],
  awards: [
    "Promoted to Associate Software Engineer at Deutsche Bank ahead of cycle",
    "Goldman Sachs internship experience"
  ],
  extra: [
    "Hands-on expertise in: 1. Distributed Systems & Multi-tenancy 2. Performance: DuckDB, Batch Processing, Profiling 3. Architecture: Micro-frontends & Config-driven platforms 4. Concurrency: Parallel task execution 5. AI-Assisted Development",
    "Deutsche Bank - Fast-tracked career progression"
  ]
};