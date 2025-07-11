"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const carouselImages = [
    { src: "/procedimento1.jpg", alt: "Dra. Ana Clara Cruz realizando procedimento dermatológico", hint: "dermatologist procedure" },
    { src: "/foto1.jpg", alt: "Retrato da Dra. Ana Clara Cruz", hint: "professional portrait" },
    { src: "/procedimento2.jpg", alt: "Detalhe de um procedimento estético sendo realizado", hint: "aesthetic procedure" },
    { src: "/foto2.jpg", alt: "Dra. Ana Clara Cruz em seu consultório", hint: "doctor office" },
    { src: "/procedimento3.jpg", alt: "Paciente recebendo tratamento dermatológico", hint: "patient treatment" },
    { src: "/foto3.jpg", alt: "Dra. Ana Clara Cruz sorrindo", hint: "doctor smiling" },
];

export function About() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="sobre" className="section-padding bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 texture-grid animate-morphing-blur"></div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Conheça a Dra. Ana Clara</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Dermatologista completa com formação de excelência e atendimento humanizado.</p>
                     <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-2">CRM-SP 218.598 | RQE 125.917</p>
                </AnimatedDiv>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-6xl mx-auto">
                    <AnimatedDiv animationClass="animate-fade-in-right" delay={400} className="order-2 lg:order-1">
                        <Card className="shadow-2xl rounded-3xl p-8 md:p-10 relative overflow-hidden border-primary/10 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <div className="text-base md:text-lg leading-relaxed text-foreground space-y-6 relative z-10">
                                    <p className="text-2xl font-semibold text-primary font-headline">Olá, muito prazer!</p>
                                    
                                    <p><strong>Sou a Dra. Ana Clara Ladeira Cruz, médica dermatologista em São Paulo, capital.</strong></p>

                                    <p>Minha prática é guiada por um cuidado com propósito: respeitar sua individualidade, valorizar a naturalidade e fortalecer sua autoestima ao longo do tempo, porque a verdadeira beleza não vem em fórmulas prontas!</p>
                                    
                                    <p>Me formei em Medicina pela UNICAMP, e fiz minha Residência Médica em Dermatologia pela Escola Paulista de Medicina – UNIFESP. Lá, me envolvi com o tratamento do melasma, e como sou apaixonada por ciência, estou terminando meu Doutorado com foco nessa condição (as manchas que tanto impactam na qualidade de vida), também pela UNIFESP.</p>
                                    
                                    <p>Sou Membro titular da Sociedade Brasileira de Dermatologia - SBD, e participo constantemente de congressos da Sociedade para manter minhas condutas sempre atualizadas.</p>

                                    <p>Seja muito bem-vinda. Vai ser um prazer caminhar com você nessa jornada.</p>
                                </div>
                                
                                <div className="text-center lg:text-left mt-10">
                                    <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                                            <WhatsAppIcon className="h-5 w-5 mr-3" />
                                            Converse com a equipe
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedDiv>
                    
                    <AnimatedDiv animationClass="animate-fade-in-left" delay={200} className="order-1 lg:order-2">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-md mx-auto lg:max-w-none"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent>
                                {carouselImages.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    className="object-cover w-full h-full"
                                                    data-ai-hint={img.hint}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
}
