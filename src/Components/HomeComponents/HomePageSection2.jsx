import { useEffect, useRef, useState } from "react"
import { cardDetails } from "../../Content/homeContent"
import LogoAutoScroll from "../LogoAutoScroll"

const CounterValue = ({ value }) => {
    const counterRef = useRef(null)
    const [hasEntered, setHasEntered] = useState(false)
    const [progress, setProgress] = useState(0)
    const hasNumbers = /\d/.test(value)
    const shouldSkipAnimation =
        typeof window !== "undefined" &&
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window))

    useEffect(() => {
        if (!hasNumbers) return
        if (shouldSkipAnimation) return

        const element = counterRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [hasNumbers, shouldSkipAnimation])

    useEffect(() => {
        if (!hasEntered) return

        const duration = 1000
        let frameId
        let startTime

        const animate = (timestamp) => {
            if (startTime === undefined) startTime = timestamp

            const rawProgress = Math.min((timestamp - startTime) / duration, 1)
            const easedProgress = 1 - Math.pow(1 - rawProgress, 4)
            setProgress(easedProgress)

            if (rawProgress < 1) {
                frameId = requestAnimationFrame(animate)
            }
        }

        frameId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frameId)
    }, [hasEntered])

    const displayValue = hasNumbers
        ? value.replace(/\d+/g, (digits) => {
              const target = Number(digits)
              const current = Math.round(target * (shouldSkipAnimation ? 1 : progress))
              return String(Math.min(current, target))
          })
        : value

    return (
        <p
            ref={counterRef}
            className="text-center text-[34px] font-bebas leading-[0.90] text-[#E9A60F]"
        >
            <span className="sr-only">{value}</span>
            <span aria-hidden="true">{displayValue}</span>
        </p>
    )
}

const HomePageSection2=()=>{
    return(
        <div className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-[50px] ">


            <div className="w-[90%] mx-auto flex justify-between max-lg:justify-center flex-wrap gap-[20px] ">

                {
                    cardDetails?.map((data,index)=>(

                          <div key={index} className="w-[285px] h-[150px] border-[2px] border-[#E9A60F]  transition-all duration-500 ease-in-out   hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] hover:-translate-y-3 hover:border-[#E9A60F] flex flex-col items-center justify-center  rounded-[20px] p-[20px] ">

                <CounterValue value={data?.value ?? ""} />

                <p className="text-[#D8D2C6] text-[14px] font-inter text-center mt-[10px]">{data?.title}</p>
                <p className="text-[9px] font-inter font-bold text-[#E9A60F]  text-center mt-[10px]">{data?.status}</p>


            </div>

                    ))
                }

            </div>

<div className="mt-[30px]">
      <LogoAutoScroll/>
</div>
           

          

        </div>
    )
}

export default  HomePageSection2