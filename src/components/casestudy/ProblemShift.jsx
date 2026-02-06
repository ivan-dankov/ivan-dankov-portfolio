import { motion } from "framer-motion";

export default function ProblemShift({ problemLines, shiftQuote }) {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* The Problem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">The Problem</p>
        <div className="space-y-4">
          {problemLines.map((line, i) => (
            <p key={i} className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </motion.div>

      {/* The Shift */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-12 md:py-16 border-t border-b border-[#E8E8E4]"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">The Shift</p>
        <blockquote
          className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-[#1A1A1A] italic"
          style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
        >
          {shiftQuote}
        </blockquote>
      </motion.div>
    </section>
  );
}