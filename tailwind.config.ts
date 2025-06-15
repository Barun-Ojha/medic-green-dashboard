
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        "hc-green": {
          DEFAULT: "#35c37a",
          light: "#e6ffe9"
        }
      },
      backgroundColor: {
        "dashboard": "#f8fffb"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
