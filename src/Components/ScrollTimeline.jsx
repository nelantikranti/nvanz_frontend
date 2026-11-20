
import { useEffect, useRef, useState } from "react"

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const ScrollTimeline = ({
    steps = [],
    anchorRatio = 0.6, // point of the viewport the marker follows (0 to 1)
    smoothTime = 110, // ms, bigger = smoother / slower
    markerSize = 28, // px
    className = "",
}) => {
    const stepsRef = useRef(null)
    const stepRefs = useRef([])
    const markerRef = useRef(null)
    const fillRef = useRef(null)
    const [activeStep, setActiveStep] = useState(-1)

    useEffect(() => {
        const container = stepsRef.current
        const marker = markerRef.current
        const fill = fillRef.current
        if (!container || !marker || !fill) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

        let rafId = null
        let lastTime = 0
        let current = 0 // smoothed marker position (px)
        let target = 0 // where the marker should be (px)
        let trackHeight = 0
        let centers = []
        let lastActive = -2

        // Cache layout values so we don't read the DOM on every frame
        const measure = () => {
            trackHeight = container.offsetHeight
            centers = stepRefs.current
                .slice(0, steps.length)
                .map((el) => (el ? el.offsetTop + el.offsetHeight / 2 : Infinity))
        }

        const computeTarget = () => {
            const top = container.getBoundingClientRect().top
            const anchor = window.innerHeight * anchorRatio
            const max = Math.max(0, trackHeight - markerSize)
            return clamp(anchor - top - markerSize / 2, 0, max)
        }

        const render = (y) => {
            marker.style.transform = `translate3d(0, ${y}px, 0)`

            const progress = trackHeight
                ? clamp((y + markerSize / 2) / trackHeight, 0, 1)
                : 0
            fill.style.transform = `scaleY(${progress})`

            // Active step comes from the marker itself, so they always match
            const markerCenter = y + markerSize / 2
            let next = -1
            for (let i = 0; i < centers.length; i++) {
                if (markerCenter >= centers[i]) next = i
            }
            if (next !== lastActive) {
                lastActive = next
                setActiveStep(next)
            }
        }

        const tick = (now) => {
            const dt = Math.min(now - lastTime, 64)
            lastTime = now

            const diff = target - current

            if (reduceMotion.matches || Math.abs(diff) < 0.3) {
                current = target
                rafId = null
            } else {
                // frame-rate independent easing
                current += diff * (1 - Math.exp(-dt / smoothTime))
                rafId = window.requestAnimationFrame(tick)
            }

            render(current)
        }

        const start = () => {
            if (rafId === null) {
                lastTime = performance.now()
                rafId = window.requestAnimationFrame(tick)
            }
        }

        const onScroll = () => {
            target = computeTarget()

            // Huge jump (anchor link, refresh restore): don't animate across the page
            if (Math.abs(target - current) > window.innerHeight * 1.5) {
                current = target
                render(current)
                return
            }
            start()
        }

        // Re-measure and jump straight to the right position (no animation)
        const syncInstantly = () => {
            measure()
            target = computeTarget()
            current = target
            render(current)
        }

        syncInstantly()

        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", syncInstantly)
        window.addEventListener("load", syncInstantly)

        // Heights change when fonts/images load or content wraps differently
        const resizeObserver =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(syncInstantly)
                : null
        resizeObserver?.observe(container)

        document.fonts?.ready.then(syncInstantly)

        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", syncInstantly)
            window.removeEventListener("load", syncInstantly)
            resizeObserver?.disconnect()
            if (rafId !== null) window.cancelAnimationFrame(rafId)
        }
    }, [steps.length, anchorRatio, smoothTime, markerSize])

    return (
        <div
            className={`flex items-start gap-4 sm:gap-6 lg:gap-10 ${className}`}
        >
            {/* Rail */}
            <div
                aria-hidden="true"
                className="relative shrink-0 self-stretch"
                style={{ width: markerSize }}
            >
                {/* Base line */}
                <div className="absolute inset-y-0 left-1/2 -ml-[1.5px] w-[3px] rounded-full bg-[#E9A60F]/25" />

                {/* Progress fill */}
                <div
                    ref={fillRef}
                    className="absolute inset-y-0 left-1/2 -ml-[1.5px] w-[3px] origin-top rounded-full bg-[#E9A60F] will-change-transform"
                    style={{ transform: "scaleY(0)" }}
                />

                {/* Marker */}
                <div
                    ref={markerRef}
                    className="absolute left-0 top-0 rounded-lg bg-[#E9A60F] shadow-[0_0_14px_rgba(233,166,15,0.65)] will-change-transform"
                    style={{
                        width: markerSize,
                        height: markerSize,
                        transform: "translate3d(0, 0px, 0)",
                    }}
                />
            </div>

            {/* Steps */}
            <div
                ref={stepsRef}
                className="relative flex min-w-0 flex-1 flex-col gap-3 sm:gap-4"
            >
                {steps.map((step, index) => {
                    const isActive = activeStep === index
                    const isReached = activeStep >= index

                    return (
                        <article
                            key={index}
                            data-scroll-reveal-ignore="true"
                            ref={(element) => {
                                stepRefs.current[index] = element
                            }}
                            aria-current={isActive ? "step" : undefined}
                            className={`flex min-h-[68px] w-full max-w-[760px] items-center gap-3 rounded-2xl border px-3 py-3 transition-[transform,translate,background-color,border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:min-h-[78px] sm:gap-5 sm:px-5 sm:py-4 lg:gap-7 lg:px-6 ${
                                isReached
                                    ? `${isActive ? "translate-x-3" : "translate-x-0"} border-[#E9A60F] bg-[#25211c] opacity-100 shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]`
                                    : "translate-x-0 border-[#5A4A30] bg-[#2e2514] opacity-60"
                            }`}
                        >
                            <p
                                className={`shrink-0 font-bebas text-3xl leading-none transition-colors duration-500 motion-reduce:transition-none sm:text-4xl ${
                                    isReached ? "text-[#E9A60F]" : "text-[#E9A60F]/40"
                                }`}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </p>

<div className="">
 <p
                                className={`min-w-0 font-inter text-sm font-bold leading-snug transition-colors duration-500 motion-reduce:transition-none sm:text-base lg:text-lg ${
                                    isReached ? "text-white" : "text-white/60"
                                }`}
                            >
                                {step?.heading}
                            </p>
                            {
                                step?.desc && <p className="text-[15px] text-[#D8D2C6] font-inter">{step?.desc}</p>
                            }
                            
</div>
                           
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollTimeline