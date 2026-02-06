import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown } from "lucide-react";
import Footer from "../components/portfolio/Footer";

const experience = [
  { company: "Sift", role: "Staff/Senior Product Designer", period: "2021–2025", duration: "4.5 years", desc: "Fraud detection, analytics, design system" },
  { company: "Prjctr Design School", role: "Course Curator & Mentor", period: "2022–2023", duration: "", desc: "Mentored ~60 designers" },
  { company: "VistaCreate", role: "Senior Product Designer", period: "2019–2021", duration: "", desc: "Full product redesign, design system" },
  { company: "Nova Post", role: "Product Designer", period: "2018–2019", duration: "", desc: "Omnichannel parcel tracking" },
  { company: "Weblium", role: "UX Designer", period: "2017–2018", duration: "", desc: "0-to-1 product redesign" },
  { company: "Aimbulance", role: "UX Designer", period: "2015–2016", duration: "", desc: "MasterCard, Unilever, PepsiCo" },
];

const testimonials = [
  {
    quote: "Ivan is very detail-oriented and consistently delivers thoughtful, well-executed designs. He gives feedback by first trying to understand the problem, not by reacting quickly, and is equally open to feedback from others.",
    source: "UX Research Lead, Cybersecurity B2B SaaS",
  },
  {
    quote: "Ivan's great at explaining complex stuff in a simple way — whether it's helping the team figure out a new workflow or mentoring designers. He's focused, easy to work with, and not afraid of big challenges.",
    source: "Senior Product Designer, Cybersecurity B2B SaaS",
  },
  {
    quote: "Ivan is a thoughtful and very capable product designer. He picks up context quickly, asks the right questions, and delivers high-quality work even under tight timelines.",
    source: "CEO, SalesTech AI SaaS",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 md:pt-36">
      <div className="max-w-2xl mx-auto px-6 md:px-12">

        {/* Photo + Bio */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-24 rounded-2xl bg-[#E8E8E4] mb-8 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Ivan Dankov"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
            I've spent 10 years designing tools for people who make high-stakes decisions with messy data — fraud analysts, payment ops, security teams. I build the interfaces and the systems behind them. Currently in Warsaw, looking for complex problems at companies that test assumptions before scaling polish.
          </p>
        </motion.section>

        {/* What I'm Looking For */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">What I'm looking for</p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            I'm looking for a senior or staff product design role at a company building complex B2B tools — fraud, fintech, insurance, clinical data, anything where users make high-stakes decisions with large datasets. I want to work with teams that test before they polish and ship before they perfect.
          </p>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">Experience</p>
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div key={i} className="flex gap-6 py-5 border-b border-[#E8E8E4] last:border-b-0">
                <div className="w-28 shrink-0">
                  <p className="text-xs text-[#8C8C8C] font-mono">{exp.period}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    {exp.company}
                    {exp.duration && <span className="text-[#8C8C8C] font-normal ml-2">· {exp.duration}</span>}
                  </p>
                  <p className="text-sm text-[#8C8C8C] mt-0.5">{exp.role}</p>
                  <p className="text-xs text-[#B0B0AC] mt-1">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">What people say</p>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border-l-2 border-[#E8E8E4] pl-6">
                <p className="text-base text-[#4A4A4A] leading-relaxed italic">
                  "{t.quote}"
                </p>
                <p className="text-xs text-[#8C8C8C] mt-3">— {t.source}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">Get in touch</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:ivandankovdigital@gmail.com"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <Mail size={18} />
              <span className="text-sm">ivandankovdigital@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-dankov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <Linkedin size={18} />
              <span className="text-sm">Ivan Dankov</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <FileDown size={18} />
              <span className="text-sm">Download CV</span>
            </a>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}