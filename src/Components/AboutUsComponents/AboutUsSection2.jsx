import aboutContent from '../../Content/aboutUsContent'
import images from '../../assets/Images'
import AnimatedImageCard from '../AnimatedImageCard'
const AboutUsSection2 = () => {
    return(
        <section className="bg-[#000000] py-10 sm:py-14 lg:py-20">

            <div className="mx-auto grid w-[min(90%,1200px)] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
<div className="min-w-0">
    <span className="inline-flex max-w-full rounded-full border border-[#B8860B] px-3 py-1 font-inter text-[11px] font-bold text-[#B8860B] sm:text-xs">
         {aboutContent?.section2?.spanHeading}
    </span>
    <h2 className="mt-4 font-bebas text-[clamp(3rem,8vw,5rem)] leading-[0.9] text-white">
        {aboutContent.section2.heading}{" "}
        <span className="text-[#E9A60F]">{aboutContent.section2.highlatedHeading}</span>
    </h2>

    {
        aboutContent.section2.points.map((point,index)=>{
            return(
                <p key={index} className="mt-4 max-w-[48rem] font-inter text-base leading-relaxed text-white sm:mt-5 sm:text-lg">
                    {point}
                </p>
            )
        })
    }
</div>

<div className="flex min-w-0 w-full justify-center lg:justify-end">
    <AnimatedImageCard
        src={images.aboutUsSection2}
        alt="NVANZ elevator logo and elevator illustration"
        width="100%"
        height="auto"
        className="aspect-[6/5] w-full max-w-[500px]"
    />

</div>
            </div>

        </section>
    )
}

export default AboutUsSection2