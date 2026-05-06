import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { type Project, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteFooter } from "@/components/SiteFooter";
import certeziaProblema from "@/assets/certezia-problema.png";

type Props = { project: Project };

export function CertziaCaseStudy({ project }: Props) {
  const { t, lang } = useLanguage();
  const c = lang === "es" ? project.es : project.en;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const metrics = [
    {
      value: t("40%", "40%"),
      valueSuffix: "\n",
      label: t(
        "Base visual lista para escalar",
        "Reduction in the critical flow compared to the initial version received."
      ),
    },
    {
      value: "UI KIT",
      valueSuffix: "\n",
      label: t(
        "Pruebas de usabilidad con usuarios reales.",
        "Usability testing with real users."
      ),
    },
    {
      value: "8/10",
      valueSuffix: "NPS",
      label: t(
        "Validación formal del nuevo flujo en sesiones de prueba.",
        "Formal validation of the new flow in testing sessions."
      ),
    },
    {
      value: t("Entregado", "Delivered"),
      valueSuffix: t("proyecto", "project"),
      label: t(
        "UI final, design system, documentación y handoff.",
        "Final UI, design system, documentation and handoff."
      ),
    },
  ];

  const flowSteps = t(
    "Subir PDF · Revisar documento · Ubicar firma · Preparar firma · Validar DNIe · Ingresar datos · Escanear por NFC · Validar identidad · Firmar · Descargar o compartir PDF",
    "Upload PDF · Review document · Place signature · Prepare signature · Validate ID · Enter data · Scan via NFC · Validate identity · Sign · Download or share PDF"
  ).split(" · ");

  const decisions = [
    {
      title: t(
        "Reordenar el flujo para reducir fricción",
        "Reordering the flow to reduce friction"
      ),
      body: t(
        "Moví la carga de ingreso de datos fuera del momento físico más delicado. Así, el usuario no tenía que sostener el DNIe junto al teléfono mientras completaba información sensible.",
        "I moved the data-entry load away from the most physically delicate moment. This prevented users from having to hold the ID close to the phone while completing sensitive information."
      ),
    },
    {
      title: t("Diseñar errores más útiles", "Designing more useful errors"),
      body: t(
        "Reemplacé mensajes genéricos por estados más claros, errores accionables y advertencias progresivas. El objetivo fue ayudar al usuario a entender qué falló y cómo continuar.",
        "I replaced generic messages with clearer system states, actionable errors and progressive warnings. The goal was to help users understand what failed and how to continue."
      ),
    },
    {
      title: t("Agregar ayuda contextual", "Adding contextual help"),
      body: t(
        "Incorporé microcopy, mensajes de primera vez y bottom sheets para explicar conceptos como PIN, CAN, NFC y tipo de DNIe en el momento correcto, sin sobrecargar la experiencia.",
        "I introduced microcopy, first-time messages and bottom sheets to explain concepts such as PIN, CAN, NFC and ID type at the right moment, without overloading the experience."
      ),
    },
    {
      title: t(
        "Construir una base visual escalable",
        "Building a scalable visual foundation"
      ),
      body: t(
        "Diseñé la UI final y un design system para unificar la identidad del producto, mejorar consistencia y facilitar futuras iteraciones.",
        "I designed the final UI and a design system to unify the product identity, improve consistency and support future iterations."
      ),
    },
  ];

  const results = [
    t("Menos fricción en la experiencia de firma frente al flujo inicial recibido.", "Fewer friction points in the signing experience compared to the initial flow received."),
    t("NPS 8/10 en pruebas de usabilidad.", "8/10 NPS in usability testing."),
    t("Flujo de escaneo NFC más claro y guiado.", "Clearer and more guided NFC scanning flow."),
    t("Errores más específicos y recuperables.", "More specific and recoverable errors."),
    t("UI final consistente.", "Consistent final UI."),
    t("Design system listo para escalar el producto.", "Design system ready to scale the product."),
    t("Handoff y documentación para desarrollo.", "Handoff and documentation for development."),
  ];

  const deliverables = [
    t("Flujos To-Be.", "To-Be flows."),
    t("Wireframes.", "Wireframes."),
    t("Prototipo interactivo.", "Interactive prototype."),
    t("UI final.", "Final UI."),
    t("Design system.", "Design system."),
    t("Estados, errores y ayudas contextuales.", "System states, errors and contextual help."),
    t("Pruebas de usabilidad.", "Usability testing."),
    t("Síntesis de hallazgos.", "Synthesis of findings."),
    t("Lista priorizada de mejoras.", "Prioritized improvement list."),
    t("Documentación e insumos de handoff.", "Documentation and handoff inputs."),
  ];

  const mediaSlots = [
    { id: "final-screens", label: t("Pantallas finales", "Final screens") },
    { id: "critical-flow", label: t("Flujo crítico", "Critical flow") },
    { id: "states-errors", label: t("Estados y errores", "States and errors") },
  ];

  // Reusable section header
  const SectionHeader = ({ index, title }: { index: string; title: string }) => (
    <div className="lg:col-span-4">
      <div className="font-mono text-muted-foreground mb-3 text-sm">{index}</div>
      <h2 className="headline-md">{title}</h2>
    </div>
  );

  return (
    <article>
      {/* HERO */}
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
          <Link to="/" className="eyebrow text-lg link-underline mb-12 inline-block !text-white">
            ← {t("Volver al inicio", "Back to home")}
          </Link>
          <div className="flex items-center gap-3 mb-6 text-lg">
            <span className="font-mono tracking-[0.2em] opacity-80 text-base">
              {project.number}
            </span>
            <span className="block w-8 h-px bg-white/60 text-base" />
            <span className="eyebrow text-base !text-white">
              {project.client}
            </span>
          </div>
          <h1 className="headline-xl text-white max-w-[20ch] text-balance">{c.title}</h1>
          <p className="mt-8 text-white/90 max-w-2xl text-base text-pretty md:text-lg">
            {c.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Flow Optimization", "NFC Interaction", "Prototyping", "Design System", "AI-assisted Design"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/30 text-white/85 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Hero visual */}
        <div className="container-editorial pb-8 md:pb-10 relative">
          <div
            className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 flex items-center justify-center px-6 py-6 md:px-10 md:py-8"
            data-media-slot="hero"
          >
            <img
              src={project.media?.hero}
              alt={c.title}
              className="w-full h-auto max-h-[420px] md:max-h-[460px] object-contain"
            />
          </div>
        </div>
      </header>

      {/* KEY METRICS */}
      <section className="border-b border-hairline">
        <div className="container-editorial py-16 md:py-20">
          <div className="eyebrow text-lg mb-8">{"\n"}</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface p-6 md:p-8 flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <div className="font-display font-medium tracking-tight leading-none text-2xl md:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-foreground/80 text-sm">{m.valueSuffix}</div>
                </div>
                <p className="mt-6 text-xs text-muted-foreground leading-relaxed md:text-base">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="container-editorial py-20 md:py-28 space-y-20 md:space-y-28">
        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="01" title={t("Contexto", "Contexto")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "Certezia es una app que permite firmar documentos PDF de forma legal usando el DNI electrónico (DNIe) desde el celular.",
                "Certezia is an app that allows you to legally sign PDF documents using the electronic ID (DNIe) from your phone."
              )}
            </p>
            <p>
              {t(
                "El reto: hacer que un proceso técnico, físico y sensible funcione para usuarios no expertos.",
                "The challenge: making a technical, physical and sensitive process work for non-expert users."
              )}
            </p>
          </div>
        </div>

        {/* Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="02" title={t("El problema", "The problem")} />
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              <p>
                {t(
                  "El flujo inicial tenía tres problemas principales:",
                  "The initial flow had three main problems:"
                )}
              </p>
              <p className="whitespace-pre-line">
                {t(
                  "- El usuario debía ingresar el PIN mientras sostenía el DNI → se interrumpía el escaneo\n- Mensajes genéricos (“error”, “intentar nuevamente”) sin capacidad de recuperación\n- Demasiados pasos + UI sin sistema propio (librería Android)",
                  "- The user had to enter the PIN while holding the ID → scanning was interrupted\n- Generic messages (\"error\", \"try again\") without recovery capacity\n- Too many steps + UI without its own system (Android library)"
                )}
              </p>
            </div>

            <figure className="rounded-2xl bg-surface/60 border border-hairline px-5 py-6 md:px-8 md:py-8 space-y-6 bg-slate-800">
              <img
                src={certeziaProblema}
                alt={t(
                  "Tres pantallas móviles que muestran los problemas de UX del flujo original de Certezia",
                  "Three mobile screens showing the UX issues in the original Certezia flow"
                )}
                className="w-full h-auto max-w-3xl mx-auto"
                loading="lazy"
              />
              <figcaption className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto">
                {[
                  {
                    title: t("Guía visual confusa", "Confusing guidance"),
                    body: t(
                      "La posición en la animación dificultaba la lectura NFC.",
                      "The suggested position made NFC reading unreliable."
                    ),
                  },
                  {
                    title: t("PIN durante el escaneo", "PIN during scanning"),
                    body: t(
                      "Interrumpía la conexión entre el DNIe y el teléfono.",
                      "Interrupted the connection between the DNIe and the phone."
                    ),
                  },
                  {
                    title: t("Error genérico", "Generic error"),
                    body: t(
                      "No explicaba el problema ni cómo recuperarse.",
                      "Didn’t explain the issue or recovery path."
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <h3 className="font-display text-sm md:text-base font-medium leading-snug tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-pretty">
                      {item.body}
                    </p>
                  </div>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Discovery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="03" title={t("Discovery", "Discovery")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p className="whitespace-pre-line">
              {t(
                "Trabajé junto al equipo de Certezia para entender el problema desde negocio, usuario y sistema:\n\n- Business Model Canvas\n- Arquetipos de usuario\n- Identificación de necesidades\n- Benchmark de soluciones similares\n- Análisis del flujo As-Is\n- Service Blueprint del proceso de firma",
                "I worked with the Certezia team to understand the problem from business, user, and system perspectives:\n\nBusiness Model Canvas\nUser archetypes\nNeeds identification\nBenchmark of similar solutions\nAs-Is flow analysis\nService Blueprint of the signing process"
              )}
            </p>
            <p>
              {t(
                "Esto permitió mapear dónde ocurría la fricción real.",
                "This allowed us to map where the real friction was occurring."
              )}
            </p>
          </div>
        </div>

        {/* Insights clave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="04" title={t("Insights clave", "Key insights")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "El mayor problema no era técnico, era de diseño:",
                "The biggest problem wasn't technical, it was design:"
              )}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {t(
                  "El sistema pedía información en el peor momento posible: durante la interacción física con el DNIe.",
                  "The system requested information at the worst possible time: during physical interaction with the ID card."
                )}
              </li>
            </ul>
            <p>
              {t(
                "El rediseño debía basarse en separar la carga cognitiva de la interacción física.",
                "The redesign had to be based on separating cognitive load from physical interaction."
              )}
            </p>
          </div>
        </div>

        {/* Design decisions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="05" title={t("Decisiones de diseño", "Design decisions")} />
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {decisions.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface p-6 md:p-7 flex flex-col"
              >
                <div className="font-mono text-muted-foreground mb-4 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg md:text-xl font-medium leading-snug tracking-tight text-balance">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Validation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="06" title={t("Validación", "Validation")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "Realicé pruebas de usabilidad con 5 usuarios reales, utilizando Lookback para observar el comportamiento durante sesiones en vivo.",
                "I conducted usability tests with 5 real users, using Lookback to observe behavior during live sessions."
              )}
            </p>
            <p>
              {t(
                "Las pruebas validaron si el nuevo flujo ayudaba a los usuarios a comprender mejor el proceso, completar la firma y recuperarse con mayor claridad cuando algo fallaba.",
                "The tests validated whether the new flow helped users better understand the process, complete the signature and recover more clearly when something failed."
              )}
            </p>
            <p>
              {t(
                "También utilicé herramientas de IA durante el proceso para acelerar exploración, síntesis de hallazgos, documentación y generación de alternativas de diseño. Las decisiones finales se tomaron combinando estos insumos con análisis manual, criterio de producto y validación con usuarios.",
                "I also used AI tools throughout the process to accelerate exploration, synthesis of findings, documentation and generation of design alternatives. Final decisions were made by combining these inputs with manual analysis, product judgment and user validation."
              )}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="07" title={t("Resultados", "Results")} />
          <div className="lg:col-span-8 space-y-8">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "El rediseño permitió mejorar la claridad, reducir fricción y elevar la percepción de confianza en el flujo de firma digital.",
                "The redesign improved clarity, reduced friction and increased the sense of trust in the digital signature flow."
              )}
            </p>
            <ul className="space-y-3">
              {results.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 py-2 border-b border-hairline last:border-b-0"
                >
                  <Check className="w-4 h-4 mt-1 shrink-0 text-foreground/70" />
                  <span className="text-foreground/90 text-base md:text-lg">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="08" title={t("Entregables", "Deliverables")} />
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-4 py-3 border-b border-hairline"
                >
                  <span className="font-mono text-[10px] text-muted-foreground w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learnings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="09" title={t("Aprendizajes", "Learnings")} />
          <div className="lg:col-span-8 space-y-6 max-w-2xl">
            <p className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground/95 text-pretty leading-snug">
              {t(
                "En productos legalmente sensibles, la confianza no depende solo de que el sistema funcione. También depende de que el usuario entienda qué está pasando, sepa cómo recuperarse cuando algo falla y sienta que la interfaz lo acompaña en cada paso.",
                "In legally sensitive products, trust does not depend only on the system working. It also depends on users understanding what is happening, knowing how to recover when something fails and feeling guided by the interface at every step."
              )}
            </p>
            <p className="text-muted-foreground text-base md:text-lg text-pretty">
              {t(
                "En Certezia, mejorar la experiencia significó reducir carga cognitiva, ordenar el flujo y colocar la información correcta en el momento correcto.",
                "In Certezia, improving the experience meant reducing cognitive load, reorganizing the flow and placing the right information at the right moment."
              )}
            </p>
          </div>
        </div>

        {/* Project visuals / placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="10" title={t("Visuales del proyecto", "Project visuals")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-sm text-muted-foreground max-w-2xl">
              {t(
                "Mockups provisionales — pronto serán reemplazados por capturas reales de la app.",
                "Placeholder mockups — to be replaced with real app screenshots soon."
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {mediaSlots.map((slot) => (
                <figure key={slot.id} className="space-y-3">
                  <div
                    className="rounded-2xl border border-hairline aspect-[4/5] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: project.accentVar }}
                    data-media-slot={slot.id}
                  >
                    <ProjectVisual project={project} className="p-6" />
                  </div>
                  <figcaption className="eyebrow text-lg">{slot.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse other projects */}
      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-10">
            <h2 className="headline-md">
              {t("Explorar otros proyectos", "Explore other projects")}
            </h2>
            <Link to="/" className="eyebrow text-lg link-underline">
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
