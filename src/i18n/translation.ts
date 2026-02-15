//import Experience from "../components/Experience/Experience";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      education: "Educación",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      certificate: "Certificados",
      experience: "Experiencia",
    },
    hero: {
      title: "Ingeniero en Sistemas", 
      subtitle: "Apasionado por el desarrollo de software, con experiencia en bases de datos, diseño de sistemas escalables y eficientes.", // This is now the description
      downloadCV: "Descargar CV",
      viewProjects: "Ver Proyectos",
      typingSubtitle: "Estudiante de Ingeniería en Sistemas",
    },
    about: {
      title: "Sobre mí",
      description: "Hola, soy Técnico Superior en Desarrollo de Software y estudio Ingeniería en Sistemas Informáticos. Me apasiona la tecnología y llevo tres años inmerso en el mundo de la programación.\n\nDisfruto tanto del desarrollo visual como de la lógica que lo sostiene. Soy curioso, dedicado y siempre busco aprender nuevas herramientas que me ayuden a crecer técnica y personalmente.\n\nMi objetivo es participar en proyectos que generen impacto, aportando soluciones creativas y eficientes a los desafíos que se presenten, enfocándome en redes, infraestructura, computación en la nube y administración de sistemas.",
      education: "Formación académica sólida en ingeniería de sistemas",
      passion: "Pasión por aprender nuevas tecnologías",
      focus: "Enfoque en desarrollo y arquitectura de software",
    },
    projects: {
      title: "Proyectos",
      project1: {
        title: "E-commerce Rosario Fiesta",
        description:
          "Es una plataforma ecommerce diseñada para optimizar tanto la experiencia de compra de los clientes como la gestión interna del negocio, brindando soluciones eficientes para compradores y administradores.",
        tech: "Html, Css, JavaScript, Php, Mysql",
      },
      project2: {
        title: "StockOrbit",
        description: "Plataforma inteligente para gestionar stock e inventario en tiempo real. Optimiza procesos y mejora el control de tu negocio.(User: Admin - Password: Admin)",
        tech: "Html, Bootstrap, Python, Django, Mysql",
      },
      project3: {
        title: "OrbitPage",
        description: "Página web institucional que impulsa la presencia digital de la empresa con una imagen clara y profesional.",
        tech: "React, Tailwind CSS, JavaScript, EmailJS",
      },
      project4: {
        title: "OIAT - Organización Internacional Asociaciones de Taekwon-Do ITF",
        description: "Pagina + sistema para Organización Internacional Asociaciones de Taekwon-Do ITF (En desarrollo...)",
        tech: "TypeScript, React, Tailwind CSS, Node.js, Express, Mysql",
        fullDescription: "Estoy desarrollando la plataforma institucional para OIAT, una organización internacional de Taekwon-Do. El cliente necesitaba un sitio oficial para mostrar noticias, actividades y certificaciones, junto con un sistema interno para que los administradores gestionen el contenido.",
        fullDescription2:"Comencé por el frontend, diseñando la interfaz y la estructura visual del sitio. Luego avancé al backend, donde estoy construyendo la lógica del sistema, la gestión de datos y las funciones internas. Más adelante voy a integrar ambas partes para unificar completamente el flujo entre el sitio público y el panel administrativo.",
        fullDescription3:"El desarrollo lo realizo en comunicación directa con el cliente, realizando reuniones de levantamiento de requerimientos para comprender su estructura organizativa y los flujos de información. Con esa base armé un backlog priorizado y un roadmap iterativo. Trabajo con sprints cortos y entregas quincenales, presentando incrementos funcionales que el cliente revisa para dar feedback y ajustar requerimientos.",
        fullDescription4:"Gracias a este enfoque ágil, con integración y entrega continua, el sistema evoluciona de forma incremental y se adapta exactamente a las necesidades reales de la institución.",
        features: [
          "Autenticación y autorización — JWT integrado con Firebase Auth y middleware RBAC .",
          "Validación y contratos de datos — Joi y DTOs para validar requests y garantizar integridad de la API.",
          "Modelado relacional — Prisma con esquema normalizado y control de versiones de la BD.",
          "Comunicación cliente/servidor — Uso de axios, manejo de requests, interceptores para tokens.",
          "Gestión de estado escalable — Redux Toolkit bajo el patrón FLUX, con slices y RTK Query para sincronizar datos de forma consistente."
        ],
        challenges: [
          "Centralización de la información — noticias, certificaciones y autoridades en un único lugar.",
          "Mayor transparencia — certificados públicos y verificables que fortalecen la credibilidad.",
          "Eficiencia administrativa — menos trámites manuales y menor margen de error.",
          "Comunicación ágil — difusión rápida de novedades y eventos a toda la comunidad.",
          "Visibilidad internacional — presencia oficial de la institución ante practicantes de todo el mundo.",
          "Identificación clara de miembros — listado estructurado con datos y categorías oficiales."
        ]
      },
      project5: {
        title: "B2-P Alquiler De Canchas De Fútbol",
        description: "Plataforma web para gestionar canchas y reservas en tiempo real, donde administradores configuran horarios y precios, y jugadores reservan turnos disponibles fácilmente.",
        tech: "React, Tailwind CSS, TypeScript, Node.js, Express, MongoDB",
        fullDescription: "Este proyecto fue desarrollado en el marco de la materia Metodologías y Desarrollo Web con el objetivo de aplicar conceptos de análisis, diseño y desarrollo de aplicaciones web. Consiste en una plataforma para la gestión y reserva de canchas de fútbol que permite a los administradores organizar horarios, precios y disponibilidad desde un panel centralizado.",
        fullDescription2:  "El sistema busca digitalizar y simplificar la administración de turnos, permitiendo gestionar canchas y visualizar reservas desde un único entorno, mejorando la organización general.",
        fullDescription3:"Desde el lado del usuario, la aplicación ofrece una interfaz clara donde jugadores o equipos pueden consultar horarios disponibles y reservar en tiempo real mediante un formulario simple, evitando conflictos y confirmando cada turno al instante.",
        features: [
          "Autenticación y autorización — JWT integrado con Firebase Auth y middleware RBAC .",
          "Validación y contratos de datos — Joi y DTOs para validar requests y garantizar integridad de la API.",
          "Modelado no relacional — Mongoose para esquemas y manejo de relaciones entre documentos.",
          "Comunicación cliente/servidor — Uso de axios, manejo de requests, interceptores para tokens.",
          "Gestión de estado escalable — Redux Toolkit bajo el patrón FLUX, con slices y RTK Query para sincronizar datos de forma consistente."
        ],
        challenges: [
          "Centralización operativa — Toda la gestión de canchas y turnos en un único sistema.",
          "Optimización administrativa — Reducción de tareas manuales y tiempo de coordinación.",
          "Disponibilidad en tiempo real — Visualización instantánea de horarios libres y ocupados.",
          "Mayor confiabilidad — Menor margen de error humano en la asignación de reservas.",
          "Mejor experiencia del usuario — Proceso de reserva simple, rápido y accesible desde cualquier dispositivo.",
          "Escalabilidad — Posibilidad de agregar nuevas canchas, sedes o funcionalidades sin modificar la base del sistema."
      ],
      links: [
        
      ],
     
      },
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      descriptionTitle: "Descripción",
      featuresTitle: "Desafíos Técnicos",
      challengesTitle: "Beneficios para la organización",
      technologiesTitle: "Tecnologías Utilizadas",
      linksTitle: "Enlaces del Proyecto"
    },
    skills: {
      title: "Habilidades Técnicas",
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de Datos",
      tools: "Herramientas",
    },
    experience: {
      title: "Experiencia",
      experience1: {
      role: "OrbitDev",
      subtitle: "Desarrollador de software",
      date: "Actualidad",
      description:
        "Emprendimiento personal orientado al desarrollo de software a medida para clientes, enfocado en fortalecer mis habilidades como desarrollador, con especial atención a la gestión de bases de datos y la aplicación de buenas prácticas para garantizar un código limpio y eficiente.",
    },
      experience2:{
      role: "NiloSolutions",
      subtitle: "Desarrollador Frontend",
      date: "Jun 2025 - Ago 2025",
      description:
        "Practica no remunerada en desarrollo frontend, participando en la creación de interfaces web interactivas y optimización de la experiencia del usuario.",
    },
    },
     education: {
      title: "Formación Académica",
      inProgress: "En curso",
      completed: "Completado",
      location: "Rosario, Argentina",
      degree1: {
        title: "Técnico Superior en Desarrollo de Software",
        institution: 'Instituto Superior Particular Incorporado N° 4011 "Gral. Manuel Belgrano"',
        period: "2022 - 2024",
        status: "completed",
      },
      degree2: {
        title: "Ingeniería en Sistemas Informáticos",
        institution: "UAI - Universidad Abierta Interamericana",
        info: "Materias aprobadas: 25/51",
        period: "2025",
        status: "inProgress",
      },
    },
    certifications: {
      title: "Formaciones Y Certificaciones",
      cert1: {
        title: "Codo a Codo 4.0 – Full Stack Python",
        issuer: "Gobierno de la Ciudad de Buenos Aires",
        date: "2024",
      },
      cert2: {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training & Certification",
        date: "Enero 2026",
      },
      cert3: {
        title: "HCIA-Datacom V1.0",
        issuer: "Huawei ICT Academy",
        date: "En curso",
},
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con",
      by: "por",
    },
  },
  en: {
    nav: {
      home: "Home",
      education: "Education",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificate: "Certificates",
      experience: "Experience",
    },
    hero: {
      title: "Systems Engineer",
      subtitle: "Passionate about software development, with experience in databases and designing scalable and efficient systems.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      typingSubtitle: "Systems Engineering Student",
    },
    about: {
      title: "About Me",
      description: "Hello, i am a Senior Technician in Software Development and I am studying Computer Systems Engineering. I am passionate about technology and have been immersed in the world of programming for three years.\n\nI enjoy both the visual development and the underlying logic. I am curious, dedicated, and always seek to learn new tools that help me grow both technically and personally.\n\nMy goal is to participate in projects that generate impact, providing creative and efficient solutions to the challenges that arise, focusing on networks, infrastructure, cloud computing, and systems administration.",
      education: "Solid academic background in systems engineering",
      passion: "Passion for learning new technologies",
      focus: "Focus on development and software architecture",
    },
    projects: {
      title: "Projects",
      project1: {
        title: "E-commerce Rosario Fiesta",
        description:
          "It is an ecommerce platform designed to optimize both the customer shopping experience and the internal management of the business, providing efficient solutions for both buyers and administrators.",
        tech: "Html, Css, JavaScript, Php, Mysql",
      },
      project2: {
        title: "StockOrbit",
        description: "Smart platform to manage stock and inventory in real time. Optimize processes and gain better control of your business.(User: Admin - Password: Admin)",
        tech: "Html, Bootstrap, Python, Django, Mysql",
      },
      project3: {
        title: "OrbitPage",
        description: "Institutional website that enhances the company’s digital presence with a clear and professional image.",
        tech: "React, Tailwind CSS, JavaScript, EmailJS",
      },
      project4: {
        title: "OIAT - Organización Internacional Asociaciones de Taekwon-Do ITF ",
        description: "Website + system for International Organization of Taekwon-Do ITF Associations (In development...)",
        tech: "TypeScript, React, Tailwind CSS, Node.js, Express, Mysql",
        fullDescription: "I am developing the institutional platform for OIAT, an international Taekwon-Do organization. The client needed an official website to showcase news, activities, and certifications, along with an internal system for administrators to manage content.",
        fullDescription2: "I started with the frontend, designing the interface and visual structure of the site. Then I moved to the backend, where I am building the system logic, data management, and internal functions. Later, I will integrate both parts to fully unify the flow between the public site and the administrative panel.",
        fullDescription3: "The development is done in direct communication with the client, conducting requirements gathering meetings to understand their organizational structure and information flows. With that foundation, I created a prioritized backlog and an iterative roadmap. I work with short sprints and biweekly deliveries, presenting functional increments that the client reviews to provide feedback and adjust requirements.",
        fullDescription4: "Thanks to this agile approach, with continuous integration and delivery, the system evolves incrementally and adapts exactly to the institution's real needs.",
        features: [
          "Authentication and authorization — JWT integrated with Firebase Auth and RBAC middleware.",
          "Data validation and contracts — Joi and DTOs to validate requests and ensure API integrity.",
          "Relational modeling — Prisma with normalized schema and database version control.",
          "Client/server communication — Using axios, request handling, interceptors for tokens.",
          "Scalable state management — Redux Toolkit following the FLUX pattern, with slices and RTK Query to synchronize data consistently."
        ],
        challenges: [
          "Centralization of information — news, certifications, and authorities in one place.",
          "Greater transparency — public and verifiable certificates that strengthen credibility.",
          "Administrative efficiency — fewer manual procedures and lower margin of error.",
          "Agile communication — rapid dissemination of news and events to the entire community.",
          "International visibility — official presence of the institution for practitioners worldwide.",
          "Clear member identification — structured listing with official data and categories."
        ]
      },
        project5: { 
        title: "B2-P Football Field Rental",
        description: "Web platform to manage football field reservations in real time, where administrators configure schedules and prices, and players easily book available slots.",
        tech: "React, Tailwind CSS, TypeScript, Node.js, Express, MongoDB",
        fullDescription: "This project was developed within the framework of the Web Methodologies and Development course with the objective of applying concepts of analysis, design, and development of web applications. It consists of a platform for the management and reservation of football fields that allows administrators to organize schedules, prices, and availability from a centralized panel.",
        fullDescription2: "The system seeks to digitize and simplify the administration of reservations, allowing the management of fields and visualization of bookings from a single environment, improving overall organization.",
        fullDescription3: "From the user side, the application offers a clear interface where players or teams can check available schedules and book in real time through a simple form, avoiding conflicts and confirming each slot instantly.",
        features: [
          "Authentication and authorization — JWT integrated with Firebase Auth and RBAC middleware.",
          "Data validation and contracts — Joi and DTOs to validate requests and ensure API integrity.",
          "Non-relational modeling — Mongoose for schemas and handling relationships between documents.",
          "Client/server communication — Using axios, request handling, interceptors for tokens.",
          "Scalable state management — Redux Toolkit following the FLUX pattern, with slices and RTK Query to synchronize data consistently."
        ],
        challenges: [
          "Operational centralization — All field and reservation management in a single system.",
          "Administrative optimization — Reduction of manual tasks and coordination time.",
          "Real-time availability — Instant visualization of free and occupied schedules.",
          "Greater reliability — Lower margin of human error in reservation assignment.",
          "Better user experience — Simple, fast booking process accessible from any device.",
          "Scalability — Possibility to add new fields, locations, or features without modifying the core of the system."
      ],
        },
      viewCode: "View Code",
      liveDemo: "Live Demo",
      descriptionTitle: "Description",
      featuresTitle: "Technical Challenges",
      challengesTitle: "Benefits for the Organization",
      technologiesTitle: "Technologies Used",
      linksTitle:"Project Links"
    },
    skills: {
      title: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      tools: "Tools",
    },
    experience: {
      title: "Experience",

      experience1:{
      role: "OrbitDev",
      subtitle: "Software developer",
      date: "Present",
      description:
        "Personal venture focused on developing custom software for clients, aimed at strengthening my skills as a developer, with special attention to database management and applying best practices to ensure clean and efficient code.",
      },
    experience2: {
      role: "NiloSolutions",
      subtitle: "Frontend Developer",
      date: "Present",
      description:
        "Unpaid internship in frontend development, participating in the creation of interactive web interfaces and optimizing the user experience.",
      }
    },
      education: {
      title: "Academic Education",
      inProgress: "In Progress",
      completed: "Completed",
      location: "Rosario, Argentina",
      degree1: {
        title: "Higher Technician in Software Development",
        institution: 'Instituto Superior Particular Incorporado N° 4011 "Gral. Manuel Belgrano"',
        period: "2022 - 2024",
        status: "completed",
      },
      degree2: {
        title: "Systems Engineering",
        institution: "UAI - Universidad Abierta Interamericana",
        period: "2025",
        status: "inProgress",
      },
    },
      certifications: {
      title: "Trainings And Certifications",
      cert1: {
        title: "Codo a Codo 4.0 – Full Stack Python",
        issuer: "Government of the City of Buenos Aires",
        date: "2024",
      },
      cert2: {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training & Certification",
        date: "January 2026",
      },
      cert3: {
        title: "HCIA-Datacom V1.0",
        issuer: "Huawei ICT Academy",
        date: "In progress",
      },
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Hecho con",
      by: "by",
    },
  },
}
