import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedDiv } from "./animated-div";

const faqItems = [
    {
        question: "Como saber qual procedimento é indicado para mim?",
        answer: "O melhor procedimento é sempre aquele que atende às suas necessidades e respeita sua individualidade. Na primeira consulta, fazemos uma avaliação completa da sua pele, discutimos suas queixas e objetivos, e só então montamos um plano de tratamento personalizado, explicando cada opção em detalhes."
    },
    {
        question: "O que está incluído na primeira consulta dermatológica?",
        answer: "A primeira consulta inclui uma conversa detalhada (anamnese) para entender seu histórico e estilo de vida, um exame físico completo da pele do corpo todo (dermatoscopia) para avaliar pintas e lesões, o diagnóstico e a elaboração de um plano de cuidados personalizado e individual."
    },
    {
        question: "A clínica atende por convênios médicos?",
        answer: "O atendimento é particular. No entanto, fornecemos toda a documentação necessária (recibo, nota fiscal) para que você possa solicitar o reembolso junto ao seu plano de saúde, conforme as condições da sua apólice."
    },
    {
        question: "A Dra. tira pintas ou sinais? Como funciona o check-up?",
        answer: "Sim, a remoção de pintas (nevos), sinais e outras lesões de pele é um dos procedimentos realizados, tanto por razões estéticas quanto de saúde. O check-up, ou dermatoscopia, é um exame onde avaliamos todas as pintas com um aparelho especial que amplia a imagem, permitindo a detecção precoce de qualquer alteração suspeita."
    },
    {
        question: "A toxina botulínica deixa o rosto paralisado?",
        answer: "Não. Quando aplicada por um profissional qualificado, a toxina botulínica relaxa a musculatura de forma controlada, suavizando as rugas de expressão sem tirar a naturalidade. O objetivo é um resultado elegante e sutil, mantendo suas expressões."
    },
    {
        question: "O preenchimento facial pode deixar o rosto artificial?",
        answer: "O risco de um resultado artificial existe quando a técnica ou a quantidade de produto são inadequadas. Minha abordagem visa sempre a naturalidade, utilizando o preenchimento com ácido hialurônico para restaurar volumes perdidos e realçar contornos de forma sutil, respeitando a harmonia do seu rosto."
    },
    {
        question: "Qual a diferença entre toxina botulínica e preenchimento?",
        answer: "São tratamentos com objetivos diferentes. A toxina botulínica relaxa músculos para tratar rugas dinâmicas (que aparecem com o movimento, como pés de galinha). Já o preenchimento com ácido hialurônico repõe volume, trata rugas estáticas (visíveis com o rosto parado) e melhora o contorno facial."
    },
    {
        question: "Há tratamento para calvície e queda de cabelo?",
        answer: "Sim. A queda de cabelo (alopecia) tem diversas causas e, para cada uma, existe um tratamento específico. Após uma investigação detalhada com exames, definimos o melhor protocolo, que pode incluir medicamentos, tratamentos no consultório (como microagulhamento) e orientações de cuidados."
    }
];

export function Faq() {
    return (
        <section id="duvidas" className="section-padding bg-cream">
            <div className="container">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Perguntas frequentes</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Tire suas principais dúvidas sobre o atendimento dermatológico.
                    </p>
                </AnimatedDiv>
                <AnimatedDiv animationClass="animate-fade-in-up" delay={200}>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b-primary/10 last:border-b-0">
                                    <AccordionTrigger className="p-6 text-left font-semibold text-lg hover:bg-primary/5 hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0 text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </AnimatedDiv>
            </div>
        </section>
    );
}
