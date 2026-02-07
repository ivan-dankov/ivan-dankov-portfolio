import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPageName]);

  const navLinks = [
    { label: "Work", page: "Home" },
    { label: "About", page: "About" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Young+Serif&display=swap');
        :root {
          --font-sans: 'Inter', system-ui, sans-serif;
          --font-serif: 'Young Serif', Georgia, serif;
          --color-bg: #FAFAF8;
          --color-text: #1A1A1A;
          --color-muted: #6B6B6B;
          --color-border: #E8E8E4;
          --color-card: #FFFFFF;
          --color-accent: #2D2D2D;
        }
        body { font-family: var(--font-sans); }
        * { -webkit-font-smoothing: antialiased; }
        ::selection { background: #1A1A1A; color: #FAFAF8; }
      `}</style>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E8E8E4]" : "bg-transparent"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link
            to={createPageUrl("Home")}
            className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity"
          >
            Ivan Dankov
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`text-sm transition-opacity hover:opacity-60 ${
                  currentPageName === link.page ? "font-medium" : "text-[#6B6B6B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:ivandankovdigital@gmail.com"
              className="text-sm text-[#6B6B6B] hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAFAF8] border-b border-[#E8E8E4] px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="block text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href="mailto:ivandankovdigital@gmail.com" className="block text-lg text-[#6B6B6B]">
              Contact
            </a>
          </div>
        )}
      </nav>

      <main>{children}</main>
    </div>
  );
}