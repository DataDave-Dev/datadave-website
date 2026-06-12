// Taxonomía de proyectos: categorías de dominio por slug. Fuente única usada por
// ProjectList (para emitir data-categories) y ProjectFilters (para construir la
// faceta de categoría). Las etiquetas traducibles viven en i18n (filter.cat.*).
// Al añadir un proyecto, añade aquí sus categorías.

export type CategoryKey = "web" | "desktop" | "backend" | "data" | "oss";

// Orden de aparición de los chips de categoría.
export const CATEGORY_ORDER: CategoryKey[] = [
    "web",
    "desktop",
    "backend",
    "data",
    "oss",
];

const PROJECT_CATEGORIES: Record<string, CategoryKey[]> = {
    "bot-precios-erp": ["backend"],
    "etl-extraccion-limpieza": ["backend", "data"],
    "onix-control-asistencia": ["desktop"],
    "valora-finanzas": ["web"],
    "envio-masivo-correos": ["backend", "oss"],
    "la-velada-open-source": ["web", "oss"],
};

export function categoriesOf(slug: string): CategoryKey[] {
    return PROJECT_CATEGORIES[slug] ?? [];
}
