import { Instagram, GraduationCap, MapPin, Store } from "lucide-react";

const GoogleMyBusinessIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8.5a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 20 8.5V21" />
        <path d="M3 21h18" />
        <path d="M12 16a3 3 0 0 0-3-3H7v6h2a3 3 0 0 0 3-3Z" />
        <path d="M20 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.5a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 20 5V5Z" />
    </svg>
)

export function Footer() {
    return(
        <footer className="bg-accent text-white py-16">
            <div className="container text-center">
                <div className="mb-8">
                    <h3 className="font-bold text-2xl font-headline mb-2">Dra. Ana Clara Cruz</h3>
                    <p className="text-white/70 text-base">CRM-SP 218.598 | RQE 125.917</p>
                </div>
                
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://g.co/kgs/sDW2ixA" target="_blank" rel="noopener noreferrer" title="Avaliações no Google" className="text-white/70 hover:text-white transition-colors duration-300">
                        <Store className="h-6 w-6"/>
                    </a>
                    <a href="https://www.instagram.com/anacruzdermato/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-white/70 hover:text-white transition-colors duration-300">
                        <Instagram className="h-6 w-6"/>
                    </a>
                    <a href="https://lattes.cnpq.br/3070368897123258" target="_blank" rel="noopener noreferrer" title="Currículo Lattes" className="text-white/70 hover:text-white transition-colors duration-300">
                        <GraduationCap className="h-6 w-6"/>
                    </a>
                    <a href="https://maps.app.goo.gl/kyLnQSjzRgcxfLs7A" target="_blank" rel="noopener noreferrer" title="Localização no Maps" className="text-white/70 hover:text-white transition-colors duration-300">
                        <MapPin className="h-6 w-6"/>
                    </a>
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