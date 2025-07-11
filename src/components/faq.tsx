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
