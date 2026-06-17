/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        rec: {
          black: "#050506",
          ink: "#0b0c10",
          bone: "#f2f0ea",
          pearl: "#cfd2d6",
          steel: "#777c87",
          blue: "#58a6ff",
          violet: "#8d6bff"
        }
      },
      boxShadow: {
        glass: "0 24px 90px rgba(0, 0, 0, 0.38)",
        glow: "0 0 48px rgba(88, 166, 255, 0.25)"
      },
      backgroundImage: {
        "fine-grid":
          "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
