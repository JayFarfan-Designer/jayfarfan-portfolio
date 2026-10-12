import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const cvHref = lang === "es" ? "/CV_JayFarfan_ESP.pdf" : "/CV_JayFarfan_ENG.pdf";
  return (
    <header className="latest-site-header">
      <div className="latest-wrap latest-header-bar">
        <Link to="/" className="latest-wordmark" aria-label="Jay Farfán, inicio">
          <span>Jay Farfán</span><i>.</i>
        </Link>
        <button className="latest-menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>☰</button>
        <nav className={open ? "latest-nav open" : "latest-nav"}>
          <Link to="/work" onClick={()=>setOpen(false)}>{t("Experiencia","Experience")}</Link>
          <Link to="/process" onClick={()=>setOpen(false)}>{t("Proceso","Process")}</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>{t("Sobre mí","About")}</Link>
          <Link to="/contact" onClick={()=>{ trackEvent("contact_click",{ target:"contact_page", language:lang }); setOpen(false); }}>{t("Contacto","Contact")}</Link>
          <div className="latest-lang">
            <button aria-pressed={lang==="es"} onClick={()=>{ if(lang!=="es") trackEvent("language_switch",{ language:"es", previous_language:lang }); setLang("es"); }}>ES</button>
            <button aria-pressed={lang==="en"} onClick={()=>{ if(lang!=="en") trackEvent("language_switch",{ language:"en", previous_language:lang }); setLang("en"); }}>EN</button>
          </div>
          <a className="latest-btn secondary small" href={cvHref} download onClick={()=>trackEvent("cv_download",{ language:lang, target:"header" })}>{t("Descargar CV","Download CV")} ↓</a>
        </nav>
      </div>
    </header>
  );
}
