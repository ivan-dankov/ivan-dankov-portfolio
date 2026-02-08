import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E4] mt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-[#6B6B6B]">
          © 2025 Ivan Dankov
        </span>
        <SocialLinks />
      </div>
    </footer>
  );
}