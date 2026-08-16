import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Global scroll-reveal
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
  { threshold: 0.12 }
);
const observeReveals = () =>
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));

// Re-observe after each render tick
const origRender = ReactDOM.createRoot;
document.addEventListener("DOMContentLoaded", () => setTimeout(observeReveals, 100));
window.addEventListener("scroll", observeReveals, { passive: true, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(observeReveals, 300);
