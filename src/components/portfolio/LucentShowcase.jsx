import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";

export default function LucentShowcase() {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.8fr] gap-8 p-8 md:p-12">
        {/* Left: Product Screenshot */}
        <div className="flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white/60" />
                </div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Product Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
            >
              Lucent Research
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              AI tool for user interview synthesis
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold text-white">Built:</span> Working prototype with Cursor + Supabase
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold text-white">Validated:</span> 60% of PMs cite synthesis as top pain. Reddit testing. User interviews.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold text-white">Killed:</span> Problem was learnable, not buildable. Saved ~$75K in opportunity cost.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Button */}
        <div className="flex items-center justify-center lg:justify-end">
          <a
            href="https://dankov.work/research-clarity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/90 transition-colors w-fit"
          >
            See the product
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className="border-t border-white/10 px-8 md:px-12 py-4">
        <div className="flex flex-wrap gap-2">
          {["Side project", "AI", "Cursor", "Product validation", "Kill decision"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}