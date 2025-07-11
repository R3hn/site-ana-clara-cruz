import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedDiv } from "./animated-div";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center w-full min-h-screen overflow-hidden bg-background pt-32 pb-16 md:pt-56 md:pb-24"
    >
      {/* Desktop Image Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/foto.jpg"
          alt="Consultório da Dra. Ana Clara Cruz"
          fill
          className="object-cover"
          style={{ objectPosition: '80% 50%' }}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-40% to-transparent to-60%"></div>
      </div>
      
      {/* Mobile-First Layout */}
      <div className="container relative z-10 md:grid md:grid-cols-2 md:items-center md:gap-12">
        {/* Mobile-only Image & Text Overlay */}
        <div className="md:hidden relative mx-auto -mt-8 -mb-16 aspect-[9/16] w-[calc(100%+4rem)] max-w-none -translate-x-8">
            <Image
              src="/foto.jpg"
              alt="Dra. Ana Clara Cruz"
              fill
              className="object-cover"
              style={{ objectPosition: 'top' }}
              priority
              quality={90}
              data-ai-hint="doctor portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                 <div className="text-left">
                    <AnimatedDiv animationClass="animate-fade-in-up" delay={0}>
                      <h1 className="font-headline text-5xl md:text-6xl font-medium leading-tight text-white">
                        Dra. Ana Clara Cruz
                      </h1>
                      <h2 className="font-headline text-4xl md:text-5xl font-medium text-primary-soft leading-tight mt-2 mb-6">
                        Dermatologia Clínica,<br/> Estética e Cirúrgica
                      </h2>
                    </AnimatedDiv>
                    
                    <AnimatedDiv animationClass="animate-fade-in-up" delay={200}>
                      <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto md:mx-0 text-white/90">
                        Cuidados da pele com foco na sua saúde, autoestima e beleza natural. Atendimento humanizado na Vila Olímpia.
                      </p>
                    </AnimatedDiv>

                    <AnimatedDiv animationClass="animate-fade-in-up" delay={400} className="mt-8">
                      <Button asChild size="lg" className="rounded-full bg-white hover:bg-cream text-accent font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-14 px-8 text-base">
                        <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                          <Calendar className="h-5 w-5 mr-3" />
                          Agendar Consulta
                        </a>
                      </Button>
                      <div className="mt-6 flex items-center justify-start text-white/90">
                        <MapPin className="h-5 w-5 mr-2 text-primary-soft" />
                        <span className="font-medium">Clínica Sense - Vila Olímpia, SP</span>
                      </div>
                    </AnimatedDiv>
                  </div>
            </div>
        </div>

        {/* Desktop-only Text */}
        <div className="text-center md:text-left hidden md:block">
            <AnimatedDiv animationClass="animate-fade-in-up" delay={0}>
              <h1 className="font-headline text-5xl md:text-6xl font-medium text-accent leading-tight">
                Dra. Ana Clara Cruz
              </h1>
              <h2 className="font-headline text-4xl md:text-5xl font-medium text-primary leading-tight mt-2 mb-6">
                Dermatologia Clínica,<br/> Estética e Cirúrgica
              </h2>
            </AnimatedDiv>
            
            <AnimatedDiv animationClass="animate-fade-in-up" delay={200}>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                Cuidados da pele com foco na sua saúde, autoestima e beleza natural. Atendimento humanizado na Vila Olímpia.
              </p>
            </AnimatedDiv>

            <AnimatedDiv animationClass="animate-fade-in-up" delay={400} className="mt-8">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-auto py-4 px-6 md:h-14 md:px-8 text-base">
                <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer" className="flex items-center text-center">
                  <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Agendar Consulta<br className="sm:hidden"/> Dermatológica</span>
                </a>
              </Button>
              <div className="mt-6 flex items-center justify-center md:justify-start text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">Clínica Sense - Vila Olímpia, São Paulo - SP</span>
              </div>
            </AnimatedDiv>
          </div>
        
        <div className="hidden lg:block">
          {/* This space is intentionally left blank on desktop to push text to the left column */}
        </div>
      </div>
    </section>
  );
}
