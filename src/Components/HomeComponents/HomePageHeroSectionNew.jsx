import { useCallback, useState } from "react"
import images from "../../assets/Images"
import ProductJourneyMap from "./ProductJourneyMap"


const HomePageHeroSectionNew=()=>{

    const data=[
        {
            heading:"Compact",
            highlightHeading:"1805",
            subText:"Small spaces",
            capsulText:"360° CIRCULAR",

        },
        {
            heading:"Panorama",
            highlightHeading:"1805",
            capsulText:"PANORAMIC",
            subText:"Statement design",

        },
        {
            heading:"Ground",
            highlightHeading:"1506",
            
            capsulText:"HYDRAULIC",

            subText:"Low-rise homes",

        },
        {
            heading:"Prestige ",
            highlightHeading:"1110",
            capsulText:"MRL",
            subText:"No machine room needed"

        },
        {
            heading:"Signature",
            highlightHeading:"1101",
            capsulText:"TRACTION",
             subText:"Smooth, quiet daily use"

        },
         {
            heading:"A Modern ",
            highlightHeading:"Vantage",
            capsulText:"NVANZ",
             subText:"Elevating the Way You Live."

        },
    ]

    const [activeStopIndex, setActiveStopIndex] = useState(0)
    const journeyData = [...data].reverse()
    const activeData = journeyData[activeStopIndex]
    const handleActiveStopChange = useCallback((index) => {
        setActiveStopIndex(index)
    }, [setActiveStopIndex])

    return(
        <div
            className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "radial-gradient(circle 200px at 74% 22%, rgba(242, 199, 90, 0.7) 0%, rgba(242, 199, 90, 0) 100%), linear-gradient(180deg, #F1E4C4 0%, #FDFCF8 60%, #F3E6C4 62%, #B98A1C 100%)",
            }}
        >
<div className="mx-auto mt-5 w-[90%] sm:mt-[30px]">
       <p className="font-inter text-[clamp(2.5rem,9vw,130px)] leading-none text-[#111111] ">{activeData?.heading}{" "} <span className="font-bold text-[#E8A817]">{activeData?.highlightHeading}</span></p>
            <p className="mt-[10px] font-inter text-base font-bold sm:text-[21px]"> {activeData?.subText}</p>

            <span className="inline-block max-w-full rounded-full border-[2px] border-[#111111] px-[10px] font-inter text-[13px] font-bold text-[#111111] mt-[10px]"> {activeData?.capsulText}</span>

</div>
         
            <img
                src={images.person}
                alt="Person standing"
                className="pointer-events-none absolute bottom-[40%] right-[8%] z-0 h-[120px] w-[42px] object-contain object-bottom md:bottom-[38%] md:right-[10%] md:h-[190px] md:w-[64px]"
            />
            <ProductJourneyMap
                className="relative z-10 mt-auto"
                onActiveIndexChange={handleActiveStopChange}
            />
        </div>
    )
}

export default HomePageHeroSectionNew