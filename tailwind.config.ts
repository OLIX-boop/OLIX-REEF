import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        animation: {
          bg: 'bg .3s ease-out',
          'bg-out': 'bg-out .3s ease-out',
          cart: 'cart 0.3s ease-out forwards',
          'cart-out' : 'cart-out .3s ease-out forwards',
        },
      keyframes: {
        bg: {
          'from': { 'background-color': 'rgba(0,0,0,0)'},
          'to': { 'background-color': 'rgba(156, 163, 175, 0.5)'}
        },
        'bg-out': {
          'from': { 'background-color': 'rgba(156, 163, 175, 0.5)'},
          'to': { 'background-color': 'rgba(0,0,0,0)'},
        },
        cart: {
          'from': { 'margin-right' : '-100%'},
          'to': { 'margin-right': '0%'}
        },
        'cart-out': {
          'from': { 'margin-right': '0%'},
          'to': { 'margin-right' : '-100%'},
        }
      },
    },
  },
  plugins: [],
};
export default config;
