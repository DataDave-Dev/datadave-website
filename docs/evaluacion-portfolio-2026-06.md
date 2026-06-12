# Evaluación de Portfolio — datadave.dev

**Fecha:** 2026-06-12
**Rol asumido:** Senior Hiring Manager, Full Stack Engineering — Apple. Estándar de referencia: candidaturas reales 2026.

Evidencia revisada: código fuente completo (`src/const/`, `src/i18n/`, `src/components/`, `src/layouts/`), build de producción (10 páginas, 137 KB JS, compila limpio) y el sitio renderizado en 375/768/1024/1440 px (home, about, ambos proyectos, 404, ES y EN).

---

## Resumen Ejecutivo

Este portfolio produce una disonancia poco común: la **ejecución técnica y visual del sitio está muy por encima de su contenido**. La estética CRT/retro-terminal es coherente, opinada y memorable; la arquitectura del código (i18n tipado, SEO con JSON-LD y hreflang, accesibilidad cuidada, 137 KB de JS total) es mejor que la de muchos candidatos mid-level. Pero como **candidatura**, se cae sola: hay **placeholders de plantilla sin rellenar publicados en producción** — incluyendo notas del editor entre corchetes visibles en la página de un proyecto y testimonios firmados por "[Nombre del colega]" —, solo dos proyectos sin una sola línea de código verificable ni demo pública, y un perfil que declara "DESDE MMXXVI" (es decir, **meses** de trayectoria) mientras el copy habla con voz de senior. En Apple, esta candidatura no pasa el primer filtro humano. No por falta de talento — el sitio demuestra que lo hay — sino por falta de rigor en lo que más barato cuesta corregir: el contenido.

---

## Principales Problemas Detectados

**1. Placeholders sin rellenar en producción (DESCALIFICANTE).** En la página pública del proyecto del bot ERP se lee, textualmente y entre corchetes: *"[El procesamiento y/o la conexión con la base de datos — ajústalo a lo que cubre en tu caso.]"* y *"[Explica las validaciones, confirmaciones y límites que pusiste antes de escribir en la base de datos.]"* (`src/const/projects.ts:90,102`, confirmado renderizado en `/es/projects/bot-precios-erp`). Esto le dice al revisor dos cosas: que el candidato no revisa lo que publica, y que el texto fue generado/plantillado y rellenado a medias. Para una empresa que vende atención al detalle, es un "no" inmediato.

**2. Testimonios con autor placeholder (peor que no tener testimonios).** `src/const/testimonials.ts:19,24`: citas elogiosas completas firmadas por "[Nombre del colega]". Un testimonio sin persona verificable parece **fabricado**. Esto contamina la credibilidad de todo lo demás — incluidas las métricas del ETL, que son lo mejor del portfolio.

**3. Cero código verificable.** Los campos `demo` y `repo` existen en el modelo de datos (`projects.ts:38-39`) y están vacíos en ambos proyectos. El GitHub (DataDave-Dev) se enlaza en contacto, pero ningún proyecto apunta a código. Para un Full Stack Engineer, un portfolio sin código es un folleto: en Big Tech el screening técnico empieza en el repositorio. Si son proyectos internos de empresa, el portfolio necesita al menos un proyecto público diseñado para ser leído.

**4. Inconsistencias internas que un revisor detecta en 5 minutos.**
- El perfil dice "DESDE MMXXVI" (`profile.ts:49`), pero el proyecto ETL está fechado **2024** (`projects.ts:112`). ¿Cuándo empezaste?
- Las métricas del ETL dicen "5 bases de datos de origen" (`projects.ts:123`), pero los alt-text de las capturas dicen "6 de 6 bases completadas" (`projects.ts:181`).
- "+1,948 M datos procesados" — ¿1,948 millones? ¿registros o "datos"? La captura del dashboard muestra 571,081 registros en 9 ejecuciones. La cifra grande no se sostiene con la evidencia mostrada y un entrevistador la va a atacar.

**5. Seniority declarado vs. percibido.** El copy ("Lo que antes tomaba días, lo cierro en horas", "Si se puede automatizar, ya lo automaticé") tiene tono de senior con una trayectoria de meses y dos proyectos en lo que parece ser un mismo empleador (Expert Group). La sobreventa es el error de junior más fácil de detectar y el que más irrita en un comité de contratación. La honestidad calibrada ("junior con resultados medibles y velocidad inusual") sería más fuerte que la pose.

