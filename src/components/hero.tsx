import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { AnimatedDiv } from "./animated-div";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white text-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Dra. Ana Clara Cruz - Fundo"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        data-ai-hint="dermatologist portrait"
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10"></div>
      
      <div className="container relative z-20 pt-20 pb-16 md:pt-0 md:pb-0">
        <AnimatedDiv animationClass="animate-fade-in-up" className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-tight drop-shadow-xl">
            Dra. Ana Clara Cruz
          </h1>
          <p className="mt-4 font-body text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg font-light">
            Dermatologista Clínica, Estética e Cirúrgica
          </p>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Cuidados dermatológicos completos com foco na sua saúde, autoestima e beleza natural. Atendimento humanizado na Vila Olímpia.
          </p>
        </AnimatedDiv>
        <AnimatedDiv animationClass="animate-fade-in-up" delay={200} className="mt-10">
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-2xl transition-transform hover:scale-105 animate-luxury-pulse h-16 px-10 text-lg">
            <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-6 w-6 mr-3" />
              Agendar Consulta
            </a>
          </Button>
          <div className="mt-6 flex items-center justify-center text-white/90 drop-shadow-md">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium">Clínica Sense - Vila Olímpia, São Paulo - SP</span>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
