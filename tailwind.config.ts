import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'themeFont': ['var(--font-SFMono)'],
      },
      colors: {
        'themeColor': '#64ffda',
        'lightColor': '#CCD6F6',
        'extraLightColor': '#A8B2D1',
        'darkColor': '#8892b0',
        'bg-grad': '#0a192f',
        'bg-light': '#112240',
      },
      screens: {
        'xs': '0px',
        'sm': '420px',
        'smd': '600px',
        'md': '760px',
        'lg': '1000px',
        'xl': '1280px',
        '2xl': '1606px',
        '3xl': '2000px',
      },
      gridTemplateColumns: {
        'auto-fit-xs': 'repeat(3, minmax(0, 1fr))'
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
