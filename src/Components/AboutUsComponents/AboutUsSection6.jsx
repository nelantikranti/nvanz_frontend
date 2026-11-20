import { useEffect, useRef } from "react"
import aboutUsContent from "../../Content/aboutUsContent"

const AboutUsSection6=()=>{
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)
    const progressTrackRef = useRef(null)
    const progressLineRef = useRef(null)
    const progressIndicatorRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const cardsContainer = cardsRef.current
        const progressTrack = progressTrackRef.current
        const progressLine = progressLineRef.current
        const progressIndicator = progressIndicatorRef.current
        if (!section || !cardsContainer || !progressTrack || !progressLine || !progressIndicator) return

        const steps = section.querySelectorAll("[data-timeline-step]")
        if (steps.length === 0) return

        let frameId = null

        const updateProgress = () => {
            const viewportHeight = window.innerHeight
            const sectionTop = section.getBoundingClientRect().top
            const cardsRect = cardsContainer.getBoundingClientRect()
            const cardsOffset = cardsRect.top - sectionTop
            const stepOffsets = Array.from(steps, (step) => step.offsetTop)
            const verticalStepDistance = stepOffsets[stepOffsets.length - 1] - stepOffsets[0]
            let progress
            let getStepMilestone

            if (verticalStepDistance > 20) {
                const firstStep = steps[0].getBoundingClientRect()
                const firstStepCenter = firstStep.top + firstStep.height / 2
                const targetCenter = viewportHeight * 0.68
                const scrollDistance = verticalStepDistance / 0.75

                progress = Math.max(
                    0,
                    Math.min(1, 0.125 + (targetCenter - firstStepCenter) / scrollDistance)
                )
                getStepMilestone = (index) => 0.125 + (stepOffsets[index] - stepOffsets[0]) / scrollDistance
            } else {
                const startTop = viewportHeight + cardsOffset
                const endTop = -Math.min(cardsRect.height * 0.1, viewportHeight * 0.1)
                const scrollDistance = Math.max(startTop - endTop, 1)

                progress = Math.max(0, Math.min(1, (startTop - cardsRect.top) / scrollDistance))
                getStepMilestone = (index) => (index + 0.5) / steps.length
            }

            progressLine.style.width = `${progress * 100}%`
            progressIndicator.style.left = `${progress * 100}%`
            progressTrack.setAttribute("aria-valuenow", String(Math.round(progress * 100)))

            steps.forEach((step, index) => {
                const stepMilestone = getStepMilestone(index)
                step.setAttribute("data-active", String(progress >= stepMilestone))
            })
        }

        const scheduleUpdate = () => {
            if (frameId !== null) return
            frameId = window.requestAnimationFrame(() => {
                frameId = null
                updateProgress()
            })
        }

        updateProgress()
        window.addEventListener("scroll", scheduleUpdate, { passive: true })
        window.addEventListener("resize", scheduleUpdate)

        return () => {
            window.removeEventListener("scroll", scheduleUpdate)
            window.removeEventListener("resize", scheduleUpdate)
            if (frameId !== null) window.cancelAnimationFrame(frameId)
        }
    }, [])

    return(
        <section ref={sectionRef} className="bg-[#141210] py-10 sm:py-14 lg:py-20">

            <div className="mx-auto w-[min(90%,1280px)]">

                <span className="inline-flex w-fit max-w-full items-center rounded-full border border-[#B8860B] px-3 py-1 font-inter text-[11px] font-bold text-[#B8860B] sm:text-xs">{aboutUsContent?.section6?.smallHeading}</span>

                <h2 className="mt-4 font-bebas text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] text-white">
                    {aboutUsContent?.section6?.heading}{" "}
                    <span className="text-[#E9A60F]">{aboutUsContent?.section6?.highlightedHeading}</span>
                </h2>

                <div
                    ref={progressTrackRef}
                    role="progressbar"
                    aria-label="Project timeline progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="0"
                    className="relative mx-2 mt-6 h-5 sm:mt-8"
                >
                    <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-[#E9A60F]/20"></div>
                    <div
                        ref={progressLineRef}
                        className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#E9A60F] shadow-[0_0_8px_rgba(233,166,15,0.5),0_0_18px_rgba(233,166,15,0.25)]"
                        style={{ width: "0%" }}
                    ></div>
                    <div
                        ref={progressIndicatorRef}
                        className="absolute left-0 top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9A60F] shadow-[0_0_10px_rgba(233,166,15,0.65),0_0_22px_rgba(233,166,15,0.35)]"
                    ></div>
                </div>

                <div ref={cardsRef} className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:mt-8 xl:grid-cols-4">
                   {
  aboutUsContent?.section6?.cardDeatils?.map((data, index) => (
    <article
      key={index}
      data-timeline-step="true"
      data-active="false"
      className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#111111] p-5 transition-[border-color,box-shadow] duration-500 motion-reduce:transition-none sm:p-6 xl:min-h-[300px]"
    >
      <p className="font-inter text-xs font-bold tracking-wide text-[#E9A60F] sm:text-sm">
        STEP {String(index + 1).padStart(2, "0")}
      </p>

      <div aria-hidden="true" className="my-3 h-0.5 w-11 rounded-full bg-[#E9A60F] sm:my-4" />

      <h3 className="font-bebas text-[clamp(1.75rem,3vw,2.125rem)] leading-[0.95] text-white">
        {data?.heading}
      </h3>

      <p className="mt-4 font-inter text-sm leading-relaxed text-[#D8D2C6] sm:mt-5 sm:text-base">
        {data?.description}
      </p>
    </article>
  ))
}
                   

                </div>

            </div>

            </section>
    )
}

export default AboutUsSection6