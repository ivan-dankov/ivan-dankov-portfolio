import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function LucentCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl border border-dashed border-[#D4D4CF] bg-[#F5F5F0] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] font-medium bg-[#E8E8E4] px-3 py-1 rounded-full">
            Side project
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8564F] font-medium bg-[#B8564F]/10 px-3 py-1 rounded-full">
            Decision: Do not build
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
          Lucent Research — Validated, then killed
        </h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
          AI tool for interview synthesis. Built with Cursor. Validated with PMs. Killed when data showed the problem was learnable, not buildable.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Product validation", "AI", "Cursor"].map((tag) => (
            <span key={tag} className="text-xs text-[#6B6B6B] border border-[#E8E8E4] rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:opacity-60 transition-opacity"
        >
          {expanded ? "Collapse" : "Read more"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-4 text-sm text-[#4A4A4A] leading-relaxed border-t border-[#E8E8E4] mt-4">
                <div>
                  <span className="font-semibold text-[#1A1A1A]">What it was:</span>{" "}
                  An AI tool designed to cut interview synthesis from 10+ hours to 2–3 hours. Targeted product managers and UX researchers drowning in qualitative data.
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A1A]">What I did:</span>{" "}
                  Market research, built a working prototype with Cursor, tested positioning on Reddit, ran validation interviews with PMs.
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A1A]">Why I killed it:</span>{" "}
                  The problem was real, but the solution was a learnable skill. AI could build the tool. It couldn&apos;t solve the real problem — which was a skills gap, not a software gap.
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A1A]">What it proved:</span>{" "}
                  Validated pain does not equal viable product. Saved ~$75K in opportunity cost by killing early.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}