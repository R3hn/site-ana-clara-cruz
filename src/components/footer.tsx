export function Footer() {
    return(
        <footer className="bg-accent text-white py-16">
            <div className="container text-center">
                <div className="mb-8">
                    <h3 className="font-bold text-2xl font-headline mb-2">Dra. Ana Clara Cruz</h3>
                    <p className="text-white/70 text-base">CRM-SP 123456 | Dermatologista Especialista em Melasma</p>
                </div>
                
                <div className="text-white/70 space-y-3 max-w-2xl mx-auto text-sm">
                    <p>Clínica Sense - Vila Olímpia, São Paulo - SP</p>
                    <p>Este site respeita sua privacidade. Seus dados são protegidos conforme a LGPD.</p>
                    <p>&copy; {new Date().getFullYear()} Dra. Ana Clara Cruz. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
