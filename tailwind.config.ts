import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
        'sm360': '360px',
        // => @media (min-width: 360px) { ... }
        'sm2': '375px',
        // => @media (min-width: 375px) { ... }
        'sm3': '390px',
        // => @media (min-width: 390px) { ... }
        'sm4': '411px',
        // => @media (min-width: 411px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'footer': '#1E2019',
      }

    },
  },
  plugins: [],
}
export default config
