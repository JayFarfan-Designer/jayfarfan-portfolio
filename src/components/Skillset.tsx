import { useLanguage } from "@/lib/language";
import { useState } from "react";
import { Plus } from "lucide-react";

const blocks = [
  {
    es: { heading: "Diseño asistido por iA" },
    en: { heading: "Product Strategy" },
    skills: [
      ["Product Thinking", "Product Thinking"],
      ["Product Discovery", "Product Discovery"],
      ["Priorización", "Prioritization"],
      ["Roadmapping", "Roadmapping"],
      ["MVP definition", "MVP definition"],
      ["Alineamiento negocio-usuario", "Business-user alignment"],
    ],
  },
  {
    es: { heading: "UX Design" },
    en: { heading: "UX Design" },
    skills: [
      ["User flows", "User flows"],
      ["Information Architecture", "Information Architecture"],
      ["Journey Mapping", "Journey Mapping"],
      ["Wireframing", "Wireframing"],
      ["Prototyping", "Prototyping"],
      ["Mejora de usabilidad", "Usability improvement"],
    ],
  },
  {
    es: { heading: "UI Design" },
    en: { heading: "UI Design" },
    skills: [
      ["Visual Design", "Visual Design"],
      ["Design Systems", "Design Systems"],
      ["Interfaces responsivas", "Responsive Interfaces"],
      ["Interaction Design", "Interaction Design"],
      ["Component Thinking", "Component Thinking"],
      ["Prototipos high-fidelity", "High-fidelity prototypes"],
    ],
  },
  {
    es: { heading: "Research & Discovery" },
    en: { heading: "Research & Discovery" },
    skills: [
      ["Entrevistas con usuarios", "User Interviews"],
      ["Benchmarking", "Benchmarking"],
      ["Análisis competitivo", "Competitive Analysis"],
      ["Personas / arquetipos", "Personas / archetypes"],
      ["Síntesis de research", "Research synthesis"],
      ["Usability Testing", "Usability Testing"],
    ],
  },
  {
    es: { heading: "AI-assisted Design" },
    en: { heading: "AI-assisted Design" },
    skills: [
      ["ChatGPT", "ChatGPT"],
      ["Claude", "Claude"],
      ["Lovable", "Lovable"],
      ["Wireframing asistido por IA", "AI-assisted wireframing"],
      ["Síntesis con IA", "AI-assisted synthesis"],
      ["Prototipado rápido", "Rapid prototyping"],
      ["Uso responsable de IA", "Responsible AI use"],
    ],
  },
  {
    es: { heading: "Facilitación & colaboración" },
    en: { heading: "Facilitation & Collaboration" },
    skills: [
      ["Workshops", "Workshops"],
      ["Alineamiento con stakeholders", "Stakeholder alignment"],
      ["Colaboración cross-functional", "Cross-functional collaboration"],
      ["Comunicación de diseño", "Design communication"],
      ["Rituales de equipo", "Team rituals"],
      ["Compartir conocimiento", "Knowledge sharing"],
    ],
  },
];

export function Skillset() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4 text-lg">— Skillset</div>
            <h2 className="headline-lg text-balance">
              {t("Lo que sé hacer.", "What I do.")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl text-pretty">
              {t(
                "\nCombino Metodología, Diseño, Research, IA y trabajo en equipo para llevar ideas complejas hacia soluciones implementables.",
                "I combine product methods, design, research, AI and collaboration to move complex ideas toward implementable solutions."
              )}
            </p>
          </div>
        </div>

        <div className="border-t border-hairline">
          {blocks.map((b, i) => {
            const heading = lang === "es" ? b.es.heading : b.en.heading;
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-hairline">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                >
                  <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                    <span className="font-mono text-muted-foreground tabular-nums text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl font-medium tracking-tight truncate">
                      {heading}
                    </span>
                  </div>
                  <span
                    className={
                      "shrink-0 w-9 h-9 rounded-full border border-hairline flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 " +
                      (isOpen ? "rotate-45 bg-foreground text-background border-foreground" : "")
                    }
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out " +
                    (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 md:pb-10 pl-12 md:pl-20 pr-4 max-w-3xl lg:max-w-none flex flex-wrap gap-2">
                      {b.skills.map((s, j) => (
                        <span
                          key={j}
                          className="px-3.5 py-1.5 rounded-full border border-hairline text-sm text-foreground/80 bg-surface"
                        >
                          {lang === "es" ? s[0] : s[1]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
