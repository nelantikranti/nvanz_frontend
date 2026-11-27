import { useCallback, useState } from "react"
import images from "../../assets/Images"
import ProductJourneyMap from "./ProductJourneyMap"
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import HeroImageCarousel from "./HeroImageCarousel";


const HomePageHeroSectionNew=()=>{

    const navigate=useNavigate()

    const data=[
        {
            heading:"Compact",
            highlightHeading:"1805",
            subText:"Small spaces",
            capsulText:"360° CIRCULAR",
            img:images?.compactImg,
            alt: "Compact 1805 360° panoramic elevator for small spaces",

        },
        {
            heading:"Panorama",
            highlightHeading:"1805",
            capsulText:"PANORAMIC",
            subText:"Statement design",
            img:images?.panoramaImg,
            alt: "Panorama 1805 360° panoramic circular glass elevator",

        },
        {
            heading:"Ground",
            highlightHeading:"1506",
            
            capsulText:"HYDRAULIC",

            subText:"Low-rise homes",
            img:images?.groundImg,
            alt: "Ground 1506 hydraulic elevator for low-rise homes",

        },
        {
            heading:"Prestige ",
            highlightHeading:"1110",
            capsulText:"MRL",
            subText:"No machine room needed",
            img:images?.prestige,

            alt: "Prestige 1110 MRL home elevator with no machine room",

        },
        {
            heading:"Signature",
            highlightHeading:"1101",
            capsulText:"TRACTION",
             subText:"Smooth, quiet daily use",
             img:images?.signatureImg,
             alt: "Signature 1101 gearless traction home elevator",

        },
         {
            heading:"A Modern ",
            // mainHeading:"Premium Elevators for Modern Homes: Safe, Smart and Elegant",
            highlightHeading:"Vantage",
            capsulText:"NVANZ",
            subText:"Elevating the Way You Live.",
            desc:'NVANZ Elevators is an ISO 9001:2015 certified elevator manufacturer. We design, manufacture and install premium elevators for villas, homes and small buildings. Every elevator is engineered for safety, smooth performance and elegant design. The Premium Vantage.',
            alt: "",
        },
    ]

    const carouselImages = [...new Set(data.map((item) => item?.img).filter(Boolean))]

    const [activeStopIndex, setActiveStopIndex] = useState(0)
    const journeyData = [...data].reverse()
    const activeData = journeyData[activeStopIndex]
    const handleActiveStopChange = useCallback((index) => {
        setActiveStopIndex(index)
    }, [setActiveStopIndex])

    return(
        <div
            className="relative isolate flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "radial-gradient(circle 200px at 74% 22%, rgba(242, 199, 90, 0.7) 0%, rgba(242, 199, 90, 0) 100%), linear-gradient(180deg, #F1E4C4 0%, #FDFCF8 60%, #F3E6C4 62%, #B98A1C 100%)",
            }}

        >

           <HeroImageCarousel
    images={carouselImages}
    activeSrc={activeData?.img}
    activeAlt={activeData?.alt}
    activeKey={activeStopIndex}
/>
             {/* Vertical side CTA - tablet & desktop only */}
<div className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 translate-x-[calc(50%-1.5rem)] md:block lg:translate-x-[calc(50%-1.75rem)]">
  <div className="origin-center rotate-90 whitespace-nowrap md:scale-90 lg:scale-100">
    <Button
      borderColor="#141210"
      bgColor="#FFFFFF"
      textColor="#141210"
      hoverBgColor="#141210"
      hoverTextColor="#FFFFFF"
      text="Discuss Your Elevator Project"
      onClick={() => {
        window.location.href = "tel:+918978039911";
    }}
    />
  </div>
</div>

           
<div className="mx-auto mt-5 w-[90%] sm:mt-[30px]">
    {/* <p>SERVICE SUPPORT AFTER INSTALLATION WHEELCHAIR-FRIENDLY OPTIONS</p> */}

         
     <h1 className="text-[#141210] text-[clamp(10px,1.2vw,18px)] font-inter font-bold">
  Premium Elevators for Modern Homes: Safe, Smart and Elegant
</h1>
   
   
       <p className="font-inter text-[clamp(2.5rem,9vw,130px)] leading-none text-[#111111] ">{activeData?.heading}{" "} <span className="font-bold text-[#E8A817]">{activeData?.highlightHeading}</span></p>
            <p className="mt-[10px] font-inter text-base font-bold sm:text-[21px]"> {activeData?.subText}</p>

{
    activeData?.desc &&  <p className="w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[65%] text-[#222222] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[1.6] sm:leading-[1.7]">
  {activeData?.desc} 
</p>
}

  <span className="inline-block max-w-full rounded-full border-[2px] border-[#111111] px-[10px] font-inter text-[13px] font-bold text-[#111111] mt-[10px]"> {activeData?.capsulText}</span>


<div className="absolute top-[60%] -translate-y-1/2  z-20">
  
  <p className="flex w-fit items-center gap-2 border-b-[3px] border-[#E8A817] pb-1 font-inter text-[18px] font-bold text-[#111111] sm:gap-[10px] sm:text-[22px] xl:text-[27px]">
    Book a Free Site Visit
    <IoMdAdd className="text-[#C28A0A] w-[30px] h-[30px] [stroke-width:2px]" />
  </p>

 <button
    onClick={() => navigate("/products")}
    className="cursor-pointer font-inter text-[15px] text-[#333333] sm:text-[16px] xl:text-[18px]"
  >
    Explore Our Elevators →
  </button>
</div>
            
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