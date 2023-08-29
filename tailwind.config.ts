import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-grad': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,18,50,1) 0%, rgba(1,1,28,1) 100%)'
      },
      fontFamily: {
        'themeFont': ['var(--font-fira)']
      },
      colors:{
        'themeColor' : '#64ffda',
        'lightColor' : '#ccd6f6',
        'darkColor' : '#8892b0',
      },
      screens:{
        'xs' : '0px',
        'sm' : '420px',
        'smd' : '500px',
        'md' : '760px',
        'lg' : '1000px',
        'xl' : '1280px',
        '2xl' : '1536px',
        '3xl' : '2000px',
      }
    },
  },
  plugins: [],
}
export default config
