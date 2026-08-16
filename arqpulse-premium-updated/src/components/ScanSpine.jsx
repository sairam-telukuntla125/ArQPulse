import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScanSpine({ sections }) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.4,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const active = sections[activeIndex] ?? sections[0];

  return (
    <>
      {/* Desktop: fixed vertical spine */}
      <div className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-14 lg:flex lg:flex-col lg:items-center">
        <div className="relative mt-24 h-[calc(100vh-12rem)] w-px bg-[#e4e7f0]">
          <motion.div
            style={{ scaleY: smoothProgress, background: "linear-gradient(180deg,#1552D2,#1a6aef)" }}
            className="absolute left-0 top-0 h-full w-px origin-top"
          />
          <motion.div
            style={{ top: smoothProgress }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <span
              className="block h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent border-2 border-white"
              style={{ boxShadow: "0 0 0 3px rgba(21,82,210,0.18), 0 0 12px rgba(21,82,210,0.3)" }}
            />
          </motion.div>
        </div>

        <div className="mt-4 origin-center -rotate-90 whitespace-nowrap font-mono text-[10px] tracking-[0.22em] text-[#555555] select-none">
          {String(activeIndex + 1).padStart(2, "0")}/{String(sections.length).padStart(2, "0")} — {active?.label}
        </div>
      </div>

      {/* Mobile: slim top progress bar */}
      <div className="fixed left-0 right-0 top-0 z-40 h-[2px] bg-line lg:hidden">
        <motion.div
          style={{ scaleX: smoothProgress }}
          className="h-full w-full origin-left bg-accent"
        />
      </div>
    </>
  );
}
