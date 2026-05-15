import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heineken: {
          dark: '#004d2c',
          green: '#007b3e',
          light: '#F0F7F3',
        }
      },
      borderRadius: {
        'card': '2rem',
      }
    },
  },
  plugins: [],
}
export default config