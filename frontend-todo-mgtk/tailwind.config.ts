import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        default: "1024px"
      },
      padding: {
        defaultX: "10%",
        defaultY: "1.25rem",
      },
      height: {
        screen: '100dvh'
      },
      minHeight: {
        screen: '100dvh'
      },
      colors: {
        details: {
          DEFAULT: "#FF312E",
          dark: "#FF312E"
        },
        primary: {
          DEFAULT: "#333138",
          dark: "#f0f0f0"
        }
      },
      backgroundColor: {
        'primary': {
          DEFAULT: "#FFFFFA",
          dark: "#000103"
        }
      },
      fontFamily: {
        RobotoMono: ["var(--robotoMono)", "monospace"],
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
