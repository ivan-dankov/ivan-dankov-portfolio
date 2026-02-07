import { motion } from "framer-motion";

export default function CollaborationCredits({ credits }) {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 md:px-12 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="border-t border-[#E8E8E4] pt-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-2">Collaboration</p>
        <p className="text-sm text-[#4A4A4A] leading-relaxed">
          {credits}
        </p>
      </div>
    </motion.section>
  );
}