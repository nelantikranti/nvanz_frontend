import { useEffect, useState } from "react"

/* ------------------------------ Configuration ------------------------------ */
const MOVE_MS = 1400                         // duration of the enter / exit movement
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)"
const REFLECTION_RATIO = 0.45                // reflection height as a fraction of the image height
const REFLECTION_GAP = "1px"                 // small gap between the image and its reflection



const KEYFRAMES = `
@keyframes heroSlideIn  { from { transform: translate3d(160%, 0, 0); }  to { transform: translate3d(0, 0, 0); } }
@keyframes heroSlideOut {
  0%   { transform: translate3d(0, 0, 0);      opacity: 1; }
  70%  { opacity: 0; }
  100% { transform: translate3d(-250%, 0, 0);  opacity: 0; }
}
@keyframes heroFadeIn   { from { opacity: 0; } to { opacity: 1; } }
@keyframes heroFadeOut  { from { opacity: 1; } to { opacity: 0; } }
`

const REFLECTION_MASK = "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 85%)"

const getAnimation = (role, reduced) => {
    const name = reduced
        ? role === "in" ? "heroFadeIn" : "heroFadeOut"
        : role === "in" ? "heroSlideIn" : "heroSlideOut"
    return `${name} ${MOVE_MS}ms ${EASE} both`
}

/* -------------------------------- Component -------------------------------- */
/**
 * Props
 *  - images:    all image sources (used only to preload them)
 *  - activeSrc: image of the currently active journey stop (may be undefined)
 *  - activeKey: active stop index – every change triggers a new transition
 */
const HeroImageCarousel = ({images = [],
    activeSrc,
    activeAlt = "",
    activeKey }) => {
   const [slides, setSlides] = useState(() => ({
    current: {
        uid: 0,
        activeKey,
        src: activeSrc,
        alt: activeAlt
    },
    leaving: null,
}));
    const [reduced, setReduced] = useState(false)

    // Respect prefers-reduced-motion (slide -> crossfade)
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReduced(mq.matches)
        const onChange = (e) => setReduced(e.matches)
        mq.addEventListener?.("change", onChange)
        return () => mq.removeEventListener?.("change", onChange)
    }, [])


    //console.log("CURRENT->",slides?.current?.alt, slides?.current?.src )

    // Preload every image so slides never pop in while animating
    const imagesSignature = images.join("|")
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image()
            img.src = src
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesSignature])

    // Active stop changed: current slide leaves to the left, the new one enters from the right
    useEffect(() => {
    setSlides((prev) => {
        if (
            prev.current.activeKey === activeKey &&
            prev.current.src === activeSrc
        ) return prev;

        return {
            current: {
                uid: prev.current.uid + 1,
                activeKey,
                src: activeSrc,
                alt: activeAlt
            },
            leaving: prev.current,
        };
    });
}, [activeKey, activeSrc, activeAlt]);

    // Remove the leaving slide from the DOM once its exit animation is done
    const leavingUid = slides.leaving?.uid
    useEffect(() => {
        if (leavingUid === undefined) return
        const t = setTimeout(() => {
            setSlides((prev) => (prev.leaving?.uid === leavingUid ? { ...prev, leaving: null } : prev))
        }, MOVE_MS + 100)
        return () => clearTimeout(t)
    }, [leavingUid])

    // A stop without an image (e.g. the NVANZ intro stop) simply renders nothing
    const rendered = []
    if (slides.leaving?.src) rendered.push({ ...slides.leaving, role: "out" })
    if (slides.current.src) rendered.push({ ...slides.current, role: "in" })

    if (rendered.length === 0) return null

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[4%] top-[10px] -z-10 h-[calc(60%-10px)] w-[68%] sm:w-[52%] md:w-[44%] lg:w-[38%]"
        >
            <style>{KEYFRAMES}</style>

            {rendered.map(({ uid, src, alt, role }) => (
                <div
                    key={uid}
                    className="absolute inset-0"
                    style={{ animation: getAnimation(role, reduced), willChange: "transform" }}
                >
                    {/* Main image: full picture, top to bottom, resting on the floor line */}
                    <img
                        src={src}
                        alt={alt || "NVANZ home elevator"}
                        decoding="async"
                        className="h-full w-full object-contain object-bottom"
                    />

                    {/* Mirror reflection: flipped copy, fades out downward, moves with its image */}
                    <div
                        className="absolute left-0 w-full overflow-hidden opacity-50"
                        style={{
                            top: `calc(100% + ${REFLECTION_GAP})`,
                            height: `${REFLECTION_RATIO * 100}%`,
                            WebkitMaskImage: REFLECTION_MASK,
                            maskImage: REFLECTION_MASK,
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            aria-hidden="true"
                            decoding="async"
                            className="w-full -scale-y-100 object-contain object-bottom"
                            style={{ height: `${100 / REFLECTION_RATIO}%` }}
                        />
                    </div>
                </div>

//  <div
//         key={uid}
//         className="absolute inset-0 flex items-end justify-center"
//         style={{
//             animation: getAnimation(role, reduced),
//             willChange: "transform",
//         }}
//     >
//         {/* Main Product Image */}
//         <img
//             src={src}
//             alt={alt || "NVANZ home elevator"}
//             decoding="async"
//             className="
//                 block
//                 h-full
//                 w-full
//                 object-contain
//                 object-bottom
//             "
//         />

//         {/* Mirror Reflection */}
//         <div
//             className="absolute left-0 w-full overflow-hidden opacity-40"
//             style={{
//                 top: `calc(100% + ${REFLECTION_GAP})`,
//                 height: `${REFLECTION_RATIO * 100}%`,
//                 WebkitMaskImage: REFLECTION_MASK,
//                 maskImage: REFLECTION_MASK,
//             }}
//         >
//             <img
//                 src={src}
//                 alt=""
//                 aria-hidden="true"
//                 decoding="async"
//                 className="
//                     block
//                     w-full
//                     -scale-y-100
//                     object-contain
//                     object-bottom
//                 "
//                 style={{
//                     height: `${100 / REFLECTION_RATIO}%`,
//                 }}
//             />
//         </div>
//     </div>

            ))}
        </div>
    )
}

export default HeroImageCarousel