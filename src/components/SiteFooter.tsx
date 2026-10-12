import { useLanguage } from "@/lib/language";
import { trackEvent } from "@/lib/analytics";

export function SiteFooter() {
  const { lang, t } = useLanguage();
  return (
    <footer className="latest-footer">
      <div className="latest-wrap latest-footer-grid">
        <div>
          <a href="/" className="latest-wordmark footer" aria-label="Jay Farfán, inicio"><span>Jay Farfán</span><i>.</i></a>
          <p>{t("Product Designer peruano, basado en Quito. Trabajo en productos digitales entre research, estrategia y UX/UI.","Peruvian Product Designer based in Quito. I work on digital products across research, strategy and UX/UI.")}</p>
        </div>
        <div className="latest-footer-links">
          <a href="/contact" onClick={()=>trackEvent("contact_click",{ target:"contact_page", language:lang })}>{t("Contacto","Contact")}</a>
          <a href="https://www.linkedin.com/in/jayfarfan/" target="_blank" rel="noreferrer" onClick={()=>trackEvent("linkedin_click",{ target:"jayfarfan", language:lang })}>LinkedIn ↗</a>
          <a href="mailto:jayf@digitalhumans.design" onClick={()=>trackEvent("contact_click",{ target:"email", language:lang })}>jayf@digitalhumans.design</a>
        </div>
      </div>
      <div className="latest-wrap">
        <p className="latest-footer-note">{t("Este portfolio se construyó enteramente con IA. Sin abrir Figma ni una vez. 🤖","This portfolio was built entirely with AI. Without opening Figma even once. 🤖")}</p>
      </div>
    </footer>
  );
}
