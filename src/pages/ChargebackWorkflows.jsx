import CaseHero from "../components/casestudy/CaseHero";
import BeforeAfter from "../components/casestudy/BeforeAfter";
import ProblemShift from "../components/casestudy/ProblemShift";
import DecisionBlock from "../components/casestudy/DecisionBlock";
import WhatIDidntBuild from "../components/casestudy/WhatIDidntBuild";
import Reflection from "../components/casestudy/Reflection";
import CaseNav from "../components/casestudy/CaseNav";
import Footer from "../components/portfolio/Footer";

export default function ChargebackWorkflows() {
  return (
    <div className="min-h-screen pt-16">
      <CaseHero
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
        title="Increasing agent throughput 60% by redesigning chargeback workflows"
        metrics={[
          { value: "60%", label: "Throughput increase" },
          { value: "~80", label: "Cases per day" },
          { value: "Enterprise", label: "Alaska Airlines closed" },
        ]}
        context="Staff Product Designer · Sift — B2B fraud platform · 4 months · Sole designer"
      />

      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
        afterImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        beforeCaption="One long scroll. Template-based. No completion tracking. Agents relied on memory."
        afterCaption="Structured fields. Clear status per section. Preview of what the processor receives."
      />

      <ProblemShift
        problemLines={[
          "Chargeback agents compile evidence and submit responses to payment processors under tight deadlines.",
          "The old workflow was a long template page with no validation, no progress tracking, and no preview. Completion depended on agent experience.",
          "Result: ~50 cases/day, inconsistent quality, couldn't scale to enterprise volumes.",
        ]}
        shiftQuote='From "fill out a template and hope it\'s complete" to "complete a known set of required fields and preview exactly what gets sent."'
      />

      <DecisionBlock
        number="01"
        label="Templates to structured fields"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80"
        caption="Every evidence field has a clear state — incomplete, enhanceable, or complete. Completion is deterministic, not guesswork."
        text="We considered adding validation to the existing template model. I pushed for a full restructure because validation alone wouldn't make requirements visible upfront — agents would still discover problems only at submission."
      />

      <DecisionBlock
        number="02"
        label="Dual-view architecture"
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&q=80"
        caption="Left: where agents enter data. Right: exactly what the processor receives. No surprises at submission."
        text="Could have kept a single editing view. Splitting into entry and rendered views added complexity but eliminated the gap between 'what I typed' and 'what they see.'"
        reversed
      />

      <DecisionBlock
        number="03"
        label="Field-level status system"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
        caption="Three states per field. Agents see at a glance what's missing, what could be improved, and what's ready."
        text="Simpler approach was binary complete/incomplete. Three states added the 'enhanceable' middle ground — fields that pass but could be stronger."
      />

      <WhatIDidntBuild
        items={[
          { label: "Batch processing", reason: "Multiple disputes at once. Deprioritized — single-case quality had to improve first." },
          { label: "Confidence scoring", reason: "Win likelihood before submission. Data science wasn't ready, and bad scores could discourage valid submissions." },
          { label: "Processor-specific requirements", reason: "Different processors need different evidence. Current design treats all fields the same. Next iteration." },
        ]}
      />

      <Reflection
        text="I'd push harder for analytics instrumentation from day one. We shipped without tracking field-level completion rates or time-per-section — that data would have guided which fields to auto-fill first. I'd also involve processor compliance requirements earlier to avoid a post-launch iteration."
      />

      <CaseNav
        next={{ page: "FraudInvestigation", label: "Fraud Investigation" }}
      />

      <Footer />
    </div>
  );
}