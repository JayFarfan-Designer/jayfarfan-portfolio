import { useLanguage } from "@/lib/language";
import { latestImages } from "@/data/latestAssets";
import { trackEvent } from "@/lib/analytics";

type Localized = { es: string; en: string };

const quotes = [
  { img: latestImages.eliana, name: "Eliana Campos del Valle", role: "Design Lead · Produbanco", url: "https://www.linkedin.com/in/eliana-campos-designer/", quote: { es: "“Destaco su habilidad para conectar diseño, negocio y tecnología, entendiendo profundamente las necesidades de los usuarios para proponer soluciones claras y valiosas.”", en: "“I highlight his ability to connect design, business and technology, deeply understanding user needs to propose clear and valuable solutions.”" } },
  { img: latestImages.solangie, name: "Solangie Chuica de la Cruz", role: "Product Owner · Pacífico Seguros", url: "https://www.linkedin.com/in/solangie-chuica-de-la-cruz-180a5243/", quote: { es: "Jay siempre mantuvo el foco en el usuario, transformando flujos complejos en experiencias simples, intuitivas y fáciles de usar. Además, destacó por su comunicación y coordinación con distintas áreas del equipo.", en: "Jay always kept the focus on the user, transforming complex flows into simple, intuitive, and easy-to-use experiences. Furthermore, he stood out for his communication and coordination with different areas of the team." } },
  { img: latestImages.rodrigo, name: "Rodrigo Solís", role: "CEO/Founder · Pablo IA", url: "https://www.linkedin.com/in/rodrigo-solis-1958751bb/", quote: { es: "“Fue un placer trabajar con Jay. Siempre pone al usuario en el centro y tiene la capacidad de ayudar al equipo a entenderlo en profundidad. En Pablo nos ayudó a conectar las necesidades del usuario con el producto y a construir el flujo inicial de la experiencia.”", en: "“It was a pleasure working with Jay. He always puts the user at the center and has the ability to help the team understand them in depth. At Pablo he helped us connect user needs with the product and build the initial flow of the experience.”" } },
  { img: latestImages.willington, name: "Willington Jesús Ortiz Maurtua", role: "Software Engineer · Inetum", url: "https://www.linkedin.com/in/willington-jesus-ortiz-maurtua-a96163145/", quote: { es: "“Lo que más destaco de Jay es su capacidad para mantener siempre al usuario como prioridad, transformando necesidades complejas en experiencias claras, funcionales y bien resueltas.”", en: "“What I highlight most about Jay is his ability to always keep the user as a priority, transforming complex needs into clear, functional, and well-resolved experiences.”" } },
] as const;

export function LatestEndorsements() {
  const { lang, t } = useLanguage();
  return (
    <section className="latest-section">
      <div className="latest-wrap">
        <div className="latest-eyebrow">{t("Recomendaciones","Endorsements")}</div>
        <h2 className="latest-quotes-title">{t("Lo que dicen las personas con las que he trabajado","What people I’ve worked with say")}</h2>
        <div className="latest-quotes">
          {quotes.map((q) => (
            <figure className="latest-quote" key={q.name}>
              <p>{q.quote[lang]}</p>
              <div className="latest-who">
                <img src={q.img} alt="" loading="lazy" decoding="async" />
                <div>
                  <a href={q.url} target="_blank" rel="noreferrer" onClick={()=>trackEvent("linkedin_click",{ target:q.name, language:lang })}>{q.name}</a>
                  <span>{q.role}</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LatestContactSection({ custom }: { custom?: Localized }) {
  const { lang, t } = useLanguage();
  const cv = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  const copy = custom?.[lang] ?? t(
    "Trabajo desde Quito, Ecuador, y estoy abierto a oportunidades como Product Designer / UX/UI Designer y a proyectos freelance. Colaboro en remoto con equipos de cualquier parte del mundo.",
    "I’m based in Quito, Ecuador, and open to Product Designer / UX/UI Designer opportunities and freelance projects. I collaborate remotely with teams anywhere in the world."
  );
  return (
    <section className="latest-section" id="contact">
      <div className="latest-wrap latest-contact-grid">
        <div>
          <div className="latest-eyebrow">{t("Contacto","Contact")}</div>
          <h2>{t("Trabajemos juntos. Conversemos.","Let’s work together. Let’s talk.")}</h2>
        </div>
        <div>
          <p className="latest-lead">{copy}</p>
          <div className="latest-actions">
            <a className="latest-btn primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=josem4n@gmail.com" target="_blank" rel="noreferrer" onClick={()=>trackEvent("contact_click",{ target:"gmail_compose", language:lang })}>{t("Conversemos","Let’s talk")} ↗</a>
            <a className="latest-btn secondary" href={cv} download onClick={()=>trackEvent("cv_download",{ language:lang, target:"contact_section" })}>{t("Descargar CV","Download CV")} ↓</a>
            <a className="latest-btn secondary" href="https://www.linkedin.com/in/jayfarfan/" target="_blank" rel="noreferrer" onClick={()=>trackEvent("linkedin_click",{ target:"jayfarfan", language:lang })}>LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
