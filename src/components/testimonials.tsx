import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const testimonials = [
  {
    name: "Carolina Massarentti",
    initials: "CM",
    text: "A Dra Ana Clara foi maravilhosa, uma excelente profissional. Muito atenciosa e muito clara nas explicações, me examinou de cima a baixo, me tranquilizou quanto às dúvidas. O espaço do consultório é lindo e a secretária muito educada. Fizemos meu primeiro procedimento, não vejo a hora de voltar e fazer outros procedimentos com ela. Tem uma mão de fada quase não senti dor. Super recomendo a consulta e os procedimentos com ela. Irei voltar mais vezes para continuar meu planejamento terapêutico.",
  },
  {
    name: "Roberta S.",
    initials: "RS",
    text: "Profissional completa! Cuida tanto da parte clínica quanto estética com muito conhecimento. Consultório lindo e atendimento impecável.",
  },
  {
    name: "Juliana A.",
    initials: "JA",
    text: "Dra. Ana Clara tem uma escuta ativa incrível. Explica tudo com clareza e os resultados são sempre naturais. Super recomendo!",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-cream">
      <div className="container">
        <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">O que dizem minhas pacientes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e recuperação da autoestima.
          </p>
        </AnimatedDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedDiv
              key={testimonial.name}
              animationClass="animate-fade-in-up"
              delay={index * 150 + 200}
            >
              <Card className="h-full rounded-2xl shadow-lg border-l-4 border-primary transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-base leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
