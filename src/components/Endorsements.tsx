import { useLanguage } from "@/lib/language";

const cards = [
  {
    es: "Jay trabaja con foco real en el cliente, entendiendo necesidades complejas y convirtiéndolas en flujos simples, claros y delicados.",
    en: "Jay works with a real focus on the client, understanding complex needs and turning them into simple, clear and thoughtful flows.",
    author: "Solangie Chiucca de la Cruz",
  },
  {
    es: "Destaca por tener siempre presente que el diseño debe realizarse tomando como prioridad al usuario final.",
    en: "He stands out for always keeping in mind that design should prioritize the end user.",
    author: "Willington Jesús Ortiz Maurtua",
  },
  {
    es: "Tiene una gran habilidad para comunicarse con equipos de negocio, tecnología y diseño, proponiendo soluciones de valor para los usuarios.",
    en: "He has a strong ability to communicate with business, technology and design teams, proposing valuable solutions for users.",
    author: "Eliana Campos del Valle",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Endorsements() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-24 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="eyebrow mb-4">— Endorsements</div>
          <h2 className="headline-lg text-balance">
            {t("Lo que otros destacan sobre trabajar conmigo.", "What others highlight about working with me.")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((c, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl border border-hairline bg-surface p-8 md:p-10 flex flex-col transition-colors hover:bg-surface-elevated"
            >
              <div className="font-display text-5xl text-muted-foreground/40 leading-none mb-4">"</div>
              <blockquote className="text-base md:text-lg text-foreground/90 font-display leading-snug text-pretty">
                {lang === "es" ? c.es : c.en}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-hairline flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 border border-hairline flex items-center justify-center font-mono text-xs">
                  {initials(c.author)}
                </div>
                <div>
                  <div className="text-sm font-medium">{c.author}</div>
                  <div className="eyebrow text-muted-foreground">— {t("Colega", "Colleague")}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
