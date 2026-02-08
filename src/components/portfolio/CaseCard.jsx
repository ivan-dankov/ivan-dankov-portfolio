import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CaseCard({ page, image, title, metrics, context, hoverLabel, large = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={createPageUrl(page)} className="block h-full">
      <motion.div
        className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#E8E8E4] h-full flex flex-col ${large ? "md:col-span-2" : ""
          }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10] shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Hover overlay with metric */}
          <div className={`absolute inset-0 bg-[#1A1A1A]/60 flex items-center justify-center transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"
            }`}>
            <span className="text-white text-lg md:text-xl font-medium tracking-tight">
              {hoverLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 flex flex-col flex-grow">
          <h3
            className="text-[2rem] font-normal leading-tight tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
          >
            {title}
          </h3>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-medium tracking-tight text-[#1A1A1A] tabular-nums">
                  {m.value}
                </span>
                <span className="text-sm text-[#6B6B6B] mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-grow" />

          {/* Context Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {Array.isArray(context) ? (
              context.map((badge, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-[#F5F5F0] text-[#6B6B6B] text-xs font-medium rounded-full border border-[#E8E8E4]"
                >
                  {badge}
                </span>
              ))
            ) : (
              <span className="px-2.5 py-1 bg-[#F5F5F0] text-[#6B6B6B] text-xs font-medium rounded-md border border-[#E8E8E4]">
                {context}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}