# Certezia Case Study — Refinement Plan

Scope: only `/work/certezia`. Keep dark style, blue accent, current placeholders. Restructure sections, replace copy, swap the Rol/Equipo/Duración/Estado block for a Key Metrics block.

## Approach

To avoid bloating the generic `work.$slug.tsx` route with Certezia-only content, I'll branch on slug inside that route: when `slug === "certezia"`, render a new dedicated `<CertziaCaseStudy />` component; for other projects, keep the current generic template untouched. This protects other case studies and gives Certezia its own bespoke layout without duplicating routing.

## Files

1. **Create** `src/components/case-studies/CertziaCaseStudy.tsx`
   - Receives the `project` from `projects.ts`.
   - Pulls all bilingual copy via `useLanguage().t(es, en)` — full ES + EN strings provided in the prompt.
   - Sections, in order:
     1. Project hero — eyebrow ("Caso de estudio"/"Case study"), `01` number, client, title, description, tags, "Volver al inicio"/"Back to home" link. Keeps current Certezia blue background + radial gradient + `<ProjectVisual>` placeholder in a 16:9 modular slot (`data-media-slot="hero"`).
     2. Key Metrics — replaces Rol/Equipo/Duración/Estado entirely. 4 cards in a responsive grid (`grid-cols-2 lg:grid-cols-4`), each with a large value (`headline-lg`) and short label. Values: `40% menos clics`, `5 usuarios testeados`, `8/10 NPS`, `Proyecto entregado` (+ EN equivalents).
     3. Overview — title + 3 short paragraphs.
     4. El reto / The challenge — 4 short paragraphs.
     5. Usuario principal / Main user — 2 short paragraphs.
     6. Flujo crítico / Critical flow — intro + a styled flow strip (chips with arrows) listing the 10 steps + closing paragraph.
     7. Decisiones de diseño / Design decisions — 4 numbered cards in a 2-col grid, each with title + body.
     8. Validación / Validation — 3 short paragraphs.
     9. Resultados / Results — intro + bulleted list of 7 outcomes with check marks.
     10. Entregables / Deliverables — 2-col list of 10 items with subtle dividers.
     11. Aprendizajes / Learnings — 2 short paragraphs, larger pull-quote treatment.
     12. Project visuals — 3 modular media slots labeled "Pantallas finales", "Flujo crítico", "Estados y errores" (EN equivalents). Each is a `data-media-slot="..."` container with `<ProjectVisual>` placeholder so PNGs can drop in later.
     13. Explorar otros proyectos / Explore other projects — reuse the same component logic from current page (3 other projects, "Todos los proyectos" link).
     14. `<SiteFooter />`.
   - All section labels/CTAs/microcopy switch via `t()`.
   - All visuals stay as `<ProjectVisual project={project} />` inside containers tagged with `data-media-slot` for easy future swap to PNG `<img>`.

2. **Edit** `src/routes/work.$slug.tsx`
   - At the top of `ProjectDetail`, after `getProject`, add: `if (project.slug === "certezia") return <CertziaCaseStudy project={project} />;`
   - Leave the rest of the generic template intact for other slugs.

## Visual / styling notes

- Reuse existing utility classes: `container-editorial`, `headline-xl/lg/md`, `eyebrow`, `border-hairline`, `btn-tertiary`, `link-underline`, `bg-surface`, project accent var.
- Key Metrics cards: `rounded-2xl border border-hairline bg-surface p-6/8`, value in Inter Tight at ~`text-4xl/5xl`, label in `text-sm text-muted-foreground`.
- Decision cards: numbered `01–04` mono eyebrow, title `headline-md`, body muted.
- Critical flow strip: horizontal scroll on mobile, wrapped chips on desktop, hairline arrows between steps.
- Results: check-mark icon (lucide `Check`) + line.
- Spacing rhythm: `py-20 md:py-28` between major sections, consistent with rest of site.

## Out of scope

- No changes to other project pages, home, header, footer, or design tokens.
- No new route files. No edits to `routeTree.gen.ts`.
- Placeholders (`ProjectVisual`) remain — only the wrapper labels/structure improve.
