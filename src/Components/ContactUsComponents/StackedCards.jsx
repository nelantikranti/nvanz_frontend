import { useEffect, useRef, useState } from "react"

/* ------------------------------------------------------------------ */
/* Tuning                                                              */
/* ------------------------------------------------------------------ */
const DURATION = 950 // ms, one card change. Bigger = slower and smoother
const BUSY_MS = 550 // ms after a change before the next one is accepted
const WHEEL_THRESHOLD = 24 // px of scrolling needed to start a change
const GESTURE_GAP = 120 // ms without wheel events = a new scroll gesture
const NOTCH_GAP = 45 // ms, wheel clicks further apart than this count as separate clicks
const NOTCH_MIN = 40 // px, size of a single mouse wheel click
const SWIPE_THRESHOLD = 50 // px, horizontal swipe on touch screens
const VISIBLE_DEPTH = 2 // cards peeking out behind the front one
const SLIDE_OUT = 55 // % of card width the front card slides left before tucking behind

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const clamp = (v, min, max) => Math.min(Math.max(v, min), max)
const mod = (n, m) => ((n % m) + m) % m
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const smoothstep = (a, b, x) => {
    const t = clamp((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)
}

/**
 * Where is card `i` when the carousel is at `progress`?
 * progress = 0 -> card 0 in front, 0.5 -> halfway to card 1, 1 -> card 1 in front ...
 * It loops forever, so progress can be any number (also negative).
 */
const computeStyle = (i, progress, count) => {
    const base = Math.floor(progress)
    const t = easeInOut(progress - base) // 0..1 transition between two cards
    const k = mod(i - base, count) // slot of this card at the start of the transition
    const maxDepth = Math.min(VISIBLE_DEPTH, count - 1)

    // The front card slides out to the side, then tucks in at the very back
    if (k === 0) {
        const depth = maxDepth * t
        const lift = Math.sin(Math.PI * t)
        // short fade while it changes layer, so the swap behind the stack is invisible
        const bell = smoothstep(0.35, 0.5, t) - smoothstep(0.5, 0.65, t)

        return {
            transform: `translate3d(calc(var(--step-x) * ${depth.toFixed(4)} - ${(lift * SLIDE_OUT).toFixed(3)}%), calc(var(--step-y) * ${(-depth).toFixed(4)}), 0) rotate(${(-4 * lift).toFixed(3)}deg) scale(${(1 - 0.03 * lift).toFixed(4)})`,
            opacity: 1 - 0.9 * bell,
            zIndex: t < 0.5 ? 60 : 0,
        }
    }

    // Every other card moves one step toward the front
    const depth = Math.min(k - t, maxDepth)
    return {
        transform: `translate3d(calc(var(--step-x) * ${depth.toFixed(4)}), calc(var(--step-y) * ${(-depth).toFixed(4)}), 0)`,
        opacity: 1,
        zIndex: 50 - k,
    }
}

/* ------------------------------------------------------------------ */
/* Stamp badge (top right of a card)                                   */
/* ------------------------------------------------------------------ */
export const Badge = ({ top, bottom }) => (
    <div className="relative w-[73px] h-[73px] rounded-full border-[2px] border-[#B8860B] flex justify-center items-center">

    {/* Dashed inner circle */}
    <div className="absolute w-[60px] h-[60px] rounded-full border-[2px] border-dashed border-[#BE8A10]" />

    {/* Centered text */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#BE8A10]">
        <p className="font-inter text-[12px] font-bold leading-none sm:text-sm">
            {top}
        </p>

        {bottom && (
            <p className="mt-[3px] font-inter text-[6px] font-bold leading-none sm:text-[8px]">
                {bottom}
            </p>
        )}
    </div>

</div>
)

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
const StackedCards = ({ cards = [], className = "", label = "Highlights" }) => {
    const count = cards.length
    const stackRef = useRef(null)
    const cardRefs = useRef([])
    const goRef = useRef(null)
    const touchRef = useRef({ x: 0, y: 0 })
    const [active, setActive] = useState(0)

    useEffect(() => {
        const stack = stackRef.current
        if (!stack || count < 2) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

        // animation state
        let current = 0 // what is on screen
        let from = 0
        let to = 0 // always a whole number: the card we are heading to
        let startTime = 0
        let duration = DURATION
        let rafId = null
        let busyUntil = 0
        let lastActive = 0

        // wheel gesture state
        let acc = 0
        let used = false // this gesture already changed a card
        let lastWheel = 0
        let lastAbs = 0

        // Write styles straight to the DOM: no React re-render per frame
        const apply = (progress) => {
            cardRefs.current.forEach((el, i) => {
                if (!el) return
                const s = computeStyle(i, progress, count)
                el.style.transform = s.transform
                el.style.opacity = String(s.opacity)
                el.style.zIndex = String(s.zIndex)
            })

            const front = mod(Math.round(progress), count)
            if (front !== lastActive) {
                lastActive = front
                setActive(front)
            }
        }

        // Fixed-duration tween. The easing lives in computeStyle, so time -> progress is linear.
        const tick = (now) => {
            if (reduceMotion.matches) {
                current = to
                rafId = null
                apply(current)
                return
            }

            const t = clamp((now - startTime) / duration, 0, 1)
            current = from + (to - from) * t
            rafId = t < 1 ? window.requestAnimationFrame(tick) : null
            apply(current)
        }

        // Move exactly one card forward (1) or back (-1)
        const go = (direction) => {
            const now = performance.now()
            if (now < busyUntil) return false

            busyUntil = now + BUSY_MS
            from = current
            to = to + direction
            duration = DURATION * clamp(Math.abs(to - from), 0.6, 1.4)
            startTime = now

            if (rafId === null) rafId = window.requestAnimationFrame(tick)
            return true
        }

       const onWheel = (event) => {
    // Allow browser pinch zoom
    if (event.ctrlKey) return

    // Only handle vertical scrolling
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return

    // Get the currently active card
    const activeCard = cardRefs.current[lastActive]

    if (!activeCard) return

    // Check whether the mouse is inside the active card
    const rect = activeCard.getBoundingClientRect()

    const isInsideCard =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

    // Outside the card: allow normal page scrolling
    if (!isInsideCard) return

    // Inside the card: prevent page scrolling and change cards
    event.preventDefault()

    const unit =
        event.deltaMode === 1 ? 16 :
        event.deltaMode === 2 ? 400 : 1

    const delta = event.deltaY * unit
    const abs = Math.abs(delta)
    const now = performance.now()
    const gap = now - lastWheel

    lastWheel = now

    const fresh =
        gap > GESTURE_GAP ||
        (gap >= NOTCH_GAP && abs >= NOTCH_MIN) ||
        (abs > lastAbs * 1.8 && abs >= 30)

    lastAbs = abs

    if (fresh) {
        acc = 0
        used = false
    }

    if (used) return

    acc += delta

    if (Math.abs(acc) >= WHEEL_THRESHOLD) {
        go(acc > 0 ? 1 : -1)
        acc = 0
        used = true
    }
}

        goRef.current = go
        apply(0)
        stack.addEventListener("wheel", onWheel, { passive: false }) // non-passive so preventDefault works

        return () => {
            stack.removeEventListener("wheel", onWheel)
            if (rafId !== null) window.cancelAnimationFrame(rafId)
            goRef.current = null
        }
    }, [count])

    const onKeyDown = (event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            event.preventDefault()
            goRef.current?.(1)
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            event.preventDefault()
            goRef.current?.(-1)
        }
    }

    // Touch: horizontal swipe changes the card, vertical swipe still scrolls the page
    const onTouchStart = (event) => {
        const touch = event.touches[0]
        touchRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const onTouchEnd = (event) => {
        const touch = event.changedTouches[0]
        const dx = touch.clientX - touchRef.current.x
        const dy = touch.clientY - touchRef.current.y
        if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
            goRef.current?.(dx < 0 ? 1 : -1)
        }
    }

    return (
      
<div
    ref={stackRef}
    role="group"
    aria-roledescription="carousel"
    aria-label={label}
    tabIndex={0}
    onKeyDown={onKeyDown}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    style={{ touchAction: "pan-y" }}
    className={`isolate grid   mt-[50px] justify-items-end pr-[calc(var(--step-x)*2)] pt-[calc(var(--step-y)*2)] outline-none [--step-x:14px] [--step-y:18px] focus-visible:ring-2 focus-visible:ring-[#BE8A10] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F4EA] sm:[--step-x:28px] sm:[--step-y:34px] ${className}`}
>
    {cards.map((card, i) => (
        <article
            key={card.title}
            ref={(element) => {
                cardRefs.current[i] = element
            }}
            aria-hidden={i !== active}
            style={computeStyle(i, 0, count)}
            className="relative col-start-1 row-start-1 flex aspect-[8/5] w-[min(400px,100%)] shrink-0 flex-col self-start justify-self-end overflow-hidden rounded-[22px] border border-[#E6DCC6] bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] will-change-transform sm:p-5"
        >
            <div className="flex items-start justify-between gap-3">
                <p className="font-bebas text-4xl leading-none text-[#E9A60F] sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                </p>
                {card.badge}
            </div>

            <h3 className="mt-1 font-bebas text-2xl leading-none text-[#141210] sm:text-[28px]">
                {card.title}
            </h3>

            <p className="mt-1.5 line-clamp-3 font-inter text-[11px] leading-relaxed text-[#3A342B] sm:mt-2 sm:line-clamp-4 sm:text-[13px]">
                {card.text}
            </p>
        </article>
    ))}
</div>

    )
}

export default StackedCards