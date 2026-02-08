import Footer from "../portfolio/Footer";

export default function CaseStudyLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {children}
            <Footer />
        </div>
    );
}
