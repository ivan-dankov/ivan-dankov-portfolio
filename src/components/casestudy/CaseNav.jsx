import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CaseNav({ prev = null, next = null }) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 border-t border-[#E8E8E4]">
      <div className="flex items-center justify-between">
        {prev ? (
          <Link
            to={createPageUrl(prev.page)}
            className="group flex items-center gap-3 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-[0.15em] mb-1">Previous</p>
              <p className="text-sm font-medium text-[#1A1A1A]">{prev.label}</p>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={createPageUrl(next.page)}
            className="group flex items-center gap-3 text-right text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.15em] mb-1">Next</p>
              <p className="text-sm font-medium text-[#1A1A1A]">{next.label}</p>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : <div />}
      </div>
    </section>
  );
}