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
    name: "Monique Costa",
    initials: "MC",
    text: "Já passei em consulta e realizei procedimentos com a Drª. Ana Clara algumas vezes! Ela é super atenciosa, atualizada, tem a mão bem leve e precisa para realizar os procedimentos. Me sinto segura com as suas indicações e gosto das orientações estéticas também! Confio de olhos fechados e indico a todos!",
  },
  {
    name: "Daniela Seii",
    initials: "DS",
    text: "Sou paciente da dra Ana Clara. Ela é uma médica muito dedicada e cuidadosa. Além de orientações gerais de cuidados com minha pele e cabelo, ela já também diagnosticou e tratou uma doença de pele no meu rosto. Confio muito no trabalho dela! E outro ponto que acho ela diferenciada de outros médicos é a empatia no atendimento! Ela realmente te escuta, entende seu momento de vida/rotina e te dá orientações que farão sentido no seu dia a dia! Recomendo muito",
  },
  {
    name: "Helena Amorim",
    initials: "HA",
    text: "Adorei a consulta com a dra Ana Clara. Muito atenciosa, ela tem uma ótima formação, uma consulta completa. O que eu mais gostei é que ela respeitou as minhas preferências e indicou os melhores procedimentos que foram certeiros. Indico com certeza.",
  },
  {
    name: "Ana Luiza de Carvalho",
    initials: "AL",
    text: "Muito atenciosa, senti que realmente passa bem pro paciente o conhecimento tecnico de uma forma acessível. Também me senti muito confortável e acolhida com ela, o que não é fácil de encontrar com muitos médicos. Super precisa nos procedimentos, adorei os resultados. Com certeza recomendaria!!",
  },
  {
    name: "Giovanna Kaussinis Jorge",
    initials: "GK",
    text: "A Dra Ana Clara é ótima! A consulta é completa, examina o corpo todo, pergunta todo seu histórico. Se preocupa com todos os detalhes e tem amplo conhecimento de medicações, interações medicamentosas, estudos e pesquisas. É super ética e profissional, explicando todos os detalhes. Super indico e voltarei mais vezes.",
  },
  {
    name: "Giovanna De Luca",
    initials: "GD",
    text: "A clínica é muito agradável, as recepcionistas são muito organizadas. A consulta com a Dra Ana Clara foi ótima, muito atenciosa, explicou tudo com muitos detalhes e embasamento técnico. Foi uma consulta muito boa e agradável!",
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
