import { motion } from "framer-motion";

export default function CaseOutcomes({ outcomes }) {
  return (
    <motion.section
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-[#F5F5F0] rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">Outcomes</p>
        <div className="space-y-4">
          {outcomes.map((outcome, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1">
                {outcome.metric}
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}