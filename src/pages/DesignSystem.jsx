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
import ProblemBefore from "../assets/design-system/problem/before.png";
import ProblemAfter from "../assets/design-system/problem/after.png";
import KeyDecision01 from "../assets/design-system/key-decisions/01.png";
import KeyDecision02 from "../assets/design-system/key-decisions/02.png";
import KeyDecision03 from "../assets/design-system/key-decisions/03.png";
import KeyDecision04 from "../assets/design-system/key-decisions/04.png";
import KeyDecision05 from "../assets/design-system/key-decisions/05.png";
import HeroImage from "../assets/design-system/hero/hero.png";


export default function DesignSystem() {
  return (
    <CaseStudyLayout>
      <CaseStudyNav title="DesignSystem" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24">

        <CaseStudyHero
          title="Turning UI into infrastructure for a fraud detection platform"
          image={
            <div className="relative w-full h-full bg-[#E0E0E0]">
              <img
                src={HeroImage}
                alt="Three products, one system - Crops from Dispute Workspace, ATO Explore, and Console navigation side by side"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-[#6B6B6B] border border-white/20">
                Built on Focus Design System
              </div>
            </div>
          }
        >
          <CaseStudyMetrics
            items={[
              { value: "Shipped", label: "Console 2.0 shipped on the system" },
              { value: "3×", label: "Faster design-engineering collaboration" },
              { value: "<5 Weeks", label: "Full Figma migration completed" },
              { value: "100%", label: "Unified design language across all Sift products" },
            ]}
          />
        </CaseStudyHero>

        <CaseStudyContext
          items={[
            { label: "Role", value: "Staff Product Designer" },
            { label: "Company", value: "Sift" },
            { label: "Team", value: "Co-led with 1 Designer" },
            { label: "Adoption", value: "5 Product Teams" },
          ]}
        />

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="The Problem">
          <h3 className="text-2xl md:text-3xl font-normal text-[#1A1A1A] mb-8 leading-tight">
            Sift's product suite had grown across multiple teams with no shared design language. Every product looked and worked differently.
          </h3>
          <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-12">
            <p>
              Design-engineering handoff was slow and manual. No shared source of truth meant every feature required custom specs, custom reviews, constant alignment overhead.
            </p>
            <p>
              New designers and engineers spent weeks learning local patterns before they could contribute. The structural bottleneck was clear: product velocity was limited by UI fragmentation and process debt — not by the team's ability to design or build.
            </p>
          </div>

          <ShiftComparison
            beforeContent={(
              <>
                <img src={ProblemBefore} alt="Fragmentation collage" className="w-full aspect-video object-cover object-top rounded-lg mb-4 border border-[#E8E8E4]" />
                <p className="text-lg text-[#1A1A1A]">"Same product suite. No shared language. Every team rebuilt the same patterns differently."</p>
              </>
            )}
            afterContent={(
              <>
                <img src={ProblemAfter} alt="Component system screenshots" className="w-full aspect-video object-cover object-top rounded-lg mb-4 border border-[#E8E8E4]" />
                <p className="text-lg text-[#1A1A1A]">"One system. Shared primitives. Consistent across all products."</p>
              </>
            )}
            strategicGoal="Make the organization faster without increasing chaos."
          />
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Key Decisions">
          <div className="space-y-24">
            <KeyDecision
              number="01"
              title="Planned as infrastructure, not a design exercise"
              image={
                <img
                  src={KeyDecision01}
                  alt="Planning artifacts composite - FigJam principles workshop, component tracking spreadsheet, domain entity mapping"
                  className="w-full h-auto shadow-sm rounded-lg"
                />
              }
              imageCaption="Three planning layers in parallel: team principles alignment, component tracking across design and engineering, and domain data modeling. The system was scoped as infrastructure from day one."
            >
              <p>
                Before building a single component, we mapped three things simultaneously: what the team valued (principles workshop with designers, PMs, and engineers), what needed to exist (component inventory tracked across design and code status), and what the product domain looked like (entity mapping of Users, Orders, Sessions, Decisions, Fraud Agents with their field structures). This framing meant the system was treated as shared infrastructure with cross-functional buy-in - not a design team side project that engineering had to adopt later.
              </p>
            </KeyDecision>

            <KeyDecision
              number="02"
              title="Base components and fraud-specific layers"
              image={
                <img src={KeyDecision02} alt="Component library spread - generic primitives alongside domain-specific components" className="w-full h-auto shadow-sm rounded-lg" />
              }
              imageCaption="Generic foundations - inputs, date pickers, tooltips, search - plus fraud-specific components like Block/Accept actions, Sift scores, and risk indicators. Extensible base, tailored top layer."
            >
              <p>
                The debate wasn't generic vs. domain-specific - it was how to layer both. We built a base of reusable primitives (inputs, selectors, date pickers, navigation) that any product team could use out of the box. On top of that, we added fraud-specific components - decision actions (Block/Accept), risk score badges, user attribute cards with geo flags, alert banners tied to threat signals. The base kept the system extensible for new products. The domain layer meant fraud teams didn't start from scratch every time they needed a decision UI.
              </p>
            </KeyDecision>

            <KeyDecision
              number="03"
              title="Storybook + Chromatic as the design-code contract"
              image={
                <img src={KeyDecision03} alt="Storybook interface showcasing component documentation" className="w-full h-auto shadow-sm rounded-lg" />
              }
              imageCaption="If it didn't exist in Storybook, it wasn't part of the system. Chromatic caught visual regressions automatically."
            >
              <p>
                The alternative was a Figma-only system with handoff documentation. I pushed for Storybook as the single source of truth because it made the system enforceable - engineers checked component behavior in working code, not a design spec. Chromatic ran visual regression tests on every PR. Expensive to maintain, but without it the system would drift and teams would stop trusting it. This reduced UI drift and removed the need for constant manual alignment.
              </p>
            </KeyDecision>

            <KeyDecision
              number="04"
              title="Figma migration as a system unlock"
              image={
                <img src={KeyDecision04} alt="Before and after of Figma library organization" className="w-full h-auto shadow-sm rounded-lg" />
              }
              imageCaption="Migrated from Sketch + Abstract to Figma in under 5 weeks. Full team adopted and productive."
            >
              <p>
                Sketch + Abstract created file-management overhead that slowed the whole team - version conflicts, broken links, no real-time collaboration. The migration wasn't just a tool switch. Figma's collaborative features let us evolve the system faster: real-time editing, shared libraries across teams, no file handoff. This removed the bottleneck that was capping how fast the system could grow. The migration also forced a cleanup - legacy files were rebuilt, not ported.
              </p>
            </KeyDecision>

            <KeyDecision
              number="05"
              title="Documentation designed for adoption, not reference"
              image={
                <img src={KeyDecision05} alt="Documentation page showing clear usage guidance" className="w-full h-auto shadow-sm rounded-lg" />
              }
              imageCaption="Single source of truth. Clear usage guidance for designers, engineers, and PMs. Designed for self-service."
            >
              <p>
                Most design system docs are written by designers for designers. I treated documentation as a product surface - written for the people using the system, not the people who built it. Clear usage guidelines, do/don't examples, interaction specs, and edge case handling. The goal was to enable teams to use the system without needing permission or constant support. If the docs were unclear, the component wasn't done.
              </p>
            </KeyDecision>
          </div>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Outcomes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Console 2.0 redesign</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Full product overhaul built entirely on the system. The first proof that shared components could carry a complete product.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">3x faster collaboration</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Design-engineering handoff went from custom specs per feature to shared component references. Review cycles shortened because both sides worked from the same Storybook source.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">&lt;5 weeks Figma migration</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Full team adoption with rebuilt libraries. No productivity loss during transition.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">100% unified design language</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Every Sift product surface running on shared components. Dispute Workspace, ATO tools, Console - all built from the same foundation.</p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="What I Didn't Build">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Formal governance model</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">No contribution guidelines or approval process. The system was small enough for regular design-engineering syncs. Governance would have added overhead at our scale.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Adoption metrics</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">No component usage or coverage tracking. In hindsight, this would have helped prioritize what to build next and prove the system's value with data.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Dark mode / theming</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Token architecture supports it. But fraud analysts work in controlled office environments - dark mode wasn't a real user need.</p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Reflection">
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mb-8">
            I'd add adoption and quality metrics from day one - component coverage, usage frequency, and UI bug rates tied to system vs. non-system code. Without data, it was hard to prove the system's value beyond "things feel faster." I'd also establish a governance model earlier - the system outgrew the "two designers manage it informally" approach. And I'd build tighter feedback loops with consuming teams so the system evolved with product needs, not behind them.
          </p>
          <p className="text-sm text-[#6B6B6B] italic">
            Collaboration credit: Co-created system architecture with one other designer. Aligned adoption across 5 product teams, frontend engineering, and PM. Storybook integration done in close partnership with frontend engineering leads.
          </p>
        </CaseStudySection>

        <CaseStudyFooterNav
          previous={{ link: "/FraudInvestigation", title: "Fraud Investigation" }}
          next={{ link: "/ChargebackWorkflows", title: "Chargeback Workflows" }}
        />

      </div >
    </CaseStudyLayout >
  );
}