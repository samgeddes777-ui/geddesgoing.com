import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { InsightsPreview } from "@/components/insights-preview";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <InsightsPreview />
      <Contact />
    </>
  );
}
