import { motion } from "framer-motion";

export default function DecisionBlock({ number, label, image, caption, text, reversed }) {
  return (
    <motion.section
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center ${
        reversed ? "md:direction-rtl" : ""
      }`}>
        {/* Image */}
        <div className={`md:col-span-3 ${reversed ? "md:order-2" : "md:order-1"}`}>
          <div className="rounded-xl overflow-hidden bg-[#F0F0EC]">
            <img
              src={image}
              alt={caption}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[#8C8C8C] mt-3 leading-relaxed">{caption}</p>
        </div>

        {/* Text */}
        <div className={`md:col-span-2 ${reversed ? "md:order-1" : "md:order-2"}`}>
          <span className="text-6xl md:text-7xl font-bold text-[#E8E8E4] leading-none block mb-4">
            {number}
          </span>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#1A1A1A] mb-4">
            {label}
          </h3>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.section>
  );
}