export default function CaseStudyMetrics({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#E8E8E4]">
            {items.map((item, index) => (
                <div key={index}>
                    <p className="text-4xl font-medium text-[#1A1A1A] mb-1">{item.value}</p>
                    <p className="text-sm text-[#6B6B6B]">{item.label}</p>
                </div>
            ))}
        </div>
    );
}
