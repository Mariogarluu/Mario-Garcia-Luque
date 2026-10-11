export interface ProjectRepository {
  label: string;
  url: string;
  badge: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  contextType: 'dam' | '42malaga' | 'personal' | 'laboral';
  contextLabel: string;
  roleInProject: string;
  category: 'dam' | 'bot' | 'all';
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  repositories?: ProjectRepository[];
  credentialsDemo?: {
    user: string;
    pass: string;
    note?: string;
  };
  statusType?: 'active' | 'deprecated';
  statusNotice?: string;
  highlights: string[];
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface RelatedProjectLink {
  name: string;
  badge: string;
  description: string;
  url: string;
  isExternal?: boolean;
  buttonText: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  topics: string;
  iconType: 'code' | 'terminal' | 'server' | 'network';
  relatedProject?: RelatedProjectLink;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  icon: 'code' | 'layers' | 'sparkles';
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    location: string;
    postalCode: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availability: string;
    workPreference: string;
    driverLicense: string;
    photo: string;
    languages: { name: string; level: string }[];
  };
  about: {
    shortBio: string;
    extendedBio: string[];
    workspaceImage?: string;
    softSkills: { title: string; desc: string }[];
  };
  quickStats: { label: string; value: string; detail: string }[];
  services: Service[];
  skills: {
    category: string;
    icon: string;
    items: { name: string; level?: 'Avanzado' | 'Intermedio' }[];
  }[];
  experience: Experience[];
  complementaryExperience: { role: string; organization: string; period: string; details: string }[];
  education: Education[];
  certifications: string[];
  testimonial: {
    author: string;
    role: string;
    company: string;
    text: string;
    badge: string;
    avatar: string;
  };
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mario García Luque",
    role: "Full Stack & Frontend Developer",
    headline: "Desarrollador Web & Full Stack | React · TypeScript · Supabase · Node.js · Soluciones con IA",
    location: "Alhaurín de la Torre, Málaga, España",
    postalCode: "29130",
    email: "garcialuquemario7@gmail.com",
    phone: "+34 611 489 434",
    linkedin: "https://www.linkedin.com/in/mario-garcia-luque",
    github: "https://github.com/Mariogarluu",
    availability: "Disponible · Empleo & Proyectos Freelance",
    workPreference: "Málaga (Presencial / Híbrido) o 100% Remoto",
    driverLicense: "Permiso B y vehículo propio",
    photo: "/mario3.png",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B1 / Professional Working" }
    ]
  },
  quickStats: [
    { label: "Formación de Élite", value: "42 Málaga + DAW + DAM", detail: "Rigor algorítmico y doble titulación técnica superior" },
    { label: "Stack Principal", value: "React + TS + Supabase", detail: "Frontend moderno, PostgreSQL en tiempo real y APIs REST" },
    { label: "Modalidad", value: "Empleo / Freelance", detail: "Contratación directa o desarrollo por hitos y proyectos" },
    { label: "Disponibilidad", value: "Inmediata", detail: "Málaga presencial, híbrido o remoto global" }
  ],
  services: [
    {
      id: "fullstack-mvp",
      title: "Desarrollo Web Full Stack & MVPs",
      subtitle: "De la idea a producción en semanas",
      description: "Construyo aplicaciones web completas combinando React/Next.js con Supabase y Node.js. Autenticación, base de datos relacional PostgreSQL, APIs REST y despliegue automatizado.",
      idealFor: "Empresas en crecimiento, startups y clientes que necesitan una solución robusta y escalable sin sobreingeniería.",
      deliverables: ["Arquitectura modular y escalable", "Base de datos y Auth con Supabase", "Panel de administración interactivo", "Despliegue en Vercel o Cloud"],
      icon: "layers"
    },
    {
      id: "frontend-engineering",
      title: "Ingeniería Frontend & UI Moderna",
      subtitle: "Interfaces ultra-rápidas que convierten",
      description: "Diseño y maquetación de interfaces responsivas con React, TypeScript y CSS moderno. Cuidado minucioso en rendimiento, accesibilidad, animaciones sutiles y experiencia de usuario.",
      idealFor: "Equipos que buscan reforzar su frontend o marcas que quieren renovar su presencia digital con acabados de alta gama.",
      deliverables: ["Componentes limpios y reutilizables", "Optimización de Core Web Vitals", "Modo oscuro y claro adaptativo", "Diseño 100% adaptado a móviles"],
      icon: "code"
    },
    {
      id: "ai-automation",
      title: "Integración de IA & Automatización",
      subtitle: "Aceleración inteligente de procesos",
      description: "Implementación práctica de APIs de Inteligencia Artificial (LLMs, asistentes conversacionales, procesamiento de datos y herramientas autónomas) dentro de tus aplicaciones cotidianas.",
      idealFor: "Negocios que buscan automatizar flujos repetitivos o añadir superpoderes de IA a sus productos existentes.",
      deliverables: ["Conexión con APIs de IA", "Prompts y flujos optimizados", "Sincronización en tiempo real", "Ahorro de horas operativas"],
      icon: "sparkles"
    }
  ],
  about: {
    shortBio: "Desarrollador Full Stack y Frontend con mentalidad resolutiva. Ayudo a empresas y clientes freelance a construir software ágil, modular y atractivo, combinando el rigor algorítmico de 42 Málaga con la solidez de React, Supabase y herramientas de IA.",
    workspaceImage: "/workspace.jpg",
    extendedBio: [
      "Mi trayectoria no empezó en una plantilla genérica, sino desde los cimientos: comencé entendiendo el hardware y las redes en SMR, profundicé en la arquitectura cliente/servidor en DAW, entrené la tolerancia a la frustración y la gestión de memoria sin dependencias en 42 Málaga (C/C++), y consolidé el desarrollo multiplataforma en DAM.",
      "En el terreno profesional he trabajado en proyectos reales creando interfaces interactivas con React, implementando arquitecturas con Supabase y PostgreSQL, e integrando flujos de Inteligencia Artificial para acelerar entregas y resolver necesidades concretas de negocio.",
      "Tanto si buscas un desarrollador que se integre en tu plantilla con rapidez y autonomía, como si necesitas un profesional freelance que materialice tu proyecto con compromiso total, aporto código limpio, comunicación clara y orientación a resultados."
    ],
    softSkills: [
      {
        title: "Orientación a Resultados y Pragmatismo",
        desc: "Software que funciona, resuelve el problema del cliente o negocio y se entrega a tiempo."
      },
      {
        title: "Pensamiento Analítico y Deductivo",
        desc: "Capacidad para rastrear fallos complejos y estructurar datos de manera eficiente y limpia."
      },
      {
        title: "Proactividad y Autoaprendizaje",
        desc: "Acostumbrado a aprender tecnologías rápido y adaptarme a cualquier entorno exigente."
      },
      {
        title: "Comunicación Transparente y Trabajo en Equipo",
        desc: "Trato directo y cercano tanto con perfiles técnicos como con clientes finales."
      },
      {
        title: "Compromiso Social y Empatía",
        desc: "Años de voluntariado y monitorización deportiva reforzaron mi paciencia y escucha activa."
      }
    ]
  },
  skills: [
    {
      category: "Frontend Moderno",
      icon: "layout",
      items: [
        { name: "React.js", level: "Avanzado" },
        { name: "TypeScript", level: "Avanzado" },
        { name: "JavaScript (ES6+)", level: "Avanzado" },
        { name: "Next.js", level: "Intermedio" },
        { name: "HTML5 & CSS3 Avanzado", level: "Avanzado" },
        { name: "Tailwind CSS & Vanilla CSS", level: "Avanzado" },
        { name: "Responsive & Mobile-First", level: "Avanzado" },
        { name: "Custom Hooks & State Management", level: "Avanzado" }
      ]
    },
    {
      category: "Backend & BaaS",
      icon: "server",
      items: [
        { name: "Supabase (Auth, RLS, Realtime)", level: "Avanzado" },
        { name: "Node.js & Express", level: "Avanzado" },
        { name: "Diseño y consumo de APIs REST", level: "Avanzado" },
        { name: "PHP & Laravel", level: "Intermedio" },
        { name: "Python & Django", level: "Intermedio" },
        { name: "Arquitectura MVC & Modular", level: "Avanzado" },
        { name: "Despliegues Cloud (Vercel, Render, AWS)", level: "Intermedio" }
      ]
    },
    {
      category: "Bases de Datos",
      icon: "database",
      items: [
        { name: "PostgreSQL (Modelado & Constraints)", level: "Avanzado" },
        { name: "MySQL / MariaDB", level: "Avanzado" },
        { name: "Supabase Realtime & Storage", level: "Avanzado" },
        { name: "Consultas SQL optimizadas", level: "Avanzado" },
        { name: "PL/SQL (Triggers y funciones)", level: "Intermedio" }
      ]
    },
    {
      category: "Sistemas & Rigor Algorítmico",
      icon: "cpu",
      items: [
        { name: "C / C++ (Metodología 42 Málaga)", level: "Avanzado" },
        { name: "Gestión manual de memoria (Punteros)", level: "Avanzado" },
        { name: "Estructuras de datos y Algoritmos", level: "Avanzado" },
        { name: "Java & C# (POO multiplataforma)", level: "Intermedio" },
        { name: "Linux & Terminal / Shell Scripting", level: "Avanzado" },
        { name: "Redes y Protocolos TCP/IP (SMR)", level: "Avanzado" }
      ]
    },
    {
      category: "IA & Ecosistema de Productividad",
      icon: "tool",
      items: [
        { name: "Integración de APIs de IA (LLMs)", level: "Avanzado" },
        { name: "Git, GitHub & Flujos CI/CD", level: "Avanzado" },
        { name: "Vite, npm & Tooling moderno", level: "Avanzado" },
        { name: "WordPress & WooCommerce a medida", level: "Intermedio" },
        { name: "VS Code & Herramientas de depuración", level: "Avanzado" },
        { name: "Android Studio & Unity", level: "Intermedio" }
      ]
    }
  ],
  experience: [
    {
      id: "ld-quantum",
      role: "Desarrollador Full Stack / Web (React & Supabase)",
      company: "LD Quantum",
      location: "Alhaurín de la Torre, Málaga",
      period: "01/2026 – 06/2026",
      description: "Desarrollo frontend avanzado con React.js e interfaces orientadas a la experiencia de usuario, integrando soluciones de IA y gestionando la capa backend con Supabase y PostgreSQL.",
      achievements: [
        "Desarrollo e implementación de interfaces interactivas de alto rendimiento con React.js y TypeScript.",
        "Integración de modelos y flujos asistidos por Inteligencia Artificial para potenciar las funcionalidades clave del producto.",
        "Diseño y administración de la base de datos relacional en PostgreSQL con Supabase: esquemas, autenticación y eventos en tiempo real.",
        "Trabajo colaborativo multidisciplinar con estándares estrictos de calidad de código y entrega continua."
      ],
      technologies: ["React.js", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "AI Integration", "Tailwind CSS"]
    },
    {
      id: "angel-on-watch",
      role: "Desarrollador de Aplicaciones Web",
      company: "Angel on Watch",
      location: "Málaga / Remoto",
      period: "04/2025 – 09/2025",
      description: "Creación, desarrollo y escalabilidad de plataforma web interactiva basada en React y Node.js, implementando arquitectura modular desacoplada.",
      achievements: [
        "Construcción de módulos y vistas dinámicas con React y gestión centralizada del estado.",
        "Integración y consumo de servicios y APIs RESTful externas e internas con alto volumen de datos.",
        "Optimización de los tiempos de renderizado y Core Web Vitals en cliente.",
        "Control de versiones riguroso y despliegue continuo mediante Git."
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "REST APIs", "Git", "CSS Modules"]
    },
    {
      id: "zienideas",
      role: "Desarrollador Web (Prácticas)",
      company: "ZIENideas / Factoría Kreativa",
      location: "Málaga, España",
      period: "03/2024 – 06/2024",
      description: "Diseño, maquetación y mantenimiento de páginas web corporativas y tiendas online personalizadas, garantizando diseño responsive y optimización de carga.",
      achievements: [
        "Desarrollo y personalización de sitios corporativos y e-commerce con WooCommerce y WordPress.",
        "Ajustes de maquetación avanzada con CSS3, HTML5 y extensiones PHP personalizadas.",
        "Configuración técnica de hosting, dominios y optimización SEO on-page.",
        "Entrega directa y soporte técnico a clientes finales."
      ],
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS3", "Elementor", "MySQL"]
    }
  ],
  complementaryExperience: [
    {
      role: "Repartidor de Última Milla",
      organization: "Amazon",
      period: "06/2026 – 09/2026",
      details: "Operaciones logísticas de reparto, puntualidad estricta, alta tolerancia al estrés, orientación al cliente y gestión de rutas dinámicas."
    },
    {
      role: "Monitor de Actividades y Voluntario",
      organization: "SPORTMADNESS S.L. & Voluntariado Local",
      period: "07/2021 – 08/2023",
      details: "Dinamización de actividades deportivas para niños con diversidad funcional en Alhaurín de la Torre. Desarrollo de empatía, escucha asertiva y resolución de imprevistos."
    },
    {
      role: "Técnico de Sistemas (Prácticas)",
      organization: "ANOVO",
      period: "03/2022 – 06/2022",
      details: "Diagnóstico, reacondicionamiento y configuración de equipos de red y routers para operadoras de telecomunicaciones nacionales."
    }
  ],
  education: [
    {
      id: "dam",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "CPFP Alan Turing",
      location: "Málaga",
      period: "2024 – 2026",
      topics: "Arquitectura multicapa, Kotlin, Android Studio, Spring/Java, C#, bases de datos relacionales avanzadas, seguridad y diseño de APIs.",
      iconType: "code",
      relatedProject: {
        name: "Meta Force · Plataforma de Centros Deportivos",
        badge: "Proyecto Intermodular 2º DAM",
        description: "Plataforma integral con Angular 19, Supabase (34 tablas, RLS 100%), 17 Edge Functions en Deno, app Android en Kotlin con QR y asistente IA.",
        url: "#proyectos",
        isExternal: false,
        buttonText: "Ver Proyecto Meta Force"
      }
    },
    {
      id: "42malaga",
      degree: "Formación en Software y Algoritmia Rigurosa (Main Core)",
      institution: "42 Málaga (Fundación Telefónica)",
      location: "Málaga",
      period: "12/2024 – 07/2025",
      topics: "Programación en C de bajo nivel, gestión estricta de memoria (punteros, memory leaks sin valgrind errors), estructuras de datos, algoritmia y resolución P2P sin librerías estándar.",
      iconType: "terminal",
      relatedProject: {
        name: "Ft-Maincore · Algoritmia & Sistemas en C",
        badge: "42 Málaga · Main Core",
        description: "Repositorio troncal de la metodología 42: reimplementación de librerías del sistema, estructuras de datos y gestión dinámica de memoria (malloc/free).",
        url: "https://github.com/Mariogarluu/Ft-Maincore",
        isExternal: true,
        buttonText: "Ver Repositorio Ft-Maincore"
      }
    },
    {
      id: "daw",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
      institution: "I.E.S. Gerald Brenan",
      location: "Málaga",
      period: "2022 – 2024",
      topics: "Desarrollo cliente/servidor, JavaScript moderno, PHP, Laravel, SQL, seguridad web, APIs y despliegue en entornos de producción.",
      iconType: "server",
      relatedProject: {
        name: "Ecosistema Web & APIs REST",
        badge: "Arquitectura Cliente/Servidor",
        description: "Desarrollo de servicios web, bases de datos relacionales y aplicaciones web interactivas con PHP, SQL y JavaScript.",
        url: "https://github.com/Mariogarluu",
        isExternal: true,
        buttonText: "Ver Código en GitHub"
      }
    },
    {
      id: "smr",
      degree: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
      institution: "I.E.S. Gerald Brenan",
      location: "Málaga",
      period: "2020 – 2022",
      topics: "Montaje y mantenimiento de hardware, redes locales cableadas e inalámbricas, protocolos TCP/IP, servidores Windows Server y Linux.",
      iconType: "network"
    }
  ],
  certifications: [
    "PHP: Fundamentos de Desarrollo",
    "Curso Avanzado de HTML5 y CSS3",
    "Permiso de conducir B y vehículo propio"
  ],
  testimonial: {
    author: "Luis Miguel Díez Acedo",
    role: "Director General",
    company: "LD Quantum",
    badge: "Supervisión directa en LD Quantum",
    avatar: "/luius.jfif",
    text: "Mario demostró una gran capacidad técnica, especialmente en el ámbito del desarrollo Frontend y la Inteligencia Artificial, participando activamente en la evolución de nuestros proyectos y aportando soluciones eficaces a los retos del día a día. Además de sus conocimientos, destacaría su actitud proactiva, su capacidad de aprendizaje y su facilidad para integrarse y colaborar con el equipo. Siempre mostró un alto nivel de compromiso y una clara orientación a la calidad en su trabajo."
  },
  projects: [
    {
      id: "meta-force",
      title: "Meta Force · Plataforma Integral de Centros Deportivos",
      subtitle: "Ecosistema Multiplataforma (Web Angular 19, Android Kotlin & Backend Supabase)",
      contextType: "dam",
      contextLabel: "Proyecto Intermodular 2º DAM (CPIFP Alan Turing)",
      roleInProject: "Tech Lead · Backend & Security Architect",
      category: "dam",
      image: "/projects/meta-force.png",
      statusType: "active",
      demoUrl: "https://meta-force-psi.vercel.app/",
      githubUrl: "https://github.com/Mariogarluu/Meta_Force_Expo",
      credentialsDemo: {
        user: "metaforcegym@gmail.com",
        pass: "KirkTime67",
        note: "Acceso evaluación de tribunal (Superadmin)"
      },
      repositories: [
        { label: "Guía & Docs Expo", url: "https://github.com/Mariogarluu/Meta_Force_Expo", badge: "Repo Central" },
        { label: "Backend Supabase", url: "https://github.com/Mariogarluu/Meta_Force_back", badge: "PostgreSQL & Deno" },
        { label: "Frontend Web", url: "https://github.com/Mariogarluu/Meta_Force_front", badge: "Angular 19" },
        { label: "App Android", url: "https://github.com/Mariogarluu/Meta_Force_kotlin", badge: "Kotlin 2.0" }
      ],
      description: "Plataforma integral para centros deportivos desarrollada como proyecto intermodular de 2º DAM. Diseñé y lideré la arquitectura backend en Supabase con 34 tablas PostgreSQL, 100% de políticas Row Level Security (RLS), 17 Edge Functions serverless en Deno, sistema de control de accesos físicos por código QR firmado con JWT de caducidad corta, pasarela de suscripciones con generación de facturas PDF (Resend) y conexión segura con la app nativa Android en Kotlin.",
      technologies: [
        "Supabase",
        "PostgreSQL (34 tablas)",
        "RLS (Row Level Security)",
        "17 Edge Functions (Deno)",
        "Angular 19",
        "Tailwind CSS",
        "Kotlin 2.0",
        "Jetpack Compose",
        "JWT",
        "OWASP ZAP",
        "Vercel"
      ],
      highlights: [
        "Tech Lead & Backend: Diseño de 34 tablas relacionales en PostgreSQL con RLS estricto por rol (SUPERADMIN, ADMIN_CENTER, TRAINER, USER) y Custom Access Token Hooks (JWT claims).",
        "17 Edge Functions serverless en Deno: Generación de facturas PDF (invoice-pdf), emails transaccionales vía Resend (subscription-email), firmas criptográficas QR (qr-sign) y asistente IA (ai-chat).",
        "App Android en Kotlin 2.0 con Jetpack Compose y Hilt: Conexión segura a Supabase, inyección de credenciales con BuildConfig, escaneo y generación de QR firmado.",
        "Seguridad y auditoría: Cookies de sesión híbridas, sanitización contra XSS y auditoría de vulnerabilidades con OWASP ZAP documentada.",
        "Despliegue activo en producción en Vercel (meta-force-psi.vercel.app) con portal administrativo multirol y portal de socio."
      ],
      featured: true
    },
    {
      id: "bot-musica-discord",
      title: "Bot de Música para Discord",
      subtitle: "Audio streaming concurrente, colas dinámicas y comandos slash en tiempo real",
      contextType: "personal",
      contextLabel: "Proyecto Personal · Backend Node.js",
      roleInProject: "Desarrollador Backend & Integración de API",
      category: "bot",
      image: "/projects/bot-musica.jpg",
      statusType: "deprecated",
      statusNotice: "Actualmente en desuso debido a actualizaciones y deprecaciones en la API de Discord y sus librerías de streaming de voz (@discordjs/voice / cambios en YouTube).",
      githubUrl: "https://github.com/Mariogarluu/Bot-musica",
      repositories: [
        { label: "Repositorio Bot-musica", url: "https://github.com/Mariogarluu/Bot-musica", badge: "Node.js v16+" }
      ],
      description: "Bot asíncrono para servidores de Discord desarrollado con Node.js y Discord.js v14. Implementa streaming de audio de alta fidelidad desde YouTube en canales de voz, gestión dinámica de colas de reproducción concurrentes, comandos slash (/play, /queue, /pause, /skip, /stop) y embeds visuales interactivos. Actualmente en desuso debido a cambios estructurales y deprecaciones en la API de voz de Discord y proveedores de streaming.",
      technologies: [
        "Node.js",
        "JavaScript (ES6+)",
        "Discord.js v14",
        "@discordjs/voice",
        "FFmpeg",
        "yt-search",
        "@distube/ytdl-core",
        "Async/Await",
        "Event-Driven"
      ],
      highlights: [
        "Arquitectura orientada a eventos para streaming continuo y control de reproducción sin bloqueos.",
        "Gestión de colas de reproducción dinámicas: soporte para encolar canciones, pausar, reanudar, saltar pistas y búsqueda directa en YouTube.",
        "Implementación completa de Slash Commands de Discord con registro automatizado mediante script de despliegue REST.",
        "Nota de ciclo de vida: En desuso como consecuencia de las actualizaciones en las políticas y protocolos de la API de Discord."
      ],
      featured: false
    }
  ]
};
