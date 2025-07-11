import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedDiv } from "./animated-div";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-24 flex items-center bg-cream overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <AnimatedDiv animationClass="animate-fade-in-up" delay={0}>
              <h1 className="font-headline text-5xl md:text-6xl font-medium text-accent leading-tight">
                Dra. Ana Clara Cruz
              </h1>
              <h2 className="font-headline text-4xl md:text-5xl font-medium text-primary leading-tight mt-2 mb-6">
                Dermatologista Clínica,<br/> Estética e Cirúrgica
              </h2>
            </AnimatedDiv>
            
            <AnimatedDiv animationClass="animate-fade-in-up" delay={200}>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg">
                Cuidados da pele com foco na sua saúde, autoestima e beleza natural. Atendimento humanizado na Vila Olímpia.
              </p>
            </AnimatedDiv>

            <AnimatedDiv animationClass="animate-fade-in-up" delay={400} className="mt-8">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg transition-transform hover:scale-105 h-14 px-8 text-base">
                <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5 mr-3" />
                  Agendar Consulta Dermatológica
                </a>
              </Button>
              <div className="mt-6 flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Clínica Sense - Vila Olímpia, São Paulo - SP</span>
              </div>
            </AnimatedDiv>
          </div>

          <div className="relative hidden md:flex items-center justify-center h-full">
            <AnimatedDiv animationClass="animate-luxury-zoom" delay={300} className="relative w-[450px] h-[450px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/60 rounded-full filter blur-xl opacity-80"></div>
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/70 rounded-full filter blur-2xl opacity-90"></div>
                
                <Image
                  src="https://placehold.co/400x500.png"
                  alt="Dra. Ana Clara Cruz"
                  width={400}
                  height={500}
                  quality={95}
                  priority
                  data-ai-hint="dermatologist portrait"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-[50%] object-cover w-[320px] h-[400px] shadow-2xl"
                  style={{
                    maskImage: 'radial-gradient(circle at center, white 70%, transparent 100%)',
                  }}
                />

                <div className="absolute bottom-0 right-0 z-20 bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg w-64">
                    <p className="font-bold text-accent text-lg">Dra. Ana Clara Cruz</p>
                    <p className="text-muted-foreground text-sm">Dermatologista CRM-SP 123456</p>
                    <p className="text-muted-foreground text-sm font-medium">Especialista em Melasma</p>
                </div>
            </AnimatedDiv>
          </div>

        </div>
      </div>
    </section>
  );
}
