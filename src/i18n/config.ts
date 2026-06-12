// Si cambias los idiomas, actualiza también i18n.locales en astro.config.mjs.
export const LOCALES = ["es", "en"] as const;
export type Lang = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Lang = "es";

export const LOCALE_LABELS: Record<Lang, string> = {
    es: "ES",
    en: "EN",
};

export const LOCALE_NAMES: Record<Lang, string> = {
    es: "Español",
    en: "English",
};

// Ojo: og:locale lleva guion bajo; hreflang e inLanguage llevan guion.
export const OG_LOCALE: Record<Lang, string> = {
    es: "es_MX",
    en: "en_US",
};

export const HREFLANG: Record<Lang, string> = {
    es: "es-MX",
    en: "en-US",
};

export function isLang(value: string | undefined | null): value is Lang {
    return value === "es" || value === "en";
}
