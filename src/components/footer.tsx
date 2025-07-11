import { Instagram, GraduationCap, MapPin } from "lucide-react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.5 16.5L10 12l3.5-4.5" />
        <path d="M20.2 13.8c.2-1.1.2-2.4 0-3.6" />
        <path d="M3.8 13.8a9.9 9.9 0 0 1 0-3.6" />
        <path d="M10.1 3a9.9 9.9 0 0 1 3.8 0" />
        <path d="M18.8 5.2a9.9 9.9 0 0 1 0 13.6" />
        <path d="M5.2 5.2a9.9 9.9 0 0 1 13.6 0" />
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
                        <GoogleIcon className="h-6 w-6"/>
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
