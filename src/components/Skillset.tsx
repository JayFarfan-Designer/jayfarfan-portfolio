import { useLanguage } from "@/lib/language";

const blocks = [
  {
    es: { heading: "Estrategia de producto" },
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
      ["Usability improvement", "Usability improvement"],
    ],
  },
  {
    es: { heading: "UI Design" },
    en: { heading: "UI Design" },
    skills: [
      ["Visual Design", "Visual Design"],
      ["Design Systems", "Design Systems"],
      ["Responsive Interfaces", "Responsive Interfaces"],
      ["Interaction Design", "Interaction Design"],
      ["Component Thinking", "Component Thinking"],
      ["High-fidelity prototypes", "High-fidelity prototypes"],
    ],
  },
  {
    es: { heading: "Research & Discovery" },
    en: { heading: "Research & Discovery" },
    skills: [
      ["User Interviews", "User Interviews"],
      ["Benchmarking", "Benchmarking"],
      ["Competitive Analysis", "Competitive Analysis"],
      ["Personas / arquetipos", "Personas / archetypes"],
      ["Research synthesis", "Research synthesis"],
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
      ["AI-assisted wireframing", "AI-assisted wireframing"],
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
      ["Stakeholder alignment", "Stakeholder alignment"],
      ["Cross-functional collaboration", "Cross-functional collaboration"],
      ["Design communication", "Design communication"],
      ["Team rituals", "Team rituals"],
      ["Knowledge sharing", "Knowledge sharing"],
    ],
  },
];

export function Skillset() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">— Skillset</div>
            <h2 className="headline-lg text-balance">Skillset.</h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-base md:text-lg text-muted-foreground max-w-xl text-pretty">
              {t(
                "Combino métodos de producto, diseño, research, IA y colaboración para llevar ideas complejas hacia soluciones implementables.",
                "I combine product methods, design, research, AI and collaboration to move complex ideas toward implementable solutions."
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-hairline">
          {blocks.map((b, i) => {
            const heading = lang === "es" ? b.es.heading : b.en.heading;
            return (
              <div
                key={i}
                className="border-b border-hairline md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(odd)]:border-r-0 [border-color:var(--color-hairline)] p-8 md:p-10"
              >
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl mb-6">{heading}</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {b.skills.map((s, j) => (
                    <li key={j}>{lang === "es" ? s[0] : s[1]}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
