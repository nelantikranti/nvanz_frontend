



import { useEffect, useState } from "react"

const ElevatorIntro = () => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        const timeout = window.setTimeout(
            () => setIsVisible(false),
            prefersReducedMotion ? 50 : 1900
        )

        return () => window.clearTimeout(timeout)
    }, [])

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-[100] overflow-hidden"
            aria-hidden="true"
        >
            {/* Left Door */}
            <div className="absolute inset-y-0 left-0 w-1/2 origin-left bg-[#d89b0e] shadow-[inset_-12px_0_24px_rgba(20,18,16,0.12)] animate-elevator-door-left motion-reduce:animate-none" />

            {/* Right Door */}
            <div className="absolute inset-y-0 right-0 w-1/2 origin-right bg-[#d89b0e] shadow-[inset_12px_0_24px_rgba(20,18,16,0.12)] animate-elevator-door-right motion-reduce:animate-none" />

            {/* Center Line - Fades when doors start opening */}
            <div className="absolute inset-y-0 left-1/2 z-10 w-[1px] -translate-x-1/2 bg-[#141210]/50 animate-elevator-line motion-reduce:animate-none" />

            {/* Branding */}
            <div className="absolute inset-0 z-20 flex items-center justify-center animate-elevator-brand motion-reduce:animate-none">
                <span className="text-[clamp(2rem,7vw,5rem)] font-bold tracking-[0.18em] text-[#141210]">
                    NVANZ
                </span>
            </div>
        </div>
    )
}

export default ElevatorIntro

