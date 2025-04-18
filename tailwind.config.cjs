// tailwind.config.cjs
module.exports = {
  // … your existing config …
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#22D3EE",
          purple: "#A855F7",
          pink: "#F472B6"
        }
      },
      dropShadow: {
        neon: "0 0 8px rgba(34,211,238,0.8)"
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"]
      }
    }
  }
};
