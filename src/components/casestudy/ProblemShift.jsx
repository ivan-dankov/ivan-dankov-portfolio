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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
          <div className="bg-[#F5F5F0] rounded-2xl p-6 md:p-8">
            <p className="text-lg md:text-xl font-medium text-[#4A4A4A] leading-relaxed">
              {shiftQuote.split(' to ')[0].replace('From "', '').replace('"', '')}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center text-[#8C8C8C]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 16H26M26 16L20 10M26 16L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="bg-[#1A1A1A] rounded-2xl p-6 md:p-8">
            <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
              {shiftQuote.split(' to ')[1].replace('"', '').replace('."', '').replace('.', '')}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}