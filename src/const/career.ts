import type { Lang } from "@/i18n/config";
import { DEFAULT_LOCALE } from "@/i18n/config";

export interface TimelineLink {
    href: string;
    label: string;
}

export interface TimelineEntry {
    title: string; // rol, título o nombre del logro
    org?: string; // empresa, institución o proyecto
    start: string; // "2022", "Abr 2022"…
    end?: string; // si falta, se muestra "Actualidad"
    location?: string;
    summary?: string;
    bullets?: string[];
    link?: TimelineLink;
}

export interface CareerContent {
    experience: TimelineEntry[];
    education: TimelineEntry[];
    achievements: TimelineEntry[];
}

const CAREER_CONTENT: Record<Lang, CareerContent> = {
    es: {
        experience: [
            {
                title: "Auxiliar de Sistemas",
                org: "PIAGA · Grupo Expert",
                start: "Abr 2022",
                location: "Guadalupe, Nuevo León, México",
                summary:
                    "En Pinturas Industriales y Automotrices García (PIAGA), parte del Grupo Expert, doy soporte a los sistemas internos y desarrollo automatizaciones y procesos de datos para el día a día de la operación.",
                bullets: [
                    "Automaticé el cambio de precios del ERP con un bot de WhatsApp que escribe en SQL Server con validación previa.",
                    "Construí un proceso ETL que cada 5 minutos unifica y limpia los datos de varias empresas del grupo para su análisis.",
                ],
            },
        ],
        education: [
            {
                title: "Ingeniero Administrador de Sistemas",
                org: "Universidad Autónoma de Nuevo León · FIME",
                start: "2023",
                location: "Monterrey, Nuevo León, México",
                summary:
                    "Formación en ingeniería en la Facultad de Ingeniería Mecánica y Eléctrica (FIME), entre sistemas, administración y desarrollo de software. En curso.",
            },
            {
                title: "Técnico en Informática",
                org: "CONALEP 290 Don Carlos Maldonado Elizondo",
                start: "2019",
                end: "2023",
                location: "Santiago, Nuevo León, México",
                summary:
                    "Formación técnica en informática: fundamentos de programación, redes y soporte de sistemas.",
            },
        ],
        achievements: [
            {
                title: "Más de 20 contribuciones mergeadas a La Velada V",
                org: "Proyecto open source de midudev",
                start: "2025",
                end: "2026",
                summary:
                    "Contribuidor recurrente con más de 20 PRs revisados y mergeados: rediseños de interfaz, animaciones, refresco de votos en vivo, accesibilidad, rendimiento y seguridad.",
                link: {
                    href: "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3ADataDave-Dev+is%3Amerged",
                    label: "Ver PRs mergeados ↗",
                },
            },
        ],
    },
    en: {
        experience: [
            {
                title: "Systems Assistant",
                org: "PIAGA · Expert Group",
                start: "Apr 2022",
                location: "Guadalupe, Nuevo León, Mexico",
                summary:
                    "At Pinturas Industriales y Automotrices García (PIAGA), part of Expert Group, I support the internal systems and build automations and data processes for day-to-day operations.",
                bullets: [
                    "Automated ERP price changes with a WhatsApp bot that writes to SQL Server with prior validation.",
                    "Built an ETL process that every 5 minutes unifies and cleans data from several group companies for analysis.",
                ],
            },
        ],
        education: [
            {
                title: "Systems Administration Engineering",
                org: "Universidad Autónoma de Nuevo León · FIME",
                start: "2023",
                location: "Monterrey, Nuevo León, Mexico",
                summary:
                    "Engineering studies at the School of Mechanical and Electrical Engineering (FIME), across systems, management and software development. In progress.",
            },
            {
                title: "Computing Technician",
                org: "CONALEP 290 Don Carlos Maldonado Elizondo",
                start: "2019",
                end: "2023",
                location: "Santiago, Nuevo León, Mexico",
                summary:
                    "Technical training in computing: programming fundamentals, networking and systems support.",
            },
        ],
        achievements: [
            {
                title: "20+ merged contributions to La Velada V",
                org: "Open-source project by midudev",
                start: "2025",
                end: "2026",
                summary:
                    "Recurring contributor with 20+ reviewed and merged PRs: UI redesigns, animations, live vote refresh, accessibility, performance and security.",
                link: {
                    href: "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3ADataDave-Dev+is%3Amerged",
                    label: "View merged PRs ↗",
                },
            },
        ],
    },
};

export function getCareer(lang: Lang): CareerContent {
    return CAREER_CONTENT[lang] ?? CAREER_CONTENT[DEFAULT_LOCALE];
}
