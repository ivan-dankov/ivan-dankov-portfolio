import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CaseCard({ page, image, title, metrics, context, hoverLabel, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={createPageUrl(page)}>
      <motion.div
        className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#E8E8E4] ${
          large ? "md:col-span-2" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Hover overlay with metric */}
          <div className={`absolute inset-0 bg-[#1A1A1A]/60 flex items-center justify-center transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}>
            <span className="text-white text-lg md:text-xl font-medium tracking-tight">
              {hoverLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          <h3 className="text-lg md:text-xl font-semibold leading-snug tracking-tight text-[#1A1A1A]">
            {title}
          </h3>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                  {m.value}
                </span>
                <span className="text-xs text-[#8C8C8C] mt-1 uppercase tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Context */}
          <p className="text-sm text-[#8C8C8C] leading-relaxed">{context}</p>
        </div>
      </motion.div>
    </Link>
  );
}