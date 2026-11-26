import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { MdOutlineDoorSliding } from "react-icons/md"
import { homeElevatroContent } from "../../Content/homeElevatorContent"

const curveYPositions = [54, 132, 184, 104, 158, 66]
const emptyStops = []
const AUTO_PLAY_DELAY = 3000

const defaultStops = [
    { eyebrow: "NVANZ", label: "NVANZ" },
    ...homeElevatroContent.slice(0, 5).map((product, index) => ({
        eyebrow: product.capselText,
        label: product.title,
        curveY: curveYPositions[index + 1],
    })),
]

const getSegment = (points, index) => {
    const start = points[index]
    const end = points[index + 1]
    const beforeStart = points[index - 1] ?? start
    const afterEnd = points[index + 2] ?? end

    return [
        start,
        {
            x: start.x + (end.x - beforeStart.x) / 6,
            y: start.y + (end.y - beforeStart.y) / 6,
        },
        {
            x: end.x - (afterEnd.x - start.x) / 6,
            y: end.y - (afterEnd.y - start.y) / 6,
        },
        end,
    ]
}

const createPath = (points) => {
    if (points.length === 0) return ""
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`

    return points.reduce((path, point, index) => {
        if (index === 0) return `M ${point.x} ${point.y}`

        const [, control1, control2, end] = getSegment(points, index - 1)

        return `${path} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
    }, "")
}

const getPointOnSegment = (segment, progress) => {
    const [start, control1, control2, end] = segment
    const inverse = 1 - progress

    return {
        x: inverse ** 3 * start.x +
            3 * inverse ** 2 * progress * control1.x +
            3 * inverse * progress ** 2 * control2.x +
            progress ** 3 * end.x,
        y: inverse ** 3 * start.y +
            3 * inverse ** 2 * progress * control1.y +
            3 * inverse * progress ** 2 * control2.y +
            progress ** 3 * end.y,
    }
}

// Position along the curve when travelling from stop `from` to stop `to`
// (works forwards, backwards, and across several stops).
const getRoutePosition = (points, from, to, progress) => {
    const total = Math.abs(to - from)
    const direction = to > from ? 1 : -1
    const pathProgress = progress * total

    if (pathProgress >= total) return points[to]

    const completed = Math.floor(pathProgress)
    const local = pathProgress - completed

    if (direction === 1) {
        return getPointOnSegment(getSegment(points, from + completed), local)
    }

    return getPointOnSegment(getSegment(points, from - 1 - completed), 1 - local)
}