**6. Posicionamiento difuso: ¿full-stack o data?** El hero dice "Desarrollador full-stack", la ficha dice "Programador · Data Analyst", el proyecto #2 dice rol "Data Analyst", y la evidencia más sólida (el panel ETL con dashboard web, monitor en tiempo real, configuración) es en realidad el mejor argumento full-stack — pero está enterrada como galería del proyecto de datos. No hay un proyecto que demuestre el ciclo completo: frontend + API + base de datos + despliegue + URL viva.

**7. Dependencia de IA sobre-comunicada.** "Claude Code" aparece como chip del stack en el hero, como ítem del stack en *ambos* proyectos, y hay una sección entera "Programo con IA como multiplicador". La sección de filosofía está bien escrita y es defendible en 2026. Pero listar Claude Code como tecnología del stack al mismo nivel que Python o SQL Server, en los dos únicos proyectos, hace que el revisor se pregunte qué queda si se lo quitas. Una mención bien colocada es madurez; cuatro menciones es inseguridad.

**8. Identidad parcial.** El hero es "DataDave"; el nombre real (Alonso David De León Rodarte) solo aparece en about. Email personal de Gmail en vez de un alias del dominio propio que ya posee. Sin CV descargable, sin foto, sin cronología de experiencia ni educación. Para una candidatura real, el reclutador necesita ensamblar a la persona, y aquí tiene que excavar. Detalle menor pero revelador: el directorio de imágenes se llama `proyects` (sic) — typo en inglés visible en cada URL de imagen.

---

## Tabla de Mejoras Priorizadas

| Prioridad | Problema | Impacto | Dificultad | Recomendación |
|---|---|---|---|---|
| 1 | Placeholders `[...]` publicados en proyecto y testimonios | Crítico — destruye credibilidad de todo el sitio | Trivial (minutos) | Rellenar con datos reales o **eliminar** las secciones incompletas hoy mismo. Si no hay testimonios reales con nombre y apellido, borrar la sección. |
| 2 | Cero código/demos verificables | Crítico — sin esto no hay screening técnico posible | Media (semanas) | Publicar 1–2 proyectos con repo público bien documentado (README con arquitectura, decisiones, tests) y una demo desplegada. Puede ser una versión sanitizada del panel ETL. |
| 3 | Inconsistencias de fechas y métricas (2024 vs MMXXVI; 5 vs 6 bases; "+1,948 M") | Alto — cualquier entrevistador las encuentra | Trivial | Auditar cada número contra la realidad; definir la métrica con precisión ("X registros acumulados desde Y"). |
| 4 | Sin proyecto full-stack de ciclo completo y público | Alto — el título del candidato no está demostrado | Media-alta | Construir un proyecto con frontend + API + DB + auth + despliegue, con URL viva. El panel ETL ya demuestra que sabe; falta que sea inspeccionable. |
| 5 | Tono senior con trayectoria junior | Alto — genera desconfianza en comité | Baja | Reescribir el copy hacia "resultados concretos, ambición explícita": las métricas hablan mejor que las afirmaciones. |
| 6 | Claude Code listado como stack en hero y en ambos proyectos | Medio — diluye la percepción de habilidad propia | Trivial | Dejar la sección de filosofía IA (es buena) y quitar Claude Code de los chips de stack técnico. |
| 7 | Sin CV, sin cronología, nombre real escondido | Medio — fricción para el reclutador | Baja | Añadir nombre completo cerca del hero o footer, CV en PDF descargable, y email del dominio propio. |
| 8 | Solo 2 proyectos, el #1 sin galería ni evidencia visual | Medio | Media | Añadir capturas al bot (aunque sea el flujo de WhatsApp anonimizado) y un tercer proyecto público. |
| 9 | Typo `proyects/` en rutas de imágenes; 404 mezcla ES/EN | Bajo — pero es exactamente el tipo de detalle que Apple mira | Trivial | Renombrar directorio; localizar la 404. |

---

## Fortalezas

