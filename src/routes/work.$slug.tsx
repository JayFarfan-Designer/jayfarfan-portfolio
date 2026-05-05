import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { CertziaCaseStudy } from "@/components/case-studies/CertziaCaseStudy";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectDetail,
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.client} — Jay Farfan` : "Case Study — Jay Farfan";
    const description = project?.en.description ?? "Case study by Jay Farfan, SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <h1 className="headline-lg">Project not found</h1>
      <Link to="/" className="eyebrow text-lg mt-6 inline-block link-underline">← Back home</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { slug } = useParams({ from: "/work/$slug" });
  const { t, lang } = useLanguage();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="container-editorial py-32 text-center">
        <h1 className="headline-lg">Project not found</h1>
        <Link to="/" className="eyebrow text-lg mt-6 inline-block link-underline">← Back home</Link>
      </div>
    );
  }

  if (project.slug === "certezia") {
    return <CertziaCaseStudy project={project} />;
  }

  const c = lang === "es" ? project.es : project.en;
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const meta = [
    { label: t("Rol", "Role"), value: "SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER" },
    { label: t("Equipo", "Team"), value: t("Equipo multidisciplinario", "Cross-functional team") },
    { label: t("Duración", "Timeline"), value: "—" },
    { label: t("Estado", "Status"), value: project.comingSoon ? t("Próximamente", "Coming soon") : t("En desarrollo", "In progress") },
  ];

  const caseSections = [
    {
      title: t("Overview", "Overview"),
      body: c.description,
    },
    {
      title: t("Resumen", "Summary"),
      body: t(
        "Esta sección presentará un resumen ejecutivo del caso una vez completado: contexto, oportunidad, enfoque y resultado general.",
        "This section will present an executive summary of the case once complete: context, opportunity, approach and overall outcome."
      ),
    },
    {
      title: t("Objetivos", "Goals"),
      body: t(
        "Definir los objetivos de negocio, usuario y producto que guiaron el proyecto.",
        "Define the business, user and product goals that guided the project."
      ),
    },
    {
      title: t("Insights", "Insights"),
      body: t(
        "Hallazgos clave de research, análisis y conversaciones con stakeholders.",
        "Key findings from research, analysis and stakeholder conversations."
      ),
    },
  ];

  return (
    <article>
      {/* Project hero */}
      <header
        className="relative border-b border-hairline overflow-hidden"
        style={{ backgroundColor: project.accentVar }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 55%)",
          }}
        />
        <div className="container-editorial relative pt-16 pb-20 md:pt-24 md:pb-28 text-white">
          <Link to="/" className="eyebrow text-lg link-underline mb-12 inline-block text-slate-100">
            ← {t("Volver al inicio", "Back home")}
          </Link>
          <div className="flex items-center gap-3 mb-6 text-lg">
            <span className="font-mono tracking-[0.2em] opacity-80 text-base">
              {project.number}
            </span>
            <span className="block w-8 h-px bg-white/60 text-base" />
            <span className="eyebrow text-slate-100 text-base">{project.client}</span>
          </div>
          <h1 className="headline-xl text-white max-w-[20ch] text-balance">
            {c.title}
          </h1>
          <p className="mt-8 text-white/90 max-w-2xl text-base text-pretty md:text-lg">
            {c.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/30 text-white/85 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero visual slot — replace with PNG later */}
        <div className="container-editorial pb-16 md:pb-20 relative">
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 aspect-[16/9] flex items-center justify-center">
            <ProjectVisual project={project} className="p-10" />
          </div>
        </div>
      </header>

      {/* Meta */}
      <section className="container-editorial py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-hairline">
        {meta.map((m) => (
          <div key={m.label}>
            <div className="eyebrow text-lg mb-2">{m.label}</div>
            <div className="font-display text-xl">{m.value}</div>
          </div>
        ))}
      </section>

      {/* Case study sections */}
      <section className="container-editorial py-20 md:py-28 space-y-20 md:space-y-28">
        {caseSections.map((s, i) => (
          <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="font-mono text-muted-foreground mb-3 text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="headline-md">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
                {s.body}
              </p>
            </div>
          </div>
        ))}

        {/* Process / iterations media slot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-muted-foreground mb-3 text-sm">05</div>
            <h2 className="headline-md">{t("Proceso e iteraciones", "Process & iterations")}</h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground max-w-2xl text-pretty">
              {t(
                "Espacio reservado para mostrar wireframes, flujos, iteraciones y decisiones de diseño.",
                "Space reserved to showcase wireframes, flows, iterations and design decisions."
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-hairline bg-surface aspect-[4/3] flex items-center justify-center"
                  data-media-slot={`process-${i}`}
                >
                  <ProjectVisual project={project} className="p-6 opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prototype / screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-muted-foreground mb-3 text-sm">06</div>
            <h2 className="headline-md">{t("Prototipo / Pantallas", "Prototype / Screens")}</h2>
          </div>
          <div className="lg:col-span-8">
            <div
              className="rounded-2xl border border-hairline aspect-[16/9] flex items-center justify-center"
              style={{ backgroundColor: project.accentVar }}
              data-media-slot="prototype"
            >
              <ProjectVisual project={project} className="p-10" />
            </div>
          </div>
        </div>

        {/* Takeaways */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-muted-foreground mb-3 text-sm">07</div>
            <h2 className="headline-md">{t("Aprendizajes", "Takeaways")}</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Sección reservada para los principales aprendizajes y reflexiones del proyecto, sin métricas inventadas.",
                "Section reserved for the main learnings and reflections from the project, without fabricated metrics."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Browse other projects */}
      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-10">
            <h2 className="headline-md">{t("Explorar otros proyectos", "Browse other projects")}</h2>
            <Link to="/" hash="work" className="eyebrow text-lg link-underline">
              {t("Todos los proyectos", "All projects")} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((p) => {
              const oc = lang === "es" ? p.es : p.en;
              return (
                <Link
                  key={p.slug}
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-2xl overflow-hidden border border-hairline"
                  style={{ backgroundColor: p.accentVar }}
                >
                  <div className="aspect-[4/3] flex items-center justify-center bg-black/15">
                    <ProjectVisual project={p} className="p-6" />
                  </div>
                  <div className="p-6 text-white">
                    <div className="eyebrow text-lg text-white/70 mb-2">{p.client}</div>
                    <div className="font-display text-xl leading-tight">{oc.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </article>
  );
}
