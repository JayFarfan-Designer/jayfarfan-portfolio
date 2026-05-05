import certeziaHero from "@/assets/certezia-hero.png";
import pabloHero from "@/assets/pablo-hero.png";

export type ProjectMedia = {
  /** Easily replaceable: swap this image src later. */
  hero: string;
  /** Optional supporting visuals for case study */
  supporting?: string[];
};

export type Project = {
  slug: string;
  number: string;
  client: string;
  /** Tailwind bg class using design token */
  accentClass: string;
  /** Color used by SVG illustrations */
  accentVar: string;
  illustration: "phone" | "chat" | "marketplace" | "ecommerce" | "dashboard" | "publicservice";
  comingSoon?: boolean;
  es: { title: string; description: string };
  en: { title: string; description: string };
  tags: string[];
  media?: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "certezia",
    number: "01",
    client: "Certezia",
    accentClass: "bg-project-certezia",
    accentVar: "var(--project-certezia)",
    illustration: "phone",
    media: { hero: certeziaHero },
    es: {
      title: "Rediseñando la firma digital en un flujo de alta fricción",
      description:
        "Optimicé el flujo principal de Certezia, reduciendo la fricción en su momento más crítico: la interacción entre el teléfono y un documento físico.\nValidado con usuarios, el resultado fue una experiencia más clara, confiable y fácil de completar.",
    },
    en: {
      title: "Redesigning the digital signature in a high-friction flow",
      description:
        "I optimized Certezia's core flow, reducing friction at its most critical moment: the interaction between the phone and a physical document.\nValidated with users, the result was a clearer, more reliable, and easier-to-complete experience.",
    },
    tags: ["Flow Optimization", "NFC Interaction", "User Testing", "Prototyping", "AI-assisted Design"],
  },
  {
    slug: "komu-ai",
    number: "02",
    client: "Pablo / Komu AI",
    accentClass: "bg-project-komu",
    accentVar: "var(--project-komu)",
    illustration: "chat",
    comingSoon: true,
    media: { hero: pabloHero },
    es: {
      title: "Construyendo el entorno digital completo para un asistente financiero en WhatsApp",
      description:
        "Co-fundé y Re-diseñé Pablo, un asistente financiero con IA en WhatsApp, diseñando su experiencia conversacional, Dashboard y Landing page.\nA partir de Research profundo, transformé necesidades de usuarios en un sistema digital completo.\nEl resultado fue una experiencia más clara, útil y cercana, con mejoras directas en la adopción y conversión del producto.",
    },
    en: {
      title: "Building the complete digital environment for a WhatsApp financial assistant",
      description:
        "Co-founded and Re-designed Pablo, an AI financial assistant on WhatsApp, designing its conversational experience, Dashboard and Landing page.\nFrom deep Research, I transformed user needs into a complete digital system.\nThe result was a clearer, more useful and closer experience, with direct improvements in product adoption and conversion.",
    },
    tags: ["Fintech", "AI Product", "WhatsApp UX", "Product Strategy", "MVP"],
  },
  {
    slug: "karway",
    number: "03",
    client: "Karway",
    accentClass: "bg-project-karway",
    accentVar: "var(--project-karway)",
    illustration: "marketplace",
    comingSoon: true,
    es: {
      title: "Construyendo la visión de producto para un marketplace automotriz",
      description:
        "Liderazgo de iniciativas de producto para un marketplace automotriz, conectando objetivos de negocio, usuarios, viabilidad técnica y roadmap.",
    },
    en: {
      title: "Shaping the product vision for an automotive marketplace",
      description:
        "Led product initiatives for an automotive marketplace, connecting business goals, users, technical feasibility and roadmap decisions.",
    },
    tags: ["Product Management", "Marketplace", "UX Strategy", "AI-assisted Analysis"],
  },
  {
    slug: "kindberry",
    number: "04",
    client: "KindBerry",
    accentClass: "bg-project-kindberry",
    accentVar: "var(--project-kindberry)",
    illustration: "ecommerce",
    comingSoon: true,
    es: {
      title: "Diseñando un e-commerce premium desde research hasta UX/UI",
      description:
        "Diseño de producto digital para una marca premium de ropa infantil, combinando research, benchmark, arquetipos y objetivos de negocio.",
    },
    en: {
      title: "Designing a premium e-commerce experience from research to UX/UI",
      description:
        "Digital product design for a premium children's clothing brand, combining research, benchmarking, archetypes and business goals.",
    },
    tags: ["E-commerce", "UX Research", "UI Design", "Benchmark", "Product Design"],
  },
  {
    slug: "pacifico-seguros",
    number: "05",
    client: "Pacífico Seguros",
    accentClass: "bg-project-pacifico",
    accentVar: "var(--project-pacifico)",
    illustration: "dashboard",
    comingSoon: true,
    es: {
      title: "Mejorando experiencias digitales en servicios financieros y seguros",
      description:
        "Diseño UX/UI e investigación para productos digitales del sector asegurador, traduciendo necesidades de usuarios y stakeholders en soluciones claras.",
    },
    en: {
      title: "Improving digital experiences in financial services and insurance",
      description:
        "UX/UI design and research for insurance digital products, translating user and stakeholder needs into clear solutions.",
    },
    tags: ["UX Design", "UX Research", "Insurance", "User Flows", "Service Design"],
  },
  {
    slug: "minsa",
    number: "06",
    client: "MINSA / Digital Humans",
    accentClass: "bg-project-minsa",
    accentVar: "var(--project-minsa)",
    illustration: "publicservice",
    comingSoon: true,
    es: {
      title: "Rediseñando una experiencia pública usada por millones de ciudadanos",
      description:
        "Participación en el rediseño de la app del Ministerio de Salud del Perú para visualizar información de vacunación COVID-19 y generar certificados digitales.",
    },
    en: {
      title: "Redesigning a public experience used by millions of citizens",
      description:
        "Participated in the redesign of Peru's Ministry of Health app, used to view COVID-19 vaccination information and generate digital certificates.",
    },
    tags: ["GovTech", "UX/UI", "Information Architecture", "Accessibility", "High-impact Product"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
