/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        snow: "#f8f9fc",
        frost: "#f0f2f8",
        ink: "#000000",
        "ink-2": "#222222",
        muted: "#555555",
        dim: "#888888",
        line: "#e4e7f0",
        "line-2": "#d0d4e8",
        accent: "#1552D2",
        "accent-2": "#1a6aef",
        ok: "#16A34A",
        warn: "#f59e0b",
        bad: "#ef4444",
        blue: "#3b82f6",
        void: "#000000",
        panel: "#ffffff",
        "signal-cyan": "#1552D2",
        "signal-amber": "#f59e0b",
        "line-strong": "#d0d4e8",
        "ink-muted": "#555555",
        "ink-dim": "#888888",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11,17,32,.06), 0 20px 48px -16px rgba(11,17,32,.14)",
        "card-hover": "0 1px 3px rgba(11,17,32,.08), 0 28px 64px -16px rgba(11,17,32,.22)",
        btn: "0 8px 24px -8px rgba(21,82,210,.45)",
        "btn-hover": "0 12px 32px -8px rgba(21,82,210,.6)",
        glow: "0 0 0 3px rgba(21,82,210,.12)",
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg,#1552D2 0%,#1a6aef 100%)",
        "grad-soft": "linear-gradient(135deg,#f0f4ff 0%,#fafbff 100%)",
      },
      animation: {
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 34s linear infinite",
        "marquee-rev": "marqueeRev 34s linear infinite",
        "scan-line": "scanLine 3s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(0.7)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: { to: { transform: "translateX(-50%)" } },
        marqueeRev: { to: { transform: "translateX(50%)" } },
        scanLine: {
          "0%": { top: "-4px", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": { top: "100%", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
