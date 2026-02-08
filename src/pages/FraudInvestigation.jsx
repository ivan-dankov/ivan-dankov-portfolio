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

export default function FraudInvestigation() {
  return (
    <CaseStudyLayout>
      <CaseStudyNav title="ATO Revamp" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24">

        <CaseStudyHero
          title="Redesigning fraud investigation UX — from research to working prototype in 8 weeks"
          image={
            <div className="relative w-full aspect-[16/9] bg-[#E5E5E5] rounded-xl overflow-hidden shadow-sm border border-[#E8E8E4] mb-8">
              <img
                src="/Link_2.png"
                alt="ThreatMiner view with cross-highlighted sessions, users, IPs, and locations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[#6B6B6B] text-sm font-medium bg-black/5">
                [Image: Link_2.png - ThreatMiner view]
              </div>
            </div>
          }
        >
          <CaseStudyMetrics
            items={[
              { value: "6", label: "Customers Interviewed (Shutterstock, Bitso, StitchFix...)" },
              { value: "3 of 6", label: "Described solution as \"Game Changer\"" },
              { value: "Validated", label: "Prototype adopted into roadmap" },
            ]}
          />
        </CaseStudyHero>

        <CaseStudyContext
          items={[
            { label: "Role", value: "Staff Product Designer" },
            { label: "Company", value: "Sift — B2B Fraud Platform" },
            { label: "Timeline", value: "8 Weeks" },
            { label: "Scope", value: "Discovery to Validated Prototype" },
          ]}
        />

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="The Problem">
          <h3 className="text-2xl md:text-3xl font-normal text-[#1A1A1A] mb-8 leading-tight">
            Fraud analysts investigating account takeovers had to scroll through long activity timelines, memorize attributes across screens, and manually compare sessions to spot patterns.
          </h3>
          <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-12">
            <p>
              The existing tools showed raw event lists. No way to see relationships between sessions, users, IPs, and locations at a glance.
            </p>
            <p>
              Analysts handled hundreds of sessions per day. Every extra click or context switch meant slower investigations and missed threats.
            </p>
          </div>

          <ShiftComparison
            beforeContent={(
              <>
                <div className="relative w-full aspect-video bg-[#FAFAFA] border border-dashed border-[#CCCCCC] rounded-lg p-4 mb-4 flex items-center justify-center text-center">
                  <span className="text-xs text-[#6B6B6B]">[Image: Activity_History.png - Old timeline]</span>
                </div>
                <p className="text-lg text-[#1A1A1A]">"Scroll through events. Memorize attributes. Scroll again to compare."</p>
              </>
            )}
            afterContent={(
              <>
                <div className="relative w-full aspect-video bg-[#1A1A1A] border border-dashed border-[#555] rounded-lg p-4 mb-4 flex items-center justify-center text-center">
                  <span className="text-xs text-white/50">[Image: Link_2.png prototype]</span>
                </div>
                <p className="text-lg text-[#1A1A1A]">"Select a session. See all relationships instantly."</p>
              </>
            )}
          />
        </CaseStudySection>

        <CaseStudySection title="Research Insight">
          <div className="bg-[#1A1A1A] p-12 rounded-2xl text-center mb-12">
            <p className="text-2xl md:text-3xl font-serif text-white/90 italic leading-relaxed mb-6">
              "Session comparison is a game changer."
            </p>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest">— 3 of 6 customers, independently</p>
          </div>

          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
            Customers told us they didn't need more data — they needed to see connections between data they already had. The existing table view worked for daily monitoring, but investigations required seeing relationships simultaneously.
          </p>

          {/* Diagram */}
          <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-[#E8E8E4] mb-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Daily Monitoring</p>
              <p className="font-medium text-[#1A1A1A] mb-2">Table View</p>
              <p className="text-sm text-[#4A4A4A]">Scan + Triage</p>
              <p className="text-sm font-medium text-[#006E75] mt-1">Speed matters</p>
            </div>
            <div className="border-l border-[#E8E8E4] pl-4">
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Deep Investigation</p>
              <p className="font-medium text-[#1A1A1A] mb-2">Analyzer View</p>
              <p className="text-sm text-[#4A4A4A]">Compare + Connect</p>
              <p className="text-sm font-medium text-[#006E75] mt-1">Relationships matter</p>
            </div>
          </div>
          <p className="text-sm text-[#6B6B6B] italic">Different tasks need different interfaces. This insight drove the dual-view strategy.</p>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Key Decisions">
          <div className="space-y-24">
            <KeyDecision
              number="01"
              title="Dual-view strategy"
              image={
                <div className="aspect-video bg-[#E0E0E0] flex items-center justify-center text-center px-4">
                  <span className="text-xs text-[#6B6B6B]">[Image: Explore__Table_View.png + Link_2.png <br /> Two views side-by-side]</span>
                </div>
              }
              imageCaption='"Table for daily monitoring and triage. Analyzer for deep investigation. Same data, different lenses."'
            >
              <p>
                Research showed two distinct workflows: quick daily triage (scan, decide, move on) and deep investigation (compare sessions, trace patterns across attributes). Merging both into one view would compromise both. The dual-view lets analysts switch tools based on the task.
              </p>
            </KeyDecision>

            <KeyDecision
              number="02"
              title="Cross-highlighting in the analyzer"
              image={
                <div className="aspect-video bg-[#E0E0E0] flex items-center justify-center text-center px-4">
                  <span className="text-xs text-[#6B6B6B]">[Image: Link_2.png detail <br /> Showing connected sessions/users/IPs]</span>
                </div>
              }
              imageCaption='"Select a session, see every related attribute light up across columns. Patterns that were invisible in flat tables become obvious."'
            >
              <p>
                We considered a graph visualization (nodes and edges) — it looks impressive in demos but breaks down at scale. With 149 sessions and 11 users, graphs become unreadable. The linked-column approach scales because it uses familiar table patterns with cross-highlighting layered on top.
              </p>
            </KeyDecision>

            <KeyDecision
              number="03"
              title="Three view modes"
              image={
                <div className="aspect-video bg-[#E0E0E0] flex items-center justify-center text-center px-4">
                  <span className="text-xs text-[#6B6B6B]">[Image: Table / Cards / Analyzer side-by-side]</span>
                </div>
              }
              imageCaption='"List for scannable rows. Cards for visual grouping. Analyzer for cross-referenced investigation."'
            >
              <p>
                We debated making the Analyzer the default because it was the most powerful. I argued for List — it's what analysts already knew. The Analyzer is a tool you reach for when you need it, not something forced on every session. Lowering the adoption barrier meant meeting users where they were.
              </p>
            </KeyDecision>

            <KeyDecision
              number="04"
              title="Working prototype with Lovable"
              image={
                <div className="aspect-video bg-[#E0E0E0] flex items-center justify-center text-center px-4">
                  <span className="text-xs text-[#6B6B6B]">[Image: Figma frame vs Lovable build]</span>
                </div>
              }
              imageCaption='"Figma showed the concept. Lovable made it testable with real interaction patterns."'
            >
              <p>
                Static mocks can't test cross-highlighting, filtering, or drill-down workflows. I built a functional prototype with Lovable so customers could click through real interaction patterns during feedback sessions. This surfaced usability issues Figma would have missed — and gave engineering confidence to commit resources.
              </p>
            </KeyDecision>

            <KeyDecision
              number="05"
              title="Activity History histogram"
              image={
                <div className="aspect-video bg-[#E0E0E0] flex items-center justify-center text-center px-4">
                  <span className="text-xs text-[#6B6B6B]">[Image: Activity_History.png - Histogram navigation]</span>
                </div>
              }
              imageCaption='"Replaced infinite scroll and &#39;Load more&#39; with a clickable histogram. Click a time range, jump directly to that period&#39;s events."'
            >
              <p>
                Every customer interview flagged the same pain: navigating 12 months of activity by clicking "Load more" repeatedly. The histogram gives analysts a visual map of event density over time. Click any bar to jump there. A supporting piece, but it solved a universal complaint.
              </p>
            </KeyDecision>

          </div>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="What I Didn't Build">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Graph visualization</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Explored nodes-and-edges for session relationships. Doesn't scale past ~50 nodes. Analysts needed to take action directly from the view.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Real-time alerting</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Customers wanted notifications. Required backend infrastructure that wasn't in place. Investigation tools had to ship first.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Custom attribute ordering</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Users asked to reorder columns. Kept fixed for MVP to reduce scope and test the core concept.</p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Reflection">
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl">
            The Lovable prototype was the differentiator — it changed the conversation from "is this feasible?" to "when can we build this?" I'd use this approach earlier in future projects. The risk is scope creep from 4 parallel workstreams — next time I'd fight harder to sequence them.
          </p>
        </CaseStudySection>

        <CaseStudyFooterNav
          previous={{ link: "/ChargebackWorkflows", title: "Chargeback Workflows" }}
          next={{ link: "/DesignSystem", title: "Design System" }}
        />

      </div>
    </CaseStudyLayout>
  );
}