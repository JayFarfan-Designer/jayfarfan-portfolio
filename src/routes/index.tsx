import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { UXProcess } from "@/components/UXProcess";
import { Skillset } from "@/components/Skillset";
import { Endorsements } from "@/components/Endorsements";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jay Farfan — Senior Product Designer & UX/UI Designer" },
      {
        name: "description",
        content:
          "Portfolio of Jay Farfan, Senior Product Designer combining strategy, human judgment and AI to craft simple, scalable digital products.",
      },
      { property: "og:url", content: "https://jayfarfan.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://jayfarfan.com/" },
      { rel: "alternate", hrefLang: "es", href: "https://jayfarfan.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://jayfarfan.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://jayfarfan.com/" },
    ],
  }),

});

function Index() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <UXProcess />
      <Skillset />
      <Endorsements />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
