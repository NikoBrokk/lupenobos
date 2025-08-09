/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lupen: {
          bg: "#0A1C38",        // mørk blå bakgrunn
          primary: "#133A78",   // dyp blå
          accent: "#1BB56C",    // grønn (OBOS-inspirert)
          ink: "#0E1220",       // nesten-svart tekst
          card: "#0F2546",      // mørk blå til kort
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,28,56,0.25)",
        ring: "0 0 0 3px rgba(27,181,108,0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
