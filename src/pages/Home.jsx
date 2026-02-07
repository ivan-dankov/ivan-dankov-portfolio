import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown, ArrowDown } from "lucide-react";
import CaseCard from "../components/portfolio/CaseCard";
import LucentCard from "../components/portfolio/LucentCard";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            <p className="text-sm text-[#8C8C8C] uppercase tracking-[0.2em] mb-6">
              Warsaw, Poland
            </p>
            <h1 className="mb-6 text-4xl font-light tracking-[0] leading-[1.05] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}>Ivan Dankov


            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-3 font-light">
              Staff / Senior Product Designer
            </p>
            <p className="text-base md:text-lg text-[#1A1A1A] leading-relaxed max-w-xl mb-3 font-medium">
              I make high-stakes decisions visible&nbsp;— through design, working prototypes, and systems that scale.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-xl mb-8">
              10+ years in B2B SaaS. Fraud detection, analytics, design systems.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>

            <a
              href="https://www.linkedin.com/in/ivan-dankov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors">

              <Linkedin size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-[#E8E8E4]" />
            <a
              href="mailto:ivandankovdigital@gmail.com"
              className="flex items-center gap-2 text-sm text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors">

              <Mail size={16} />
              Email
            </a>
            <span className="w-px h-4 bg-[#E8E8E4]" />
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors">

              <FileDown size={16} />
              CV
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 flex items-center gap-2 text-[#C4C4C0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}>

          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs uppercase tracking-[0.15em]">Selected work</span>
        </motion.div>
      </section>

      {/* Case Study Cards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Dispute Workspace (large, spans 2 cols) */}
          <div className="md:col-span-2">
            <CaseCard
              page="ChargebackWorkflows"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              title="Increasing agent throughput 60% by redesigning chargeback workflows"
              metrics={[
              { value: "60%", label: "Throughput increase" },
              { value: "~80", label: "Cases per day" }]
              }
              context="Sift · B2B fraud platform · 4 months · Sole designer"
              hoverLabel="+60% throughput"
              large />

          </div>

          {/* Card 2 - ATO Revamp */}
          <CaseCard
            page="FraudInvestigation"
            image="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80"
            title="Redesigning fraud investigation UX — from research to working prototype"
            metrics={[
            { value: "3/6", label: '"Game changer"' },
            { value: "8wk", label: "Discovery to prototype" }]
            }
            context="Sift · 8 weeks · Discovery to validated prototype"
            hoverLabel={'"Game changer" — 3 of 6 customers'} />


          {/* Card 3 - Design System */}
          <CaseCard
            page="DesignSystem"
            image="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
            title="Scaling product delivery across 5 teams with a shared design platform"
            metrics={[
            { value: "3×", label: "Faster collaboration" },
            { value: "<5wk", label: "Figma migration" }]
            }
            context="Sift · Co-led with 1 designer · 4+ years"
            hoverLabel="3 products, 1 system" />

        </div>
      </section>

      {/* Lucent Research */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="max-w-2xl">
          <LucentCard />
        </div>
      </section>

      <Footer />
    </div>);

}