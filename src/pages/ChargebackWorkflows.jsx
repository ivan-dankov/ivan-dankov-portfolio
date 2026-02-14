import { Link } from "react-router-dom";
import ChargebackHero from "../assets/chargeback-workflows/Hero2.png";
import DataEntryAllFields from "../assets/chargeback-workflows/Data Entry View - All Fields.png";
import RenderedViewAllFields from "../assets/chargeback-workflows/Rendered View - All Fields.png";
import BeforeChargeback from "../assets/chargeback-workflows/before-cahrgeback-com.png";
import DMAnnotations from "../assets/chargeback-workflows/DM annotations.png";
import RenderedViewIncompleteNav from "../assets/chargeback-workflows/Rendered View - Incomplete - Nav.png";
import RenderedViewIncomplete from "../assets/chargeback-workflows/Rendered View - Incomplete.png";
import FinalizeImage from "../assets/chargeback-workflows/Finalize.png";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyMetrics from "../components/case-study/CaseStudyMetrics";
import CaseStudyContext from "../components/case-study/CaseStudyContext";
import CaseStudySection from "../components/case-study/CaseStudySection";
import ShiftComparison from "../components/case-study/ShiftComparison";
import KeyDecision from "../components/case-study/KeyDecision";
import CompareSlider from "../components/case-study/CompareSlider";
import CaseStudyFooterNav from "../components/case-study/CaseStudyFooterNav";

