import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedDiv } from "./animated-div";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-background pt-40 pb-24 md:pt-48 md:pb-32"
    >
      <div className="absolute inset-0 z-0 opacity-20 md:opacity-100">
        <Image
          src="/foto.jpg"
          alt="Consultório da Dra. Ana Clara Cruz"
          fill
          className="object-cover"
          style={{ objectPosition: 'top' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-r md:from-background md:via-background/70 md:to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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
          
          {/* Coluna vazia para empurrar o texto para a esquerda em telas grandes */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
