import { motion } from "framer-motion";

export default function Reflection({ text }) {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">Reflection</p>
      <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
        {text}
      </p>
    </motion.section>
  );
}