export default function ChargebackWorkflows() {
  return (
    <CaseStudyLayout>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24">

        <CaseStudyHero
          title="Increasing agent throughput 87.5% by redesigning chargeback workflows"
          image={
            <img
              src={ChargebackHero}
              alt="Project Hero"
              className="w-full h-auto rounded-xl shadow-sm border border-[#E8E8E4]"
            />
          }
        >
          <CaseStudyMetrics
            items={[
              { value: "87.5%", label: "Throughput Increase", description: "Agents went from 32 to 60 cases per day." },
              { value: "Deal Closed", label: "With Alaska Airlines", description: "Scalability was key to closing Alaska Airlines." },
              { value: "0", label: "Silent Errors", description: "Structured fields eliminated silent incomplete submissions." },
            ]}
          />
        </CaseStudyHero>

        <CaseStudyContext
          items={[
            { label: "Role", value: "Staff Product Designer" },
            { label: "Company", value: "Sift" },
            { label: "Timeline", value: "4 Months", description: "Discovery to Launch" },
            { label: "Team", value: "Sole Designer", description: "PM, Eng Lead, 3 Engineers" },
          ]}
        />

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="The Problem">
          <h3 className="text-2xl md:text-3xl font-normal text-[#1A1A1A] mb-8 leading-tight">
            Chargeback agents were struggling to compile evidence under tight deadlines using a template-based tool with no validation.
          </h3>
          <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-12">
            <p>
              The existing workflow was a single long page. Completion depended entirely on agent memory. This resulted in:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#6B6B6B]">
              <li>Low throughput (32 cases/day)</li>
              <li>Inconsistent submission quality</li>
              <li>Inability to scale to enterprise volumes (blocking the Alaska Airlines deal)</li>
            </ul>
          </div>

          <ShiftComparison
            beforeContent={(
              <>
                <p className="text-lg text-[#1A1A1A]">Fill out a template and hope it's not missing anything.</p>
              </>
            )}
            afterContent={(
              <>
                <p className="text-lg text-[#1A1A1A]">Complete a known set of structured fields and preview exactly what the processor receives.</p>
              </>
            )}
          />
        </CaseStudySection>

        <CaseStudySection title="Key Decisions">
          <div className="space-y-24">
            <KeyDecision
              number="01"
              title="Templates to Structured Fields"
              image={
                <CompareSlider
                  leftImage={BeforeChargeback}
                  rightImage={RenderedViewIncomplete}
                  leftLabel="Huge list of not validated fields"
                  rightLabel="Structured validated list"
                />
              }
              imageCaption="Every evidence field has a clear state — incomplete, enhanceable, or complete. Completion is deterministic, not guesswork."
            >
              <p>
                The existing UI was a single long template where agents typed freeform text. We considered adding validation on top of it. I pushed for a full restructure into discrete fields with known states - because validation alone wouldn't show agents what's required upfront.
              </p>
            </KeyDecision>

            <KeyDecision
              number="02"
              title="Dual-View Architecture"
              image={
                <CompareSlider
                  leftImage={DataEntryAllFields}
                  rightImage={RenderedViewAllFields}
                  leftLabel="Data Entry"
                  rightLabel="Processor View"
                />
              }
              imageCaption="Left: where agents enter data. Right: exactly what the processor receives."
            >
              <p>
                Agents had no idea what processors actually saw. Templates hid the output format. I split the workspace into two views - one for editing, one showing the processor's perspective. Added complexity, but eliminated the "I thought I submitted everything" problem entirely.
              </p>
            </KeyDecision>

            <KeyDecision
              number="03"
              title="Field-Level Status System"
              image={
                <img
                  src={DMAnnotations}
                  alt="DM Annotations - Field Level Status System"
                  className="w-full h-auto shadow-sm rounded-t-xl"
                />
              }
              imageCaption="Three states per field. Red: missing. Yellow: passable but weak. Green: ready."
            >
              <p>
                Binary complete/incomplete was the simpler path. But agents needed to know the difference between "this will fail" and "this will pass but could be stronger." The three-state model let teams prioritize which fields to improve when deadlines were tight.
              </p>
            </KeyDecision>

            <KeyDecision
              number="04"
              title="Field Navigator as Checklist"
              image={
                <img
                  src={RenderedViewIncompleteNav}
                  alt="Rendered View Incomplete Nav"
                  className="w-full h-auto shadow-sm rounded-t-xl"
                />
              }
              imageCaption="Sidebar navigator doubles as a progress tracker. Agents see which sections are incomplete without scrolling through the full document."
            >
              <p>
                Explored a linear wizard (step 1, 2, 3). Rejected it - agents don't work sequentially. They fill what they know first, then circle back. The navigator supports both patterns: jump to any section, see overall progress at a glance.
              </p>
            </KeyDecision>

            <KeyDecision
              number="05"
              title="Explicit Finalization Step"
              image={
                <img
                  src={FinalizeImage}
                  alt="Finalize Modal"
                  className="w-full h-auto shadow-sm rounded-t-xl"
                />
              }
              imageCaption="Full preview before submission. Field-by-field status. Irreversibility warning. No more silent incomplete submissions."
            >
              <p>
                Before the redesign, agents could submit without reviewing - incomplete sections were silently excluded, leading to weak dispute responses. The finalization modal forces a deliberate check. It shows exactly what will be sent and what's missing, making the submit action an informed decision instead of a guess.
              </p>
            </KeyDecision >

          </div >
        </CaseStudySection >

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Outcomes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">87.5% throughput increase</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Agents went from 32 to 60 cases per day. The structured format eliminated the need for manual re-entry and provided clearer next actions.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Alaska Airlines deal closed</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Scalability was a key blocker. Demonstrating that our tools could handle enterprise volume with precision was the tipping point for the deal.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">0 silent errors</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">We moved from free-text templates to structured validation. Incomplete submissions were physically impossible to send.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Reduced training time</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">New agents could handle cases confidently in days instead of weeks because the UI guided them through the required evidence.</p>
            </div>
          </div>
          <div className="mt-12 bg-[#1A1A1A] p-12 rounded-2xl text-center">
            <p className="text-2xl md:text-3xl font-serif text-white/90 italic leading-relaxed mb-6">
              We can finally trust the team to handle volume without dropping the quality ball. The preview mode is a lifesaver.
            </p>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest">— Ops Manager, FinTech Customer</p>
          </div>
        </CaseStudySection>

        <CaseStudyFooterNav
          previous={{ link: "/DesignSystem", title: "Design System" }}
          next={{ link: "/FraudInvestigation", title: "Fraud Investigation" }}
        />

      </div >
    </CaseStudyLayout >
  );
}