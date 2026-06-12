// Textos cortos de la interfaz. El contenido largo va en const/profile.ts y
// const/projects.ts. Añade cada clave en es y en en: UIKey sale de es, así
// TypeScript avisa si falta la traducción inglesa.

import type { Lang } from "./config";

export const ui = {
    es: {
        // ---- Navegación / común ----
        "nav.back": "← VOLVER",
        "lang.switchTo": "Ver en inglés",

        // ---- Hero ----
        "hero.kicker": "DESARROLLADOR DE SOFTWARE · DATOS",
        "hero.subhead":
            "Desarrollador full-stack que convierte ideas en software listo para producción: aplicaciones, APIs y pipelines de datos que las empresas usan a diario.",
        "hero.cta": "VER PERFIL →",
        "hero.hint": "[ sobre mí · stack · proyectos ]",
        "hero.stackAria": "Stack principal",

        // ---- Telemetría (pie CRT, compartido) ----
        "telemetry.onAir": "EN EMISIÓN DESDE 2022",

        // ---- Bottom-nav (isla) ----
        "nav.ariaLabel": "Navegación principal",
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.career": "Trayectoria",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        // ---- Trayectoria ----
        "career.channel": "// CH 03 — TRAYECTORIA",
        "career.kicker": "PERFIL / TRAYECTORIA",
        "career.title": "TRAYECTORIA",
        "career.intro":
            "Dónde he trabajado, qué he estudiado y lo que he construido por el camino. La versión cronológica del perfil.",
        "career.experienceLabel": "// EXPERIENCIA",
        "career.educationLabel": "// FORMACIÓN",
        "career.certsLabel": "// CERTIFICACIONES & LOGROS",
        "career.present": "Actualidad",
        "career.empty":
            "Esta sección está en construcción. Pronto, la trayectoria completa.",

        // ---- About: topbar + lead ----
        "about.channel": "// CH 02 — SOBRE MÍ",
        "about.leadKicker": "PERFIL / DATADAVE",
        "about.title": "SOBRE MÍ",
        "about.intro":
            "Soy programador con cabeza de analista. Construyo el sistema completo — del backend y las APIs hasta los pipelines y los dashboards — y convierto el caos en decisiones claras. Código limpio, señal sin ruido.",

        // ---- About: bio ----
        "about.historyLabel": "// HISTORIA",
        "about.history1":
            "Empecé escribiendo código para resolver mis propios problemas y terminé construyendo software de punta a punta: aplicaciones, APIs, automatizaciones y la infraestructura de datos que las alimenta.",
        "about.history2":
            "Creo en lo analógico: entender el problema antes de escribir una sola línea, en código que se lee como prosa y en sistemas que dicen la verdad aunque incomode. Y si una tarea se repite, busco la forma de automatizarla.",
        "about.specLabel": "// FICHA",
        "about.specAria": "Ficha técnica",

        // ---- About: skills ----
        "about.skillsLabel": "// CAPACIDADES",

        // ---- About: workflow ----
        "about.workflowLabel": "// CÓMO TRABAJO",
        "about.workflowHeadPre": "Programo con IA como ",
        "about.workflowHeadEmph": "multiplicador",
        "about.workflowHeadPost": ", no como muleta.",
        "about.workflowStackLabel": "// STACK IA:",
        "about.workflowStackText":
            "Claude Code · asistentes de IA integrados en el flujo diario",

        // ---- About: proyectos ----
        "about.projectsLabel": "// PROYECTOS",
        "project.viewDetail": "Ver detalle →",
        "project.viewDetailAria": "Ver detalle del proyecto {name}",

        // ---- About: testimonios ----
        "about.testimonialsLabel": "// TESTIMONIOS",
        "about.testimonialsHeadline": "Lo que dicen de mi trabajo",
        "about.testimonialLinkedinAria": "Perfil de {name} en LinkedIn",

        // ---- About: contacto ----
        "about.contactLabel": "// CONTACTO",
        "about.contactHead1": "¿Construimos algo",
        "about.contactHead2": "que funcione?",
        "about.contactWrite": "Escríbeme",

        // ---- Detalle de proyecto ----
        "project.label": "// PROYECTO",
        "project.role": "ROL:",
        "project.year": "AÑO:",
        "project.overviewLabel": "// CONTEXTO",
        "project.metricsLabel": "// RESULTADOS",
        "project.highlightsLabel": "// LO QUE LO HACE ÚNICO",
        "project.stackLabel": "// STACK & DECISIONES",
        "project.challengesLabel": "// RETOS",
        "project.galleryLabel": "// CAPTURAS",

        // ---- Galería / carrusel ----
        "gallery.carousel": "Carrusel",
        "gallery.groupAria": "Capturas del proyecto",
        "gallery.slideAria": "Imagen {n} de {total}. Ampliar: {alt}",
        "gallery.prev": "Imagen anterior",
        "gallery.next": "Siguiente imagen",
        "gallery.zoom": "Ampliar +",
        "gallery.dotsAria": "Ir a una imagen",
        "gallery.dotAria": "Ver imagen {n}: {alt}",
        "gallery.lightboxAria": "Imagen ampliada",
        "gallery.close": "Cerrar imagen ampliada",

        // ---- CTA del detalle ----
        "cta.head1": "¿Te interesa cómo",
        "cta.head2": "lo construí?",
        "cta.talk": "Hablemos",
        "cta.backAbout": "← Volver a sobre mí",

        // ---- SEO ----
        "seo.defaultTitle": "DataDave · Desarrollador de software y datos",
        "seo.defaultDesc":
            "Portfolio de DataDave: desarrollador full-stack que construye aplicaciones, APIs y pipelines de datos listos para producción.",
        "seo.aboutTitle": "Sobre mí · DataDave",
        "seo.aboutDesc":
            "Perfil de DataDave: programador full-stack y de datos. Conoce mi historia, mi stack, cómo trabajo y mis proyectos.",
        "seo.jobTitle": "Desarrollador de software y datos",
        "seo.personDesc":
            "Desarrollador full-stack y de datos: aplicaciones, APIs, automatización y pipelines ETL.",
        "seo.breadcrumbHome": "Inicio",
        "seo.breadcrumbProjects": "Proyectos",
        "seo.careerTitle": "Trayectoria · DataDave",
        "seo.careerDesc":
            "Trayectoria de DataDave: experiencia, formación y logros. La versión cronológica del perfil full-stack y de datos.",
    },
    en: {
        // ---- Navigation / common ----
        "nav.back": "← BACK",
        "lang.switchTo": "View in Spanish",

        // ---- Hero ----
        "hero.kicker": "SOFTWARE & DATA DEVELOPER",
        "hero.subhead":
            "Full-stack developer who turns ideas into production-ready software: applications, APIs and data pipelines that companies rely on every day.",
        "hero.cta": "VIEW PROFILE →",
        "hero.hint": "[ about · stack · projects ]",
        "hero.stackAria": "Core stack",

        // ---- Telemetry (CRT footer, shared) ----
        "telemetry.onAir": "ON AIR SINCE 2022",

        // ---- Bottom-nav (island) ----
        "nav.ariaLabel": "Main navigation",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.career": "Career",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // ---- Career ----
        "career.channel": "// CH 03 — CAREER",
        "career.kicker": "PROFILE / CAREER",
        "career.title": "CAREER",
        "career.intro":
            "Where I've worked, what I've studied and what I've built along the way. The chronological version of the profile.",
        "career.experienceLabel": "// EXPERIENCE",
        "career.educationLabel": "// EDUCATION",
        "career.certsLabel": "// CERTIFICATIONS & ACHIEVEMENTS",
        "career.present": "Present",
        "career.empty":
            "This section is under construction. The full career, coming soon.",

        // ---- About: topbar + lead ----
        "about.channel": "// CH 02 — ABOUT ME",
        "about.leadKicker": "PROFILE / DATADAVE",
        "about.title": "ABOUT ME",
        "about.intro":
            "I'm a developer with an analyst's mindset. I build the whole system — from the backend and APIs to the pipelines and dashboards — and turn chaos into clear decisions. Clean code, signal over noise.",

        // ---- About: bio ----
        "about.historyLabel": "// BACKGROUND",
        "about.history1":
            "I started writing code to solve my own problems and ended up building software end to end: applications, APIs, automations and the data infrastructure that feeds them.",
        "about.history2":
            "I believe in the analog approach: understanding the problem before writing a single line, in code that reads like prose, and in systems that tell the truth even when it's inconvenient. And if a task repeats, I find a way to automate it.",
        "about.specLabel": "// SPEC SHEET",
        "about.specAria": "Spec sheet",

        // ---- About: skills ----
        "about.skillsLabel": "// CAPABILITIES",

        // ---- About: workflow ----
        "about.workflowLabel": "// HOW I WORK",
        "about.workflowHeadPre": "I code with AI as a ",
        "about.workflowHeadEmph": "force multiplier",
        "about.workflowHeadPost": ", not a crutch.",
        "about.workflowStackLabel": "// AI STACK:",
        "about.workflowStackText":
            "Claude Code · AI assistants woven into the daily workflow",

        // ---- About: projects ----
        "about.projectsLabel": "// PROJECTS",
        "project.viewDetail": "View details →",
        "project.viewDetailAria": "View details for project {name}",

        // ---- About: testimonials ----
        "about.testimonialsLabel": "// TESTIMONIALS",
        "about.testimonialsHeadline": "What people say about my work",
        "about.testimonialLinkedinAria": "{name}'s LinkedIn profile",

        // ---- About: contact ----
        "about.contactLabel": "// CONTACT",
        "about.contactHead1": "Shall we build",
        "about.contactHead2": "something that works?",
        "about.contactWrite": "Write me",

        // ---- Project detail ----
        "project.label": "// PROJECT",
        "project.role": "ROLE:",
        "project.year": "YEAR:",
        "project.overviewLabel": "// CONTEXT",
        "project.metricsLabel": "// RESULTS",
        "project.highlightsLabel": "// WHAT MAKES IT UNIQUE",
        "project.stackLabel": "// STACK & DECISIONS",
        "project.challengesLabel": "// CHALLENGES",
        "project.galleryLabel": "// SCREENSHOTS",

        // ---- Gallery / carousel ----
        "gallery.carousel": "Carousel",
        "gallery.groupAria": "Project screenshots",
        "gallery.slideAria": "Image {n} of {total}. Zoom: {alt}",
        "gallery.prev": "Previous image",
        "gallery.next": "Next image",
        "gallery.zoom": "Zoom +",
        "gallery.dotsAria": "Go to an image",
        "gallery.dotAria": "View image {n}: {alt}",
        "gallery.lightboxAria": "Zoomed image",
        "gallery.close": "Close zoomed image",

        // ---- Detail CTA ----
        "cta.head1": "Curious how",
        "cta.head2": "I built it?",
        "cta.talk": "Let's talk",
        "cta.backAbout": "← Back to about",

        // ---- SEO ----
        "seo.defaultTitle": "DataDave · Software & data developer",
        "seo.defaultDesc":
            "DataDave's portfolio: full-stack developer building production-ready applications, APIs and data pipelines.",
        "seo.aboutTitle": "About me · DataDave",
        "seo.aboutDesc":
            "DataDave's profile: full-stack and data developer. My background, my stack, how I work and my projects.",
        "seo.jobTitle": "Software & data developer",
        "seo.personDesc":
            "Full-stack and data developer: applications, APIs, automation and ETL pipelines.",
        "seo.breadcrumbHome": "Home",
        "seo.breadcrumbProjects": "Projects",
        "seo.careerTitle": "Career · DataDave",
        "seo.careerDesc":
            "DataDave's career: experience, education and achievements. The chronological version of the full-stack and data profile.",
    },
} satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)["es"];
