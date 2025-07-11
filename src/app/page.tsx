import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { About } from "@/components/about";
import { MelasmaDetector } from "@/components/melasma-detector";
import { Testimonials } from "@/components/testimonials";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Location } from "@/components/location";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <About />
        <MelasmaDetector />
        <Testimonials />
        <Process />
        <Faq />
        <Location />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
