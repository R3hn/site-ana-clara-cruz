import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedDiv } from "./animated-div";

const faqItems = [
    {
        question: "Quais problemas de pele a Dra. Ana Clara trata?",
        answer: "Atuo nas três áreas da dermatologia: clínica (acne, manchas, melasma, rosácea, dermatites), estética (rejuvenescimento, preenchimentos, toxina botulínica) e cirúrgica (pequenas cirurgias e biópsias)."
    },
    {
        question: "As consultas são apenas presenciais?",
        answer: "A primeira consulta sempre é presencial para uma avaliação completa da pele. Atendo na Clínica Sense, na Vila Olímpia. Consultas de retorno e acompanhamento podem ser feitas online quando apropriado."
    },
    {
        question: "Como funciona o tratamento personalizado?",
        answer: "Cada pessoa tem necessidades únicas. Após a avaliação, crio um plano específico que pode incluir cuidados domiciliares, procedimentos em consultório ou combinação de tratamentos, sempre respeitando seu perfil e estilo de vida."
    },
    {
        question: "Qual o valor da consulta?",
        answer: "Os valores são informados diretamente pelo WhatsApp, pois podem variar conforme o tipo de consulta e procedimentos. Entre em contato para receber todas as informações!"
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
