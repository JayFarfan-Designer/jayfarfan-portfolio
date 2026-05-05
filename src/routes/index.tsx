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
      { title: "Jay Farfan — SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER" },
      {
        name: "description",
        content:
          "Portfolio of Jay Farfan, SENIOR PRODUCT DESIGNER - SENIOR UX/UI DESIGNER combining strategy, human judgment and AI to craft simple, scalable digital products.",
      },
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
