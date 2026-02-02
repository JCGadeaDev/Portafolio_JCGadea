/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px'
      }
    },
    fontFamily: {
      primary: ['var(--font-jetbrainsMono)']
    },
    extend: {
      colors: {
        // AQUÍ ESTÁ EL CAMBIO CLAVE
        primary: "#0F172A", // Deep Space Blue (Fondo principal)
        secondary: "#1E293B", // Slate 800 (Para tarjetas o secciones alternas)
        accent: {
          DEFAULT: "#22D3EE", // Cyan Tech (Botones y acentos)
          hover: "#06B6D4",   // Un tono más oscuro para el hover
        },
        // Agregamos colores semánticos para texto
        text: {
          primary: "#F8FAFC", // Off-white para títulos
          muted: "#94A3B8"    // Slate Gray para párrafos
        }
      },
      // ... mantén tus keyframes y animations igual ...
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")]
}