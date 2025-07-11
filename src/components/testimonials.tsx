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
      </div>
    </section>
  );
}
