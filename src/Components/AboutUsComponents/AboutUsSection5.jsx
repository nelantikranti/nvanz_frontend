
import aboutUsContent from "../../Content/aboutUsContent"

const AboutUsSection5=()=>{

    return(
        <section className="bg-[#141210] py-10 sm:py-14 lg:py-16">
            <div className="mx-auto grid w-[min(90%,1200px)] grid-cols-1 gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">

                <div className="min-w-0 lg:pt-2">
                    <h2 className="font-bebas text-[clamp(2.75rem,7vw,5rem)] leading-[0.9] text-white">
  {aboutUsContent?.section5.heading}
  <br />
  <span className="text-[#E9A60F]">
    {aboutUsContent?.section5?.hightlightHeading}
  </span>
</h2>

                </div>

                <div className="min-w-0">{
                    aboutUsContent?.section5?.details?.map((details,index)=>(
                         <div
    key={index}
    className="group relative overflow-hidden border-t-2 border-t-[#4A4235] py-5 sm:py-6"
  >
    <span
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#E9A60F]/20 via-[#E9A60F]/10 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
      aria-hidden="true"
    />
    <div className="relative flex min-w-0 items-start gap-4 transition-transform duration-500 ease-out group-hover:translate-x-2 sm:gap-5 sm:group-hover:translate-x-3 motion-reduce:transition-none">
      <div className="shrink-0">
        <p className="font-bebas text-4xl leading-none text-[#E9A60F] sm:text-5xl lg:text-[56px]">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="min-w-0">
        <p className="font-inter text-base font-bold leading-snug text-white sm:text-lg lg:text-xl">
          {details?.heading}
        </p>

        {details?.description?.map((des, index) => (
          <p
            key={index}
            className="mt-1 font-inter text-sm leading-relaxed text-[#C9C2B4] sm:text-base"
          >
            {des}
          </p>
        ))}
      </div>
    </div>
  </div>
                    ))
                    }
                    
                </div>


            </div>

        </section>
    )
}

export default AboutUsSection5