import CaseHero from "../components/casestudy/CaseHero";
import ProblemShift from "../components/casestudy/ProblemShift";
import DecisionBlock from "../components/casestudy/DecisionBlock";
import WhatIDidntBuild from "../components/casestudy/WhatIDidntBuild";
import Reflection from "../components/casestudy/Reflection";
import CaseNav from "../components/casestudy/CaseNav";
import Footer from "../components/portfolio/Footer";
import { motion } from "framer-motion";

export default function DesignSystem() {
  return (
    <div className="min-h-screen pt-16">
      <CaseHero
        image="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1400&q=80"
        title="Scaling product delivery across 5 teams with a shared design platform"
        metrics={[
          { value: "Console 2.0", label: "Shipped on system" },
          { value: "3×", label: "Faster collaboration" },
          { value: "<5wk", label: "Figma migration" },
        ]}
        context="Staff Product Designer · Sift · Co-led with 1 designer · 4+ years"
      />

      {/* Unification visual instead of before/after slider */}
      <motion.section
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Before</p>
            <p className="text-lg text-white/80 leading-relaxed">
              Every team built their own UI. Same product suite, no shared language. Inconsistent buttons, different table styles, mismatched navigation patterns.
            </p>
          </div>
          <div className="bg-white border border-[#E8E8E4] rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-4">After</p>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              One system. Consistent components across all products. Shared patterns, shared tokens, shared language. Every new feature ships on the same foundation.
            </p>
          </div>
        </div>
      </motion.section>

      <ProblemShift
        problemLines={[
          "Sift's product suite had grown across multiple teams with no shared design language. Every product looked and worked differently. Same components rebuilt differently by each team.",
          "Design-engineering handoff was slow. No shared source of truth meant every feature required custom specs.",
          "New designers took weeks to get productive. No documentation, no patterns, no standards.",
        ]}
        shiftQuote='From "every team builds their own UI from scratch" to "one system that ships consistent products faster."'
      />

      {/* What It Enabled */}
      <motion.section
        className="w-full bg-[#1A1A1A] py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">What It Enabled</p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Console 2.0 was the first full product redesign built on the system. After that, every new feature — including the Dispute Workspace and ATO tools from my other cases — shipped faster because the foundations were already in place.
          </p>
        </div>
      </motion.section>

      <DecisionBlock
        number="01"
        label="Audit first, build second"
        image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1000&q=80"
        caption="Mapped every pattern across every product before building a single component."
        text="Pressure to start building components immediately. The audit took time but prevented building the wrong things. Found duplicate patterns across products that nobody had catalogued."
      />

      <DecisionBlock
        number="02"
        label="Data-heavy components as first-class citizens"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
        caption="Tables, filters, and data visualizations got the same attention as buttons and inputs. Because that's what Sift's products are made of."
        text="Most design systems start with basic UI primitives. We prioritized the components that carried the most product-specific complexity — the ones that actually slowed teams down."
        reversed
      />

      <DecisionBlock
        number="03"
        label="Design-code sync through Storybook"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80"
        caption="Components existed in both Figma and code. Storybook was the bridge."
        text="Maintaining parity between design and code is expensive. Without it, the system drifts and teams stop trusting it. Storybook made the code the source of truth that designers could verify against."
      />

      {/* Figma Migration - brief */}
      <motion.section
        className="max-w-3xl mx-auto px-6 md:px-12 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="border-l-2 border-[#E8E8E4] pl-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-3">Figma Migration</p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            The migration wasn't just a tool switch — Figma's collaborative features let us evolve the system faster and removed the file-management overhead that was slowing the team down. Completed in under 5 weeks with full team adoption.
          </p>
        </div>
      </motion.section>

      <WhatIDidntBuild
        items={[
          { label: "Formal governance model", reason: "No contribution guidelines or approval process. System was small enough for design-engineering syncs. Governance would have added overhead at our scale." },
          { label: "Adoption metrics", reason: "No component usage or coverage tracking. In hindsight, this would have helped prioritize what to build next." },
          { label: "Dark mode / theming", reason: "Token architecture supports it. Fraud analysts work in controlled office environments — not a real need." },
        ]}
      />

      <Reflection
        text="I'd add adoption and quality metrics from day one — component coverage, usage frequency, and UI bug rates tied to system vs. non-system code. Without data, it was hard to prove the system's value beyond 'things feel faster.' I'd also establish a governance model earlier — the system outgrew the 'two designers manage it informally' approach."
      />

      <CaseNav
        prev={{ page: "FraudInvestigation", label: "Fraud Investigation" }}
      />

      <Footer />
    </div>
  );
}