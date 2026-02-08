import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

export default function CaseStudyFooterNav({ previous, next }) {
    return (
        <div className="border-t border-[#E8E8E4] pt-12 flex justify-between items-center">
            {previous ? (
                <Link to={previous.link} className="group inline-flex items-center gap-4 text-left">
                    <ArrowLeft className="text-[#1A1A1A] group-hover:text-[#006E75] transition-colors" size={24} />
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B] mb-1 group-hover:text-[#006E75] transition-colors">Previous</p>
                        <p className="text-xl md:text-2xl font-serif text-[#1A1A1A] group-hover:text-[#006E75] transition-colors">{previous.title}</p>
                    </div>
                </Link>
            ) : <div />}

            {next ? (
                <Link to={next.link} className="group inline-flex items-center gap-4 text-right">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B] mb-1 group-hover:text-[#006E75] transition-colors">Next</p>
                        <p className="text-xl md:text-2xl font-serif text-[#1A1A1A] group-hover:text-[#006E75] transition-colors">{next.title}</p>
                    </div>
                    <ArrowLeft className="rotate-180 text-[#1A1A1A] group-hover:text-[#006E75] transition-colors" size={24} />
                </Link>
            ) : <div />}
        </div>
    );
}
