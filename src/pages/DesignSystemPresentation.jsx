
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X, CornersOut, CornersIn } from "phosphor-react";

// Images
import ProblemBefore from "../assets/design-system/problem/before.webp";
import ProblemAfter from "../assets/design-system/problem/after.webp";
import KeyDecision01 from "../assets/design-system/key-decisions/01.webp";
import KeyDecision02 from "../assets/design-system/key-decisions/02.webp";
import KeyDecision03 from "../assets/design-system/key-decisions/03.webp";
import KeyDecision04 from "../assets/design-system/key-decisions/04.webp";
import KeyDecision05 from "../assets/design-system/key-decisions/05.webp";
import HeroImage from "../assets/design-system/hero/hero.webp";

// Isometric Images
import IsoActivity from "../assets/design-system/isometric/Activity History Full.webp";
import IsoDrilldown from "../assets/design-system/isometric/Drilldown Modal.webp";
import IsoNarrow from "../assets/design-system/isometric/Narrow Screens.webp";
import IsoExplore from "../assets/design-system/isometric/New Explore.webp";
import IsoSent from "../assets/design-system/isometric/Sent.webp";
import IsoSession from "../assets/design-system/isometric/Session Card View.webp";
import IsoUser from "../assets/design-system/isometric/User Card View - Attribute Added.webp";
import IsoCase from "../assets/design-system/isometric/Case page.webp";
import IsoHome from "../assets/design-system/isometric/Home.webp";
import IsoLineChart from "../assets/design-system/isometric/LineChart.webp";
import IsoBilling from "../assets/design-system/isometric/Billing - No Payment Details.webp";
import IsoGlobalIdentity from "../assets/design-system/isometric/Global Identity.webp";

