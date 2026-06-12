// Testimonios (ES/EN). Reemplaza los placeholders por los reales; si vacías el
// array, la sección no se pinta. Los componentes usan getTestimonials(lang).

import type { Lang } from "@/i18n/config";
import { DEFAULT_LOCALE } from "@/i18n/config";

export interface Testimonial {
    quote: string;
    name: string;
    role: string; // cargo
    company?: string;
    avatar?: string; // foto cuadrada en /public/images/
    linkedin?: string;
}

// Sección oculta hasta tener testimonios reales con nombre y empresa verificables.
// Para reactivarla, rellena estos arrays (ES y EN en espejo) con citas reales.
const TESTIMONIALS_ES: Testimonial[] = [];

const TESTIMONIALS_EN: Testimonial[] = [];

// Borrador previo (placeholders). Reemplazar [Nombre del colega] por personas reales
// antes de publicar — un testimonio sin autor verificable resta credibilidad.
// const TESTIMONIALS_ES: Testimonial[] = [
//     { quote: "Automatizó el cambio de precios del ERP por WhatsApp: lo que antes nos tomaba minutos por producto ahora son segundos, y sin entrar al sistema. Cambió el día a día del equipo.", name: "[Nombre del colega]", role: "Líder de TI", company: "Expert Group" },
//     { quote: "El pipeline ETL que montó dejó nuestros datos unificados y confiables, actualizándose cada 5 minutos. Por primera vez pudimos analizar sin pelearnos con la información.", name: "[Nombre del colega]", role: "Coordinación de Datos", company: "Expert Group" },
// ];
// const TESTIMONIALS_EN: Testimonial[] = [
//     { quote: "He automated ERP price changes over WhatsApp: what used to take us minutes per product is now seconds, without even logging into the system. It changed the team's day to day.", name: "[Nombre del colega]", role: "IT Lead", company: "Expert Group" },
//     { quote: "The ETL pipeline he built left our data unified and reliable, refreshing every 5 minutes. For the first time we could analyze without fighting the information.", name: "[Nombre del colega]", role: "Data Coordination", company: "Expert Group" },
// ];

const TESTIMONIALS_BY_LANG: Record<Lang, Testimonial[]> = {
    es: TESTIMONIALS_ES,
    en: TESTIMONIALS_EN,
};

export function getTestimonials(lang: Lang): Testimonial[] {
    return TESTIMONIALS_BY_LANG[lang] ?? TESTIMONIALS_BY_LANG[DEFAULT_LOCALE];
}
