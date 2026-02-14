import { useState, useRef, useEffect, useCallback } from "react";

export default function CompareSlider({ leftImage, rightImage, leftLabel = "Before", rightLabel = "After" }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = useCallback(
        (clientX) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const percent = (x / rect.width) * 100;
                setSliderPosition(percent);
            }
        },
        []
    );

    const onMouseMove = useCallback(
        (e) => {
            if (!isDragging) return;
            handleMove(e.clientX);
        },
        [isDragging, handleMove]
    );

    const onTouchMove = useCallback(
        (e) => {
            if (!isDragging) return;
            handleMove(e.touches[0].clientX);
        },
        [isDragging, handleMove]
    );

    const onMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("touchmove", onTouchMove);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchend", onMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchend", onMouseUp);
        };
    }, [isDragging, onMouseMove, onTouchMove, onMouseUp]);

    const startDrag = (e) => {
        e.preventDefault(); // Prevent text selection
        setIsDragging(true);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize group shadow-sm rounded-t-xl"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
        >
            {/* Right Image (Background / Bottom Layer) */}
            <img
                src={rightImage}
                alt={rightLabel}
                className="absolute inset-0 w-full h-full object-cover object-top"
            />

            {/* Left Image (Foreground / Top Layer - Clipped) */}
            <img
                src={leftImage}
                alt={leftLabel}
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
            />

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-black cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18-6-6 6-6" />
                        <path d="m15 6 6 6-6 6" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className={`absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white transition-opacity duration-300 ${sliderPosition < 10 ? 'opacity-0' : 'opacity-100'}`}>
                {leftLabel}
            </div>
            <div className={`absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white transition-opacity duration-300 ${sliderPosition > 90 ? 'opacity-0' : 'opacity-100'}`}>
                {rightLabel}
            </div>
        </div>
    );
}
