import { LinkedinLogo, EnvelopeSimple, DownloadSimple } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E4] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-[#6B6B6B]">
          © 2025 Ivan Dankov
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ivan-dankov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <LinkedinLogo size={18} weight="regular" />
          </a>
          <a
            href="mailto:ivandankovdigital@gmail.com"
            className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <EnvelopeSimple size={18} weight="regular" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors"
          >
            <DownloadSimple size={16} weight="regular" />
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}