// Proyectos del portfolio (ES/EN). El texto se traduce; el resto (slug, idx, tags,
// year, demo, repo, métricas, imágenes) va idéntico en ambos. Al añadir uno, ponlo
// en es y en en con el mismo slug. Los componentes lo leen con getProjects(lang).

import type { Lang } from "@/i18n/config";
import { DEFAULT_LOCALE } from "@/i18n/config";

export interface ProjectHighlight {
    title: string;
    desc: string;
}

export interface ProjectStackItem {
    name: string;
    why: string;
}

export interface ProjectMetric {
    value: string;
    label: string;
}

export interface ProjectImage {
    src: string; // archivo en /public/images/
    alt: string;
}

export interface Project {
    idx: string;
    name: string;
    tags: string[];
    desc: string;

    slug?: string; // si falta, se deriva del idx (de "#01" a "01")
    tagline?: string;
    year?: string;
    role?: string;
    demo?: string;
    repo?: string;

    // De aquí abajo solo se pinta lo que rellenes.
    overview?: string[];
    metrics?: ProjectMetric[];
    highlights?: ProjectHighlight[];
    stack?: ProjectStackItem[];
    challenges?: string[];
    gallery?: ProjectImage[];
}

const PROJECTS_ES: Project[] = [
    {
        slug: "bot-precios-erp",
        idx: "#01",
        name: "Bot Automatizado para Cambio de Precios en ERP",
        tags: ["JavaScript", "Node", "Python", "SQL Server"],
        desc: "Desarrollé un bot automatizado por WhatsApp que accede a la base de datos del ERP y cambia precios de forma controlada.",
        year: "2026",
        role: "Full-stack · Automatización",
        tagline:
            "Un bot de WhatsApp que actualiza precios directamente en la base de datos del ERP, sin que nadie tenga que entrar al sistema.",
        overview: [
            "Cambiar precios en el ERP era un trabajo manual: había que entrar al sistema, navegar hasta el producto y editarlo a mano, con el riesgo de error y el tiempo que eso consume.",
            "Construí un bot que vive en WhatsApp —la herramienta que el equipo ya usa a diario— y que recibe la orden de cambio, la valida y escribe el nuevo precio directamente en la base de datos del ERP.",
        ],
        highlights: [
            {
                title: "Interfaz por WhatsApp",
                desc: "El precio se cambia desde un chat, sin abrir el ERP ni capacitar a nadie en él. La barrera de entrada es prácticamente cero.",
            },
            {
                title: "Escritura directa en SQL Server",
                desc: "El bot se conecta a la base de datos del ERP y actualiza el precio en su origen, validando el dato antes de tocar nada.",
            },
            {
                title: "Node para el bot, Python para el proceso",
                desc: "Node gestiona la conversación de WhatsApp y orquesta el flujo; Python se encarga de la lógica de acceso y procesamiento de datos. Cada lenguaje en lo que mejor hace.",
            },
            {
                title: "Construido con IA",
                desc: "Me apoyé en Claude Code para desarrollar y validar el bot más rápido, manteniendo el control y entendiendo cada línea que entra a producción.",
            },
        ],
        stack: [
            {
                name: "Node.js",
                why: "La capa del bot: recibe los mensajes de WhatsApp, interpreta la orden y orquesta el cambio.",
            },
            {
                name: "Python",
                why: "El procesamiento de datos y la conexión con la base de datos del ERP.",
            },
            {
                name: "SQL Server",
                why: "La base de datos del ERP donde viven los precios; el destino final del cambio.",
            },
        ],
        challenges: [
            "Seguridad: un bot con acceso de escritura al ERP no puede permitir cambios erróneos ni masivos por accidente. Por eso cada cambio se valida antes de escribir en la base de datos.",
            "Integración: conectar WhatsApp con el backend y con la base de datos del ERP, y dejarlo corriendo de forma estable en producción.",
        ],
    },
    {
        slug: "etl-extraccion-limpieza",
        idx: "#02",
        name: "Proceso ETL para extracción y limpieza de datos",
        tags: ["Python", "ETL", "SQL Server"],
        desc: "Realicé un proceso ETL que cada 5 minutos extrae datos de una serie de bases de datos de un grupo de empresas, los limpia y los carga en una base especializada para su análisis posterior.",
        year: "2024",
        role: "Data Analyst",
        tagline:
            "Un pipeline que cada 5 minutos extrae datos de varias empresas, los limpia y los deja listos para análisis.",
        overview: [
            "Un grupo de empresas tenía sus datos repartidos en varias bases de datos distintas, sin un lugar unificado ni limpio donde analizarlos.",
            "Construí un proceso ETL que, cada 5 minutos, extrae los datos de esas fuentes, los limpia y normaliza, y los carga en una base de datos especializada lista para el análisis.",
        ],
        metrics: [
            { value: "5 min", label: "Frecuencia de actualización" },
            { value: "6", label: "Bases de datos de origen" },
            { value: "99.93%", label: "Calidad de datos" },
            { value: "41 s", label: "Tiempo medio por ejecución" },
        ],
        highlights: [
            {
                title: "Ejecución cada 5 minutos",
                desc: "El pipeline corre en intervalos cortos y automáticos, manteniendo los datos casi en tiempo real.",
            },
            {
                title: "Unifica múltiples orígenes",
                desc: "Junta datos de varias bases de datos de un grupo de empresas en un único destino consistente.",
            },
            {
                title: "Limpieza y normalización",
                desc: "Normaliza fechas, elimina registros duplicados y depura las razones sociales: retira caracteres no válidos y los sufijos legales heredados (p. ej. «S.A. de C.V.») que arrastraban los clientes más antiguos.",
            },
            {
                title: "Construido con IA",
                desc: "Me apoyé en Claude Code para escribir y validar las transformaciones más rápido, manteniendo el control del proceso.",
            },
        ],
        stack: [
            {
                name: "Python",
                why: "El motor del ETL: orquesta la extracción, la transformación y la carga de los datos.",
            },
            {
                name: "SQL Server",
                why: "Las bases de datos de origen de las empresas y/o el destino especializado.",
            },
            {
                name: "ETL",
                why: "El patrón del proceso: extraer → limpiar y normalizar → cargar.",
            },
        ],
        challenges: [
            "Coordinar la extracción desde varias bases cada 5 minutos sin duplicar datos ni perder cambios entre una corrida y la siguiente.",
            "Definir reglas de limpieza que funcionen para datos de empresas distintas, cada una con sus propios formatos e inconsistencias.",
        ],
        gallery: [
            {
                src: "/images/projects/ETL/login.webp",
                alt: "Pantalla de inicio de sesión del Panel ETL (BI · Expert Group): tarjeta centrada con el logo del panel, campos de usuario y contraseña, y botón verde «Entrar» para el acceso interno al sistema de Business Intelligence.",
            },
            {
                src: "/images/projects/ETL/home.webp",
                alt: "Inicio del Panel ETL con menú lateral (Inicio, Dashboard, Monitor, Operación, Configuración y Logs e historial) y tarjetas de acceso rápido. El resumen muestra 9 ejecuciones, 571,081 registros cargados y la programación activa cada 5 minutos.",
            },
            {
                src: "/images/projects/ETL/dashboard.webp",
                alt: "Dashboard ejecutivo del ETL con indicadores agregados: 571,081 registros cargados, 100% de tasa de éxito (9 de 9 ejecuciones), 99.93% de calidad de datos y 41 s de tiempo promedio por ejecución. Incluye un gráfico de dona del estado de las ejecuciones, una serie temporal de registros por ejecución y rankings de registros por base y por tabla (G_EXISTENCIAS, G_CLIENTES, G_LISTA_PRECIOS…).",
            },
            {
                src: "/images/projects/ETL/monitor.webp",
                alt: "Monitor en tiempo real del ETL mostrando la Ejecución #11 completada: 100% de progreso global, 133,048 registros insertados, 6 de 6 bases completadas y 90 tablas procesadas en 1 m 31 s. Debajo, tarjetas de progreso por base (PIAGA, Expert Steel, Expert Supply de MX…) al 100% y la tabla de progreso por tabla con columnas de leídos, limpiados, insertados y calidad.",
            },
            {
                src: "/images/projects/ETL/monitor-2.webp",
                alt: "Detalle del monitor del ETL: tabla de progreso por tabla con métricas por registro (leídos, limpiados, descartados, insertados, errores, inválidos y calidad al 100%), una consola de eventos con el log «Proceso finalizado: 6 ok, 0 con error» y un panel de reintentos sin incidencias registradas.",
            },
            {
                src: "/images/projects/ETL/operacion.webp",
                alt: "Pantalla de operación del ETL para lanzar una corrida: parámetros de ejecución (período, mes y año), resumen de la corrida con 6 bases y 15 tablas seleccionadas, botones Ejecutar / Detener / Reiniciar, la selección de bases de datos origen y tablas destino, y un panel de programación con las últimas ejecuciones completadas.",
            },
            {
                src: "/images/projects/ETL/configuracion.png",
                alt: "Configuración del ETL guardada en etl_config.json: panel de período, parámetros de rendimiento (chunk size 15000, batch size 5000, timeouts de conexión y comando, máximo de reintentos y bases en paralelo) y programación (proceso «ETL Ventas», frecuencia cada 5 minutos, hora de inicio 08:00) con sincronización al Programador de Tareas de Windows.",
            },
            {
                src: "/images/projects/ETL/logs.webp",
                alt: "Sección de logs e historial del ETL: una consola en vivo con la salida del proceso y un historial de ejecuciones anteriores con su inicio, duración (~1 m 30 s), período procesado, bases, tablas y resultado OK.",
            },
        ],
    },
    {
        slug: "onix-control-asistencia",
        idx: "#03",
        name: "Onix — Control de Asistencia",
        tags: ["Electron", "SQLite", "Tailwind", "Node", "bcrypt"],
        desc: "App de escritorio para control de asistencia de una organización: registro de entradas/salidas, empleados, reportes, permisos y bitácora de auditoría, con la base de datos local y sin servidor.",
        year: "2026",
        role: "Full-stack · App de escritorio",
        repo: "https://github.com/DataDave-Dev/EES",
        tagline:
            "Una app de escritorio para registrar asistencia, con la base de datos local en cada equipo, seguridad endurecida y auditoría de cada acción.",
        overview: [
            "Una organización necesitaba controlar la asistencia de su personal sin depender de un servidor ni de internet: que cada equipo funcione por su cuenta y los datos vivan ahí mismo.",
            "Construí Onix, una app de escritorio con Electron donde la base de datos es un archivo SQLite cifrado por instalación. Cubre el ciclo completo —login con permisos, registro de entradas/salidas, empleados, reportes y exportación a Excel— y deja rastro de cada acción crítica en una bitácora de auditoría.",
        ],
        highlights: [
            {
                title: "Local-first, sin servidor",
                desc: "La base de datos es un SQLite cifrado por instalación (better-sqlite3-multiple-ciphers). Cada equipo funciona offline, sin backend que mantener.",
            },
            {
                title: "Seguridad endurecida",
                desc: "contextIsolation, fuses de Electron, consultas con prepared statements (cero concatenación), contraseñas con bcrypt (cost 12) y reconfirmación de contraseña en operaciones sensibles.",
            },
            {
                title: "Auditoría y permisos",
                desc: "Login con usuarios y permisos; cada acción crítica queda registrada en una bitácora con retención automática a 12 meses.",
            },
            {
                title: "Distribución profesional",
                desc: "Instalador firmado para Windows (Squirrel) y auto-actualización desde GitHub Releases; reportes exportables a Excel.",
            },
        ],
        stack: [
            {
                name: "Electron",
                why: "El armazón de la app: proceso main (backend) + renderer (UI) con un bridge aislado por preload.",
            },
            {
                name: "SQLite (cifrado)",
                why: "La base de datos local por instalación, cifrada y sin servidor; acceso con prepared statements.",
            },
            {
                name: "Tailwind",
                why: "El sistema de estilos de la interfaz de cada vista.",
            },
            {
                name: "bcrypt",
                why: "Hashing de contraseñas (cost 12) para el login y las operaciones sensibles.",
            },
        ],
        challenges: [
            "Local-first de verdad: una base de datos cifrada por equipo, con auditoría y la zona horaria bien resuelta (la BD guarda en UTC y las consultas de «hoy/ayer» convierten a hora local).",
            "Empaquetado y entrega: firmar el instalador de Windows, recompilar los módulos nativos (better-sqlite3, bcrypt) y dejar la app auto-actualizándose desde GitHub Releases.",
        ],
    },
    {
        slug: "valora-finanzas",
        idx: "#04",
        name: "Valora — Finanzas Personales",
        tags: ["TypeScript", "React", "Supabase", "Tailwind", "Monorepo"],
        desc: "App web (y móvil en camino) de finanzas personales: registrar ingresos y gastos, categorizarlos, ver el estado del mes, controlar presupuestos y gestionar metas de ahorro. En desarrollo activo.",
        year: "2026",
        role: "Full-stack · En desarrollo",
        demo: "https://valora-official-web.vercel.app",
        repo: "https://github.com/DataDave-Dev/valora-official",
        tagline:
            "Una app para tomar el control de tu vida financiera: ingresos, gastos, presupuestos y metas de ahorro en un mismo lugar. Proyecto personal en desarrollo activo.",
        overview: [
            "Llevar las finanzas en una hoja de cálculo se vuelve tedioso y poco visual. Quería una app propia que registre el día a día y lo convierta en una imagen clara del mes.",
            "Valora es una app full-stack (React + Supabase) en un monorepo, con la web ya funcionando y la versión móvil (Expo) planeada como siguiente fase. La construyo por etapas, dándole avance cuando puedo.",
        ],
        highlights: [
            {
                title: "Estado financiero del mes",
                desc: "Registra ingresos y gastos, los categoriza y los visualiza con gráficas (Recharts) para ver de un vistazo cómo va el mes.",
            },
            {
                title: "Presupuestos y metas",
                desc: "Control de presupuesto por categoría y gestión de metas de ahorro: no solo registrar, sino dirigir el gasto.",
            },
            {
                title: "Full-stack con Supabase",
                desc: "Auth, base de datos PostgreSQL y migraciones versionadas en Supabase; tipos generados desde el esquema para mantener front y back en sintonía.",
            },
            {
                title: "Monorepo web + móvil",
                desc: "pnpm workspaces con un paquete compartido (tipos, schemas, cliente Supabase) para reusar lógica entre la web (Vite) y la futura app móvil (Expo).",
            },
        ],
        stack: [
            {
                name: "React + TypeScript",
                why: "La web (Vite), con Zustand para el estado y React Router para la navegación.",
            },
            {
                name: "Supabase (PostgreSQL)",
                why: "Auth, base de datos y migraciones; el backend gestionado del proyecto.",
            },
            {
                name: "Monorepo (pnpm)",
                why: "Workspaces con un paquete @valora/shared para compartir tipos y lógica entre web y móvil.",
            },
            {
                name: "Recharts",
                why: "Las gráficas del estado financiero y los presupuestos.",
            },
        ],
        challenges: [
            "Diseñar un esquema y unos tipos compartidos que sirvan igual a la web y a la app móvil sin duplicar lógica — de ahí el monorepo y el paquete compartido.",
            "Es un proyecto en desarrollo: priorizar qué entra en cada fase (primero la web y los datos; el móvil con Expo después) sin romper lo que ya funciona.",
        ],
    },
    {
        slug: "envio-masivo-correos",
        idx: "#05",
        name: "Sistema de Envío Masivo de Correos",
        tags: ["Python", "SMTP", "Jinja2", "pandas", "Automatización"],
        desc: "Sistema en Python para enviar correos masivos personalizados desde el dominio de la empresa, con control de tasa de envío para no caer en spam. Código público.",
        year: "2026",
        role: "Backend · Automatización",
        repo: "https://github.com/DataDave-Dev/Send-Mails",
        tagline:
            "Envía campañas de correo personalizadas desde el dominio de la empresa, a un ritmo controlado para mantener la entregabilidad y evitar el spam.",
        overview: [
            "Las campañas de correo masivo desde Gmail o herramientas genéricas terminan en spam y no se ven profesionales: salen desde un dominio ajeno y sin control del ritmo de envío.",
            "Construí un sistema en Python que lee los destinatarios desde Excel, personaliza cada correo con plantillas HTML y los envía por SMTP desde el dominio propio de la empresa, controlando la tasa de envío y registrando cada correo enviado.",
        ],
        highlights: [
            {
                title: "Envío desde el dominio de la empresa",
                desc: "Sale por SMTP desde el correo corporativo, no desde una cuenta genérica, con DKIM/SPF en mente para que el mensaje llegue a la bandeja y no al spam.",
            },
            {
                title: "Rate limiter anti-spam",
                desc: "Controla cuántos correos salen por intervalo y por hora (configurable), para respetar los límites del proveedor y no disparar los filtros de spam.",
            },
            {
                title: "Personalización con plantillas",
                desc: "Cada correo se arma con plantillas HTML responsivas y variables por destinatario (nombre, empresa…) usando Jinja2, leyendo los datos desde Excel.",
            },
            {
                title: "Arquitectura limpia + dry-run",
                desc: "Separa dominio y servicios (SMTP, rate limiter, render, carga de Excel, registro) e incluye un modo dry-run para probar la campaña completa sin enviar un solo correo real.",
            },
        ],
        stack: [
            {
                name: "Python",
                why: "El núcleo del sistema: orquesta la carga, el render, el envío y el registro.",
            },
            {
                name: "SMTP",
                why: "El canal de envío desde el correo corporativo; configurable para cualquier proveedor (Gmail, Outlook, servidor propio).",
            },
            {
                name: "Jinja2",
                why: "Motor de plantillas para personalizar el HTML de cada correo por destinatario.",
            },
            {
                name: "pandas + openpyxl",
                why: "Lee los destinatarios desde Excel y registra ahí los correos enviados para auditoría.",
            },
        ],
        challenges: [
            "Entregabilidad: lograr que un correo masivo llegue a la bandeja de entrada y no a spam — de ahí el envío desde el dominio propio, el control de ritmo y la atención a DKIM/SPF/DMARC.",
            "Diseñar el rate limiter para respetar a la vez los límites por intervalo y por hora del proveedor SMTP sin frenar la campaña más de lo necesario.",
        ],
    },
    {
        slug: "la-velada-open-source",
        idx: "#06",
        name: "La Velada V — Contribución Open Source",
        tags: ["TypeScript", "Astro", "Open Source", "UI / Animación"],
        desc: "Contribuyo al proyecto open source de la web oficial de La Velada V (de midudev): propongo mejoras de interfaz y animación, y una de ellas fue revisada y mergeada al proyecto.",
        year: "2026",
        role: "Open source · Contribuidor",
        demo: "https://infolavelada.com",
        repo: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
        tagline:
            "Contribución a la web oficial de La Velada V, un proyecto open source masivo de la comunidad de midudev. Las aportaciones pasan por revisión; las que aportan, se integran.",
        overview: [
            "La web oficial de La Velada V es un proyecto open source de midudev al que contribuye mucha gente: cada quien propone mejoras por pull request y, si aportan y pasan la revisión, se integran.",
            "Participo cuando tengo oportunidad, sobre todo en interfaz y micro-interacciones. Una de mis aportaciones —partículas de hover y una animación de selección de luchador al estilo Mario Kart— fue revisada y mergeada al proyecto.",
        ],
        highlights: [
            {
                title: "Aportación mergeada",
                desc: "Mi PR de partículas de hover y animación de selección estilo Mario Kart pasó la revisión del proyecto y quedó integrada en la web oficial.",
            },
            {
                title: "Trabajo sobre código ajeno",
                desc: "Contribuir a un proyecto grande implica leer y respetar su arquitectura y convenciones, no solo escribir código nuevo.",
            },
            {
                title: "Foco en interacción y rendimiento",
                desc: "Mis aportaciones se centran en micro-interacciones y animaciones que mejoran la experiencia sin penalizar el rendimiento.",
            },
        ],
        stack: [
            {
                name: "TypeScript",
                why: "El lenguaje del proyecto; las aportaciones siguen su tipado y estructura.",
            },
            {
                name: "Astro",
                why: "El framework de la web oficial sobre el que se hacen las contribuciones.",
            },
            {
                name: "Git / Pull Requests",
                why: "Flujo de fork → rama → pull request → revisión → merge sobre el que se coordina la comunidad.",
            },
        ],
        challenges: [
            "Aportar a un proyecto open source masivo: entender una base de código ajena, seguir sus convenciones y lograr que una propuesta pase la revisión hasta el merge.",
        ],
    },
];

