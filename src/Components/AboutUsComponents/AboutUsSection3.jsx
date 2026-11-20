import aboutUsContent from "../../Content/aboutUsContent"
const AboutUsSection3 = () => {
    return(
        <section className="bg-[#141210] py-10 sm:py-14 lg:py-16">
            <h2 className="px-4 text-center font-bebas text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.9] text-white sm:px-0">
                {aboutUsContent.section3.heading}
            </h2>
            <div className="mx-auto mt-6 grid w-[90%] grid-cols-1 gap-4 sm:gap-5 lg:mt-8 lg:grid-cols-2 lg:gap-6">

{
    aboutUsContent.section3.cards.map((data,index)=>(

         <article key={index} data-about-card-reveal={index % 2 === 0 ? "left" : "right"} className="min-w-0 rounded-2xl border border-[#E9A60F] bg-[#1E1B17] p-5 transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] motion-reduce:transition-none motion-reduce:translate-y-0 sm:p-6 lg:p-8">
             <div aria-hidden="true" className="h-1 w-11 rounded-full bg-[#E9A60F]" />
 <h3 className="mt-4 font-bebas text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-[#E9A60F]">{data?.heading}</h3>

 <p className="mt-3 font-inter text-sm leading-relaxed text-[#E6E0D4] sm:mt-4 sm:text-base">{data?.description}</p>
                </article>

    ))
}
               

                </div> 
        </section>
        )
}

export default AboutUsSection3