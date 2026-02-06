import CaseHero from "../components/casestudy/CaseHero";
import BeforeAfter from "../components/casestudy/BeforeAfter";
import ProblemShift from "../components/casestudy/ProblemShift";
import DecisionBlock from "../components/casestudy/DecisionBlock";
import WhatIDidntBuild from "../components/casestudy/WhatIDidntBuild";
import Reflection from "../components/casestudy/Reflection";
import CaseNav from "../components/casestudy/CaseNav";
import Footer from "../components/portfolio/Footer";
import { motion } from "framer-motion";

export default function FraudInvestigation() {
  return (
    <div className="min-h-screen pt-16">
      <CaseHero
        image="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1400&q=80"
        title="Redesigning fraud investigation UX — from research to working prototype in 8 weeks"
        metrics={[
          { value: "6", label: "Customer interviews" },
          { value: "3/6", label: '"Game changer"' },
          { value: "Adopted", label: "Into engineering roadmap" },
        ]}
        context="Staff Product Designer · Sift — B2B fraud platform · 8 weeks · Discovery to validated prototype"
      />

      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
        afterImage="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80"
        beforeCaption="Scroll through events. Memorize attributes. Scroll again to compare. Repeat across sessions."
        afterCaption="Select a session. See all relationships instantly."
      />

      <ProblemShift
        problemLines={[
          "Fraud analysts investigating account takeovers had to scroll through long activity timelines, memorize attributes across screens, and manually compare sessions to spot patterns.",
          "The existing tools showed raw event lists. No way to see relationships between sessions, users, IPs, and locations at a glance.",
          "Analysts handled hundreds of sessions per day. Every extra click or context switch meant slower investigations and missed threats.",
        ]}
        shiftQuote={`From "scroll through events and remember what you saw" to "select sessions and see all relationships instantly."`}
      />

      {/* Research Insight */}
      <motion.section
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6">Customer Research</p>
              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed italic"
                style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
              >
                "Session comparison is a game changer."
              </blockquote>
              <p className="text-white/50 text-sm mt-6">— 3 of 6 customers, independently</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-base text-[#4A4A4A] leading-relaxed mb-6">
              Customers told us they didn&apos;t need more data — they needed to see connections between data they already had. The existing table view worked for daily monitoring, but investigations required seeing relationships simultaneously.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-[#F5F5F0] rounded-xl p-4">
                <p className="font-semibold text-[#1A1A1A] mb-2">Daily monitoring</p>
                <p className="text-[#8C8C8C]">Table view · Scan + triage · Speed matters</p>
              </div>
              <div className="bg-[#F5F5F0] rounded-xl p-4">
                <p className="font-semibold text-[#1A1A1A] mb-2">Deep investigation</p>
                <p className="text-[#8C8C8C]">Analyzer view · Compare + connect · Relationships matter</p>
              </div>
            </div>
            <p className="text-sm text-[#8C8C8C] mt-4 italic">
              Different tasks need different interfaces. This insight drove the dual-view strategy.
            </p>
          </div>
        </div>
      </motion.section>

      <DecisionBlock
        number="01"
        label="Dual-view strategy"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
        caption="Table for daily monitoring and triage. Analyzer for deep investigation. Same data, different lenses."
        text="Could have tried to merge both needs into one view. Research showed the workflows are fundamentally different — forcing them together would compromise both."

      />

      <DecisionBlock
        number="02"
        label="Cross-highlighting in the analyzer"
        image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&q=80"
        caption="Select a session, see every related attribute light up. No more memorizing and scrolling back."
        text="Engineering complexity was high. The Lovable prototype proved the interaction model before committing engineering resources."
        reversed
      />

      <DecisionBlock
        number="03"
        label="Working prototype with Lovable"
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&q=80"
        caption="Figma showed the concept. Lovable made it testable with real interaction patterns."
        text={`Most teams stop at Figma. Building a working prototype took extra time but gave customers something real to react to — and gave engineering confidence in the interaction model.`}
      />

      <WhatIDidntBuild
        items={[
          { label: "Graph visualization", reason: "Explored nodes-and-edges for session relationships. Does not scale past ~50 nodes. Analysts needed to take action directly from the view." },
          { label: "Real-time alerting", reason: "Customers wanted notifications. Required backend infrastructure that was not in place. Investigation tools had to ship first." },
          { label: "Custom attribute ordering", reason: "Users asked to reorder columns. Kept fixed for MVP to reduce scope and test the core concept." },
        ]}
      />

      <Reflection
        text={`The Lovable prototype was the differentiator — it changed the conversation from "is this feasible?" to "when can we build this?" I'd use this approach earlier in future projects. The risk is scope creep from 4 parallel workstreams — next time I'd fight harder to sequence them.`}
      />

      <CaseNav
        prev={{ page: "ChargebackWorkflows", label: "Chargeback Workflows" }}
        next={{ page: "DesignSystem", label: "Design System" }}
      />

      <Footer />
    </div>
  );
}