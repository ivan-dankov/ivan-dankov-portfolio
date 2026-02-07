import CaseHero from "../components/casestudy/CaseHero";
import ProblemShift from "../components/casestudy/ProblemShift";
import DecisionBlock from "../components/casestudy/DecisionBlock";
import CaseOutcomes from "../components/casestudy/CaseOutcomes";
import WhatIDidntBuild from "../components/casestudy/WhatIDidntBuild";
import Reflection from "../components/casestudy/Reflection";
import CollaborationCredits from "../components/casestudy/CollaborationCredits";
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
        shiftQuote={`From "every team builds their own UI from scratch" to "one system that ships consistent products faster."`}
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
        label="Starting from the product, not from theory"
        image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1000&q=80"
        caption="Mapped every UI pattern across every product before building a single component. The system grew from what existed, not from an ideal."
        text="Most design systems start with foundational primitives — colors, spacing, type scales. I started with the most-used product patterns because that's where fragmentation hurt most. Buttons weren't the bottleneck. Inconsistent tables, filters, and decision components were. The audit identified what to unify first."
      />

      <DecisionBlock
        number="02"
        label="Domain-specific components, not a generic UI kit"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
        caption="Tables, filters, and decision components designed for analysts making high-stakes calls on fraud data. Not a generic kit."
        text="We debated building a generic, extensible system vs. one optimized for Sift's domain. I pushed for domain-specific defaults — a table component that assumed fraud data columns, a decision selector matching the block/watch/accept workflow. Teams didn't have to configure components for basic use cases, which drove faster adoption."
        reversed
      />

      <DecisionBlock
        number="03"
        label="Storybook as the contract between design and code"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80"
        caption="If it didn't exist in Storybook, it wasn't part of the system. Storybook was the single source of truth."
        text="The alternative was a Figma-only system with handoff documentation. I pushed for Storybook because it made the system enforceable — engineers checked component behavior in code, not a design spec. Chromatic caught visual regressions automatically. Expensive to maintain, but without it the system would drift."
      />

      <DecisionBlock
        number="04"
        label="Figma migration as a system upgrade"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
        caption="Migrated from Sketch + Abstract to Figma in under 5 weeks. Full team adopted and productive."
        text="This wasn't just a tool switch. Sketch + Abstract created file-management overhead that slowed the whole team. Figma's collaborative features let us evolve the system faster — real-time editing, shared libraries, no version conflicts. The migration removed the bottleneck that was capping how fast the system could grow."
        reversed
      />

      <DecisionBlock
        number="05"
        label="Documentation as a product surface"
        image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1000&q=80"
        caption="Documentation written for the people using the system, not for the people who built it."
        text="Most design system docs are written by designers for designers. I treated documentation as a product surface — written for engineers implementing components and new designers onboarding. Clear usage guidelines, do/don't examples, and interaction specs. If the docs were unclear, the component wasn't done."
      />

      <CaseOutcomes
        outcomes={[
          { metric: "Console 2.0 shipped on system", description: "First full product redesign built on the design system, proving the foundation." },
          { metric: "3× faster collaboration", description: "Design-engineering handoff speed increased with shared components and documentation." },
          { metric: "<5 weeks Figma migration", description: "Full team migrated from Sketch + Abstract to Figma with complete adoption." },
        ]}
      />

      <WhatIDidntBuild
        items={[
          { label: "Formal governance model", reason: "No contribution guidelines or approval process. System was small enough for design-engineering syncs. Governance would have added overhead at our scale." },
          { label: "Adoption metrics", reason: "No component usage or coverage tracking. In hindsight, this would have helped prioritize what to build next." },
          { label: "Dark mode / theming", reason: "Token architecture supports it. Fraud analysts work in controlled office environments — not a real need." },
        ]}
      />

      <Reflection
        text={`I'd add adoption and quality metrics from day one — component coverage, usage frequency, and UI bug rates tied to system vs. non-system code. Without data, it was hard to prove the system's value beyond "things feel faster." I'd also establish a governance model earlier — the system outgrew the "two designers manage it informally" approach.`}
      />

      <CollaborationCredits
        credits="Co-created with the Senior Product Designer. Adopted across teams led by product managers and engineering leads from Console, Workflows, and Analytics."
      />

      <CaseNav
        prev={{ page: "FraudInvestigation", label: "Fraud Investigation" }}
      />

      <Footer />
    </div>
  );
}