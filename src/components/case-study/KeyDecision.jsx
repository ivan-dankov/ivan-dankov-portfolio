export default function KeyDecision({ number, title, image, imageCaption = null, children, extraContent = null }) {
    return (
        <div>
            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[#006E75] font-mono text-sm">{number}</span>
                <h3 className="text-2xl font-medium text-[#1A1A1A]">{title}</h3>
            </div>
            {image && (
                <div className="mb-8 rounded-xl overflow-hidden border border-[#E8E8E4] bg-[#F5F5F0]">
                    {image}
                    {imageCaption && (
                        <div className="p-4 bg-[#FAFAFA] border-t border-[#E8E8E4]">
                            <p className="text-sm text-[#6B6B6B]">{imageCaption}</p>
                        </div>
                    )}
                </div>
            )}
            <div className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl">
                {children}
            </div>
            {extraContent && (
                <div className="mt-8">
                    {extraContent}
                </div>
            )}
        </div>
    );
}
