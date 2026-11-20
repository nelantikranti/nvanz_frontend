import { useEffect, useState } from "react"
import images from "../../assets/Images"
import { whichElevatorFitsDetails } from "../../Content/homeContent"
import AnimatedImageCard from "../AnimatedImageCard"

const HomePageSection3 = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const elevatorOptions = whichElevatorFitsDetails.cardDetails
    const selectedElevator = elevatorOptions[selectedIndex]

    useEffect(() => {
        if (elevatorOptions.length < 2) return

        const timeoutId = window.setTimeout(() => {
            setSelectedIndex((currentIndex) => (currentIndex + 1) % elevatorOptions.length)
        }, 5000)

        return () => window.clearTimeout(timeoutId)
    }, [selectedIndex, elevatorOptions.length])

    return(
      <div className="bg-[linear-gradient(135deg,#1F1A14_0%,#33260F_100%)] py-10 sm:py-12 lg:py-[50px]">
            <div className="mx-auto w-[min(90%,1280px)]">

<p className="font-bebas text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] text-white">{whichElevatorFitsDetails.heading}{" "} <span className="text-[#E9A60F]">{whichElevatorFitsDetails?.highHeading}</span></p>

<p className="mt-2 font-inter text-base text-[#CFC8BA] sm:text-lg">{whichElevatorFitsDetails.desc}</p>

<div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8">
    <div className="min-w-0">
        <div className="flex w-full flex-col gap-3">
            {elevatorOptions.map((elevator, index) => (
                <button
                    key={elevator.heading}
                    type="button"
                    aria-pressed={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative w-full overflow-hidden rounded-[20px] border-2 px-4 py-3 text-left transition-[translate,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A60F] motion-reduce:transition-none motion-reduce:transform-none sm:px-5 sm:py-3 ${
                        selectedIndex === index
                            ? "translate-x-3 border-[#E9A60F] bg-[#141210] shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                            : "border-[#3A342B] bg-[#25211C] hover:translate-x-3 hover:border-[#E9A60F] hover:bg-[#141210]"
                    }`}
                >
                    {selectedIndex === index && (
                        <span
                            key={selectedIndex}
                            aria-hidden="true"
                            className="animate-option-progress motion-reduce:animate-none motion-reduce:scale-x-100 absolute bottom-0 left-0 h-[3px] w-full origin-left rounded-full bg-[#E9A60F]"
                        />
                    )}
                    <span className="block font-bebas text-2xl text-white sm:text-[30px]">
                        {elevator.type}
                    </span>
                    <span className="block font-inter text-xs font-bold leading-snug text-[#B8860B] sm:text-[13px]">
                        {elevator.typeHeading}
                    </span>
                </button>
            ))}
        </div>
    </div>

<div className="flex min-w-0 flex-col gap-5 rounded-[20px] border-2 border-[#E9A60F66] bg-[linear-gradient(180deg,#25201A_0%,#120F0B_100%)] p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] sm:p-5 md:flex-row md:items-stretch md:gap-4 lg:gap-5">
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-6">
            <div>
                <p className="font-bebas text-4xl leading-none text-white sm:text-[44px] lg:text-[52px]">{selectedElevator.heading}</p>
            <p className="mt-2 font-inter text-sm font-bold leading-snug text-[#E9A60F] sm:text-[15px]">{selectedElevator.subHeading}</p>

            <p className="mt-3 font-inter text-sm leading-relaxed text-[#D8D2C6]">{selectedElevator.desc}</p>

            </div>
            
            <p className="font-inter text-sm font-bold text-[#E9A60F] sm:text-[15px]">Explore Solution →</p>

        </div>
        <div className="flex w-full shrink-0 justify-center md:w-[38%] md:items-center">

            {/* <img
                src={selectedElevator.img ?? images.liftImag}
                alt={selectedElevator.heading}
                className="h-[240px] w-full max-w-[220px] rounded-[10px] border-2 border-[#E9A60F] object-contain sm:h-[280px] sm:max-w-[240px] lg:h-[320px]"
            /> */}

            <AnimatedImageCard src={selectedElevator.img ?? images.liftImag}
                alt={selectedElevator.heading}
  width="240px"
  height="320px" />

        </div>
    </div>


</div>
            </div>

        </div>
    )
}

export default HomePageSection3