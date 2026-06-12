// El idioma sale del primer segmento de la URL (/es/…, /en/…), así los
// componentes lo resuelven con getLangFromUrl(Astro.url) sin pasarlo por props.

import { DEFAULT_LOCALE, isLang, type Lang } from "./config";
import { ui, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
    const segment = url.pathname.split("/")[1];
    return isLang(segment) ? segment : DEFAULT_LOCALE;
}

type TParams = Record<string, string | number>;

// t("gallery.slideAria", { n: 1, total: 7 }) reemplaza los {marcadores}.
export function useTranslations(lang: Lang) {
    return function t(key: UIKey, params?: TParams): string {
        let str = ui[lang][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
        if (params) {
            for (const [k, v] of Object.entries(params)) {
                str = str.replaceAll(`{${k}}`, String(v));
            }
        }
        return str;
    };
}

// localizePath("/about", "en") da "/en/about"
export function localizePath(path: string, lang: Lang): string {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

// Misma ruta en el otro idioma, conservando path y hash. Lo usa el selector ES/EN.
export function switchLocalePath(url: URL, lang: Lang): string {
    const segments = url.pathname.split("/");
    if (isLang(segments[1])) {
        segments[1] = lang;
    } else {
        segments.splice(1, 0, lang);
    }
    const path = segments.join("/") || `/${lang}`;
    return `${path}${url.hash ?? ""}`;
}
