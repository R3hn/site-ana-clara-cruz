import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedDiv } from "./animated-div";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-background pt-32 pb-16 md:pt-48 md:pb-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Coluna de Texto */}
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
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-14 px-8 text-base">
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

          {/* Coluna da Imagem */}
          <AnimatedDiv animationClass="animate-fade-in-right" delay={200} className="relative order-first lg:order-last flex items-center justify-center">
             <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white/50">
               <Image 
                 src="/foto.jpg"
                 alt="Dra. Ana Clara Cruz"
                 fill
                 className="object-cover"
                 style={{ objectPosition: 'top' }}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 priority
               />
             </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
