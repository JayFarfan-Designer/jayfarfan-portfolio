import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { type Project, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteFooter } from "@/components/SiteFooter";

type Props = { project: Project };

export function CertziaCaseStudy({ project }: Props) {
  const { t, lang } = useLanguage();
  const c = lang === "es" ? project.es : project.en;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const metrics = [
    {
      value: t("40%", "40%"),
      valueSuffix: t("Menos fricción en la experiencia de firma.", "Fewer friction points in the signing experience."),
      label: "\n",
    },
    {
      value: "5",
      valueSuffix: t("usuarios testeados", "users tested"),
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
          <SectionHeader index="01" title={t("Overview", "Overview")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "Certezia es una app mobile-first de firma digital que permite autenticar identidad y firmar documentos PDF desde el celular usando DNIe.",
                "Certezia is a mobile-first digital signature app that allows users to authenticate their identity and sign PDF documents from a mobile phone using an electronic ID."
              )}
            </p>
            <p>
              {t(
                "El reto era convertir un proceso técnico y legalmente sensible en una experiencia clara para usuarios no expertos. No bastaba con que el sistema funcionara: el usuario debía entender qué estaba pasando, confiar en el proceso y completar la firma sin frustración.",
                "The challenge was to turn a technically and legally sensitive process into a clear experience for non-expert users. It was not enough for the system to work: users needed to understand what was happening, trust the process and complete the signature without frustration."
              )}
            </p>
            <p>
              {t(
                "Mi rol fue rediseñar la experiencia de firma de punta a punta, desde la arquitectura del flujo hasta la UI final y el design system.",
                "My role was to redesign the signing experience end to end, from flow architecture to final UI and design system."
              )}
            </p>
          </div>
        </div>

        {/* Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="02" title={t("El reto", "The challenge")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "El MVP inicial funcionaba, pero tenía demasiada fricción en el momento más sensible: el escaneo NFC del DNIe.",
                "The initial MVP worked, but it had too much friction at the most sensitive moment: the NFC scan of the electronic ID."
              )}
            </p>
            <p>
              {t(
                "El usuario debía acercar el documento al teléfono, mantenerlo estable e ingresar información sensible dentro de un flujo con poca guía. Si algo fallaba, los errores eran genéricos y no explicaban si el problema estaba en el PIN, el CAN, el NFC o el movimiento físico del DNIe.",
                "Users had to bring the document close to the phone, keep it stable and enter sensitive information inside a flow with limited guidance. When something failed, errors were generic and did not explain whether the issue was related to the PIN, CAN, NFC or the physical movement of the ID."
              )}
            </p>
            <p>
              {t(
                "Además, la app usaba principalmente componentes Android sin un sistema visual propio, lo que generaba inconsistencias, poca jerarquía y menor percepción de confianza.",
                "The app also relied mostly on Android components without its own visual system, creating inconsistencies, weak hierarchy and a lower sense of trust."
              )}
            </p>
            <p>
              {t(
                "El objetivo fue transformar una experiencia técnica y frágil en un flujo mobile-first más claro, guiado y recuperable.",
                "The goal was to turn a technical and fragile experience into a clearer, guided and recoverable mobile-first flow."
              )}
            </p>
          </div>
        </div>

        {/* Main user */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="03" title={t("Usuario principal", "Main user")} />
          <div className="lg:col-span-8 space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
            <p>
              {t(
                "El rediseño se enfocó en firmantes personas naturales con DNIe: usuarios que necesitaban firmar un documento desde el celular sin necesariamente conocer conceptos como firma digital, CAN, PIN, NFC o certificados.",
                "The redesign focused on individual signers with an electronic ID: users who needed to sign a document from their phone without necessarily understanding concepts such as digital signatures, CAN, PIN, NFC or certificates."
              )}
            </p>
            <p>
              {t(
                "El usuario no quería aprender tecnología. Quería completar una tarea importante de forma rápida, válida y segura.",
                "The user did not want to learn the technology. They wanted to complete an important task quickly, validly and securely."
              )}
            </p>
          </div>
        </div>

        {/* Critical flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="04" title={t("Flujo crítico", "Critical flow")} />
          <div className="lg:col-span-8 space-y-8">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t("El flujo completo incluía:", "The full flow included:")}
            </p>
            <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-6 overflow-x-auto">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 min-w-max md:min-w-0">
                {flowSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline text-xs md:text-sm text-foreground/90 whitespace-nowrap text-base">
                      <span className="font-mono text-muted-foreground w-6 text-base">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "El punto más delicado era el escaneo NFC, porque mezclaba una acción física precisa, validación técnica y carga cognitiva. Mi trabajo se centró en reducir esa carga y reorganizar el flujo para que el usuario llegara mejor preparado a ese momento.",
                "The most delicate point was the NFC scan because it combined a precise physical action, technical validation and cognitive load. My work focused on reducing that load and reorganizing the flow so users reached that moment better prepared."
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
