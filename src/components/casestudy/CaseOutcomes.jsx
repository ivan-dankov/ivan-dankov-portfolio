import { motion } from "framer-motion";

export default function CaseOutcomes({ outcomes }) {
  return (
    <motion.section
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-3xl p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-8">Outcomes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, i) => (
            <div key={i} className="border-l-2 border-white/20 pl-6">
              <p className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {outcome.metric}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}