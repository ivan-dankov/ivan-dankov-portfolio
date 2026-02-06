import { motion } from "framer-motion";

export default function WhatIDidntBuild({ items }) {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-[#F5F5F0] border border-[#E8E8E4] rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">What I Didn't Build</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-[#C4C4C0] font-mono text-sm mt-0.5 shrink-0">—</span>
              <div>
                <span className="font-semibold text-[#1A1A1A]">{item.label}</span>
                <span className="text-[#4A4A4A]"> — {item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}