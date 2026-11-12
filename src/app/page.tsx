import About from "@/components/About";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 bg-background shadow-[0_28px_50px_rgba(28,25,23,0.16)]">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
