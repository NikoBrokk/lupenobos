/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1B3B",   // mørkeblå
          light: "#0F285B",
          accent: "#F0B90B"  // gul aksent
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"]
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
