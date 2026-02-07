import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown } from "lucide-react";
import Footer from "../components/portfolio/Footer";

const toolGroups = [
  { 
    label: "Design", 
    tools: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      { name: "FigJam", logo: "https://cdn.simpleicons.org/figma" }
    ] 
  },
  { 
    label: "Prototyping & Code", 
    tools: [
      { name: "Lovable", logo: "https://cdn.simpleicons.org/bolt" },
      { name: "Cursor", logo: "https://cdn.simpleicons.org/cursor" },
      { name: "Figma Make", logo: "https://cdn.simpleicons.org/figma" }
    ] 
  },
  { 
    label: "Research", 
    tools: [
      { name: "Dovetail", logo: "https://cdn.simpleicons.org/dovetail" },
      { name: "Hotjar", logo: "https://cdn.simpleicons.org/hotjar" },
      { name: "Maze", logo: "https://cdn.simpleicons.org/maze" },
      { name: "Lyssna", logo: "https://cdn.simpleicons.org/usabilityhub" }
    ] 
  },
  { 
    label: "Tech", 
    tools: [
      { name: "HTML/CSS", logo: "https://cdn.simpleicons.org/html5" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "SQL", logo: "https://cdn.simpleicons.org/postgresql" }
    ] 
  },
  { 
    label: "Analytics & Growth", 
    tools: [
      { name: "GA4", logo: "https://cdn.simpleicons.org/googleanalytics" },
      { name: "Mixpanel", logo: "https://cdn.simpleicons.org/mixpanel" },
      { name: "Looker Studio", logo: "https://cdn.simpleicons.org/looker" }
    ] 
  },
  { 
    label: "Design-Code Bridge", 
    tools: [
      { name: "Storybook", logo: "https://cdn.simpleicons.org/storybook" },
      { name: "Chromatic", logo: "https://cdn.simpleicons.org/chromatic" }
    ] 
  },
];

const experience = [
  { company: "Sift", role: "Staff/Senior Product Designer", period: "2021–2025, 4.5 years", desc: "Fraud detection, analytics, design system" },
  { company: "Prjctr Design School", role: "Course Curator & Mentor", period: "2022–2023", desc: "Mentored ~60 designers" },
  { company: "VistaCreate", role: "Senior Product Designer", period: "2019–2021", desc: "Full product redesign, design system" },
  { company: "Nova Post", role: "Product Designer", period: "2018–2019", desc: "Omnichannel parcel tracking" },
  { company: "Weblium", role: "UX Designer", period: "2017–2018", desc: "0-to-1 product redesign" },
  { company: "Aimbulance", role: "UX Designer", period: "2015–2016", desc: "MasterCard, Unilever, PepsiCo" },
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">What I'm looking for</p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            I'm looking for a senior or staff product design role at a company building complex B2B tools — fraud, fintech, insurance, clinical data, anything where users make high-stakes decisions with large datasets. I want to work with teams that test before they polish and ship before they perfect.
          </p>
        </motion.section>

        {/* Tools */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-10">Tools</p>
          <div className="space-y-8">
            {toolGroups.map((group, i) => (
              <div key={i}>
                <p className="text-sm text-[#6B6B6B] mb-4 font-medium">{group.label}</p>
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 px-4 py-3 bg-white text-[#1A1A1A] text-sm rounded-xl border-2 border-[#E8E8E4] hover:border-[#6B6B6B] transition-colors"
                    >
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-5 h-5"
                      />
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">Experience</p>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i}>
                <p className="text-base text-[#1A1A1A]">
                  <span className="font-semibold">{exp.company}</span> — {exp.role}
                </p>
                <p className="text-sm text-[#6B6B6B] mt-1">{exp.period}</p>
                <p className="text-sm text-[#4A4A4A] mt-1">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Teaching */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">Teaching</p>
          <div className="space-y-2 text-sm text-[#4A4A4A] leading-relaxed">
            <p><span className="font-semibold text-[#1A1A1A]">UX Medium Course</span> — Prjctr Design School — Course curator and instructor</p>
            <p><span className="font-semibold text-[#1A1A1A]">Product Design Course</span> — Prjctr Design School — Course curator and instructor</p>
            <p>Mentored ~60 mid-level designers across both programs</p>
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">Testimonials</p>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <div key={i}>
                <p className="text-base text-[#4A4A4A] leading-relaxed mb-3">
                  "{t.quote}"
                </p>
                <p className="text-sm text-[#6B6B6B] italic">{t.source}</p>
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">Contact</p>
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