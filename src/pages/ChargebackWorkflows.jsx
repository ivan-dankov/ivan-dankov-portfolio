import CaseHero from "../components/casestudy/CaseHero";
import BeforeAfter from "../components/casestudy/BeforeAfter";
import ProblemShift from "../components/casestudy/ProblemShift";
import DecisionBlock from "../components/casestudy/DecisionBlock";
import CaseOutcomes from "../components/casestudy/CaseOutcomes";
import WhatIDidntBuild from "../components/casestudy/WhatIDidntBuild";
import Reflection from "../components/casestudy/Reflection";
import CollaborationCredits from "../components/casestudy/CollaborationCredits";
import CaseNav from "../components/casestudy/CaseNav";
import Footer from "../components/portfolio/Footer";

export default function ChargebackWorkflows() {
  return (
    <div className="min-h-screen pt-16">
      <CaseHero
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
        title="Increasing agent throughput 140% by redesigning chargeback workflows"
        metrics={[
          { value: "50 to 120", label: "Cases per day" },
          { value: "140%", label: "Throughput increase" },
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
          "Result: 50 cases/day, inconsistent quality, could not scale to enterprise volumes.",
        ]}
        shiftQuote={`From "fill out a template and hope it's complete" to "complete a known set of required fields and preview exactly what gets sent."`}
      />

      <DecisionBlock
        number="01"
        label="Templates to structured fields"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80"
        caption="Every evidence field has a clear state — incomplete, enhanceable, or complete. Completion is deterministic, not guesswork."
        text="The existing UI was a single long template where agents typed freeform text. We considered adding validation on top of it. I pushed for a full restructure into discrete fields with known states — because validation alone wouldn't show agents what's required upfront."
      />

      <DecisionBlock
        number="02"
        label="Dual-view architecture"
        image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&q=80"
        caption="Left: where agents enter data. Right: exactly what the processor receives. No surprises at submission."
        text={`Could have kept a single editing view. Splitting into entry and rendered views added complexity but eliminated the gap between "what I typed" and "what they see."`}
        reversed
      />

      <DecisionBlock
        number="03"
        label="Field-level status system"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
        caption="Three states per field. Red: missing. Yellow: passable but weak. Green: ready."
        text={`Binary complete/incomplete was the simpler path. But agents needed to know the difference between "this will fail" and "this will pass but could be stronger." The three-state model let teams prioritize which fields to improve when deadlines were tight.`}
      />

      <DecisionBlock
        number="04"
        label="Field navigator as checklist and wayfinding"
        image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1000&q=80"
        caption="Sidebar navigator doubles as a progress tracker. Agents see which sections are incomplete without scrolling through the full document."
        text="Explored a linear wizard (step 1, 2, 3). Rejected it — agents don't work sequentially. They fill what they know first, then circle back. The navigator supports both patterns: jump to any section, see overall progress at a glance."
        reversed
      />

      <DecisionBlock
        number="05"
        label="Explicit finalization step"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80"
        caption="Full preview before submission. Field-by-field status. Irreversibility warning. No more silent incomplete submissions."
        text="Before the redesign, agents could submit without reviewing — incomplete sections were silently excluded, leading to weak dispute responses. The finalization modal forces a deliberate check. It shows exactly what will be sent and what's missing, making the submit action an informed decision instead of a guess."
      />

      <CaseOutcomes
        outcomes={[
          { metric: "50 to 120 cases/day", description: "Agent throughput increased 140% with the new structured field system and completion tracking." },
          { metric: "Alaska Airlines closed", description: "Enterprise customer deal closed after demonstrating the scalability of the new workflow." },
          { metric: "Fewer incomplete submissions", description: "Structured fields with clear status indicators eliminated silent incomplete submissions." },
        ]}
      />

      <WhatIDidntBuild
        items={[
          { label: "Batch processing", reason: "Multiple disputes at once. Deprioritized — single-case quality had to improve first." },
          { label: "Confidence scoring", reason: "Win likelihood before submission. Data science wasn't ready, and bad scores could discourage valid submissions." },
          { label: "Processor-specific requirements", reason: "Different processors need different evidence. Current design treats all fields the same. Next iteration." },
        ]}
      />

      <Reflection
        text={`I'd push harder for analytics instrumentation from day one. We shipped without tracking field-level completion rates or time-per-section — that data would have guided which fields to auto-fill first. I'd also involve processor compliance requirements earlier to avoid a post-launch iteration.`}
      />

      <CollaborationCredits
        credits="Designed solo. Worked with the PM on requirements scoping and the engineering lead on field architecture migration."
      />

      <CaseNav
        next={{ page: "FraudInvestigation", label: "Fraud Investigation" }}
      />

      <Footer />
    </div>
  );
}