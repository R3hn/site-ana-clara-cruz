import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const steps = [
    {
        step: 1,
        title: "Primeira consulta",
        description: "Avaliação completa da sua pele, histórico médico e escuta ativa das suas necessidades e expectativas.",
    },
    {
        step: 2,
        title: "Diagnóstico e plano de cuidados",
        description: "Explicação clara do diagnóstico e criação de um plano personalizado para sua pele e estilo de vida.",
    },
    {
        step: 3,
        title: "Acompanhamento contínuo",
        description: "Monitoramento da evolução com consultas de retorno e ajustes no tratamento quando necessário.",
    },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);


export function Process() {
    return(
        <section id="processo" className="section-padding bg-secondary relative overflow-hidden">
             <div className="absolute inset-0 animate-morphing-blur">
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full animate-float animation-delay-[2s]"></div>
            </div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Como funciona o atendimento</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Um processo cuidadoso e personalizado do primeiro contato aos resultados.
                    </p>
                </AnimatedDiv>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {steps.map((item, index) => (
                        <AnimatedDiv key={item.step} animationClass="animate-fade-in-up" delay={index * 150 + 200} className="text-center">
                            <div className="step-number bg-gradient-to-br from-primary to-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg">
                                {item.step}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                        </AnimatedDiv>
                    ))}
                </div>
                <AnimatedDiv animationClass="animate-scale-in" delay={600}>
                    <Card className="text-center max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden">
                        <CardContent className="p-0 relative z-10">
                            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 font-headline">
                                &quot;Cada pessoa é única. O atendimento é feito exclusivamente para você.&quot;
                            </p>
                            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon className="h-5 w-5 mr-3" />
                                    Quero agendar minha primeira consulta
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </AnimatedDiv>
            </div>
        </section>
    );
}
