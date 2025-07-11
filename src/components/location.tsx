import { Building, Car, Clock, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const infoCards = [
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Horário de Funcionamento",
        lines: [
            "Segunda a Sexta: 08:00 - 20:00",
            "Sábado: 08:00 - 12:00",
            "Domingo: Fechado"
        ]
    },
    {
        icon: <Stethoscope className="h-6 w-6 text-primary" />,
        title: "Atendimento Especializado",
        lines: ["Consultas focadas em melasma, manchas e rejuvenescimento."]
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Ambiente Seguro",
        lines: ["Protocolos de segurança e higiene para seu conforto e bem-estar."]
    }
]

export function Location() {
    return (
        <section id="localizacao" className="section-padding bg-white relative overflow-hidden">
             <div className="absolute inset-0 texture-grid"></div>
             <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-primary/5 rounded-full animate-float -z-1"></div>
            <div className="absolute top-[60%] right-[8%] w-20 h-20 bg-accent/5 rounded-full animate-float animation-delay-[2s] -z-1 hidden md:block"></div>
             <div className="container relative z-10">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Localização da Clínica</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Atendimento presencial na Vila Olímpia, São Paulo.
                    </p>
                </AnimatedDiv>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <AnimatedDiv animationClass="animate-fade-in-right" delay={200} className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10 transition-transform duration-300 hover:-translate-y-2">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.398012692067!2d-46.69707068502167!3d-23.59582198466858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a07f0f0f0f1%3A0x9a6a4a1f2e1e3d8!2sR.%20Fid%C3%AAncio%20Ramos%2C%20160%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004551-010!5e0!3m2!1spt-BR!2sbr!4v1622656911585!5m2!1spt-BR!2sbr"
                                width="100%" 
                                height="450" 
                                style={{border:0}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-3xl">
                            </iframe>
                        </div>
                    </AnimatedDiv>
                    
                    <AnimatedDiv animationClass="animate-fade-in-left" delay={400} className="order-1 lg:order-2 flex flex-col justify-center">
                        <Card className="rounded-3xl p-8 shadow-2xl border border-primary/10 transition-transform duration-300 hover:-translate-y-2">
                            <CardContent className="p-0">
                                <div className="text-center mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-float shadow-2xl">
                                        <MapPin className="text-white h-10 w-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-accent mb-2 font-headline">Clínica Sense</h3>
                                    <p className="text-primary font-semibold text-lg">Vila Olímpia • São Paulo</p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Building className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">Endereço Completo</h4>
                                            <p className="text-muted-foreground">R. Fidêncio Ramos, 160 - 8º Andar<br/>Vila Olímpia, São Paulo - SP<br/>CEP: 04551-010</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Car className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">Estacionamento</h4>
                                            <p className="text-muted-foreground">Estacionamento disponível no edifício.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-primary/10">
                                    <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium shadow-lg transition-transform hover:scale-105 animate-luxury-pulse h-12 text-base">
                                        <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                                            <WhatsAppIcon className="h-5 w-5 mr-3" />
                                            Agendar Consulta
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedDiv>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                    {infoCards.map((card, index) => (
                        <AnimatedDiv key={index} animationClass="animate-fade-in-up" delay={index * 150 + 600}>
                            <Card className="h-full bg-white rounded-2xl p-6 shadow-lg border-primary/10 text-center transition-transform duration-300 hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-semibold text-foreground text-lg mb-3">{card.title}</h4>
                                    <div className="text-muted-foreground text-sm space-y-1">
                                        {card.lines.map((line, i) => <p key={i}>{line}</p>)}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}
