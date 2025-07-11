"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#tratamento", label: "Tratamentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#localizacao", label: "Localização" },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/80"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="#inicio" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo Dra. Ana Clara Cruz"
              style={{ width: '180px', height: 'auto' }}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary hover:bg-primary/10 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>
           <div className="hidden md:block">
             <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4 mr-2" />
                    Agendar Consulta
                </a>
             </Button>
           </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link block px-3 py-2 text-base font-medium text-foreground transition-colors hover:text-primary hover:bg-primary/10 rounded-md"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-4 self-start rounded-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                 <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4 mr-2" />
                    Agendar Consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
