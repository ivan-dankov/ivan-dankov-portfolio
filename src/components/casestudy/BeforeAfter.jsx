import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter({ beforeImage, afterImage, beforeCaption, afterCaption }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseUp = () => { dragging.current = false; };
  const handleMouseMove = (e) => { if (dragging.current) updateSlider(e.clientX); };
  const handleTouchMove = (e) => { updateSlider(e.touches[0].clientX); };

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-col-resize select-none bg-[#1A1A1A]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* After (full background) */}
          <img
            src={afterImage}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${containerRef.current?.offsetWidth || 1000}px` }}
              draggable={false}
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-4 bg-[#8C8C8C] rounded-full" />
                <div className="w-0.5 h-4 bg-[#8C8C8C] rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-[#1A1A1A]/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-[#1A1A1A]/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
            After
          </div>
        </div>

        {/* Captions */}
        <div className="grid grid-cols-2 gap-8 mt-6">
          <p className="text-sm text-[#8C8C8C] leading-relaxed">{beforeCaption}</p>
          <p className="text-sm text-[#8C8C8C] leading-relaxed text-right">{afterCaption}</p>
        </div>
      </div>
    </motion.section>
  );
}