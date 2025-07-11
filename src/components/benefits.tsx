import { Award, GraduationCap, Heart, Leaf, Stethoscope } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedDiv } from "./animated-div";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const benefitItems = [
    {
        step: 1,
        title: "Formação de Excelência",
        description: "Graduada pela UNICAMP e com residência em Dermatologia pela UNIFESP. Membro titular da Sociedade Brasileira de Dermatologia.",
        icon: <GraduationCap className="h-5 w-5" />,
        tag: "UNICAMP + UNIFESP + SBD",
        sideCard: {
            icon: <Award className="h-12 w-12 text-primary mb-6 animate-gentle-float"/>,
            title: "Excelência Reconhecida",
            description: "Formação nas melhores instituições do país com reconhecimento da comunidade médica."
        }
    },
    {
        step: 2,
        title: "Atendimento Completo",
        description: "Dermatologia clínica, estética e cirúrgica em um só lugar. Tratamentos personalizados para cada necessidade e perfil.",
        icon: <Stethoscope className="h-5 w-5" />,
        tag: "Clínica + Estética + Cirúrgica",
        sideCard: {
            icon: <Heart className="h-12 w-12 text-primary mb-6 animate-gentle-float"/>,
            title: "Cuidado Integral",
            description: "Da prevenção ao tratamento, cuidamos da sua pele de forma completa e personalizada."
        }
    },
    {
        step: 3,
        title: "Estética Natural",
        description: "Abordagem que valoriza sua beleza natural, com resultados harmoniosos e que respeitam suas características únicas.",
        icon: <Leaf className="h-5 w-5" />,
        tag: "Resultados Naturais",
        sideCard: {
            icon: <Heart className="h-12 w-12 text-primary mb-6 animate-gentle-float"/>,
            title: "Escuta Ativa",
            description: "Atendimento humanizado com acolhimento e comunicação clara em cada consulta."
        }
    }
];

export function Benefits() {
    return (
        <section id="tratamento" className="section-padding bg-gradient-to-br from-cream to-white relative overflow-hidden animate-background-shift">
             <div className="absolute inset-0 animate-morphing-blur">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-48 -translate-y-48 animate-soft-glow"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-40 translate-y-40 animate-soft-glow delay-500"></div>
            </div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4 animate-text-glow">Por que escolher a Dra. Ana Clara?</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Dermatologia completa com ciência, empatia e sofisticação.</p>
                </AnimatedDiv>
                
                <div className="max-w-5xl mx-auto space-y-20 lg:space-y-32">
                    {benefitItems.map((item, index) => (
                        <div key={item.step} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <AnimatedDiv animationClass={index % 2 !== 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'} delay={200} className="lg:w-1/2 w-full">
                                <div className="relative">
                                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary/10 transition-transform duration-300 hover:-translate-y-2">
                                        <div className="absolute -left-5 top-8 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full hidden lg:flex items-center justify-center shadow-lg animate-gentle-float">
                                            <span className="text-white font-bold text-lg">{item.step}</span>
                                        </div>
                                        <div className="lg:ml-4">
                                            <h3 className="text-3xl font-bold text-accent mb-4 font-headline">{item.title}</h3>
                                            <p className="text-muted-foreground text-base leading-relaxed mb-6">{item.description}</p>
                                            <div className="flex items-center text-primary font-semibold text-sm">
                                                {item.icon}
                                                <span className="ml-2">{item.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedDiv>
                             <AnimatedDiv animationClass={index % 2 !== 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'} delay={400} className="lg:w-1/2 w-full">
                                <div className="bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-3xl p-10 text-center transition-transform duration-300 hover:-translate-y-2">
                                    {item.sideCard.icon}
                                    <h4 className="text-2xl font-semibold text-accent mb-2">{item.sideCard.title}</h4>
                                    <p className="text-muted-foreground">{item.sideCard.description}</p>
                                </div>
                            </AnimatedDiv>
                        </div>
                    ))}
                    
                    <AnimatedDiv animationClass="animate-scale-in" delay={400} className="text-center">
                        <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden border-2 border-primary/20 transition-transform duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/10"></div>
                            <div className="absolute inset-0 texture-dots opacity-[0.03]"></div>
                            <div className="relative z-10">
                                <Heart className="h-12 w-12 text-primary mx-auto mb-6 animate-gentle-float"/>
                                <h3 className="text-3xl font-bold mb-6 font-headline text-accent">Sua pele merece o melhor cuidado</h3>
                                <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Cuide da sua saúde e autoestima com tratamentos dermatológicos de excelência em um ambiente acolhedor e sofisticado.
                                </p>
                                <Button asChild size="lg" className="rounded-full text-base bg-white text-accent border-2 border-primary h-14 px-8 shadow-lg animate-luxury-pulse transition-all hover:bg-primary/10">
                                    <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                                        <WhatsAppIcon className="h-5 w-5 mr-3" />
                                        Quero agendar minha consulta
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
}
