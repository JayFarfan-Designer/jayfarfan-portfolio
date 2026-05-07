import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { type Project, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteFooter } from "@/components/SiteFooter";
import minsaHero from "@/assets/minsa/hero.png";
import minsaOldApp from "@/assets/minsa/old-app.png";
import minsaOldUi from "@/assets/minsa/old-ui.png";
import minsaDeviceResearch from "@/assets/minsa/device-research.png";
import minsaProcess from "@/assets/minsa/process.png";
import minsaTaskflow from "@/assets/minsa/taskflow.png";
import minsaWireframes from "@/assets/minsa/wireframes.png";
import minsaDesignSystem from "@/assets/minsa/design-system.png";
import minsaComponents from "@/assets/minsa/components.png";
import minsaBeforeAfter from "@/assets/minsa/before-after.png";
import minsaFinalFlow from "@/assets/minsa/final-flow.png";
import minsaPrototype from "@/assets/minsa/prototype.png";
import minsaRealWorld from "@/assets/minsa/real-world.png";
import minsaFinalMockups from "@/assets/minsa/final-mockups.png";

type Props = { project: Project };

export function MinsaCaseStudy({ project }: Props) {
  const { t, lang } = useLanguage();
  const c = lang === "es" ? project.es : project.en;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const keyData = [
    { value: t("+10M", "+10M"), label: t("usuarios", "users") },
    { value: t("Producto estatal", "Government product"), label: t("Ministerio de Salud del Perú", "Peru's Ministry of Health") },
    { value: "Mobile-first", label: t("Diseño priorizando dispositivos limitados", "Designed prioritizing low-end devices") },
    { value: t("Accesibilidad nacional", "Nationwide accessibility"), label: t("Distintos contextos sociales y digitales", "Different social and digital contexts") },
  ];

  const problems = t(
    "Arquitectura de información confusa|Baja jerarquía visual|Problemas de accesibilidad|Experiencia inconsistente entre pantallas|Diseño poco adaptado a dispositivos limitados",
    "Confusing information architecture|Weak visual hierarchy|Accessibility issues|Inconsistent experience across screens|Poor adaptation for low-end devices"
  ).split("|");

  const results = t(
    "Experiencia más clara y accesible|Mejor adaptación mobile|Navegación más consistente|Producto utilizado por millones de ciudadanos",
    "Clearer and more accessible experience|Better mobile adaptation|More consistent navigation|Product used by millions of citizens"
  ).split("|");

  const learnings = t(
    "Diseñar accesibilidad es diseñar inclusión|El contexto real importa más que el diseño perfecto|Mobile-first cambia completamente las prioridades|La claridad visual reduce carga cognitiva",
    "Designing for accessibility means designing for inclusion|Real-world context matters more than perfect visuals|Mobile-first completely changes priorities|Visual clarity reduces cognitive load"
  ).split("|");

  const SectionHeader = ({ index, title }: { index: string; title: string }) => (
    <div className="lg:col-span-4">
      <div className="font-mono text-muted-foreground mb-3 text-sm">{index}</div>
      <h2 className="headline-md">{title}</h2>
    </div>
  );

  // Editorial figure — minimal container, subtle hairline, optional caption
  const Figure = ({
    src,
    alt,
    caption,
    aspect,
    fit = "object-contain",
  }: {
    src: string;
    alt: string;
    caption?: string;
    aspect?: string;
    fit?: string;
  }) => (
    <figure className="space-y-3">
      {aspect ? (
        <div className={`${aspect} w-full overflow-hidden flex items-center justify-center`}>
          <img src={src} alt={alt} className={`w-full h-full ${fit}`} loading="lazy" />
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      )}
      {caption && (
        <figcaption className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );

  return (
    <article>
      {/* 01 HERO */}
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
        <div className="container-editorial relative pt-12 pb-12 md:pt-24 md:pb-20 text-white">
          <Link to="/" className="eyebrow text-sm md:text-lg link-underline mb-8 md:mb-12 inline-block !text-white">
            ← {t("Volver al inicio", "Back to home")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="font-mono tracking-[0.2em] opacity-80 text-xs md:text-base">
                  {project.number}
                </span>
                <span className="block w-8 h-px bg-white/60" />
                <span className="eyebrow text-xs md:text-base !text-white">
                  {project.client.toUpperCase()}
                </span>
              </div>
              <h1 className="headline-xl text-white max-w-[18ch] text-balance text-4xl md:text-6xl lg:text-7xl">
                {c.title}
              </h1>
              <p className="mt-5 md:mt-8 text-white/90 max-w-xl text-base md:text-lg text-pretty">
                {c.description}
              </p>
              <div className="mt-6 md:mt-8 text-sm md:text-base text-white/80">
                <span className="eyebrow !text-white/70 mr-2">{t("Rol", "Role")}:</span>
                Product Designer
              </div>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/30 text-white/85 text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src={minsaHero}
                alt={c.title}
                className="w-full h-auto max-h-[620px] object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 02 KEY DATA */}
      <section className="border-b border-hairline">
        <div className="container-editorial py-12 md:py-20">
          <div className="eyebrow text-base md:text-lg mb-6 md:mb-8">— {t("DATOS CLAVE", "KEY DATA")}</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {keyData.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface p-5 md:p-8 flex flex-col gap-3 md:gap-4"
              >
                <div className="font-display font-medium tracking-tight leading-none text-xl md:text-3xl text-balance">
                  {m.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="container-editorial py-12 md:py-28 space-y-16 md:space-y-28">
        {/* 03 CONTEXTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="03" title={t("Contexto", "Context")} />
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              <p>
                {t(
                  "Durante la pandemia, millones de ciudadanos utilizaban la app del MINSA para visualizar información de vacunación y generar certificados digitales.",
                  "During the pandemic, millions of citizens used the MINSA app to access vaccination information and generate digital certificates."
                )}
              </p>
              <p>
                {t(
                  "La experiencia original presentaba problemas de claridad, accesibilidad y consistencia visual.",
                  "The original experience had issues related to clarity, accessibility and visual consistency."
                )}
              </p>
            </div>
            <Figure
              src={minsaOldApp}
              alt={t("App MINSA original en Play Store", "Original MINSA app on Play Store")}
              caption={t(
                "Experiencia original del sistema utilizado durante la pandemia.",
                "Original experience of the system used during the pandemic."
              )}
            />
          </div>
        </div>

        {/* 04 PROBLEMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="04" title={t("El problema", "The problem")} />
          <div className="lg:col-span-8 space-y-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {problems.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-hairline bg-surface px-5 py-4 text-sm md:text-base text-foreground/90 leading-snug"
                >
                  {p}
                </li>
              ))}
            </ul>
            <Figure
              src={minsaOldUi}
              alt={t("Interfaz original con problemas de jerarquía y consistencia", "Original UI with hierarchy and consistency issues")}
              caption={t(
                "Problemas de jerarquía visual y accesibilidad detectados.",
                "Visual hierarchy and accessibility issues identified."
              )}
            />
          </div>
        </div>

        {/* 05 DISCOVERY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="05" title={t("Discovery & Constraints", "Discovery & Constraints")} />
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-5 text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              <p>
                {t(
                  "Parte del proceso consistió en entender cómo accedían los peruanos a servicios digitales en contextos reales.",
                  "Part of the process focused on understanding how Peruvians accessed digital services in real-world contexts."
                )}
              </p>
              <p>
                {t(
                  "La accesibilidad y compatibilidad mobile eran críticas para el alcance del producto.",
                  "Accessibility and mobile compatibility were critical for the product's reach."
                )}
              </p>
            </div>
            <Figure
              src={minsaDeviceResearch}
              alt={t("Investigación de dispositivos y resoluciones en Perú", "Device and resolution research in Peru")}
              caption={t(
                "Análisis de dispositivos y contextos digitales reales en Perú.",
                "Analysis of devices and real digital contexts in Peru."
              )}
            />
          </div>
        </div>

        {/* 06 UX PROCESS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="06" title={t("UX Process", "UX Process")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "El rediseño se desarrolló iterando desde arquitectura y taskflows hasta wireframes, visuales y prototipos navegables.",
                "The redesign evolved iteratively from architecture and taskflows to wireframes, visuals and interactive prototypes."
              )}
            </p>
            <div className="space-y-10 md:space-y-16">
              <Figure
                src={minsaProcess}
                alt={t("Notas y diagramas del proceso", "Process notes and diagrams")}
                caption={t(
                  "Arquitectura y flujo inicial del producto.",
                  "Initial product architecture and flow."
                )}
              />
              <Figure
                src={minsaTaskflow}
                alt={t("Taskflow del Carnet de Vacunación", "Vaccination Card task flow")}
                caption={t(
                  "Mapeo de navegación y taskflows principales.",
                  "Navigation mapping and main task flows."
                )}
              />
            </div>
          </div>
        </div>

        {/* 07 WIREFRAMES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="07" title={t("Wireframes", "Wireframes")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Las primeras pantallas fueron diseñadas bajo un enfoque mobile-first, priorizando claridad y facilidad de navegación.",
                "The first screens were designed using a mobile-first approach, prioritizing clarity and ease of navigation."
              )}
            </p>
            <Figure
              src={minsaWireframes}
              alt={t("Wireframes mobile y desktop", "Mobile and desktop wireframes")}
              caption={t(
                "Exploraciones mobile-first priorizando claridad y simplicidad.",
                "Mobile-first explorations prioritizing clarity and simplicity."
              )}
            />
          </div>
        </div>

        {/* 08 DESIGN SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="08" title={t("Design System", "Design System")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Se construyó un sistema visual escalable para asegurar consistencia, accesibilidad y evolución futura del producto.",
                "A scalable visual system was built to ensure consistency, accessibility and future product evolution."
              )}
            </p>
            <div className="space-y-10 md:space-y-16">
              <Figure
                src={minsaDesignSystem}
                alt={t("Tokens y guidelines del sistema MINSA", "MINSA system tokens and guidelines")}
                caption={t(
                  "Construcción del sistema visual y estilos base.",
                  "Building the visual system and base styles."
                )}
              />
              <Figure
                src={minsaComponents}
                alt={t("Componentes y organismos del sistema", "Components and organisms of the system")}
                caption={t(
                  "Componentes reutilizables para escalabilidad y consistencia.",
                  "Reusable components for scalability and consistency."
                )}
              />
            </div>
          </div>
        </div>

        {/* 09 REDISEÑO FINAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="09" title={t("Rediseño final", "Final redesign")} />
          <div className="lg:col-span-8 space-y-10">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "El nuevo flujo priorizó claridad visual, reducción de fricción y mejor comprensión de la información crítica.",
                "The new flow prioritized visual clarity, reduced friction and better understanding of critical information."
              )}
            </p>
            <Figure
              src={minsaBeforeAfter}
              alt={t("Antes y después: del carné físico al carné digital", "Before and after: from paper card to digital card")}
              caption={t(
                "Comparación entre experiencia original y rediseño final.",
                "Comparison between the original experience and final redesign."
              )}
            />
            <Figure
              src={minsaFinalFlow}
              alt={t("Flujo final del Carnet de Vacunación", "Final Vaccination Card flow")}
              caption={t(
                "Nuevo flujo optimizado para comprensión y accesibilidad.",
                "New flow optimized for understanding and accessibility."
              )}
            />
          </div>
        </div>

        {/* 10 PROTOTYPING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="10" title={t("Prototyping", "Prototyping")} />
          <div className="lg:col-span-8 space-y-6">
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-pretty">
              {t(
                "Los prototipos navegables permitieron validar interacciones y acompañar el proceso de desarrollo del producto.",
                "Interactive prototypes helped validate interactions and support the product development process."
              )}
            </p>
            <Figure
              src={minsaPrototype}
              alt={t("Prototipos navegables en Figma — versiones iterativas", "Interactive prototypes in Figma — iterative versions")}
              caption={t(
                "Prototipos navegables utilizados para validación y desarrollo.",
                "Interactive prototypes used for validation and development."
              )}
            />
          </div>
        </div>

        {/* 11 RESULTADO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="11" title={t("Resultado", "Outcome")} />
          <div className="lg:col-span-8 space-y-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {results.map((r) => (
                <li
                  key={r}
                  className="rounded-xl border border-hairline bg-surface px-5 py-4 text-sm md:text-base text-foreground/90 leading-snug"
                >
                  {r}
                </li>
              ))}
            </ul>
            <Figure
              src={minsaRealWorld}
              alt={t("El producto en uso real, cubierto por medios", "The product in real-world use, covered by media")}
              caption={t(
                "Implementación real utilizada por millones de ciudadanos.",
                "Real implementation used by millions of citizens."
              )}
            />
          </div>
        </div>

        {/* 12 APRENDIZAJES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <SectionHeader index="12" title={t("Aprendizajes", "Takeaways")} />
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {learnings.map((l, i) => (
              <div
                key={l}
                className="rounded-2xl border border-hairline bg-surface p-6 md:p-7 flex flex-col"
              >
                <div className="font-mono text-muted-foreground mb-4 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-display text-base md:text-lg font-medium leading-snug tracking-tight text-balance">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 CIERRE VISUAL — cinematic editorial closing */}
      <section className="border-t border-hairline">
        <div className="container-editorial py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-balance">
                {t(
                  "El proyecto permitió construir una experiencia más clara, accesible y preparada para millones de ciudadanos en distintos contextos digitales.",
                  "The project helped create a clearer, more accessible experience designed for millions of citizens across different digital contexts."
                )}
              </p>
            </div>
            <div className="lg:col-span-7 flex items-center justify-center">
              <img
                src={minsaFinalMockups}
                alt={t("Mockups finales del Carnet de Vacunación", "Final Vaccination Card mockups")}
                className="w-full h-auto max-h-[620px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse other projects */}
      <section className="border-t border-hairline py-12 md:py-28">
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
