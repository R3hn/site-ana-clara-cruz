import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        headline: ['EB Garamond', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        cream: 'hsl(var(--cream))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(var(--primary-light))',
          soft: 'hsl(var(--primary-soft))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulse: {
          '0%': { boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 8px 40px rgba(37, 211, 102, 0.6)' },
          '100%': { boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)' },
        },
        'luxury-pulse': {
          '0%, 100%': {
            boxShadow: '0 8px 30px hsla(var(--primary), 0.15)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 12px 40px hsla(var(--primary), 0.25)',
            transform: 'scale(1.02)',
          }
        },
        'soft-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsla(var(--primary), 0.1)' },
          '50%': { boxShadow: '0 0 40px hsla(var(--primary), 0.2)' },
        },
        'morphing-blur': {
          '0%': { filter: 'blur(0px)', transform: 'scale(1)'},
          '50%': { filter: 'blur(2px)', transform: 'scale(1.02)'},
          '100%': { filter: 'blur(0px)', transform: 'scale(1)'},
        },
        'fade-in-up': { from: { opacity: '0', transform: 'translateY(60px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in-down': { from: { opacity: '0', transform: 'translateY(-60px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in-left': { from: { opacity: '0', transform: 'translateX(-60px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        'fade-in-right': { from: { opacity: '0', transform: 'translateX(60px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        'scale-in': { from: { opacity: '0', transform: 'scale(0.8)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'gentle-float': { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.8' }, '50%': { transform: 'translateY(-15px) rotate(2deg)', opacity: '1' } },
        'background-shift': { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        'text-glow': { '0%, 100%': { textShadow: '0 0 10px rgba(196, 163, 115, 0.3)' }, '50%': { textShadow: '0 0 20px rgba(196, 163, 115, 0.5)' } },
        'luxury-zoom-in': { from: { opacity: '0', transform: 'scale(0.7) rotate(-2deg)', filter: 'blur(12px)' }, to: { opacity: '1', transform: 'scale(1) rotate(0deg)', filter: 'blur(0px)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'luxury-pulse': 'luxury-pulse 3s ease-in-out infinite',
        'soft-glow': 'soft-glow 4s ease-in-out infinite',
        'morphing-blur': 'morphing-blur 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'gentle-float': 'gentle-float 4s ease-in-out infinite',
        'background-shift': 'background-shift 8s ease-in-out infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'luxury-zoom': 'luxury-zoom-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
