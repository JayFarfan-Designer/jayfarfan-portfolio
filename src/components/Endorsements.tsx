import { useLanguage } from "@/lib/language";
import solangieImg from "@/assets/solangie.jpg";
import willingtonImg from "@/assets/willington.jpg";
import elianaImg from "@/assets/eliana.jpg";

const cards = [
  {
    es: "Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar. Además, destacó por su comunicación y coordinación con distintas áreas del equipo.",
    en: "Jay always kept the focus on the user, transforming complex flows into simple, intuitive, and easy-to-use experiences. Furthermore, he stood out for his communication and coordination with different areas of the team.",
    author: "Solangie Chiucca de la Cruz",
    role_es: "Product Owner · Pacífico Seguros",
    role_en: "Product Owner · Pacífico Seguros",
    image: solangieImg,
  },
  {
    es: "“Lo que más destaco de Jay es su capacidad para mantener siempre al usuario como prioridad, transformando necesidades complejas en experiencias claras, funcionales y bien resueltas.”",
    en: "“What I highlight most about Jay is his ability to always keep the user as a priority, transforming complex needs into clear, functional, and well-resolved experiences.”",
    author: "Willington Jesús Ortiz Maurtua",
    role_es: "Software Engineer · Inetum",
    role_en: "Software Engineer · Inetum",
    image: willingtonImg,
  },
  {
    es: "“Destaco su habilidad para conectar diseño, negocio y tecnología, entendiendo profundamente las necesidades de los usuarios para proponer soluciones claras y valiosas.”",
    en: "“I highlight his ability to connect design, business and technology, deeply understanding user needs to propose clear and valuable solutions.”",
    author: "Eliana Campos del Valle",
    role_es: "Design Lead · Produbanco",
    role_en: "Design Lead · Produbanco",
    image: elianaImg,
  },
];

export function Endorsements() {
  const { t, lang } = useLanguage();
  return (
    <section className="py-16 md:py-32 border-t border-hairline">
      <div className="container-editorial">
        <div className="mb-10 md:mb-24 max-w-3xl">
          <div className="eyebrow mb-4 text-lg">— {t("RECOMENDACIONES", "ENDORSEMENTS")}</div>
          <h2 className="headline-lg text-balance">
            {t(
              "Lo que otros destacan sobre trabajar conmigo",
              "What others highlight about working with me."
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl border border-hairline bg-surface/40 p-7 md:p-10 flex flex-col transition-all duration-300 hover:border-foreground/20 hover:bg-surface/70"
            >
              <div
                aria-hidden
                className="font-display text-foreground/20 text-3xl md:text-4xl leading-none mb-6 select-none"
              >
                “
              </div>
              <blockquote className="text-foreground/90 text-base md:text-[1.05rem] leading-[1.75] text-pretty flex-1 font-light">
                {lang === "es" ? c.es : c.en}
              </blockquote>
              <figcaption className="mt-8 pt-5 md:mt-10 md:pt-6 border-t border-hairline flex items-center gap-4">
                <img
                  src={c.image}
                  alt={c.author}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-hairline"
                />
                <div>
                  <div className="text-sm font-medium tracking-tight text-foreground">
                    {c.author}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-tight">
                    {lang === "es" ? c.role_es : c.role_en}
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
