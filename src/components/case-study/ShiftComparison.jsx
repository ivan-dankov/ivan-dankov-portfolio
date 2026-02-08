export default function ShiftComparison({ beforeTitle = "Before", beforeContent, afterTitle = "After", afterContent, strategicGoal = null }) {
    return (
        <div className="bg-white border border-[#E8E8E4] rounded-xl p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">The Shift</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Before */}
                <div>
                    <p className="text-red-500 font-medium mb-4">{beforeTitle}</p>
                    {beforeContent}
                </div>

                {/* After */}
                <div>
                    <p className="text-[#006E75] font-medium mb-4">{afterTitle}</p>
                    {afterContent}
                </div>
            </div>
            {strategicGoal && (
                <div className="mt-12 pt-8 border-t border-[#E8E8E4] text-center">
                    <p className="text-sm font-medium text-[#006E75] uppercase tracking-wider">Strategic Goal</p>
                    <p className="text-lg text-[#1A1A1A] mt-2">{strategicGoal}</p>
                </div>
            )}
        </div>
    );
}
