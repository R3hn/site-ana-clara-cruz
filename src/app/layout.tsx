import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Dra. Ana Clara Cruz - Especialista em Melasma | Vila Olímpia - SP',
  description: 'Tratamento especializado para melasma com a Dra. Ana Clara Cruz. Dermatologista formada pela UNICAMP. Consultas na Vila Olímpia, São Paulo.',
  openGraph: {
    title: 'Dra. Ana Clara Cruz - Especialista em Melasma',
    description: 'Cuidados dermatológicos completos com foco na sua saúde, autoestima e beleza natural. Atendimento humanizado na Vila Olímpia.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=EB+Garamond:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
