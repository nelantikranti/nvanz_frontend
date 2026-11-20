import { useEffect, useRef, useState } from "react"
import ScrollTimeline from "../ScrollTimeline"

// const steps = [
//     "Book a site visit",
//     "We check space and safety",
//     "You get design and quote",
//     "We install and test",
//     "We support you after handover",
// ]

const steps = [
    {
    heading:"Book a site visit",
    desc:"",
    },
     {
    heading:"We check space and safety",
    desc:"",
    },
     {
    heading:"You get design and quote",
    desc:"",
    },
     {
    heading:"We install and test",
    desc:"",
     },
     {
    heading:"We support you after handover",
    desc:"",
     }
   
]

const HowItWorks = () => {
  
    return (
        <section className="bg-[linear-gradient(135deg,#1F1A14_0%,#33260F_100%)] py-10 sm:py-12 lg:py-[50px]">
            <div className="mx-auto w-[90%]">
                <h2 className="font-bebas text-[clamp(2.75rem,8vw,4.5rem)] leading-[0.9] text-white">
                    HOW IT WORKS
                </h2>
                <p className="mt-2 font-inter text-base font-bold leading-relaxed text-[#E9A60F] sm:text-xl">
                    Complete Elevator Services Under One Roof.
                </p>

                {/* <div className="mt-6 flex items-start gap-4 sm:gap-6 lg:gap-10">
                 
                    <div
                        aria-hidden="true"
                        className="relative w-7 shrink-0 self-stretch"
                    >
                    
                        <div className="absolute inset-y-0 left-1/2 -ml-[1.5px] w-[3px] rounded-full bg-[#E9A60F]/25" />

                  
                        <div
                            ref={fillRef}
                            className="absolute inset-y-0 left-1/2 -ml-[1.5px] w-[3px] origin-top rounded-full bg-[#E9A60F] will-change-transform"
                            style={{ transform: "scaleY(0)" }}
                        />

                   
                        <div
                            ref={markerRef}
                            className="absolute left-0 top-0 size-7 rounded-lg bg-[#E9A60F] shadow-[0_0_14px_rgba(233,166,15,0.65)] will-change-transform"
                            style={{ transform: "translate3d(0, 0px, 0)" }}
                        />
                    </div>


                    <div
                        ref={stepsRef}
                        className="relative flex min-w-0 flex-1 flex-col gap-3 sm:gap-4"
                    >
                        {steps.map((step, index) => {
                            const isActive = activeStep === index
                            const isReached = activeStep >= index

                            return (
                                <article
                                    key={step}
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
                                        className={`shrink-0 font-bebas text-3xl leading-none transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:text-4xl ${
                                            isReached ? "text-[#E9A60F]" : "text-[#E9A60F]/40"
                                        }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <p
                                        className={`min-w-0 font-inter text-sm font-bold leading-snug transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:text-base lg:text-lg ${
                                            isReached ? "text-white" : "text-white/60"
                                        }`}
                                    >
                                        {step}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div> */}

              <ScrollTimeline steps={steps} className="mt-6" />

               

                <p className="mt-6 w-full max-w-[56rem] font-inter text-sm leading-relaxed text-white sm:text-base">
                    Our relationship with customers goes beyond product selection. NVANZ
                    provides support across important stages of the elevator lifecycle.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                    {["Elevator installation", "Elevator modernization", "Annual Maintenance Contract (AMC)"].map(
                        (label) => (
                            <button
                                key={label}
                                type="button"
                                className="max-w-full rounded-full bg-[#141210] px-4 py-2 text-left font-inter text-xs font-bold leading-snug text-white sm:px-5 sm:text-sm"
                            >
                                {label}
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks