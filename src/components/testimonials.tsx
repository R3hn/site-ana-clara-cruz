import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";
import { Button } from "./ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

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
    name: "Ester Borges Nunes",
    initials: "EBN",
    text: "Médica ótima!! Atualizada, humana, traz sinceridade em relação aos cuidados com a pele! Muito bom contar com a visão do especialista na hora de decidir em relação a um procedimento estético. Recomendo!",
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
  {
    name: "Beatriz Moura",
    initials: "BM",
    text: "Uma das médicas mais sérias que eu já conheci! Super atenciosa e minuciosa durante todo o atendimento, pratica algo que nao se acha em qualquer consultorio hoje em dia: a escuta e a observação.",
  },
  {
    name: "Ana Luisa de Carvalho",
    initials: "AL",
    text: "Muito atenciosa, senti que realmente passa bem pro paciente o conhecimento tecnico de uma forma acessível. Também me senti muito confortável e acolhida com ela, o que não é fácil de encontrar com muitos médicos. Super precisa nos procedimentos, adorei os resultados. Com certeza recomendaria!!",
  },
  {
    name: "Talita Menin",
    initials: "TM",
    text: "Cheguei na consulta com a Dra Ana e ela foi muito atenciosa. Primeiro ouviu todas as minhas queixas, fez diversas perguntas para conhecer melhor a minha rotina, os meus cuidados com a pele e o que me incomodava. Depois, ela examinou a pele do meu corpo inteiro, dos pés a cabeça literalmente. Na hora de propor o tratamento e os cuidados, ela propôs estratégias de forma muito científica e cuidadosa, entendendo qual era o meu objetivo com a consulta. Recomendo a consulta com ela tanto para quem tem alguma queixa dermatológica quanto para quem quer fazer algum procedimento estético. Fiquei muito satisfeita com os resultados que tive. E pretendo voltar em breve.",
  },
  {
    name: "Denise Deni",
    initials: "DD",
    text: "Conheço a Dra. Ana Clara e o seu trabalho há tempos e me sinto totalmente segura em ser sua paciente, pois ela me dá toda atenção necessária para fazer um diagnóstico preciso e correto. Na consulta ela examina cada detalhe do meu corpo e me ouve, o que para mim isto é muito importante. Quando conversa e explica, usa uma linguagem que é bem compreensiva, não deixando dúvidas. Adoro seu trabalho e já à recomendei para minhas amigas, que ficaram muito satisfeitas.",
  },
  {
    name: "Tainah Paula Franghieru",
    initials: "TP",
    text: "Fui muito bem atendida pela Dra. Ana, que me explicou detalhamente todas as etapas do meu tratamento. Além disso, o atendimento foi pontual.",
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
              key={testimonial.name + index}
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

        <AnimatedDiv animationClass="animate-fade-in-up" delay={300} className="text-center mt-24">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-lg bg-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <CardContent className="p-0 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 font-headline">
                        Faça parte destas histórias de sucesso
                    </h3>
                     <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Sinta-se confiante e feliz com a sua pele. Agende sua consulta e inicie sua jornada de cuidados personalizados com a Dra. Ana Clara.
                    </p>
                    <Button asChild size="lg" className="rounded-full h-auto py-4 px-6 md:h-14 md:px-8 text-base bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer" className="flex items-center text-center">
                            <WhatsAppIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                            <span>Agende sua consulta</span>
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
}