const slides = [
    {
        id: "title",
        layout: "cover",
        title: "Turning UI into infrastructure for a fraud detection platform",
        context: [
            "Staff Product Designer | Sift",
            "Co-led with 1 Staff FE Engineer",
            "Adopted across 5 product teams",
            "4+ years"
        ],
        metrics: [
            "97% token coverage",
            "3x fewer UI bugs",
            "Console 2.0 shipped on system"
        ],
        image: HeroImage
    },
    {
        id: "problem",
        layout: "split",
        title: "The Problem",
        content: [
            {
                heading: "Customer Problem",
                text: "Customers experienced Sift as a collection of disconnected tools - not a platform. This was one of the most mentioned complaints on sales calls."
            },
            {
                heading: "Internal Problem",
                text: "Multiple product teams building independently. Same interactions, different implementations. Every feature required re-solving problems already solved elsewhere."
            }
        ],
        image: ProblemBefore
    },
    {
        id: "shift",
        layout: "center-text",
        title: "The Shift",
        mainText: "From a collection of disconnected products to a unified platform — starting with shared design foundations.",
        subText: "Make the organization faster without increasing chaos."
    },
    {
        id: "inputs",
        layout: "columns",
        title: "Data Inputs + Strategy",
        columns: [
            {
                heading: "Data Inputs",
                items: [
                    { label: "Customer Signal", text: "Sales/churn feedback about disconnected experience" },
                    { label: "UI Audit", text: "Mapped redundancy, uniqueness, and broken patterns" },
                    { label: "Product Roadmap", text: "Console 2.0 provided deadline & prioritization" }
                ]
            },
            {
                heading: "Delivery Strategy",
                text: "We couldn't stop shipping features to build a system. So we wove system work into ongoing feature delivery.",
                note: "Built organically from real product needs, not abstract wishlists."
            }
        ],
        image: KeyDecision01
    },
    {
        id: "decision-1",
        layout: "split",
        title: "Decision 1: Product-first, not theory-first",
        badge: "Strategic Decision",
        heading: "Starting from product patterns, not design primitives",
        text: "Many systems start with colors, spacing, and type. We started with the components that caused the most fragmentation — tables, filters, and decision actions.",
        image: KeyDecision01
    },
    {
        id: "decision-2",
        layout: "split",
        layoutReverse: true,
        title: "Decision 2: Two Layers",
        heading: "Reusable foundations + Fraud-tailored components",
        layers: [
            {
                heading: "Base Layer",
                items: ["Inputs", "Selectors", "Date pickers", "Navigation", "Modals"],
                bg: "bg-white",
                border: "border-[#E8E8E4]",
                shadow: "shadow-sm"
            },
            {
                heading: "Domain Layer",
                items: ["Block/Accept actions", "Risk score badges", "User attribute cards", "Alert banners", "Investigation tables"],
                bg: "bg-[#F5F5F0]",
                border: "border-[#E8E8E4]",
                shadow: ""
            }
        ],
        image: KeyDecision02
    },
    {
        id: "decision-3",
        layout: "split",
        title: "Decision 3: Design-Code Contract",
        heading: "If it doesn't exist in Storybook, it's not part of the system",
        text: "Review shifted from 'does this look right?' to 'does this work right?'",
        image: KeyDecision03,
        imageStyle: "h-full w-auto max-w-none"
    },
    {
        id: "decision-5",
        layout: "split",
        layoutReverse: true,
        title: "Decision 4: Documenting for Adoption",
        heading: "Documentation designed for adoption, not reference",
        text: "I treated documentation as a product surface - written for the people using the system, not the people who built it. Clear usage guidelines, do/don't examples, interaction specs, and edge case handling.",
        image: KeyDecision05,
        imageStyle: "h-full w-auto max-w-none"
    },
    {
        id: "enabled",
        layout: "full-image",
        title: "What this made possible",
        image: HeroImage,
        overlayText: "7 products, one system"
    },
    {
        id: "iso-gallery",
        layout: "isometric-gallery",
        images: [IsoActivity, IsoDrilldown, IsoNarrow, IsoExplore, IsoSent, IsoSession, IsoUser, IsoCase, IsoHome, IsoLineChart, IsoBilling, IsoGlobalIdentity]
    },
    {
        id: "validation",
        layout: "columns-3",
        title: "How we knew it was working",
        col1: {
            heading: "Qualitative",
            items: [
                "No more 'outdated UI' sales objections",
                "'UX is more intuitive' churn feedback"
            ]
        },
        col2: {
            heading: "Quantitative",
            items: [
                { value: "3x", label: "Fewer UI bugs in QA" },
                { value: "97%", label: "Token coverage" },
                { value: "<5w", label: "Migration time" }
            ]
        },
        col3: {
            heading: "Gaps",
            items: [
                "No detached component tracking",
                "Hard to isolate system impact"
            ]
        }
    },
    {
        id: "changes",
        layout: "list",
        title: "What I'd change",
        items: [
            { heading: "Governance model from the start", text: "System outgrew informal management. Need contribution guidelines earlier." },
            { heading: "Adoption metrics from day one", text: "Usage and coverage data is needed to prove value beyond 'feels faster'." },
            { heading: "Platform vision gaps", text: "System solved UI consistency, but deep platform integration requires product strategy changes." }
        ]
    },
    {
        id: "impact",
        layout: "big-list",
        title: "Impact Summary",
        items: [
            { value: "Console 2.0 (6 sub-products)\nDispute Management", label: "Shipped on the system", type: "hero" },
            { value: "3x", label: "Fewer UI bugs", type: "metric" },
            { value: "97%", label: "Token coverage", type: "metric" },
            { value: "<5 weeks", label: "Full Figma migration", type: "metric" },
            { text: "Engineering team self-sufficient", secondary: "PMs and devs delivering internal tooling/hackathon projects faster without design input", type: "text" }
        ]
    }
];

