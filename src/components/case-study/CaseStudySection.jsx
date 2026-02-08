export default function CaseStudySection({ title, children, className = "mb-32" }) {
    return (
        <section className={`grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 ${className}`}>
            <div className="lg:col-span-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B] sticky top-24">{title}</h2>
            </div>
            <div className="lg:col-span-9">
                {children}
            </div>
        </section>
    );
}
