import { LinkedinLogo, EnvelopeSimple, FileArrowDown } from "phosphor-react";

export default function SocialLinks({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <a
                href="https://www.linkedin.com/in/ivan-dankov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E4] rounded-full text-sm font-medium text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
                <LinkedinLogo size={18} weight="regular" className="text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors" />
                LinkedIn
            </a>

            <a
                href="mailto:ivandankovdigital@gmail.com"
                className="group flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E4] rounded-full text-sm font-medium text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
                <EnvelopeSimple size={18} weight="regular" className="text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors" />
                Email
            </a>

            <a
                href="/IvanDankovLead.pdf"
                download="IvanDankovLead.pdf"
                className="group flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E4] rounded-full text-sm font-medium text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
                <FileArrowDown size={18} weight="regular" className="text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors" />
                CV
            </a>
        </div>
    );
}
