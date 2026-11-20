
import { useEffect, useRef, useState } from "react"

const useScrollReveal = () => {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0, rootMargin: "0px 0px 80px 0px" }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return [elementRef, isVisible]
}

const HomeSection2=()=>{
    const count=1000
    const startCount = 400
    const [aboutRef, aboutVisible] = useScrollReveal()
    const [headingRef, headingVisible] = useScrollReveal()
    const [buttonRef, buttonVisible] = useScrollReveal()
    const [experienceRef, experienceVisible] = useScrollReveal()
    const [projectsRef, projectsVisible] = useScrollReveal()
    const [satisfactionRef, satisfactionVisible] = useScrollReveal()
    const [servicesRef, servicesVisible] = useScrollReveal()
    const [servicesHeadingRef, servicesHeadingVisible] = useScrollReveal()
    const [servicesDescriptionRef, servicesDescriptionVisible] = useScrollReveal()
    const [servicesButtonRef, servicesButtonVisible] = useScrollReveal()
    const [animatedCount, setAnimatedCount] = useState(startCount)

    const countersVisible = experienceVisible || projectsVisible || satisfactionVisible

    useEffect(() => {
        if (!countersVisible) return

        const delay = 400
        const duration = 2400
        let frameId
        let timeoutId
        let startTime

        const animateCount = (timestamp) => {
            if (startTime === undefined) startTime = timestamp

            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easedProgress = progress * progress * (3 - 2 * progress)
            setAnimatedCount(Math.floor(startCount + easedProgress * (count - startCount)))

            if (progress < 1) {
                frameId = requestAnimationFrame(animateCount)
            }
        }

        timeoutId = window.setTimeout(() => {
            frameId = requestAnimationFrame(animateCount)
        }, delay)

        return () => {
            window.clearTimeout(timeoutId)
            if (frameId !== undefined) cancelAnimationFrame(frameId)
        }
    }, [count, countersVisible])

    const formattedCount = animatedCount.toLocaleString("en-US")
    const revealClass = (isVisible) => isVisible
        ? "animate-section-rise"
        : "translate-y-[60px] opacity-0"
    const reducedMotionClass = "motion-reduce:animate-none motion-reduce:translate-y-0 motion-reduce:opacity-100"

    return (
        <div id="elevator-solutions" className="w-[90%] mx-auto my-[50px]  ">
            <div className="flex gap-[20px] items-center justify-between">

            
            <div className="w-[50%]">

                <span ref={aboutRef} className={`inline-flex ${revealClass(aboutVisible)} ${reducedMotionClass} items-center gap-[6px] border border-black/20 bg-black/5 px-[10px] py-[5px] rounded-full text-[#211D1D] font-semibold mt-[20px]`}>

  <span className="w-[7px] h-[7px] shrink-0 bg-[#FFB700] rounded-full"></span>

  About Us

</span>

<p ref={headingRef} className={`${revealClass(headingVisible)} ${reducedMotionClass} text-[#211D1D] text-[28px] font-[700] mt-[20px] leading-[1.5]`}>
    WE PROVIDE TRUSTED ELEVATOR SOLUTIONS THAT COMBINE EXPERT WORKMANSHIP,<span className="text-[#FFB700]">ELEVATOR RESPONSE TIMES, TRANSPARENT PRICING,</span>  AND LONG-LASTING RESULTS FOR EVERY HOME WE SERVE.
</p>


<button ref={buttonRef} className={`inline-flex ${revealClass(buttonVisible)} ${reducedMotionClass} items-center gap-[6px] bg-[#FFB700] px-[10px] py-[5px] rounded-full text-white font-semibold mt-[30px]`}>

 

 Book Service

</button>

<div className="flex items-center justify-between mt-[70px]">

    <div ref={experienceRef} className={revealClass(experienceVisible) + " " + reducedMotionClass}>

        <p className="text-[#211D1D] text-[28px] font-[500]"> {formattedCount}+ </p>
        <p className="text-[#211D1D] text-[12px] font-[500]">Years Experience</p>

    </div>
    <div ref={projectsRef} className={revealClass(projectsVisible) + " " + reducedMotionClass}>

        <p className="text-[#211D1D] text-[28px] font-[500] "> {formattedCount}+ </p>
        <p className="text-[#211D1D] text-[12px] font-[500]">Project Completed</p>

    </div>
    <div ref={satisfactionRef} className={revealClass(satisfactionVisible) + " " + reducedMotionClass}>

        <p className="text-[#211D1D] text-[28px] font-[500]"> {formattedCount}% </p>
        <p className="text-[#211D1D] text-[12px] font-[500]"> Customer Satisfaction </p>

    </div>

</div>

            </div>
            <div className="w-[50%]">
                
            </div>
            </div>

           
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-[70px]">

  {/* Left Section */}
  <div className="w-full md:w-[55%]">

    <span ref={servicesRef} className={`inline-flex ${revealClass(servicesVisible)} ${reducedMotionClass} items-center gap-[10px] border border-black/20 bg-black/5 px-[16px] py-[10px] rounded-full text-[#211D1D] text-[16px] font-semibold`}>
      <span className="w-[9px] h-[9px] shrink-0 bg-[#FFB700] rounded-full"></span>
      Our Services
    </span>

    <h2 ref={servicesHeadingRef} className={`mt-[25px] ${revealClass(servicesHeadingVisible)} ${reducedMotionClass} text-[#211D1D] text-[28px] md:text-[28px] font-[700] leading-[1.1]`}>
      SOLUTIONS FOR EVERY
      <br />
      <span className="text-[#FFB700]">PLUMBING</span> NEED
    </h2>

  </div>

  {/* Right Section */}
  <div className="w-full md:w-[36%] flex flex-col items-start justify-center ">

    <p ref={servicesDescriptionRef} className={`text-[16px] md:text-[20px] leading-[1.4] text-[#211D1D] w-full ${revealClass(servicesDescriptionVisible)} ${reducedMotionClass}`}>
      From minor repairs to major installations, we provide dependable
      plumbing solutions backed by expert workmanship and years of
      industry experience.
    </p>

    <button ref={servicesButtonRef} className={`flex items-center gap-[7px] bg-[#FFB700] px-[10px] py-[7px] rounded-full text-white font-semibold text-[17px] mt-[20px] hover:bg-[#e6a500] transition-all duration-300 ${revealClass(servicesButtonVisible)} ${reducedMotionClass}`}>
      See All Services
      <span className="text-[25px] leading-none">→</span>
    </button>

  </div>

</div>

        </div>
    )
}

export default HomeSection2