/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de concreto e contraste industrial
        brutal: {
          bg: '#F1F0EE', // Off-white texturizado (pedra/concreto claro)
          text: '#1C1917', // Quase preto (stone-900)
          border: '#1C1917', // Mesmo tom do texto para bordas fortes
          accent: '#DC2626', // Vermelho Industrial (red-600)
        },
        // Cores para bordas (compatível com Tailwind)
        'brutal-border': '#1C1917',
      },
      fontFamily: {
        // Títulos: Pesados, geométricos, modernos
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        // Código: Monoespaçada para blocos de código e detalhes técnicos
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontWeight: {
        titulos: '800', // Black
      },
      borderWidth: {
        3: '3px', // Bordas um pouco mais grossas que o padrão
      },
      borderColor: {
        brutal: '#1C1917',
      },
    },
  },
  plugins: [],
}
