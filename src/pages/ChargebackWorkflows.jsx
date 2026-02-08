import { Link } from "react-router-dom";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import CaseStudyNav from "../components/case-study/CaseStudyNav";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyMetrics from "../components/case-study/CaseStudyMetrics";
import CaseStudyContext from "../components/case-study/CaseStudyContext";
import CaseStudySection from "../components/case-study/CaseStudySection";
import ShiftComparison from "../components/case-study/ShiftComparison";
import KeyDecision from "../components/case-study/KeyDecision";
import CaseStudyFooterNav from "../components/case-study/CaseStudyFooterNav";

export default function ChargebackWorkflows() {
  return (
    <CaseStudyLayout>
      <CaseStudyNav title="Chargeback Workflows" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24">

        <CaseStudyHero
          title="Increasing agent throughput 140% by redesigning chargeback workflows"
          image={
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
              alt="Project Hero"
              className="w-full h-auto rounded-xl shadow-sm border border-[#E8E8E4]"
            />
          }
        >
          <CaseStudyMetrics
            items={[
              { value: "140%", label: "Throughput Increase", description: "Agents went from 50 to 120 cases per day." },
              { value: "Deal Closed", label: "Enterprise", description: "Scalability was key to closing Alaska Airlines." },
              { value: "0", label: "Silent Errors", description: "Structured fields eliminated silent incomplete submissions." },
            ]}
          />
        </CaseStudyHero>

        <CaseStudyContext
          items={[
            { label: "Role", value: "Staff Product Designer" },
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
              <li>Low throughput (50 cases/day)</li>
              <li>Inconsistent submission quality</li>
              <li>Inability to scale to enterprise volumes (blocking the Alaska Airlines deal)</li>
            </ul>
          </div>

          <ShiftComparison
            beforeContent={(
              <>
                <p className="text-lg text-[#1A1A1A]">"Fill out a template and hope it's not missing anything."</p>
              </>
            )}
            afterContent={(
              <>
                <p className="text-lg text-[#1A1A1A]">"Complete a known set of structured fields and preview exactly what the processor receives."</p>
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
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80" alt="Structured Fields" className="w-full h-auto" />
              }
              imageCaption='"Every evidence field has a clear state — incomplete, enhanceable, or complete."'
            >
              <p>
                The existing UI was a single long template where agents typed freeform text. We considered adding validation on top of it, but I pushed for a full restructure into discrete fields. This made completion deterministic, not guesswork.
              </p>
            </KeyDecision>

            <KeyDecision
              number="02"
              title="Dual-View Architecture"
              image={
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&q=80" alt="Dual View" className="w-full h-auto" />
              }
              imageCaption='"Left: Data Entry. Right: Processor Preview. No surprises."'
            >
              <p>
                We could have kept a single editing view, but splitting it into Entry and Rendered views eliminated the anxiety gap between "what I typed" and "what they see." It added complexity but solved the trust issue.
              </p>
            </KeyDecision>

            <KeyDecision
              number="03"
              title="Field Navigator as Wayfinding"
              image={
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1000&q=80" alt="Navigator" className="w-full h-auto" />
              }
            >
              <p>
                I explored a linear wizard (Step 1, 2, 3) but rejected it because agents don't work sequentially. They jump around based on available data. The sidebar navigator supports non-linear workflows while still showing overall progress at a glance.
              </p>
            </KeyDecision>

          </div>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Outcomes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">140% throughput increase</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Agents went from 50 to 120 cases per day. The structured format eliminated the need for manual re-entry and provided clearer next actions.</p>
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
              "We can finally trust the team to handle volume without dropping the quality ball. The preview mode is a lifesaver."
            </p>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest">— Ops Manager, FinTech Customer</p>
          </div>
        </CaseStudySection>

        <CaseStudyFooterNav
          previous={{ link: "/DesignSystem", title: "Design System" }}
          next={{ link: "/FraudInvestigation", title: "Fraud Investigation" }}
        />

      </div>
    </CaseStudyLayout>
  );
}