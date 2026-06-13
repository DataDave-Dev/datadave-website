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
        // TODO: añade tus puestos reales (rol, empresa, periodo, logros medibles).
        experience: [
            {
                title: "Auxiliar de Sistemas",
                org: "PINTURAS INDUSTRIALES Y AUTOMOTRICES GARCIA",
                start: "2023",
                location: "Guadalupe, Nuevo León, México",
                summary:
                    "Empiezo a trabajar desde temprana edad para la empresa PIAGA la cual forma parte del grupo de empresas conocida como EXPERT GROUP.",
                // link: {
                // href: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
                //     label: "Ver PR #1130 ↗",
                // },
            },
        ],
        // TODO: añade tu formación (título, institución, periodo, estado).
        education: [
            {
                title: "Técnico en Informatica",
                org: "Conalep 290 Don Carlos Maldonado Elizndo",
                start: "2017",
                end: "2023",
                location: "Santiago, Nuevo León, México",
                summary:
                    "",
                // link: {
                // href: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
                //     label: "Ver PR #1130 ↗",
                // },
            },
            {
                title: "Ingeniero Administrador de Sistemas",
                org: "Universidad Autónoma de Nuevo León",
                start: "2023",
                location: "Monterrey, Nuevo León, México",
                summary:
                    "Comienza mi formación como ingeniero en la Universad Autónoma de Nuevo León en la factuldad de Ingeniería Mecánica y Eléctrica.",
                // link: {
                // href: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
                //     label: "Ver PR #1130 ↗",
                // },
            },
        ],
        achievements: [
            {
                title: "Contribución mergeada a La Velada V",
                org: "Proyecto open source de midudev",
                start: "2025",
                end: "2025",
                summary:
                    "Una propuesta de interfaz y animación (partículas de hover y selección de luchador al estilo Mario Kart) pasó la revisión del proyecto y fue mergeada.",
                link: {
                    href: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
                    label: "Ver PR #1130 ↗",
                },
            },
        ],
    },
    en: {
        experience: [],
        education: [],
        achievements: [
            {
                title: "Merged contribution to La Velada V",
                org: "Open-source project by midudev",
                start: "2025",
                end: "2025",
                summary:
                    "A UI and animation proposal (hover particles and a Mario Kart-style fighter selection) passed the project's review and was merged.",
                link: {
                    href: "https://github.com/midudev/la-velada-web-oficial/pull/1130",
                    label: "View PR #1130 ↗",
                },
            },
        ],
    },
};

export function getCareer(lang: Lang): CareerContent {
    return CAREER_CONTENT[lang] ?? CAREER_CONTENT[DEFAULT_LOCALE];
}
