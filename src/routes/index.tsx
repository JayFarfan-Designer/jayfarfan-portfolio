import { createFileRoute } from "@tanstack/react-router";
import { LatestHome } from "@/components/LatestHome";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jay Farfán · Product Designer" },
      { name: "description", content: "Product Designer en Quito. Convierto procesos técnicos y reglas de negocio en recorridos que la gente completa sin ayuda." },
      { property: "og:url", content: "https://jayfarfan.com" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Jay Farfán — Product Designer" },
      { property: "og:description", content: "Product Designer working across UX/UI, product strategy and AI-assisted design for Fintech, GovTech and digital products." },
      { property: "og:image", content: "https://jayfarfan.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Jay Farfán — Product Designer Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jay Farfán — Product Designer" },
      { name: "twitter:description", content: "Product Designer working across UX/UI, product strategy and AI-assisted design for Fintech, GovTech and digital products." },
      { name: "twitter:image", content: "https://jayfarfan.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://jayfarfan.com/" }],
  }),
});

function Index() {
  return (
    <>
      <LatestHome />
      <SiteFooter />
    </>
  );
}
