import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { type Project, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteFooter } from "@/components/SiteFooter";
import certeziaProblema from "@/assets/certezia-problema.webp";
import certeziaFlujoRedisenado from "@/assets/certezia-flujo-rediseñado.webp";
import certeziaVistaPrototipo from "@/assets/certezia-vista-prototipo.webp";
import certeziaVistaTesting from "@/assets/certezia-vista-testing.webp";
import certeziaFlujoFinal from "@/assets/certezia-flujo-final.png";

type Props = { project: Project };

export function CertziaCaseStudy({ project }: Props) {
  const { t, lang } = useLanguage();
  const c = lang === "es" ? project.es : project.en;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const metrics = [
    {
      value: "40%",
      label: t("Menos pasos en flujo crítico", "Fewer steps in critical flow"),
    },
    {
      value: "User Testing",
      label: t("Validado con usuarios reales", "Validated with real users"),
    },
    {
      value: "8/10",
      label: t("NPs en pruebas con usuarios", "NPs in user testing"),
    },
    {
      value: "UI Kit",
      label: t("Base visual lista para escalar", "Visual base ready to scale"),
    },
  ];

  const flowSteps = t(
    "Subir PDF · Revisar documento · Ubicar firma · Preparar firma · Validar DNIe · Ingresar datos · Escanear por NFC · Validar identidad · Firmar · Descargar o compartir PDF",
    "Upload PDF · Review document · Place signature · Prepare signature · Validate ID · Enter data · Scan via NFC · Validate identity · Sign · Download or share PDF"
  ).split(" · ");

  const decisions = [
    {
      title: t("Reordenar el flujo", "Reorder the flow"),
      body: t(
        "Se solicitan todos los datos antes del escaneo NFC.",
        "All data is requested before the NFC scan."
      ),
    },
    {
      title: t("Simplificar el proceso", "Simplify the process"),
      body: t(
        "Reducción de pasos y decisiones innecesarias.",
        "Reduction of unnecessary steps and decisions."
      ),
    },
    {
      title: t("Diseñar estados del sistema", "Design system states"),
      body: t(
        "Errores, advertencias y feedback claros y accionables.",
        "Clear and actionable errors, warnings and feedback."
      ),
    },
    {
      title: t("Guiar al usuario", "Guide the user"),
      body: t(
        "Onboarding contextual y ayudas en momentos críticos.",
        "Contextual onboarding and help in critical moments."
      ),
    },
  ];

  const results = [
    t("Mayor claridad en el proceso", "Greater clarity in the process"),
    t("Menor fricción en escaneo NFC", "Less friction in NFC scanning"),
    t("Mejor percepción de control", "Better sense of control"),
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
          <div className="eyebrow text-lg mb-8">— {t("DATOS CLAVE", "KEY DATA")}</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface p-6 md:p-8 flex flex-col gap-4"
              >
                <div className="font-display font-medium tracking-tight leading-none text-2xl md:text-3xl">
                  {m.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
                  "El sistema pedía información en el peor momento posible: durante la interacción física con el DNI.",
                  "The system requested information at the worst possible time: during physical interaction with the ID card."
                )}
              </li>
            </ul>
            <p>
              {t(
                "\n",
                "\n"
              )}
            </p>
          </div>
        </div>

        {/* Design decisions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="05" title={t("Decisiones de Diseño", "Design Decisions")} />
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
          <SectionHeader index="06" title={t("Rediseño", "Redesign")} />
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              <p>
                {t(
                  "Rediseñé el flujo completo con un principio clave:",
                  "I redesigned the complete flow with a key principle:"
                )}
              </p>
              <p className="font-semibold text-foreground">
                {t(
                  "- Separar carga cognitiva de la interacción física.",
                  "Separating cognitive load from physical interaction."
                )}
              </p>
            </div>
            <figure className="rounded-2xl overflow-hidden border border-hairline bg-surface/60">
              <img
                src={certeziaFlujoRedisenado}
                alt={t(
                  "Diagrama del flujo rediseñado de Certezia mostrando todas las pantallas y conexiones del proceso de firma",
                  "Diagram of the redesigned Certezia flow showing all screens and connections of the signing process"
                )}
                className="w-full h-auto block"
                loading="lazy"
              />
              <figcaption className="px-5 py-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {t(
                  "Nuevo flujo Certezia: Happy path de 4 pasos, Alternative Path, estados de error y advertencias.",
                  "New Certezia flow: 4-step Happy path, Alternative path, error states and warnings."
                )}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="07" title={t("Prototipo + Testing", "Prototype + Testing")} />
          <div className="lg:col-span-8 space-y-8">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty whitespace-pre-line font-semibold">
              {t(
                "Construí un prototipo interactivo completo del flujo crítico de Certezia.\nCon este, validé el nuevo flujo con usuarios reales:",
                "I built a complete interactive prototype of the Certezia critical flow.\nWith this, I validated the new flow with real users:"
              )}
            </p>
            <ul className="space-y-2 list-disc pl-5">
              {results.map((r) => (
                <li key={r} className="font-semibold text-foreground text-base md:text-lg">
                  {r}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2 items-start">
              <figure className="rounded-2xl overflow-hidden border border-hairline bg-surface/60 flex flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
                  <img
                    src={certeziaVistaPrototipo}
                    alt={t(
                      "Vista del prototipo interactivo de Certezia en Figma",
                      "View of the interactive Certezia prototype in Figma"
                    )}
                    className="w-full h-full object-cover object-left"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-5 py-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t("Prototipado en Figma", "Prototyped in Figma")}
                </figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-hairline bg-surface/60 flex flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
                  <img
                    src={certeziaVistaTesting}
                    alt={t(
                      "Sesión de test de usabilidad de Certezia en Lookback",
                      "Certezia usability testing session in Lookback"
                    )}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-5 py-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t("Test de Usabilidad en Lookback", "Usability testing in Lookback")}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Resultado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="08" title={t("Resultado", "Outcome")} />
          <div className="lg:col-span-8">
            <ul className="space-y-2 list-disc pl-5">
              {[
                t("−40% pasos en el flujo crítico.", "−40% steps in the critical flow."),
                t(
                  "Menor fricción en interacción física con DNIe.",
                  "Less friction in physical interaction with the eID."
                ),
                t("Mejor comprensión del proceso.", "Better understanding of the process."),
                t("Mayor confianza del usuario.", "Greater user trust."),
              ].map((item) => (
                <li
                  key={item}
                  className="text-foreground text-base md:text-lg font-normal text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Aprendizajes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="09" title={t("Aprendizajes", "Learnings")} />
          <div className="lg:col-span-8">
            <ol className="divide-y divide-hairline">
              {[
                t(
                  "Diseñar para lo físico cambia completamente el UX.",
                  "Designing for the physical world completely changes UX."
                ),
                t(
                  "El microcopy es clave en sistemas complejos.",
                  "Microcopy is key in complex systems."
                ),
                t(
                  "Separar acciones reduce fricción más que simplificar visualmente.",
                  "Splitting actions reduces friction more than simplifying visuals."
                ),
                t(
                  "Un buen sistema de estados vale tanto como el flujo principal.",
                  "A solid state system is as valuable as the main flow."
                ),
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex gap-6 md:gap-10 py-8 md:py-12 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-muted-foreground pt-3 shrink-0 w-10 md:text-base">
                    {String(i + 1)
                      .padStart(2, "0")
                      .replace("01", "A.")
                      .replace("02", "B.")
                      .replace("03", "C.")
                      .replace("04", "D.")}
                  </span>
                  <p className="font-display md:text-4xl tracking-tight leading-[1.15] text-foreground/95 text-pretty max-w-[22ch] text-zinc-400 font-light text-2xl">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Flujo final */}
        <div className="space-y-8">
          <SectionHeader index="10" title={t("Flujo final", "Final flow")} />
          <figure className="w-full rounded-2xl bg-zinc-900 border border-hairline overflow-hidden">
            <img
              src={certeziaFlujoFinal}
              alt={t("Flujo final del producto Certezia", "Certezia final product flow")}
              className="w-full h-auto block p-3 md:p-4"
              loading="lazy"
            />
            <figcaption className="px-5 py-4 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-hairline">
              {t(
                "Flujo final Certezia con Dashboard, 4 pasos, animación guía mejorada y pantalla de confirmación. También dos etapas diferenciadas: Fase Cognitiva y Fase Física.",
                "Final Certezia flow with Dashboard, 4 steps, improved guide animation and confirmation screen. Also two differentiated stages: Cognitive Phase and Physical Phase."
              )}
            </figcaption>
          </figure>
        </div>

        {/* IA en el proceso */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="11" title={t("IA en el proceso", "AI in the process")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Usé IA para acelerar el proceso sin perder criterio humano.",
                "I used AI to speed up the process without losing human judgment."
              )}
            </p>
            <ul className="flex flex-wrap gap-2">
              {[
                t("Investigación", "Research"),
                t("Síntesis", "Synthesis"),
                t("Prototipado", "Prototyping"),
                t("Documentación", "Documentation"),
              ].map((chip) => (
                <li
                  key={chip}
                  className="px-3 py-1.5 rounded-full border border-hairline bg-surface/60 text-foreground/90 text-sm font-medium"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Siempre con validación humana y foco en el usuario.",
                "Always with human validation and a focus on the user."
              )}
            </p>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((p) => {
              const oc = lang === "es" ? p.es : p.en;
              return (
                <a
                  key={p.slug}
                  href={`/#project-${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                  style={{
                    background: `linear-gradient(135deg, ${p.accentVar} 0%, color-mix(in oklab, ${p.accentVar} 70%, black) 100%)`,
                  }}
                >
                  <div className="aspect-[4/3] flex items-center justify-center bg-black/10">
                    <ProjectVisual
                      project={p}
                      imageSrc={p.media?.hero}
                      className="p-6"
                      imageClassName={
                        p.slug === "komu-ai"
                          ? "h-[82%] w-auto max-w-[82%] object-contain translate-x-2"
                          : undefined
                      }
                    />
                  </div>
                  <div className="p-6 text-white">
                    <div className="font-mono tracking-[0.2em] uppercase text-xs text-white/90 mb-2 drop-shadow-sm">
                      {p.client}
                    </div>
                    <div className="font-display text-xl leading-tight text-white drop-shadow-sm">
                      {oc.title}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </article>
  );
}