- **Dirección de arte real y disciplinada.** La estética CRT (grain, scanlines, titular pixel-art con extrusión "lava", telemetría falsa, transición de apagado de tubo) no es una plantilla: es un sistema visual coherente aplicado de hero a 404. En un mar de portfolios Tailwind-genéricos, este se recuerda. Verificado en render a 4 viewports: se sostiene en móvil.
- **Calidad de ingeniería del sitio en sí.** Astro 6 estático, 137 KB de JS total con GSAP importado bajo demanda, imágenes WebP de 12–60 KB, build limpio en <2 s. i18n con claves tipadas (`UIKey` derivado de `es`, el compilador avisa si falta traducción — `ui.ts:208`). SEO completo: JSON-LD, hreflang, canonical, sitemap, robots.txt, fallback de redirección sin JS con `noindex`.
- **Accesibilidad por encima de la media.** Los alt-text de la galería ETL (`projects.ts:169-198`) son de los mejores que he visto en un portfolio — describen datos y contexto, no "screenshot del dashboard". Aria-labels en carrusel, `prefers-reduced-motion` con fallback real, hero visible sin JS, safety-timeout de 2.4 s si GSAP falla (`Layout.astro:362`). Esto sí es señal de criterio de ingeniería.
- **El proyecto ETL tiene sustancia real.** Frecuencia de 5 minutos, múltiples orígenes, panel de monitoreo con métricas de calidad por tabla, reintentos, configuración serializada y sincronización con el Task Scheduler. Es trabajo de producción de verdad, no un tutorial. Mal vendido (ver problemas), pero real.
- **La narrativa sobre IA, como filosofía, está bien resuelta.** "La IA acelera, yo decido" es exactamente la postura que las empresas quieren oír en 2026 — el problema es de dosificación, no de tesis.

---

## Evaluación por Categoría

| Categoría | Calificación (0–10) | Comentarios |
|---|---|---|
| Diseño visual y UI/UX | 7.5 | Distintivo, coherente, responsive verificado. Resta: la fuente pixel compromete legibilidad del titular, y la atmósfera "ruido CRT" puede leerse como gimmick en un contexto corporativo conservador. |
| Branding personal y propuesta de valor | 5.5 | "DataDave" es memorable, pero la propuesta ("convierte ideas en software listo para producción") es genérica y el posicionamiento full-stack/data está sin resolver. |
| Arquitectura de información | 6.5 | Simple y navegable (hero → about → proyectos → contacto). Resta: todo vive en una página "about", sin índice de proyectos propio ni CV. |
| Calidad del contenido y redacción | 3.0 | Redacción con voz propia (punto a favor), hundida por placeholders publicados, inconsistencias numéricas y de fechas, y sobreventa de tono. |
| Accesibilidad | 7.5 | Alt-text ejemplares, reduced-motion, aria correcto, fallback sin JS. Sin auditoría de contraste formal de los grises tenues sobre fondo oscuro. |
| Rendimiento y optimización | 8.5 | Estático, 137 KB JS, WebP, GSAP lazy, fuentes con estrategia. De lo mejor del portfolio. |
| Responsividad móvil y tablet | 8.0 | Verificado a 375/768/1024/1440: sin overflow, jerarquía conservada, hero funcional en móvil. |
| Calidad técnica percibida | 7.0 | El código fuente es limpio y tipado; pero el visitante no ve el código del sitio, y el código de los *proyectos* no existe públicamente. |
| Proyectos mostrados | 3.5 | Dos proyectos, mismo empleador aparente, sin repo ni demo, uno sin evidencia visual, con placeholders. El ETL salva la categoría. |
| Evidencia de habilidades Full Stack | 4.0 | Backend/datos: creíble. Frontend de producto: solo inferible del panel ETL en capturas. APIs, auth, despliegue, testing: cero evidencia. |
| Credibilidad profesional | 2.5 | Testimonios anónimos placeholder + métricas no conciliadas + sin nombre completo visible = la categoría más dañada. |
| Nivel de seniority percibido | Junior (0–1 año) | "DESDE MMXXVI" con fecha actual junio 2026. El sitio sugiere techo alto; la evidencia sugiere base corta. |
| Diferenciación frente a otros candidatos | 6.5 | Visualmente, top 10% de portfolios junior. En contenido, indistinguible de cualquier junior con dos proyectos internos. |
| Preparación para Big Tech | 2.5 | Sin código público, sin sistemas a escala demostrables, sin fundamentos CS visibles, con errores de QA propios. |
| Calidad general del portfolio | 5.0 | Promedio asimétrico: contenedor de 8, contenido de 3. |

