import { createFileRoute } from "@tanstack/react-router";
import { LatestHome } from "@/components/LatestHome";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jay Farfán · Product Designer" },
      { name: "description", content: "Product Designer en Quito. Convierto procesos técnicos y reglas de negocio en recorridos que la gente completa sin ayuda." },
      { property: "og:url", content: "https://jayfarfan.com/" },
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
