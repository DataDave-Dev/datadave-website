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
];

const PROJECTS_BY_LANG: Record<Lang, Project[]> = {
    es: PROJECTS_ES,
    en: PROJECTS_EN,
};

export function getProjects(lang: Lang): Project[] {
    return PROJECTS_BY_LANG[lang] ?? PROJECTS_BY_LANG[DEFAULT_LOCALE];
}
