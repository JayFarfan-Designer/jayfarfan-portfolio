import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { useState } from "react";

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
          <a href="/#work" onClick={()=>setOpen(false)}>{t("Experiencia","Experience")}</a>
          <Link to="/about" onClick={()=>setOpen(false)}>{t("Proceso","Process")}</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>{t("Sobre mí","About")}</Link>
          <a href="/#contact" onClick={()=>setOpen(false)}>{t("Contacto","Contact")}</a>
          <div className="latest-lang">
            <button aria-pressed={lang==="es"} onClick={()=>setLang("es")}>ES</button>
            <button aria-pressed={lang==="en"} onClick={()=>setLang("en")}>EN</button>
          </div>
          <a className="latest-btn secondary small" href={cvHref} download>{t("Descargar CV","Download CV")} ↓</a>
        </nav>
      </div>
    </header>
  );
}
