import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function CaseStudyHero({ title, image, children }) {
    return (
        <motion.section
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 mb-24 md:mb-32"
            initial="initial"
            animate="animate"
            variants={fadeIn}
        >
            <div className="lg:col-span-12 relative">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-[#1A1A1A] max-w-5xl"
                        style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}>
                        {title}
                    </h1>
                </div>

                {children}

                {image && (
                    <div className="relative w-full aspect-[16/9] bg-[#E5E5E5] rounded-xl overflow-hidden shadow-sm border border-[#E8E8E4] mb-8">
                        {image}
                    </div>
                )}
            </div>
        </motion.section>
    );
}
