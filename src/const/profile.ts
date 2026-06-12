// Datos de "Sobre mí". Lo traducible vive en PROFILE_CONTENT[lang]; el nombre y
// los enlaces son compartidos. Los componentes lo leen con getProfile(lang).

import type { Lang } from "@/i18n/config";
import { DEFAULT_LOCALE } from "@/i18n/config";

export interface Spec {
    k: string; // clave
    v: string; // valor
}

export interface WorkflowPillar {
    k: string; // etiqueta corta, ej. "VELOCIDAD"
    t: string; // título
    d: string; // descripción
}

export interface Contact {
    email: string;
    github: string;
    linkedin: string;
}

export interface ProfileContent {
    specs: Spec[];
    skills: string[];
    aiWorkflow: WorkflowPillar[];
}

export const FULL_NAME = "Alonso David De León Rodarte";

export const CONTACT: Contact = {
    email: "rodartealonso29@gmail.com",
    github: "https://github.com/DataDave-Dev",
    linkedin:
        "https://www.linkedin.com/in/alonso-david-de-le%C3%B3n-rodarte-b33a56381/",
};

const PROFILE_CONTENT: Record<Lang, ProfileContent> = {
    es: {
        specs: [
            { k: "ROL", v: "Desarrollador full-stack · Data Analyst" },
            {
                k: "STACK",
                v: "Python · SQL · Node · Next.js · React · Astro · Linux",
            },
            { k: "ENFOQUE", v: "Del backend al insight" },
            { k: "BASE", v: "Nuevo León, México" },
            { k: "DESDE", v: "2022" },
        ],
        skills: [
            "Aplicaciones web",
            "Landing Pages",
            "APIs & backend",
            "Pipelines ETL/ELT",
            "Automatización",
            "Modelado de datos",
            "Dashboards & visualización",
        ],
        aiWorkflow: [
            {
                k: "VELOCIDAD",
                t: "Entrego más, antes",
                d: "Prototipo, refactorizo y automatizo lo repetitivo con IA. Cierro antes la parte mecánica y dedico el tiempo ganado a las decisiones que importan — sin sacrificar control.",
            },
            {
                k: "CALIDAD",
                t: "Menos errores en producción",
                d: "Apoyo cada cambio con revisión de código y tests asistidos por IA. Más cobertura, menos bugs, código más legible.",
            },
            {
                k: "CRITERIO",
                t: "La IA acelera, yo decido",
                d: "Dirijo, reviso y entiendo cada línea antes de hacer merge. La herramienta amplifica el criterio; nunca lo reemplaza.",
            },
        ],
    },
    en: {
        specs: [
            { k: "ROLE", v: "Full-stack developer · Data Analyst" },
            {
                k: "STACK",
                v: "Python · SQL · Node · Next.js · React · Astro · Linux",
            },
            { k: "FOCUS", v: "From backend to insight" },
            { k: "BASED", v: "Nuevo León, Mexico" },
            { k: "SINCE", v: "2022" },
        ],
        skills: [
            "Web applications",
            "Landing pages",
            "APIs & backend",
            "ETL/ELT pipelines",
            "Automation",
            "Data modeling",
            "Dashboards & visualization",
        ],
        aiWorkflow: [
            {
                k: "SPEED",
                t: "I ship more, sooner",
                d: "I prototype, refactor and automate the repetitive parts with AI. I close the mechanical work sooner and spend the time I save on the decisions that matter — without giving up control.",
            },
            {
                k: "QUALITY",
                t: "Fewer bugs in production",
                d: "I back every change with AI-assisted code review and tests. More coverage, fewer bugs, more readable code.",
            },
            {
                k: "JUDGMENT",
                t: "AI accelerates, I decide",
                d: "I steer, review and understand every line before merging. The tool amplifies judgment; it never replaces it.",
            },
        ],
    },
};

export function getProfile(lang: Lang): ProfileContent {
    return PROFILE_CONTENT[lang] ?? PROFILE_CONTENT[DEFAULT_LOCALE];
}
