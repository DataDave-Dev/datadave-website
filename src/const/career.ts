// Trayectoria (ES/EN): experiencia, formación y logros. Mismo patrón que profile.ts
// y projects.ts — el texto se traduce, los componentes lo leen con getCareer(lang).
//
// CÓMO RELLENAR: añade entradas reales a experience/education/achievements en `es`
// y en `en` (en espejo). Una sección con array vacío NO se pinta. Si las tres están
// vacías, la página muestra el aviso "en construcción".
//   - start/end: texto libre ("2022", "Abr 2022", "Ene 2024"). Sin `end` → "Actualidad".
//   - bullets: logros o responsabilidades en frases cortas y medibles.
//   - link: opcional, para enlazar una prueba (repo, PR, certificado, etc.).

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
        experience: [],
        // TODO: añade tu formación (título, institución, periodo, estado).
        education: [],
        achievements: [
            {
                title: "Contribución mergeada a La Velada V",
                org: "Proyecto open source de midudev",
                start: "2025",
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
