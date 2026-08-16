import { motion } from "framer-motion";

export default function ScanReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  return (
    <Tag className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ top: "0%", opacity: 0 }}
        whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-0 right-0 h-px"
        style={{
          boxShadow: "0 0 12px 2px rgba(21,82,210,0.4), 0 0 2px rgba(21,82,210,0.6)",
          background: "linear-gradient(90deg, transparent, #1552D2, transparent)",
        }}
      />
    </Tag>
  );
}
