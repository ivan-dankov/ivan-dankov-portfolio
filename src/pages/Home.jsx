import { motion } from "framer-motion";
import HeroImage from "../assets/design-system/hero/hero.webp";
import CaseCard from "../components/portfolio/CaseCard";
import LucentShowcase from "../components/portfolio/LucentShowcase";
import Footer from "../components/portfolio/Footer";
import SocialLinks from "../components/portfolio/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 md:pt-44 lg:pt-52 pb-16 md:pb-32 lg:pb-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
            >
              I make high-stakes decisions visible&nbsp;— through design, working prototypes, and systems that scale.
            </h1>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-8">
              Staff / Senior Product Designer with 10 years in product design, last 5 of them in B2B SaaS. Fraud detection, analytics, design systems. I use AI daily to research, prototype, and validate - but users always lead the way.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </section>

      {/* Case Study Cards */}
      {/* Work Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-normal tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
          >
            Selected Work
          </h2>
          <span className="hidden md:block text-[#6B6B6B] text-sm uppercase tracking-wider mb-2">
            2020 — 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Card 1 - Dispute Workspace (large, spans 2 cols) */}
          <div className="md:col-span-2">
            <CaseCard
              page="ChargebackWorkflows"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              title="Increasing agent throughput 140% by redesigning chargeback workflows"
              metrics={[
                { value: "50 to 120", label: "Cases per day" },
                { value: "140%", label: "Throughput increase" },
                { value: "Enterprise", label: "Alaska Airlines closed" }
              ]}
              context={[
                "Staff Product Designer", "Sift — B2B fraud platform", "4 months", "Sole designer"
              ]}
              hoverLabel="+140% throughput"
              large
            />
          </div>

          {/* Card 2 - ATO Revamp */}
          <CaseCard
            page="FraudInvestigation"
            image="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80"
            title="Redesigning fraud investigation UX — from research to working prototype"
            metrics={[
              { value: "6", label: "Customer interviews" },
              { value: "3/6", label: '"Game changer"' },
              { value: "Adopted", label: "Into engineering roadmap" }
            ]}
            context={[
              "Staff Product Designer", "Sift — B2B fraud platform", "8 weeks", "Discovery to validated prototype"
            ]}
            hoverLabel={'"Game changer" — 3 of 6 customers'}
          />

          {/* Card 3 - Design System */}
          <CaseCard
            page="DesignSystem"
            image={HeroImage}
            title="Scaling product delivery across 5 teams with a shared design platform"
            metrics={[
              { value: "Console 2.0", label: "Shipped on system" },
              { value: "3×", label: "Less UI bugs" },
              { value: "<5wk", label: "Figma migration" }
            ]}
            context={[
              "Staff Product Designer", "Sift", "Co-led with 1 designer", "4+ years"
            ]}
            hoverLabel="3 products, 1 system"
          />
        </div>

        {/* Lucent Research */}
        <LucentShowcase />
      </section>

      <Footer />
    </div>
  );
}