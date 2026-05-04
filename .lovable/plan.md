## Plan

**Archivo:** `src/components/SelectedWork.tsx` (línea 91-99)

Como el componente mapea sobre `projects`, cambiar el span una sola vez aplica el nuevo estilo a **todas las tarjetas de proyectos** automáticamente.

**Cambio:**

Reemplazar:
```tsx
<span className="inline-flex items-center gap-2 text-white font-medium link-underline text-xl">
  {p.comingSoon ? t("Próximamente", "Coming soon") : t("Ver caso", "View case study")}
  <span className="transition-transform group-hover:translate-x-1">
    →
  </span>
</span>
```

Por:
```tsx
<span className="btn-base btn-secondary group/btn">
  {p.comingSoon ? t("Próximamente", "Coming soon") : t("Ver caso", "View case study")}
  <span className="inline-block transition-transform group-hover/btn:translate-x-1">
    →
  </span>
</span>
```

**Notas:**
- Se mantiene la flecha `→` (derecha), tal como pediste.
- Se mantiene como `<span>` porque la tarjeta entera ya está envuelta en `<Link>` (no se pueden anidar elementos interactivos).
- Se usa `group/btn` (grupo nombrado) para que la flecha se anime al hacer hover sobre el propio botón, no sobre toda la tarjeta.
- Aplica a los 2 proyectos actuales y a cualquier proyecto futuro que se agregue al array.