const ProductJourneyMap = ({
    stops = defaultStops,
    className = "",
    onActiveIndexChange,
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [indicatorPosition, setIndicatorPosition] = useState(null)
    const journeyStops = Array.isArray(stops) ? stops : emptyStops

    const currentIndexRef = useRef(0)
    const animationFrameRef = useRef()
    const intervalRef = useRef()
    const isAnimatingRef = useRef(false)
    const callbackRef = useRef(onActiveIndexChange)

    useEffect(() => {
        callbackRef.current = onActiveIndexChange
    }, [onActiveIndexChange])

    const points = useMemo(() => {
        const lastIndex = journeyStops.length - 1

        return journeyStops.map((stop, index) => ({
            x: lastIndex <= 0 ? 500 : (1000 * (index + 0.5)) / journeyStops.length,
            y: stop.curveY ?? curveYPositions[index] ?? 125 + Math.sin(index * 1.5) * 48,
        }))
    }, [journeyStops])

    const pointsRef = useRef(points)
    pointsRef.current = points

    const path = useMemo(() => createPath(points), [points])

    // Move the indicator to any stop (used by both auto-play and clicks)
    const goTo = useCallback((nextIndex) => {
        const pts = pointsRef.current
        const from = currentIndexRef.current

        if (nextIndex < 0 || nextIndex >= pts.length) return
        if (nextIndex === from || isAnimatingRef.current) return

        setActiveIndex(nextIndex)
        callbackRef.current?.(nextIndex)

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            currentIndexRef.current = nextIndex
            setIndicatorPosition(pts[nextIndex])
            return
        }

        const steps = Math.abs(nextIndex - from)
        const duration = Math.min(1100 + (steps - 1) * 350, 2400)
        let startTime = null

        isAnimatingRef.current = true

        const animate = (timestamp) => {
            if (startTime === null) startTime = timestamp

            const raw = Math.min((timestamp - startTime) / duration, 1)
            const eased = raw * raw * (3 - 2 * raw)

            setIndicatorPosition(getRoutePosition(pts, from, nextIndex, eased))

            if (raw < 1) {
                animationFrameRef.current = window.requestAnimationFrame(animate)
            } else {
                currentIndexRef.current = nextIndex
                isAnimatingRef.current = false
                setIndicatorPosition(pts[nextIndex])
            }
        }

        animationFrameRef.current = window.requestAnimationFrame(animate)
    }, [])

    const startAutoPlay = useCallback(() => {
        window.clearInterval(intervalRef.current)

        const count = pointsRef.current.length
        if (count < 2) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        intervalRef.current = window.setInterval(() => {
            goTo((currentIndexRef.current + 1) % pointsRef.current.length)
        }, AUTO_PLAY_DELAY)
    }, [goTo])

    const handleStopClick = (index) => {
        goTo(index)
        startAutoPlay() // restart the timer so it doesn't fire right after a click
    }

    useEffect(() => {
        // reset if the number of stops changes
        currentIndexRef.current = 0
        isAnimatingRef.current = false
        setActiveIndex(0)
        setIndicatorPosition(null)

        startAutoPlay()

        return () => {
            window.clearInterval(intervalRef.current)
            if (animationFrameRef.current !== undefined) {
                window.cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [journeyStops.length, startAutoPlay])

    if (journeyStops.length === 0) return null
    const visibleIndicatorPosition = indicatorPosition ?? points[activeIndex % journeyStops.length]

    return (
        <div
            className={`w-full overflow-hidden ${className}`}
            aria-label="Elevator product journey"
        >
            <div className="relative h-[220px] w-full sm:h-[260px]">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 1000 260"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full overflow-visible"
                >
                    <path
                        d={path}
                        fill="none"
                        stroke="#C28A0A"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {journeyStops.map((stop, index) => {
                    const point = points[index]
                    const label = stop.label ?? stop.title ?? stop.name ?? ""
                    const eyebrow = stop.eyebrow ?? stop.type ?? stop.capselText ?? ""
                    const labelTop = point.y < 115 ? point.y + 17 : point.y - 56
                    const isActive = index === activeIndex

                    return (
                        <button
                            type="button"
                            key={`label-${index}`}
                            onClick={() => handleStopClick(index)}
                            aria-label={label || eyebrow}
                            aria-current={isActive ? "true" : undefined}
                            className="absolute -translate-x-1/2 cursor-pointer text-center"
                            style={{
                                left: `${(point.x / 1000) * 100}%`,
                                top: `${(labelTop / 260) * 100}%`,
                                width: `${100 / journeyStops.length}%`,
                            }}
                        >
                            {eyebrow && (
                                <p className="font-inter text-[8px] font-bold uppercase leading-tight tracking-wide text-[#E8A817] min-[500px]:text-[10px] sm:text-[11px]">
                                    {eyebrow}
                                </p>
                            )}
                            {label && (
                                <p
                                    className={`mt-0.5 break-words font-inter text-[10px] leading-tight transition-all duration-300 min-[500px]:text-[12px] sm:text-[16px] ${
                                        isActive
                                            ? "font-semibold text-[#141210]"
                                            : "text-[#141210]/70 hover:text-[#141210]"
                                    }`}
                                >
                                    {label}
                                </p>
                            )}
                        </button>
                    )
                })}

                {points.map((point, index) => (
                    <button
                        type="button"
                        key={`stop-${index}`}
                        onClick={() => handleStopClick(index)}
                        aria-label={`Go to stop ${index + 1}`}
                        className={`absolute size-[12px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-[3px] border-[#E8A817] transition-colors duration-300 sm:size-[14px] ${
                            index === activeIndex ? "bg-[#E8A817]" : "bg-white hover:bg-[#FFE08A]"
                        }`}
                        style={{
                            left: `${(point.x / 1000) * 100}%`,
                            top: `${(point.y / 260) * 100}%`,
                        }}
                    />
                ))}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none absolute left-0 top-0 z-10
                        flex size-[48px] sm:size-[48px]
                        -translate-x-1/2 -translate-y-1/2
                        items-center justify-center
                        rounded-full
                        bg-[linear-gradient(145deg,#FFE08A_0%,#E8A817_55%,#B97A0A_100%)]
                        shadow-[0_5px_12px_rgba(0,0,0,0.3),0_3px_0px_#A96E08]
                    "
                    style={{
                        left: `${(visibleIndicatorPosition.x / 1000) * 100}%`,
                        top: `${(visibleIndicatorPosition.y / 260) * 100}%`,
                    }}
                >
                    <MdOutlineDoorSliding aria-hidden="true" className="size-7 text-[#141210]" />
                </div>
            </div>
        </div>
    )
}

export default ProductJourneyMap