export default function DesignSystemPresentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide(c => (c < slides.length - 1 ? c + 1 : c));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(c => (c > 0 ? c - 1 : c));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const slide = slides[currentSlide];

    return (
        <div className="w-screen h-screen bg-[#F5F5F0] text-[#1A1A1A] overflow-hidden flex flex-col relative">
            {/* Controls Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link to="/DesignSystem" className="bg-white/90 backdrop-blur border border-[#E8E8E4] px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
                    <X size={16} /> Exit
                </Link>
                <div className="flex items-center gap-4">
                    <button onClick={toggleFullscreen} className="bg-white/90 backdrop-blur border border-[#E8E8E4] p-2 rounded-full hover:bg-white transition-colors">
                        {isFullscreen ? <CornersIn size={20} /> : <CornersOut size={20} />}
                    </button>
                </div>
            </div>

            {/* Slide Content Container */}
            <div className={`flex-1 w-full h-full flex items-center justify-center ${slide.layout === "full-image" ? "p-8 md:p-16" : "p-8 md:p-16"}`}>
                <div className={`w-full h-full max-w-[1600px] max-h-[900px] bg-white shadow-2xl rounded-2xl overflow-hidden relative border border-[#E8E8E4]`}>

                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-1 bg-[#2D2D2D] transition-all duration-300 z-10" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />

                    {/* Slide Rendering */}
                    <div className={`w-full h-full flex flex-col ${slide.layout === "full-image" || slide.layout === "isometric-gallery" ? "p-0" : "p-12 md:p-20 pt-16"}`}>
                        {slide.layout === "cover" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
                                <div className="space-y-12">
                                    <div className="inline-block px-3 py-1 bg-[#F5F5F0] rounded text-xs font-mono uppercase tracking-wider text-[#6B6B6B]">Case Study Presentation</div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#1A1A1A]">
                                        {slide.title}
                                    </h1>
                                    <div className="space-y-2 text-lg text-[#4A4A4A]">
                                        {slide.context.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                    <div className="pt-8 border-t border-[#E8E8E4]">
                                        <div className="flex gap-8">
                                            {slide.metrics.map((m, i) => (
                                                <div key={i} className="text-sm font-medium text-[#2D2D2D] bg-[#F5F5F0] px-3 py-1.5 rounded">{m}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full w-full bg-[#F5F5F0] rounded-xl overflow-hidden border border-[#E8E8E4]">
                                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}

                        {slide.layout === "split" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
                                {slide.layoutReverse ? (
                                    <>
                                        <div className="h-full bg-[#F5F5F0] rounded-xl overflow-hidden border border-[#E8E8E4] flex items-start justify-start">
                                            <img src={slide.image} alt="Visual" className={slide.imageStyle || "w-full h-full object-cover object-top"} />
                                        </div>
                                        <div className="flex flex-col justify-center space-y-10">
                                            <div>
                                                {slide.badge && <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-4 block">{slide.badge}</span>}
                                                <h2 className="text-4xl font-medium mb-6">{slide.title}</h2>
                                            </div>

                                            {slide.content ? (
                                                <div className="space-y-8">
                                                    {slide.content.map((block, i) => (
                                                        <div key={i}>
                                                            <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">{block.heading}</h3>
                                                            <p className="text-[#4A4A4A] leading-relaxed">{block.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : slide.layers ? (
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-normal text-[#1A1A1A] leading-tight mb-8">{slide.heading}</h3>
                                                    <div className="space-y-6">
                                                        {slide.layers.map((layer, i) => (
                                                            <div key={i} className={`${layer.bg} border ${layer.border} p-6 rounded-lg ${layer.shadow}`}>
                                                                <h3 className="font-medium mb-4 text-[#2D2D2D]">{layer.heading}</h3>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {layer.items.map((item, j) => (
                                                                        <span key={j} className={`px-2 py-1 text-sm text-[#4A4A4A] rounded ${layer.heading === "Base Layer" ? "bg-[#F5F5F0]" : "bg-white border border-[#E8E8E4] shadow-sm"}`}>
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-normal text-[#1A1A1A] leading-tight">{slide.heading}</h3>
                                                    <p className="text-lg text-[#4A4A4A] leading-relaxed">{slide.text}</p>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col justify-center space-y-10">
                                            <div>
                                                {slide.badge && <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-4 block">{slide.badge}</span>}
                                                <h2 className="text-4xl font-medium mb-6">{slide.title}</h2>
                                            </div>

                                            {slide.content ? (
                                                <div className="space-y-8">
                                                    {slide.content.map((block, i) => (
                                                        <div key={i}>
                                                            <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">{block.heading}</h3>
                                                            <p className="text-[#4A4A4A] leading-relaxed">{block.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : slide.layers ? (
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-normal text-[#1A1A1A] leading-tight mb-8">{slide.heading}</h3>
                                                    <div className="space-y-6">
                                                        {slide.layers.map((layer, i) => (
                                                            <div key={i} className={`${layer.bg} border ${layer.border} p-6 rounded-lg ${layer.shadow}`}>
                                                                <h3 className="font-medium mb-4 text-[#2D2D2D]">{layer.heading}</h3>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {layer.items.map((item, j) => (
                                                                        <span key={j} className={`px-2 py-1 text-sm text-[#4A4A4A] rounded ${layer.heading === "Base Layer" ? "bg-[#F5F5F0]" : "bg-white border border-[#E8E8E4] shadow-sm"}`}>
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-normal text-[#1A1A1A] leading-tight">{slide.heading}</h3>
                                                    <p className="text-lg text-[#4A4A4A] leading-relaxed">{slide.text}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="h-full bg-[#F5F5F0] rounded-xl overflow-hidden border border-[#E8E8E4] flex items-start justify-start">
                                            <img src={slide.image} alt="Visual" className={slide.imageStyle || "w-full h-full object-cover object-top"} />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {slide.layout === "center-text" && (
                            <div className="h-full flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8 text-[#1A1A1A]">
                                    {slide.mainText}
                                </h2>
                                <p className="text-2xl text-[#6B6B6B] font-light">
                                    {slide.subText}
                                </p>
                            </div>
                        )}

                        {slide.layout === "columns" && (
                            <div className="h-full flex flex-col">
                                <h2 className="text-3xl font-medium mb-12">{slide.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
                                    <div className="h-full flex flex-col gap-6">
                                        <div className="text-sm font-mono text-[#6B6B6B] uppercase tracking-wider border-b border-[#E8E8E4] pb-4 mb-2">{slide.columns[0].heading}</div>
                                        <div className="flex-1 space-y-6">
                                            {slide.columns[0].items.map((item, i) => (
                                                <div key={i} className="group">
                                                    <div className="text-2xl font-medium text-[#1A1A1A] mb-2 group-hover:text-[#2D2D2D] transition-colors">{item.label}</div>
                                                    <div className="text-lg text-[#6B6B6B] leading-relaxed">{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-full bg-[#F5F5F0] p-10 rounded-xl border border-[#E8E8E4] flex flex-col justify-center">
                                        <div className="text-sm font-mono text-[#6B6B6B] uppercase tracking-wider mb-8">{slide.columns[1].heading}</div>
                                        <p className="text-3xl md:text-3xl font-medium text-[#1A1A1A] leading-tight mb-8">
                                            {slide.columns[1].text}
                                        </p>
                                        <div className="text-lg text-[#6B6B6B] italic border-t border-[#E8E8E4] pt-6">
                                            {slide.columns[1].note}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.layout === "split-cols" && (
                            <div className="h-full flex flex-col">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-medium mb-2">{slide.title}</h2>
                                    <p className="text-lg text-[#6B6B6B]">{slide.heading}</p>
                                </div>
                                <div className="grid grid-cols-12 gap-10 flex-1">
                                    <div className="col-span-4 space-y-8">
                                        <div className="bg-white border border-[#E8E8E4] p-6 rounded-lg shadow-sm">
                                            <h3 className="font-medium mb-4 text-[#2D2D2D]">{slide.col1.heading}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {slide.col1.items.map((item, i) => (
                                                    <span key={i} className="px-2 py-1 bg-[#F5F5F0] text-sm text-[#4A4A4A] rounded">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-[#F5F5F0] border border-[#E8E8E4] p-6 rounded-lg">
                                            <h3 className="font-medium mb-4 text-[#2D2D2D]">{slide.col2.heading}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {slide.col2.items.map((item, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white shadow-sm text-sm text-[#4A4A4A] rounded border border-[#E8E8E4]">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-8 bg-[#F5F5F0] rounded-xl overflow-hidden border border-[#E8E8E4]">
                                        <img src={slide.image} alt="Visual" className="w-full h-full object-contain p-4" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.layout === "image-focus" && (
                            <div className="flex flex-col h-full gap-8">
                                <div className="h-[60%] w-full bg-[#F5F5F0] rounded-xl overflow-hidden border border-[#E8E8E4] shadow-inner flex items-center justify-center relative">
                                    <div className="absolute inset-4">
                                        <img src={slide.image} alt="Visual" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center text-center max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-medium text-[#1A1A1A] mb-4">{slide.title}</h2>
                                    <h3 className="text-4xl font-medium mb-6 leading-tight">{slide.heading}</h3>
                                    <p className="text-xl text-[#6B6B6B] leading-relaxed">{slide.text}</p>
                                </div>
                            </div>
                        )}

                        {slide.layout === "full-image" && (
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#F5F5F0]">
                                <img src={slide.image} alt="Visual" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-5xl font-medium text-[#1A1A1A] text-center bg-white/60 backdrop-blur-xl p-12 rounded-3xl shadow-lg border border-white/50">
                                        {slide.overlayText}
                                        <span className="block text-xl mt-4 font-normal text-[#6B6B6B]">{slide.title}</span>
                                    </h2>
                                </div>
                            </div>
                        )}

                        {slide.layout === "isometric-gallery" && (
                            <div className="w-full h-full overflow-hidden relative bg-[#F5F5F0] flex items-center justify-center perspective-[1000px]">
                                <style>
                                    {`
                                        @keyframes isometric-scroll-track {
                                            0% { transform: translateY(0); }
                                            100% { transform: translateY(-33.333%); }
                                        }
                                    `}
                                </style>
                                {/* Rotated Scene Container */}
                                <div
                                    className="relative flex justify-center items-center"
                                    style={{
                                        transform: 'rotateX(20deg) rotateZ(-20deg) skewX(0deg) skewY(0deg)',
                                        width: '200%',
                                        height: '200%',
                                    }}
                                >
                                    {/* Animated Track */}
                                    <div
                                        className="flex flex-col"
                                        style={{
                                            animation: 'isometric-scroll-track 60s linear infinite',
                                        }}
                                    >
                                        {[...Array(3)].map((_, groupIndex) => (
                                            <div key={groupIndex} className="flex flex-col gap-8 pb-8">
                                                {/* Row 1 - Normal Order */}
                                                <div className="flex gap-8 justify-center">
                                                    {slide.images.concat(slide.images).map((img, idx) => (
                                                        <div key={`r1-${idx}`} className="w-[400px] h-[250px] bg-white rounded-xl shadow-2xl border border-[#E8E8E4] overflow-hidden flex-shrink-0 transition-transform hover:scale-105 duration-300">
                                                            <img src={img} alt="" className="w-full h-auto" />
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Row 2 - Shifted by 3 */}
                                                <div className="flex gap-8 justify-center -ml-32">
                                                    {(() => {
                                                        const shifted = [...slide.images.slice(3), ...slide.images.slice(0, 3)];
                                                        return shifted.concat(shifted).map((img, idx) => (
                                                            <div key={`r2-${idx}`} className="w-[400px] h-[250px] bg-white rounded-xl shadow-2xl border border-[#E8E8E4] overflow-hidden flex-shrink-0 transition-transform hover:scale-105 duration-300">
                                                                <img src={img} alt="" className="w-full h-auto" />
                                                            </div>
                                                        ));
                                                    })()}
                                                </div>

                                                {/* Row 3 - Shifted by 5 */}
                                                <div className="flex gap-8 justify-center">
                                                    {(() => {
                                                        const shifted = [...slide.images.slice(5), ...slide.images.slice(0, 5)];
                                                        return shifted.concat(shifted).map((img, idx) => (
                                                            <div key={`r3-${idx}`} className="w-[400px] h-[250px] bg-white rounded-xl shadow-2xl border border-[#E8E8E4] overflow-hidden flex-shrink-0 transition-transform hover:scale-105 duration-300">
                                                                <img src={img} alt="" className="w-full h-auto" />
                                                            </div>
                                                        ));
                                                    })()}
                                                </div>

                                                {/* Row 4 - Shifted by 2 */}
                                                <div className="flex gap-8 justify-center -ml-16">
                                                    {(() => {
                                                        const shifted = [...slide.images.slice(2), ...slide.images.slice(0, 2)];
                                                        return shifted.concat(shifted).map((img, idx) => (
                                                            <div key={`r4-${idx}`} className="w-[400px] h-[250px] bg-white rounded-xl shadow-2xl border border-[#E8E8E4] overflow-hidden flex-shrink-0 transition-transform hover:scale-105 duration-300">
                                                                <img src={img} alt="" className="w-full h-auto" />
                                                            </div>
                                                        ));
                                                    })()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.layout === "columns-3" && (
                            <div className="h-full flex flex-col">
                                <h2 className="text-3xl font-medium mb-12">{slide.title}</h2>
                                <div className="grid grid-cols-3 gap-8 h-full">
                                    {/* Qualitative */}
                                    <div className="flex flex-col h-full border-r border-[#E8E8E4] pr-8">
                                        <h3 className="text-sm font-mono uppercase tracking-wider text-[#6B6B6B] mb-8">{slide.col1.heading}</h3>
                                        <div className="space-y-10">
                                            {slide.col1.items.map((item, idx) => (
                                                <div key={idx} className="relative">
                                                    <p className="text-2xl text-[#1A1A1A] font-medium leading-tight mb-4">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantitative */}
                                    <div className="flex flex-col h-full border-r border-[#E8E8E4] pr-8 px-4">
                                        <h3 className="text-sm font-mono uppercase tracking-wider text-[#6B6B6B] mb-8">{slide.col2.heading}</h3>
                                        <div className="space-y-12">
                                            {slide.col2.items.map((item, idx) => (
                                                <div key={idx} className="flex flex-col">
                                                    <span className="text-6xl md:text-7xl font-medium text-[#1A1A1A] tracking-tighter mb-2">{item.value}</span>
                                                    <span className="text-lg text-[#6B6B6B]">{item.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Gaps */}
                                    <div className="flex flex-col h-full pl-4 opacity-60">
                                        <h3 className="text-sm font-mono uppercase tracking-wider text-[#6B6B6B] mb-8">{slide.col3.heading}</h3>
                                        <ul className="space-y-6">
                                            {slide.col3.items.map((item, idx) => (
                                                <li key={idx} className="text-xl text-[#6B6B6B] font-light leading-snug">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.layout === "list" && (
                            <div className="h-full flex flex-col justify-center max-w-4xl mx-auto w-full">
                                <h2 className="text-3xl font-medium mb-12">{slide.title}</h2>
                                <div className="space-y-8">
                                    {slide.items.map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start p-6 bg-[#F9F9F7] rounded-xl border border-[#E8E8E4]">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center font-mono text-sm">{i + 1}</span>
                                            <div>
                                                <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">{item.heading}</h3>
                                                <p className="text-[#4A4A4A]">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {slide.layout === "big-list" && (
                            <div className="h-full flex flex-col justify-center">
                                <div className="max-w-6xl mx-auto w-full px-8 mb-16">
                                    <h2 className="text-3xl font-medium">{slide.title}</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                                    {slide.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`
                                                p-8 border-b border-[#E8E8E4]
                                                ${item.type === 'hero' ? 'md:col-span-3' : ''}
                                                ${item.type === 'text' ? 'md:col-span-3' : ''}
                                            `}
                                        >
                                            {item.type === 'hero' && (
                                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                                    <span className="text-4xl md:text-5xl font-medium tracking-tight text-[#1A1A1A] whitespace-pre-wrap">{item.value}</span>
                                                    <span className="text-xl text-[#6B6B6B] pb-1">{item.label}</span>
                                                </div>
                                            )}

                                            {item.type === 'metric' && (
                                                <div className="flex flex-col h-full justify-between gap-2">
                                                    <span className="text-5xl md:text-6xl font-medium text-[#1A1A1A] tracking-tighter">{item.value}</span>
                                                    <span className="text-lg text-[#6B6B6B]">{item.label}</span>
                                                </div>
                                            )}

                                            {item.type === 'text' && (
                                                <div className="flex flex-col h-full justify-center gap-2">
                                                    <span className="text-2xl md:text-3xl text-[#1A1A1A] font-medium leading-tight">{item.text}</span>
                                                    {item.secondary && <span className="text-lg text-[#6B6B6B] leading-relaxed">{item.secondary}</span>}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>

            {/* Floating Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur border border-[#E8E8E4] rounded-full p-2 flex items-center gap-4 shadow-lg">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F5F5F0] transition-colors disabled:opacity-30 text-[#1A1A1A]"
                        disabled={currentSlide === 0}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <span className="text-[#6B6B6B] font-mono text-sm w-12 text-center select-none">{currentSlide + 1} / {slides.length}</span>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] transition-colors disabled:opacity-30"
                        disabled={currentSlide === slides.length - 1}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
