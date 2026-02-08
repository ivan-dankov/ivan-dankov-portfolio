export default function CaseStudyContext({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-24 md:mb-32">
            <div className="lg:col-span-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B] sticky top-24">Context</h2>
            </div>
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8 text-[#4A4A4A]">
                {items.map((item, index) => (
                    <div key={index}>
                        <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">{item.label}</p>
                        <p className="font-medium text-[#1A1A1A]">{item.value}</p>
                        {item.description && <p className="text-sm mt-1">{item.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
