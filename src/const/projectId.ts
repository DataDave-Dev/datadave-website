import type { Project } from "@/const/projects";

// Id para la URL del detalle. Usa el slug; si no hay, deriva del idx (de "#01" a "01").
export function projectId(project: Project): string {
    const raw = project.slug ?? project.idx;
    return raw
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // sin acentos
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
