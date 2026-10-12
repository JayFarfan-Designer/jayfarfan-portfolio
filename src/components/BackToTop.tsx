import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      setVisible(max > 0 && window.scrollY >= max * 0.8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <button
      className={visible ? "latest-back-to-top is-visible" : "latest-back-to-top"}
      type="button"
      aria-label={t("Volver arriba", "Back to top")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
