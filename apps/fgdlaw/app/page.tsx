import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Quote } from "@/components/Quote";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Stats />
        <Team />
        <Quote />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
