import { useLanguage } from "@/lib/language";

const cards = [
  {
    es: "Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar. Además, destacó por su comunicación y coordinación con distintas áreas del equipo.",
    en: "Jay always kept the focus on the user, transforming complex flows into simple, intuitive, and easy-to-use experiences. Furthermore, he stood out for his communication and coordination with different areas of the team.",
    author: "Solangie Chiucca de la Cruz",
    role_es: "Colega",
    role_en: "Colleague",
  },
  {
    es: "Destaco su habilidad para conectar diseño, negocio y tecnología, entendiendo profundamente las necesidades de los usuarios para proponer soluciones claras y valiosas.",
    en: "I highlight his ability to connect design, business and technology, deeply understanding user needs to propose clear and valuable solutions.",
    author: "Willington Jesús Ortiz Maurtua",
    role_es: "Colega",
    role_en: "Colleague",
  },
  {
    es: "Tiene una gran habilidad para comunicarse con equipos de negocio, tecnología y diseño, proponiendo soluciones de valor para los usuarios.",
    en: "He has a strong ability to communicate with business, technology and design teams, proposing valuable solutions for users.",
    author: "Eliana Campos del Valle",
    role_es: "Colega",
    role_en: "Colleague",
  },
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

export function Endorsements() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="eyebrow mb-4 text-lg">— {t("RECOMENDACIONES", "RECOMENDACIONES")}</div>
          <h2 className="headline-lg text-balance">
            {t(
              "Lo que otros destacan sobre trabajar conmigo",
              "What others highlight about working with me."
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl border border-hairline bg-surface/60 backdrop-blur-sm p-8 md:p-9 flex flex-col transition-all duration-300 hover:border-foreground/25 hover:bg-surface"
            >
              <div className="font-display text-foreground/30 text-sm tracking-[0.2em] uppercase mb-6">
                {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </div>
              <blockquote className="text-foreground/90 text-base md:text-[1.05rem] leading-relaxed md:text-lg text-base text-pretty flex-1">
                “{lang === "es" ? c.es : c.en}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-hairline flex items-center gap-3 text-lg">
                <div className="w-10 h-10 rounded-full bg-foreground/8 border border-hairline flex items-center justify-center font-mono text-[0.7rem] tracking-wider">
                  {initials(c.author)}
                </div>
                <div>
                  <div className="text-sm font-medium tracking-tight">{c.author}</div>
                  <div className="eyebrow text-lg text-muted-foreground mt-0.5">
                    {t(c.role_es, c.role_en)}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