---

## Probabilidad de Contratación (avance a siguiente fase)

| Empresa | Probabilidad | Justificación |
|---|---|---|
| **Startup** | **55–65%** | Es el mejor mercado para este perfil: el sitio demuestra velocidad, criterio de producto, autonomía y fluidez con IA — exactamente lo que una startup early-stage compra. Los placeholders bajan la nota, pero un founder técnico perdona el descuido si la conversación es buena. |
| **Empresa mediana** | **30–40%** | Pasaría muchos filtros de RR.HH. por el impacto visual del sitio y las métricas del ETL. Se cae cuando el hiring manager pide código o referencias verificables. |
| **Fortune 500 (no tech)** | **15–20%** | Los equipos de TI corporativos valoran el perfil ETL/SQL Server/automatización (encaja con su stack real), pero sus procesos exigen historial verificable, títulos y referencias — todo lo que aquí falta. La estética CRT no suma en este contexto. |
| **Apple** | **<5%** | Apple recibe miles de candidaturas por posición y filtra por profundidad demostrada y atención al detalle obsesiva. Un portfolio con notas de editor publicadas es eliminación inmediata — no por crueldad, sino porque el detalle *es* el criterio. Sin código, sin escala, sin trayectoria, no hay material para un debrief. |
| **Google** | **<5%** | Google pondera fundamentos CS, algoritmos y sistemas distribuidos. Nada en el portfolio habla ese idioma. El portfolio en sí pesa poco en su proceso; el CV y el screening técnico lo son todo, y aquí no hay CV. |
| **Microsoft** | **5–10%** | Marginalmente mejor: stack alineado (SQL Server, Windows Task Scheduler, automatización empresarial) y Microsoft tiene más vías de entrada early-career. Pero aplicaría por programa de early talent, no por esta web. |
| **Amazon** | **5–10%** | Los Leadership Principles premian "Deliver Results" con métricas — y métricas hay. Pero el Bar Raiser destrozaría las cifras no conciliadas ("+1,948 M") en los primeros diez minutos, y eso es peor que no tenerlas. |

---

## Calificación Final

# 48 / 100

Desglose del juicio: la cáscara (diseño, rendimiento, a11y, i18n, SEO) vale 75–80. El contenido (proyectos, credibilidad, evidencia, QA editorial) vale 25–30. Un portfolio se contrata por el contenido; la cáscara solo decide si te quedas a leerlo. La nota refleja además que los errores encontrados no son de capacidad sino de **rigor** — lo cual es mejor noticia de la que parece, porque el rigor se corrige en una semana; el talento no se compra.

---

## ¿Contratarías a esta persona para una entrevista técnica?

**Como hiring manager de Apple: no, hoy no.** No avanzaría esta candidatura tal como está. La razón decisiva no es el nivel junior — Apple contrata juniors excepcionales — sino que el portfolio contiene evidencia directa de falta de revisión final (placeholders publicados, testimonios anónimos, métricas inconsistentes) en el único artefacto donde el candidato controlaba el 100% de las variables. Si esto se publica con notas del editor visibles, ¿qué pasa con el código bajo deadline? Esa es la pregunta que el comité haría, y no tengo respuesta que ofrecerle.

**El matiz que importa:** si este mismo candidato corrige el contenido, publica un repositorio serio y vuelve a aplicar en 12–18 meses con un proyecto full-stack vivo, yo lo recordaría — y eso casi ningún portfolio lo logra. Hay señal genuina aquí: gusto visual propio, instinto de ingeniería (los alt-text, el fallback sin JS, el i18n tipado son decisiones de alguien que piensa), resultados medibles reales y una relación madura con las herramientas de IA. El problema no es el techo; es que la candidatura se presentó antes de estar terminada. En una startup, lo entrevistaría mañana. En Apple, le diría exactamente esto y le pediría que volviera.
