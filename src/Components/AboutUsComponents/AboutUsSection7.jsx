import images from "../../assets/Images"
import aboutUsContent from "../../Content/aboutUsContent"
import AnimatedImageCard from "../AnimatedImageCard"


const AboutUsSection7=()=>{

    return(
        <section
            className="bg-[#141210] py-10 sm:py-14 lg:py-20"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 75% 45%, rgba(233, 166, 15, 0.3) 0%, rgba(233, 166, 15, 0) 50%)",
            }}
        >

<div className="mx-auto grid w-[min(90%,1200px)] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">


    <div className="min-w-0">
 <span className="inline-flex max-w-full rounded-full border border-[#B8860B] px-3 py-1 font-inter text-[11px] font-bold text-[#B8860B] sm:text-xs">{aboutUsContent?.section7?.smallHeading}</span>

 <h2 className="mt-4 font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] text-white">
    {aboutUsContent?.section7?.heading}{" "}
    <span className="text-[#E9A60F]">{aboutUsContent?.section7?.heightlightHeading}</span>
 </h2>


 <p className="mt-4 max-w-[48rem] font-inter text-base leading-relaxed text-[#D8D2C6] sm:mt-5 sm:text-lg">{aboutUsContent?.section7?.description}</p>

 <p className="mt-4 max-w-[48rem] font-inter text-sm font-bold leading-relaxed text-[#E9A60F] sm:mt-5 sm:text-base">{aboutUsContent?.section7?.belowDes}</p>
    </div>

    <div className="flex min-w-0 w-full justify-center lg:justify-end">
        <AnimatedImageCard
            src={images.about7elevatorImage}
            alt="Modern elevator"
            width="100%"
            height="auto"
            className="aspect-[2/3] w-full max-w-[320px]"
        />
    </div>

   
        </div>

        </section>
    )
}

export default AboutUsSection7