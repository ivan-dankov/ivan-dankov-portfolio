import { motion } from "framer-motion";

export default function CaseHero({ image, title, metrics, context }) {
  return (
    <section className="relative w-full">
      {/* Full-bleed image */}
      <div className="relative w-full aspect-[16/8] md:aspect-[16/7] overflow-hidden bg-[#1A1A1A]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal text-white tracking-[0] leading-tight max-w-4xl mb-8"
              style={{ fontFamily: "var(--font-serif, 'Young Serif', Georgia, serif)" }}
            >
              {title}
            </h1>

            {/* Context Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Array.isArray(context) ? (
                context.map((badge, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))
              ) : (
                <span className="px-2.5 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10 backdrop-blur-sm">
                  {context}
                </span>
              )}
            </div>

            {/* Metrics bar */}
            <div className="flex flex-wrap gap-8 md:gap-12 mb-6">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-xs text-white/60 mt-1 uppercase tracking-[0.15em]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}