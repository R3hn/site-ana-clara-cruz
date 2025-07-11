import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const testimonials = [
  {
    name: "Maria C.",
    initials: "MC",
    text: "A Dra. Ana Clara é excepcional! Atendimento humanizado e resultados incríveis. Me sinto muito mais confiante com minha pele.",
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
        <AnimatedDiv animationClass="animate-in fade-in-down" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">O que dizem minhas pacientes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e recuperação da autoestima.
          </p>
        </AnimatedDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedDiv
              key={testimonial.name}
              animationClass="animate-in fade-in-up"
              delay={index * 150}
              className="md:last:col-span-2 lg:last:col-span-1"
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
