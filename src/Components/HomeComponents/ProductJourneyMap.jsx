import { useEffect, useMemo, useState } from "react"
import { MdElevator } from "react-icons/md"
import { homeElevatroContent } from "../../Content/homeElevatorContent"

import { MdOutlineDoorSliding } from "react-icons/md";

const curveYPositions = [54, 132, 184, 104, 158, 66]
const emptyStops = []

const defaultStops = [
    { eyebrow: "NVANZ", label: "NVANZ" },
    ...homeElevatroContent.slice(0, 5).map((product, index) => ({
        eyebrow: product.capselText,
        label: product.title,
        curveY: curveYPositions[index + 1],
    })),
]

const createPath = (points) => {
    if (points.length === 0) return ""
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`

    return points.reduce((path, point, index) => {
        if (index === 0) return `M ${point.x} ${point.y}`

        const [, control1, control2, end] = getSegment(points, index - 1)

        return `${path} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
    }, "")
}

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

const ProductJourneyMap = ({
    stops = defaultStops,
    className = "",
    onActiveIndexChange,
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [indicatorPosition, setIndicatorPosition] = useState(null)
    const journeyStops = Array.isArray(stops) ? stops : emptyStops

    const points = useMemo(() => {
        const lastIndex = journeyStops.length - 1

        return journeyStops.map((stop, index) => ({
            x: lastIndex <= 0 ? 500 : (1000 * (index + 0.5)) / journeyStops.length,
            y: stop.curveY ?? curveYPositions[index] ?? 125 + Math.sin(index * 1.5) * 48,
        }))
    }, [journeyStops])

    const path = useMemo(() => createPath(points), [points])

    useEffect(() => {
        if (journeyStops.length < 2) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        let currentIndex = 0
        let animationFrameId

        const animateIndicator = (nextIndex) => {
            const isLoopingToStart = nextIndex === 0
            const fromPoint = points[currentIndex]
            let startTime = null
            const duration = 1100

            setIndicatorPosition(fromPoint)

            const animate = (timestamp) => {
                if (startTime === null) startTime = timestamp

                const rawProgress = Math.min((timestamp - startTime) / duration, 1)
                const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress)
                let position

                if (isLoopingToStart) {
                    const segmentCount = journeyStops.length - 1
                    const pathProgress = easedProgress * segmentCount

                    if (pathProgress >= segmentCount) {
                        position = points[0]
                    } else {
                        const completedSegments = Math.floor(pathProgress)
                        const segmentIndex = segmentCount - 1 - completedSegments
                        const segmentProgress = 1 - (pathProgress - completedSegments)
                        position = getPointOnSegment(getSegment(points, segmentIndex), segmentProgress)
                    }
                } else {
                    position = getPointOnSegment(
                        getSegment(points, currentIndex),
                        easedProgress
                    )
                }

                setIndicatorPosition(position)

                if (rawProgress < 1) {
                    animationFrameId = window.requestAnimationFrame(animate)
                } else {
                    currentIndex = nextIndex
                    setIndicatorPosition(points[nextIndex])
                }
            }

            animationFrameId = window.requestAnimationFrame(animate)
        }

        const intervalId = window.setInterval(() => {
            const nextIndex = (currentIndex + 1) % journeyStops.length
            setActiveIndex(nextIndex)
            onActiveIndexChange?.(nextIndex)
            animateIndicator(nextIndex)
        }, 3000)

        return () => {
            window.clearInterval(intervalId)
            if (animationFrameId !== undefined) window.cancelAnimationFrame(animationFrameId)
        }
    }, [journeyStops.length, onActiveIndexChange, points])

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

                    return (
                        <div
                            key={`label-${index}`}
                            className="absolute -translate-x-1/2 text-center"
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
                                <p className="mt-0.5 text-[#111111] break-words font-inter text-[10px] leading-tight text-[#141210] min-[500px]:text-[12px] sm:text-[16px]">
                                    {label}
                                </p>
                            )}
                        </div>
                    )
                })}

                {points.map((point, index) => (
                    <span
                        key={`stop-${index}`}
                        aria-hidden="true"
                        className="absolute size-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#E8A817] bg-white sm:size-[14px]"
                        style={{
                            left: `${(point.x / 1000) * 100}%`,
                            top: `${(point.y / 260) * 100}%`,
                        }}
                    />
                ))}

                {/* <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 flex size-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8A817] text-[#141210] shadow-[0_8px_20px_rgba(20,18,16,0.2)] sm:size-[58px]"
                    style={{
                        left: `${(visibleIndicatorPosition.x / 1000) * 100}%`,
                        top: `${(visibleIndicatorPosition.y / 260) * 100}%`,
                    }}
                >
                    <MdOutlineDoorSliding aria-hidden="true" className="size-7" />
                   
                </div> */}

                <div
  aria-hidden="true"
  className="
    absolute left-0 top-0 z-10
    flex size-[48px] sm:size-[48px]
    -translate-x-1/2 -translate-y-1/2
    items-center justify-center
    rounded-full
    bg-[linear-gradient(145deg,#FFE08A_0%,#E8A817_55%,#B97A0A_100%)]
    shadow-[0_5px_12px_rgba(0,0,0,0.3),0_3px_0px_#A96E08]
    transition-transform duration-300
  "
  style={{
    left: `${(visibleIndicatorPosition.x / 1000) * 100}%`,
    top: `${(visibleIndicatorPosition.y / 260) * 100}%`,
  }}
>
  <MdOutlineDoorSliding
    aria-hidden="true"
    className="size-7 text-[#141210]"
  />
</div>
            </div>
        </div>
    )
}

export default ProductJourneyMap