const PROJECTS_EN: Project[] = [
    {
        slug: "bot-precios-erp",
        idx: "#01",
        name: "Automated Bot for ERP Price Changes",
        tags: ["JavaScript", "Node", "Python", "SQL Server"],
        desc: "Built an automated WhatsApp bot that accesses the ERP database and changes prices in a controlled way.",
        year: "2026",
        role: "Full-stack · Automation",
        tagline:
            "A WhatsApp bot that updates prices directly in the ERP database, with no one having to log into the system.",
        overview: [
            "Changing prices in the ERP was manual work: log into the system, navigate to the product and edit it by hand — error-prone and time-consuming.",
            "I built a bot that lives in WhatsApp —the tool the team already uses every day— which receives the change request, validates it and writes the new price directly into the ERP database.",
        ],
        highlights: [
            {
                title: "WhatsApp interface",
                desc: "Prices are changed from a chat, without opening the ERP or training anyone on it. The barrier to entry is practically zero.",
            },
            {
                title: "Direct writes to SQL Server",
                desc: "The bot connects to the ERP database and updates the price at its source, validating the data before touching anything.",
            },
            {
                title: "Node for the bot, Python for the process",
                desc: "Node handles the WhatsApp conversation and orchestrates the flow; Python takes care of the data access and processing logic. Each language doing what it does best.",
            },
            {
                title: "Built with AI",
                desc: "I leaned on Claude Code to develop and validate the bot faster, staying in control and understanding every line that reaches production.",
            },
        ],
        stack: [
            {
                name: "Node.js",
                why: "The bot layer: receives WhatsApp messages, interprets the request and orchestrates the change.",
            },
            {
                name: "Python",
                why: "Data processing and the connection to the ERP database.",
            },
            {
                name: "SQL Server",
                why: "The ERP database where the prices live; the final destination of the change.",
            },
        ],
        challenges: [
            "Security: a bot with write access to the ERP can't allow wrong or accidental bulk changes. That's why every change is validated before writing to the database.",
            "Integration: connecting WhatsApp with the backend and the ERP database, and keeping it running stably in production.",
        ],
    },
    {
        slug: "etl-extraccion-limpieza",
        idx: "#02",
        name: "ETL Process for Data Extraction and Cleaning",
        tags: ["Python", "ETL", "SQL Server"],
        desc: "Built an ETL process that every 5 minutes extracts data from a set of databases across a group of companies, cleans it and loads it into a specialized database for later analysis.",
        year: "2024",
        role: "Data Analyst",
        tagline:
            "A pipeline that every 5 minutes extracts data from several companies, cleans it and leaves it ready for analysis.",
        overview: [
            "A group of companies had their data spread across several different databases, with no unified or clean place to analyze it.",
            "I built an ETL process that, every 5 minutes, extracts the data from those sources, cleans and normalizes it, and loads it into a specialized database ready for analysis.",
        ],
        metrics: [
            { value: "5 min", label: "Refresh frequency" },
            { value: "6", label: "Source databases" },
            { value: "99.93%", label: "Data quality" },
            { value: "41 s", label: "Avg. time per run" },
        ],
        highlights: [
            {
                title: "Runs every 5 minutes",
                desc: "The pipeline runs in short, automatic intervals, keeping the data almost real-time.",
            },
            {
                title: "Unifies multiple sources",
                desc: "Brings together data from several databases across a group of companies into a single, consistent destination.",
            },
            {
                title: "Cleaning and normalization",
                desc: "Normalizes dates, removes duplicate records and cleans up company names: stripping invalid characters and the inherited legal suffixes (e.g. «S.A. de C.V.») that the oldest clients carried.",
            },
            {
                title: "Built with AI",
                desc: "I leaned on Claude Code to write and validate the transformations faster, staying in control of the process.",
            },
        ],
        stack: [
            {
                name: "Python",
                why: "The ETL engine: orchestrates the extraction, transformation and loading of the data.",
            },
            {
                name: "SQL Server",
                why: "The companies' source databases and/or the specialized destination.",
            },
            {
                name: "ETL",
                why: "The process pattern: extract → clean and normalize → load.",
            },
        ],
        challenges: [
            "Coordinating extraction from several databases every 5 minutes without duplicating data or losing changes between one run and the next.",
            "Defining cleaning rules that work for data from different companies, each with its own formats and inconsistencies.",
        ],
        gallery: [
            {
                src: "/images/projects/ETL/login.webp",
                alt: "ETL Panel login screen (BI · Expert Group): a centered card with the panel logo, username and password fields, and a green «Enter» button for internal access to the Business Intelligence system.",
            },
            {
                src: "/images/projects/ETL/home.webp",
                alt: "ETL Panel home with a sidebar menu (Home, Dashboard, Monitor, Operation, Settings and Logs & history) and quick-access cards. The summary shows 9 runs, 571,081 records loaded and the schedule active every 5 minutes.",
            },
            {
                src: "/images/projects/ETL/dashboard.webp",
                alt: "ETL executive dashboard with aggregate indicators: 571,081 records loaded, 100% success rate (9 of 9 runs), 99.93% data quality and 41 s average time per run. It includes a donut chart of run status, a time series of records per run and rankings of records by database and by table (G_EXISTENCIAS, G_CLIENTES, G_LISTA_PRECIOS…).",
            },
            {
                src: "/images/projects/ETL/monitor.webp",
                alt: "ETL real-time monitor showing Run #11 completed: 100% overall progress, 133,048 records inserted, 6 of 6 databases completed and 90 tables processed in 1 m 31 s. Below, per-database progress cards (PIAGA, Expert Steel, Expert Supply de MX…) at 100% and the per-table progress table with read, cleaned, inserted and quality columns.",
            },
            {
                src: "/images/projects/ETL/monitor-2.webp",
                alt: "ETL monitor detail: per-table progress table with per-record metrics (read, cleaned, discarded, inserted, errors, invalid and 100% quality), an event console with the log «Process finished: 6 ok, 0 with error» and a retries panel with no recorded incidents.",
            },
            {
                src: "/images/projects/ETL/operacion.webp",
                alt: "ETL operation screen to launch a run: execution parameters (period, month and year), run summary with 6 databases and 15 tables selected, Run / Stop / Restart buttons, the selection of source databases and target tables, and a scheduling panel with the latest completed runs.",
            },
            {
                src: "/images/projects/ETL/configuracion.png",
                alt: "ETL configuration saved in etl_config.json: period panel, performance parameters (chunk size 15000, batch size 5000, connection and command timeouts, max retries and parallel databases) and scheduling (process «ETL Ventas», every 5 minutes, start time 08:00) synced to the Windows Task Scheduler.",
            },
            {
                src: "/images/projects/ETL/logs.webp",
                alt: "ETL logs & history section: a live console with the process output and a history of previous runs with their start, duration (~1 m 30 s), processed period, databases, tables and OK result.",
            },
        ],
    },
    {
        slug: "onix-control-asistencia",
        idx: "#03",
        name: "Onix — Attendance Control",
        tags: ["Electron", "SQLite", "Tailwind", "Node", "bcrypt"],
        desc: "Desktop app for an organization's attendance control: clock-in/out logging, employees, reports, permissions and an audit log, with a local database and no server.",
        year: "2026",
        role: "Full-stack · Desktop app",
        repo: "https://github.com/DataDave-Dev/EES",
        tagline:
            "A desktop app to log attendance, with the database living locally on each machine, hardened security and an audit trail for every action.",
        overview: [
            "An organization needed to track staff attendance without relying on a server or the internet: each machine should work on its own and the data should live right there.",
            "I built Onix, an Electron desktop app where the database is an encrypted SQLite file per install. It covers the full cycle —login with permissions, clock-in/out logging, employees, reports and Excel export— and records every critical action in an audit log.",
        ],
        highlights: [
            {
                title: "Local-first, no server",
                desc: "The database is an encrypted SQLite file per install (better-sqlite3-multiple-ciphers). Each machine runs offline, with no backend to maintain.",
            },
            {
                title: "Hardened security",
                desc: "contextIsolation, Electron fuses, prepared-statement queries (zero concatenation), bcrypt password hashing (cost 12) and password re-confirmation for sensitive operations.",
            },
            {
                title: "Audit log and permissions",
                desc: "Login with users and permissions; every critical action is recorded in an audit log with automatic 12-month retention.",
            },
            {
                title: "Professional distribution",
                desc: "Signed Windows installer (Squirrel) and auto-update from GitHub Releases; reports exportable to Excel.",
            },
        ],
        stack: [
            {
                name: "Electron",
                why: "The app's shell: main process (backend) + renderer (UI) with an isolated preload bridge.",
            },
            {
                name: "SQLite (encrypted)",
                why: "The local database per install, encrypted and serverless; accessed with prepared statements.",
            },
            {
                name: "Tailwind",
                why: "The styling system for each view's interface.",
            },
            {
                name: "bcrypt",
                why: "Password hashing (cost 12) for login and sensitive operations.",
            },
        ],
        challenges: [
            "True local-first: an encrypted database per machine, with auditing and time zones handled correctly (the DB stores in UTC and 'today/yesterday' queries convert to local time).",
            "Packaging and delivery: signing the Windows installer, rebuilding native modules (better-sqlite3, bcrypt) and keeping the app auto-updating from GitHub Releases.",
        ],
    },
    {
        slug: "valora-finanzas",
        idx: "#04",
        name: "Valora — Personal Finance",
        tags: ["TypeScript", "React", "Supabase", "Tailwind", "Monorepo"],
        desc: "Web app (mobile on the way) for personal finance: log income and expenses, categorize them, see the month's state, control budgets and manage savings goals. In active development.",
        year: "2026",
        role: "Full-stack · In development",
        demo: "https://valora-official-web.vercel.app",
        repo: "https://github.com/DataDave-Dev/valora-official",
        tagline:
            "An app to take control of your financial life: income, expenses, budgets and savings goals in one place. Personal project in active development.",
        overview: [
            "Tracking finances in a spreadsheet gets tedious and hard to read. I wanted my own app that records the day to day and turns it into a clear picture of the month.",
            "Valora is a full-stack app (React + Supabase) in a monorepo, with the web already working and the mobile version (Expo) planned as the next phase. I build it in stages, making progress when I can.",
        ],
        highlights: [
            {
                title: "Monthly financial state",
                desc: "Logs income and expenses, categorizes them and visualizes them with charts (Recharts) to see at a glance how the month is going.",
            },
            {
                title: "Budgets and goals",
                desc: "Per-category budget control and savings-goal management: not just recording, but steering spending.",
            },
            {
                title: "Full-stack with Supabase",
                desc: "Auth, PostgreSQL database and versioned migrations in Supabase; types generated from the schema to keep front and back in sync.",
            },
            {
                title: "Web + mobile monorepo",
                desc: "pnpm workspaces with a shared package (types, schemas, Supabase client) to reuse logic between the web (Vite) and the future mobile app (Expo).",
            },
        ],
        stack: [
            {
                name: "React + TypeScript",
                why: "The web (Vite), with Zustand for state and React Router for navigation.",
            },
            {
                name: "Supabase (PostgreSQL)",
                why: "Auth, database and migrations; the project's managed backend.",
            },
            {
                name: "Monorepo (pnpm)",
                why: "Workspaces with a @valora/shared package to share types and logic between web and mobile.",
            },
            {
                name: "Recharts",
                why: "The charts for the financial state and budgets.",
            },
        ],
        challenges: [
            "Designing a schema and shared types that serve the web and the mobile app equally without duplicating logic — hence the monorepo and the shared package.",
            "It's a work in progress: prioritizing what goes into each phase (web and data first; mobile with Expo later) without breaking what already works.",
        ],
    },
    {
        slug: "envio-masivo-correos",
        idx: "#05",
        name: "Mass Email Sending System",
        tags: ["Python", "SMTP", "Jinja2", "pandas", "Automation"],
        desc: "A Python system for sending personalized mass emails from the company's own domain, with sending-rate control to stay out of spam. Public code.",
        year: "2026",
        role: "Backend · Automation",
        repo: "https://github.com/DataDave-Dev/Send-Mails",
        tagline:
            "Sends personalized email campaigns from the company's own domain, at a controlled pace to keep deliverability and avoid spam.",
        overview: [
            "Mass email campaigns sent from Gmail or generic tools end up in spam and don't look professional: they go out from someone else's domain with no control over the sending pace.",
            "I built a Python system that reads recipients from Excel, personalizes each email with HTML templates and sends them over SMTP from the company's own domain, controlling the sending rate and logging every email sent.",
        ],
        highlights: [
            {
                title: "Sends from the company's domain",
                desc: "Goes out over SMTP from the corporate mailbox, not a generic account, with DKIM/SPF in mind so the message lands in the inbox and not in spam.",
            },
            {
                title: "Anti-spam rate limiter",
                desc: "Controls how many emails go out per interval and per hour (configurable), to respect the provider's limits and avoid tripping spam filters.",
            },
            {
                title: "Template personalization",
                desc: "Each email is built from responsive HTML templates with per-recipient variables (name, company…) using Jinja2, reading the data from Excel.",
            },
            {
                title: "Clean architecture + dry-run",
                desc: "Separates domain and services (SMTP, rate limiter, rendering, Excel loading, logging) and includes a dry-run mode to test the whole campaign without sending a single real email.",
            },
        ],
        stack: [
            {
                name: "Python",
                why: "The core of the system: orchestrates loading, rendering, sending and logging.",
            },
            {
                name: "SMTP",
                why: "The sending channel from the corporate mailbox; configurable for any provider (Gmail, Outlook, custom server).",
            },
            {
                name: "Jinja2",
                why: "Template engine to personalize each email's HTML per recipient.",
            },
            {
                name: "pandas + openpyxl",
                why: "Reads recipients from Excel and logs sent emails back there for auditing.",
            },
        ],
        challenges: [
            "Deliverability: getting a mass email to land in the inbox and not in spam — hence sending from the company's own domain, pacing the sends and paying attention to DKIM/SPF/DMARC.",
            "Designing the rate limiter to respect the SMTP provider's per-interval and per-hour limits at once without slowing the campaign more than necessary.",
        ],
    },
    {
        slug: "la-velada-open-source",
        idx: "#06",
        name: "La Velada V — Open Source Contribution",
        tags: ["TypeScript", "Astro", "Open Source", "UI / Animation"],
        desc: "I contribute to the open-source project behind the official La Velada V website (by midudev): I propose UI and animation improvements, and one of them was reviewed and merged into the project.",
        year: "2026",
        role: "Open source · Contributor",
        demo: "https://infolavelada.com",
        repo: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
        tagline:
            "A contribution to the official La Velada V website, a massive open-source project from midudev's community. Contributions go through review; the ones that add value get merged.",
        overview: [
            "The official La Velada V website is an open-source project by midudev with many contributors: everyone proposes improvements via pull request and, if they add value and pass review, they get merged.",
            "I take part when I get the chance, mostly on UI and micro-interactions. One of my contributions —hover particles and a Mario Kart-style fighter-selection animation— was reviewed and merged into the project.",
        ],
        highlights: [
            {
                title: "Merged contribution",
                desc: "My PR for hover particles and a Mario Kart-style selection animation passed the project's review and was merged into the official website.",
            },
            {
                title: "Working on someone else's code",
                desc: "Contributing to a large project means reading and respecting its architecture and conventions, not just writing new code.",
            },
            {
                title: "Focus on interaction and performance",
                desc: "My contributions center on micro-interactions and animations that improve the experience without hurting performance.",
            },
        ],
        stack: [
            {
                name: "TypeScript",
                why: "The project's language; contributions follow its typing and structure.",
            },
            {
                name: "Astro",
                why: "The framework of the official website on which contributions are made.",
            },
            {
                name: "Git / Pull Requests",
                why: "The fork → branch → pull request → review → merge flow the community coordinates around.",
            },
        ],
        challenges: [
            "Contributing to a massive open-source project: understanding an unfamiliar codebase, following its conventions and getting a proposal through review all the way to merge.",
        ],
    },
];

const PROJECTS_BY_LANG: Record<Lang, Project[]> = {
    es: PROJECTS_ES,
    en: PROJECTS_EN,
};

export function getProjects(lang: Lang): Project[] {
    return PROJECTS_BY_LANG[lang] ?? PROJECTS_BY_LANG[DEFAULT_LOCALE];
}
