import Navbar from "./components/Navbar.jsx";
import ScanSpine from "./components/ScanSpine.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Integrations from "./components/Integrations.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

const SECTIONS = [
  { id: "hero", label: "OVERVIEW", tone: "cyan" },
  { id: "features", label: "SIGNALS", tone: "cyan" },
  { id: "how-it-works", label: "PROCESS", tone: "amber" },
  { id: "pricing", label: "PRICING", tone: "amber" },
];

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScanSpine sections={SECTIONS} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
