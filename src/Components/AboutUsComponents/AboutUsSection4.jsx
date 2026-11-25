import aboutUsContent from "../../Content/aboutUsContent"
import Button from "../Buttons/Button"
import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
 
const AboutUsSection4 = () => {
 const navigate = useNavigate();
    return(

        <section className="bg-[#121212] py-10 sm:py-14 lg:py-16">

            <div className="mx-auto w-[min(90%,1280px)]">
 <h2 className="text-center font-bebas text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] text-white">
    {aboutUsContent.section4.heading}{" "}
    <span className="text-[#E9A60F]">{aboutUsContent?.section4?.highlightHeding}</span>{" "}
    {aboutUsContent?.section4?.resHeading} 
 </h2>
 <p className="mx-auto mt-3 w-full max-w-[60rem] text-center font-inter text-base leading-relaxed text-[#D8D2C6] sm:text-lg">{aboutUsContent.section4.subHeading}</p>

<div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
    {
        aboutUsContent.section4.cards.map((data,index)=>( <article key={index} className="flex min-w-0 flex-col rounded-2xl border border-b-4 border-[#E9A60F66] bg-[#25211c] p-5 transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] motion-reduce:transition-none sm:p-6" >
 <p className="font-bebas text-4xl leading-none text-[#E9A60F] sm:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </p>
    <h3 className="mt-3 font-bebas text-[clamp(1.75rem,3vw,2.125rem)] leading-[0.95] text-white">{data?.heading} </h3>

    <p className="mt-3 font-inter text-sm font-bold text-[#E9A60F] sm:text-base">{data?.subHeading}</p>
    <p className="mt-2 font-inter text-sm leading-relaxed text-[#D8D2C6]">{data?.description}</p>
<p
  onClick={() => navigate(data?.link)}
  className="
    mt-auto pt-5
    inline-flex w-fit items-center gap-2
    font-inter text-sm font-bold leading-snug
    text-white cursor-pointer
    transition-colors duration-300 ease-in-out
    hover:text-[#E9A60F]
    group
  "
>
  {data?.belowText}

 <FaArrowRightLong/>
</p>
 </article>))
    }
   

</div>
 

 <p className="mx-auto mt-7 w-full max-w-[56rem] text-center font-inter text-base leading-relaxed text-[#E6E0D4] sm:text-lg">{aboutUsContent.section4.belowDescription}</p>

 <div className="mt-5 flex justify-center">
  {/* <button className="bg-[#E9A60F] text-[#141210] font-inter text-[16px] w-[320px] h-[56px] rounded-full  mt-[10px] font-bold">
    {aboutUsContent?.section4.buttonText}
  </button> */}
 <Button borderColor = "#E9A60F" bgColor="#E9A60F"
  textColor="#141210" onClick={() => navigate("/contact-us")} 
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210"  text={aboutUsContent?.section4.buttonText}
  className="max-w-full px-6 text-sm sm:px-10 sm:text-base"/>
</div>
            </div>

        </section>
    )
}

export default AboutUsSection4