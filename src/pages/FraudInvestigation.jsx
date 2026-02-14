import { Link } from "react-router-dom";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";

import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyMetrics from "../components/case-study/CaseStudyMetrics";
import CaseStudyContext from "../components/case-study/CaseStudyContext";
import CaseStudySection from "../components/case-study/CaseStudySection";
import ShiftComparison from "../components/case-study/ShiftComparison";
import KeyDecision from "../components/case-study/KeyDecision";
import CompareSlider from "../components/case-study/CompareSlider";
import CaseStudyFooterNav from "../components/case-study/CaseStudyFooterNav";

// Images
import Link2Img from "../assets/ato/Link 2.png";
import ExploreImg from "../assets/ato/Explore.png";
import ExploreCardsImg from "../assets/ato/Explore Cards.png";
import CompareImg from "../assets/ato/Compare.png";
import SessionAnalyzerImg from "../assets/ato/Explore - Session Analyzer - Session Selected.png";
import ActivityHistoryImg from "../assets/ato/Activity History.png";
import ActivityHistoryArrowsImg from "../assets/ato/Activity History - Arrows interaction.png";


export default function FraudInvestigation() {
  return (
    <CaseStudyLayout>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24">

        <CaseStudyHero
          title="Redesigning fraud investigation UX — from research to working prototype in 8 weeks"
          image={
            <div className="relative w-full aspect-[16/9] bg-[#E5E5E5] rounded-xl overflow-hidden shadow-sm border border-[#E8E8E4] mb-8">
              <img
                src={Link2Img}
                alt="ThreatMiner view with cross-highlighted sessions"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <CaseStudyMetrics
            items={[
              { value: "6", label: "Customers Interviewed (Shutterstock, Bitso, StitchFix, Hertz, Uphold, Newfold)" },
              { value: "3 of 6", label: "Described solution as \"Game Changer\"" },
              { value: "Validated", label: "Prototype adopted into engineering roadmap" },
            ]}
          />
        </CaseStudyHero>

        <CaseStudyContext
          items={[
            { label: "Role", value: "Staff Product Designer" },
            { label: "Company", value: "Sift - B2B fraud platform" },
            { label: "Timeline", value: "8 Weeks" },
            { label: "Scope", value: "Discovery to validated prototype" },
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
                <div className="relative w-full aspect-video bg-[#FAFAFA] border border-dashed border-[#CCCCCC] rounded-lg p-4 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={ExploreImg} alt="Old Explore" className="w-full h-full object-cover opacity-80" />
                </div>
                <p className="text-lg text-[#1A1A1A]">Scroll through events. Memorize attributes. Scroll again to compare. Repeat across sessions.</p>
              </>
            )}
            afterContent={(
              <>
                <div className="relative w-full aspect-video bg-[#1A1A1A] border border-dashed border-[#555] rounded-lg p-4 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={Link2Img} alt="New Analyzer" className="w-full h-full object-cover" />
                </div>
                <p className="text-lg text-[#1A1A1A]">Select a session. See all relationships instantly.</p>
              </>
            )}
          />
        </CaseStudySection>

        <CaseStudySection title="Research Insight">
          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-12">
            Research started with 10+ internal calls with Trust and Safety Architects (TASAs) — the people closest to how customers actually investigate fraud. TASAs mapped the pain points: too much scrolling, no way to compare sessions, investigation flow broken by "Load more" pagination. This internal discovery shaped the initial concepts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
              <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
              <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-4 leading-relaxed">You have to spam the show more button and scroll down... this completely solves that problem</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">SHUTTERSTOCK</p>
              </div>
            </div>
            <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
              <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
              <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-4 leading-relaxed">I like this layout, the way it is. I mean, it's perfect... easy to read and you can pinpoint right away</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">NEWFOLD</p>
              </div>
            </div>
            <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
              <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
              <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-4 leading-relaxed">I love to be able to compare this because that's what I use ATO for</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">UPHOLD</p>
              </div>
            </div>
          </div>


          <div className="bg-white border border-[#E8E8E4] rounded-xl p-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E4] gap-y-8 md:gap-y-0">
              <div className="px-6">
                <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Daily monitoring</p>
                <p className="text-xl font-medium text-[#1A1A1A] mb-2">Table view</p>
                <p className="text-sm text-[#4A4A4A] mb-4">Scan + triage</p>
                <p className="text-sm font-semibold text-blue-600">Speed matters</p>
              </div>
              <div className="px-6">
                <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Deep investigation</p>
                <p className="text-xl font-medium text-[#1A1A1A] mb-2">Analyzer view</p>
                <p className="text-sm text-[#4A4A4A] mb-4">Compare + connect</p>
                <p className="text-sm font-semibold text-blue-600">Relationships matter</p>
              </div>
            </div>
            <p className="text-center text-sm text-[#6B6B6B] italic mt-8">Different tasks need different interfaces. This insight drove the dual-view strategy.</p>
          </div>
        </CaseStudySection>


        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Key Decisions">
          <div className="space-y-24">

            <KeyDecision
              number="01"
              title="Cross-highlighting in the analyzer"
              image={
                <img
                  src={Link2Img}
                  alt="ThreatMiner highlighting"
                  className="w-full h-auto shadow-sm rounded-t-xl"
                />
              }
              imageCaption="Select a session, see every related attribute light up across columns. Patterns that were invisible in flat tables become obvious."
            >
              <p>
                The core concept: linked columns showing Sessions, Users, IPs, Locations, and Verification Status. Select any session and every related attribute highlights across all columns. We considered a graph visualization (nodes and edges) — looks impressive in demos but breaks down at scale. With 149 sessions and 11 users, graphs become unreadable. The linked-column approach scales because it uses familiar table patterns with cross-highlighting layered on top.
              </p>
            </KeyDecision>

            <KeyDecision
              number="02"
              title="Prototyping with Lovable"
              image={
                <CompareSlider
                  leftImage={SessionAnalyzerImg}
                  rightImage={Link2Img}
                  leftLabel="Figma - 1st iteration"
                  rightLabel="Figma - last iteration"
                />
              }
              imageCaption="Figma concept got mixed reactions — 'looks complicated at first glance.' Moved to Lovable, iterated heavily, got 'game changer' responses."
              extraContent={
                <div className="mt-8 border border-[#E8E8E4] rounded-xl overflow-hidden shadow-sm bg-white">
                  <div className="w-full h-[600px] bg-[#F5F5F7]">
                    <iframe
                      src="https://session-sight-link-68.lovable.app?embed=true"
                      title="Interactive Prototype"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-[#FAFAFA] border-t border-[#E8E8E4] flex justify-center">
                    <a
                      href="https://session-sight-link-68.lovable.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#006E75] hover:text-[#005a60] font-medium transition-colors"
                    >
                      Open in new tab
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              }
            >
              <p className="mb-6">
                I started prototyping the Analyzer concept in Figma. Customer reactions were mixed — the concept resonated but the execution wasn't testable enough. Static mocks couldn't convey how cross-highlighting and filtering actually worked in practice.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                  <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">Looks complicated at first glance.</p>
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">SHUTTERSTOCK</p>
                  </div>
                </div>
                <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                  <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">What the heck am I even looking at?</p>
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">STITCHFIX</p>
                  </div>
                </div>
              </div>
              <p>
                I moved to Lovable and iterated heavily — building real interaction patterns customers could click through. The working prototype surfaced usability issues Figma would have missed and gave engineering confidence to commit resources. The prototype reduced estimation time and removed ambiguity from the handoff.
              </p>
            </KeyDecision>

            <KeyDecision
              number="03"
              title="Dual-view strategy"
              image={
                <CompareSlider
                  leftImage={ExploreCardsImg}
                  rightImage={Link2Img}
                  leftLabel="Cards View"
                  rightLabel="Analyzer View"
                />
              }
              imageCaption="Table for daily monitoring and triage. Analyzer for deep investigation. Same data, different lenses."
            >
              <p className="mb-6">
                Research showed two distinct workflows: quick daily triage (scan, decide, move on) and deep investigation (compare sessions, trace patterns across attributes). Merging both into one view would compromise both. The dual-view lets analysts switch tools based on the task.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                  <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">Day to day basis, I would generally prefer the card for me</p>
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">SHUTTERSTOCK</p>
                  </div>
                </div>
                <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                  <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">Table and Analyzer views are good for different use cases. The most preferred outcome is to have both.</p>
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">BITSO</p>
                  </div>
                </div>
              </div>
            </KeyDecision>

            <KeyDecision
              number="04"
              title="Activity History histogram"
              image={
                <img
                  src={ActivityHistoryImg}
                  alt="Activity History histogram"
                  className="w-full h-auto shadow-sm rounded-t-xl"
                />
              }
              imageCaption="Replaced infinite scroll and 'Load more' with a clickable histogram. Click a time range, jump directly to that period's events."
            >
              <p className="mb-6">
                Every testing session flagged the same pain: navigating 12 months of activity by clicking "Load more" repeatedly. The histogram gives analysts a visual map of event density over time. Click any bar to jump there.
              </p>
              <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">Like I love this because just having the ability... can we click on the histogram and jump straight to that area of the activity?</p>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">SHUTTERSTOCK</p>
                </div>
              </div>
            </KeyDecision>

            <KeyDecision
              number="05"
              title="Session comparison"
              image={
                <div className="space-y-8">
                  <img
                    src={ActivityHistoryArrowsImg}
                    alt="Activity History with arrows interaction"
                    className="w-full h-auto shadow-sm rounded-t-xl"
                  />
                  <img
                    src={CompareImg}
                    alt="Session Comparison"
                    className="w-full h-auto shadow-sm rounded-t-xl"
                  />
                </div>
              }
              imageCaption="Up to 4 sessions, attribute by attribute. IP jumps from Houston to London to Kyiv. New device IDs flagged. Verification failures visible without switching screens."
            >
              <p className="mb-6">
                Before this, analysts compared sessions by scrolling between them and memorizing details. The comparison view aligns attributes in columns so differences jump out — different IP locations, new device IDs tagged as "New," failed verifications next to successful ones. Capped at 4 sessions to keep the layout scannable. Non-customizable attribute order for MVP to reduce scope and test the core concept first.
              </p>
              <div className="bg-white border border-[#E8E8E4] p-6 rounded-xl relative overflow-hidden">
                <span className="absolute -top-2 -left-2 text-[8rem] text-[#E8E8E4] font-serif leading-none select-none pointer-events-none">“</span>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl text-[#1A1A1A] font-serif italic mb-3 leading-relaxed">I like this layout, the way it is. I mean, it's perfect... easy to read and you can pinpoint right away.</p>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">NEWFOLD</p>
                </div>
              </div>
            </KeyDecision>

          </div>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Outcomes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">User Validation</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">3 of 6 customers described the session comparison and analyzer as a "game changer" during testing sessions.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">MVP scope defined</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Comparison tool and ThreatMiner became the anchors of the engineering roadmap.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Engineering buy-in</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Working Lovable prototype reduced estimation time and removed handoff ambiguity.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E8E4] rounded-xl">
              <p className="font-medium text-[#1A1A1A] mb-3">Dual-view validated</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Customers confirmed table for daily use, analyzer for investigations.</p>
            </div>
          </div>
        </CaseStudySection>

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
              <p className="font-medium text-[#1A1A1A] mb-3">Three view modes</p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">Designed Cards, List, and Analyzer views. Shipped List and Analyzer. Cards view cut from MVP - added complexity without a distinct workflow it served better than the other two.</p>
            </div>
          </div>
        </CaseStudySection>

        <div className="mb-24 h-px bg-[#E8E8E4] w-full" />

        <CaseStudySection title="Reflection">
          <div className="max-w-3xl space-y-8">
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              The Lovable prototype was the differentiator - it changed the conversation from "is this feasible?" to "when can we build this?" I'd use this approach earlier in future projects. The risk is scope creep from 4 parallel workstreams - next time I'd fight harder to sequence them.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Collaboration: Internal discovery with Trust and Safety Architects (10+ calls). User testing with 6 enterprise customer teams. Prototyping and design decisions were mine. Engineering scoping done collaboratively after prototype validation.
            </p>
          </div>
        </CaseStudySection>

        <CaseStudyFooterNav
          previous={{ link: "/ChargebackWorkflows", title: "Chargeback Workflows" }}
          next={{ link: "/DesignSystem", title: "Design System" }}
        />

      </div>
    </CaseStudyLayout >
  );
}