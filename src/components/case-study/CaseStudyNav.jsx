import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export default function CaseStudyNav({ title }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-[#E8E8E4]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                <Link to="/" className="text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to Work
                </Link>
                {title && (
                    <span className="text-xs font-semibold tracking-wider text-[#1A1A1A] uppercase">
                        {title}
                    </span>
                )}
            </div>
        </nav>
    );
}
