export interface Project {
  num: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  domain: string;
  year: string;
  featured: boolean;
  image?: string;
  overview: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string; note?: string }[];
  tags: string[];
}

export const projects: Project[] = [
  // 1. TOP CV PROJECT 1: Adaptive Learning Recommendation Engine & MLOps Pipeline
  {
    num: "01",
    slug: "adaptive-learning-recsys",
    title: "Adaptive Learning Recommendation Engine & MLOps Pipeline",
    shortTitle: "Adaptive RecSys & MLOps",
    tagline: "A smart system that learns user preferences over time to recommend movies they will actually enjoy.",
    category: "AI / MLOps",
    domain: "Machine Learning Systems",
    year: "2026",
    featured: true,
    image: "/projects/adaptive-recsys.png",
    overview: "An end-to-end adaptive movie recommendation engine combining SVD matrix factorization, K-Means clustering, and a Q-Learning reinforcement agent to dynamically balance exploitation vs. exploration. Includes automated serverless MLOps CI/CD/CT with Databricks MLflow and GitHub Actions.",
    githubUrl: "https://github.com/elisbanpaco",
    liveUrl: "https://render.com",
    metrics: [
      { label: "RMSE Reduction", value: "0.842", note: "SVD Latent Factors k=50" },
      { label: "Exploration Rate", value: "ε-decay", note: "Q-Learning Dynamic Shift" },
      { label: "CI/CD/CT Pipeline", value: "< 4 min", note: "Automated MLflow Retrain" },
      { label: "Inference Latency", value: "12 ms", note: "FastAPI + Docker" }
    ],
    tags: ["Python", "FastAPI", "SVD", "Q-Learning", "Databricks MLflow", "GitHub Actions", "Docker", "Render", "uv"]
  },

  // 2. TOP CV PROJECT 2: Multivariate Vocational Recommender System
  {
    num: "02",
    slug: "mahalanobis-career-recsys",
    title: "Multivariate Vocational Recommender System",
    shortTitle: "Mahalanobis Vocational AI",
    tagline: "An AI chatbot and psychological test (validated by the Universidad Nacional del Altiplano) that uses natural language and the Mahalanobis algorithm to recommend university careers.",
    category: "AI Systems",
    domain: "Machine Learning / Recommender Systems",
    year: "2026",
    featured: true,
    image: "/projects/mahalanobis-recsys.png",
    overview: "A vocational recommendation system featuring a situational psychological test validated by professionals from the Universidad Nacional del Altiplano. It includes an AI chatbot that interacts with students in natural language (via API or local AI) and uses the Mahalanobis algorithm to perfectly match them with their ideal university degree.",
    githubUrl: "https://github.com/elisbanpaco",
    metrics: [
      { label: "Profile Dimensions", value: "16D", note: "RIASEC + Cognitive Matrix" },
      { label: "University Majors", value: "39", note: "Full Academic Coverage" },
      { label: "Covariance Metric", value: "Mahalanobis", note: "Accounts for Inter-feature Correlation" },
      { label: "Inference Latency", value: "< 10 ms", note: "O(d²) In-Memory Matrix Ops" }
    ],
    tags: ["FastAPI", "Next.js 16", "SciPy", "Mahalanobis Distance", "Mem0 Cloud", "Python", "pnpm"]
  },

  // 3. TOP CV PROJECT 3: High-Performance NCD & MST Data Analysis Pipeline
  {
    num: "03",
    slug: "compression-distance-mst-analysis",
    title: "High-Performance NCD & MST Data Analysis Pipeline",
    shortTitle: "NCD + MST Graph Engine",
    tagline: "A fast program that automatically groups massive amounts of files by calculating how similar they are to each other.",
    category: "Algorithms / C++",
    domain: "Algorithms & High-Performance Computing",
    year: "2026",
    featured: true,
    image: "/projects/ncd-mst-analysis.png",
    overview: "A high-performance C++17 and Python pipeline for analyzing educational data using Normalized Compression Distance (NCD) and Minimum Spanning Trees (MST). Implemented Kruskal's and Prim's graph algorithms in C++ for optimal tree extraction, achieving millisecond processing times on 18,000+ records.",
    githubUrl: "https://github.com/elisbanpaco/compression-distance-mst-analysis",
    metrics: [
      { label: "Dataset Scale", value: "18,000+ records", note: "Processed in milliseconds" },
      { label: "MST Extraction", value: "O(E log V)", note: "Kruskal with Disjoint-Set Union" },
      { label: "Engine Language", value: "Native C++17", note: "Compiled with CMake & GCC 13" },
      { label: "Metric Space", value: "NCD (zlib / lzma)", note: "Information-Theoretic Distance" }
    ],
    tags: ["C++17", "Python 3", "CMake", "Graph Algorithms", "Data Analysis", "Information Theory", "Kruskal MST"]
  },

  // 4. TOP CV PROJECT 4: Brevio.link - Enterprise-Grade URL Shortening Platform
  {
    num: "04",
    slug: "brevio-url-shortener",
    title: "Brevio.link - Enterprise-Grade URL Shortening Platform",
    shortTitle: "Brevio.link Platform",
    tagline: "A fast and secure web platform for shortening long web addresses and tracking how many people click them.",
    category: "Full Stack",
    domain: "Distributed Web Architecture",
    year: "2026",
    featured: true,
    image: "/projects/brevio-platform.png",
    overview: "Architected a high-speed enterprise URL shortening platform (brevio.link) leveraging Astro SSR multi-framework island architecture with React 19 and Svelte 5. Integrated PostgreSQL with Prisma 7 Driver Adapters, Zero-Trust Astro Actions, and Cloudflare Turnstile antibot protection.",
    githubUrl: "https://github.com/elisbanpaco",
    liveUrl: "https://brevio.link",
    metrics: [
      { label: "Framework Architecture", value: "Astro SSR Islands", note: "React 19 + Svelte 5" },
      { label: "Database ORM", value: "Prisma 7", note: "Serverless Driver Adapters" },
      { label: "Antibot Security", value: "Cloudflare Turnstile", note: "Zero Captcha Friction" },
      { label: "Redirect Latency", value: "< 25 ms", note: "Edge Indexing & Pooling" }
    ],
    tags: ["Astro", "React 19", "Svelte 5", "TypeScript", "PostgreSQL", "Prisma 7", "Lucia Auth", "Cloudflare Turnstile", "Tailwind CSS v4"]
  },

  // 5. TOP CV PROJECT 5: Platanito.dev - High-Performance Editorial Publishing Platform
  {
    num: "05",
    slug: "platanito-publishing-platform",
    title: "Platanito.dev - High-Performance Editorial Publishing Platform",
    shortTitle: "Platanito.dev Platform",
    tagline: "A high-speed publishing platform that allows writers to create, manage, and share editorial articles globally.",
    category: "Full Stack",
    domain: "Distributed Edge Architecture",
    year: "2026",
    featured: true,
    image: "/projects/platanito-platform.png",
    overview: "Architected a modern editorial publishing platform (platanito.dev) using Astro SSR, React 19, and an edge distributed database with Turso (LibSQL) and Drizzle ORM. Engineered an anti-abuse metric system with 24h sliding-window unique view tracking, DOM reading engagement observers, and Cloudflare R2 storage.",
    githubUrl: "https://github.com/elisbanpaco",
    liveUrl: "https://platanito.dev",
    metrics: [
      { label: "Edge Database", value: "Turso (LibSQL)", note: "Sub-15ms Edge Reads" },
      { label: "ORM Layer", value: "Drizzle ORM", note: "Zero-Overhead SQL Generator" },
      { label: "View Analytics", value: "24h Sliding Window", note: "Anti-Spam Unique Metric" },
      { label: "Media Storage", value: "Cloudflare R2", note: "Zero Egress S3-Compatible" }
    ],
    tags: ["Astro", "React 19", "TypeScript", "Turso LibSQL", "Drizzle ORM", "Lucia Auth", "Cloudflare R2", "Tailwind CSS v4"]
  },

  // 7. ALL PROJECTS ARCHIVE: Cybersecurity Causal Bayesian Networks
  {
    num: "07",
    slug: "cybersecurity-causal-bayesian-networks",
    title: "Explainable Intrusion Detection via Causal Bayesian Networks",
    shortTitle: "Causal Bayesian Intrusion AI",
    tagline: "A smart security system that not only detects network hacker attacks, but explains exactly how and why they happened.",
    category: "AI & Cybersecurity",
    domain: "Causal AI & Threat Intelligence",
    year: "2026",
    featured: false,
    image: "/projects/bayesian-ids.png",
    overview: "A mathematically interpretable cybersecurity intrusion detection framework using Directed Acyclic Graphs (DAGs) and Bayesian Networks. Enables exact probability inference and counterfactual root-cause analysis for network security analysts.",
    githubUrl: "https://github.com/elisbanpaco",
    metrics: [
      { label: "False Positive Reduction", value: "41.2%", note: "Over standard random forests" },
      { label: "Inference Method", value: "Variable Elimination", note: "Exact probabilistic calculus" }
    ],
    tags: ["pgmpy", "Python", "Bayesian Networks", "Causal AI", "Cybersecurity", "Network Intrusion"]
  },
  
  // 8. ALL PROJECTS ARCHIVE: NanoCode-GPT
  {
    num: "08",
    slug: "nanocode-gpt",
    title: "NanoCode-GPT: From-Scratch Transformer Decoder in PyTorch",
    shortTitle: "NanoCode-GPT",
    tagline: "A custom-built AI assistant designed from scratch specifically to help write and understand Python programming code.",
    category: "AI / LLM",
    domain: "Deep Learning & Transformer Systems",
    year: "2026",
    featured: false,
    image: "/projects/nanocode-gpt.png",
    overview: "A lightweight, from-scratch Transformer decoder language model built in native PyTorch. Implements multi-head causal self-attention, Rotary Position Embeddings (RoPE), KV-Caching, and custom Byte-Pair Encoding (BPE) for Python code generation.",
    githubUrl: "https://github.com/elisbanpaco",
    metrics: [
      { label: "Parameters", value: "48 Million", note: "Compact edge architecture" },
      { label: "Token Processing", value: "3,400 tokens/s", note: "Single RTX 3060 GPU" }
    ],
    tags: ["PyTorch", "Transformers", "LLM", "FlashAttention-2", "CUDA", "NLP", "Python"]
  },


  
  // 8. OPEN-YT
  {
    num: "08",
    slug: "open-yt",
    title: "Open YT: Terminal Audio/Video Downloader",
    shortTitle: "Open YT Downloader",
    tagline: "A clean, fast, and ad-free tool to download YouTube videos and audio directly from the computer terminal.",
    category: "CLI & Tools",
    domain: "Developer Tools",
    year: "2026",
    featured: false,
    image: "/projects/open-yt.png",
    overview: "A highly optimized, terminal-based YouTube video and audio downloader written in Python. Provides an elegant Text User Interface (TUI) for seamless media extraction.",
    tags: ["Python", "Rich/Textual", "CLI", "yt-dlp"],
    githubUrl: "https://github.com/elisbanpaco/open-yt",
    metrics: [
      { label: "Interface", value: "TUI" },
      { label: "Performance", value: "Fast" }
    ]
  },

  // 9. ZCORE
  {
    num: "09",
    slug: "zcore",
    title: "ZCore C++ Engine",
    shortTitle: "ZCore",
    tagline: "A foundational software engine built to handle high-performance mathematical calculations and complex computer graphics.",
    category: "C++ Systems",
    domain: "High-Performance Computing",
    year: "2026",
    featured: false,
    image: "/projects/zcore.png",
    overview: "A core C++ systems repository for high-performance computing, algorithmic research, and memory-safe abstractions.",
    tags: ["C++17", "CMake", "Systems Programming"],
    githubUrl: "https://github.com/elisbanpaco/zcore",
    metrics: [
      { label: "Language", value: "C++17" },
      { label: "Build", value: "CMake" }
    ]
  },

  // 10. SERVERLESS MLOPS
  {
    num: "10",
    slug: "serverless-mlops-architecture",
    title: "End-to-End Serverless MLOps Architecture",
    shortTitle: "Serverless MLOps",
    tagline: "An automated cloud system that makes sure Artificial Intelligence models are constantly updated and running smoothly.",
    category: "AI & MLOps",
    domain: "Machine Learning Engineering",
    year: "2026",
    featured: false,
    image: "/projects/mlops-arch.png",
    overview: "Arquitectura MLOps End-to-End Serverless: Integración (CI), Entrenamiento (CT) y Despliegue Continuo (CD) con GitHub Actions, Databricks y Render.",
    tags: ["Python", "Databricks", "GitHub Actions", "Docker", "Render"],
    githubUrl: "https://github.com/elisbanpaco/serverless-mlops-architecture",
    metrics: [
      { label: "CI/CD/CT", value: "Automated" },
      { label: "Hosting", value: "Serverless" }
    ]
  },
];
