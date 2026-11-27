
import images from "../../assets/Images/index.js";
import aboutUsContent from "../../Content/aboutUsContent.js";
import AnimatedImageCard from "../AnimatedImageCard.jsx";
import Button from "../Buttons/Button.jsx";
import { useNavigate } from "react-router-dom";
const AboutUsHeroSection = () => {

    const navigate = useNavigate();

    return(
        <div className="relative h-[calc(100svh-5rem)] w-full overflow-hidden bg-black ">
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 75% 45%, rgba(225, 159, 13, 0.35) 0%, rgba(233, 166, 15, 0) 100%)",
                }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                <span className="w-full select-none whitespace-nowrap text-center text-[min(520px,40vw)] font-[400] leading-none text-white/5 font-bebas">
                    NVANZ
                </span>
            </div>
            <div className="relative z-10 box-border h-full py-4 md:py-8">
                <div className="mx-auto flex h-full w-[90%] flex-col justify-center gap-6 md:flex-row md:justify-between md:gap-10">
                   
                   
                    <div className="min-w-0 md:flex-1">
                        <span className="font-inter inline-block font-[700] text-[12px] text-[#E9A60F] px-[10px] py-[3px] border-[1px] border-[#E9A60F] rounded-full">
                    {aboutUsContent?.hero?.subHeading}
                </span>
            <h1 className="font-bebas text-[clamp(52px,7vw,104px)] leading-[1] text-white mt-[20px]">
  {aboutUsContent?.hero?.heading}<br />
  <span className="text-[#E9A60F]">{aboutUsContent?.hero?.highlightedHeading}</span>


</h1>

<p className="text-[clamp(14px,1.3vw,19px)] font-inter text-[#D8D2C6] mt-[24px] w-full max-w-[520px]">{aboutUsContent?.hero?.description}</p>


<div className="mt-[30px] flex flex-col gap-[10px] md:flex-row md:gap-[20px]">
 <Button onClick={() => {
    window.open(
      "https://wa.me/918978039911?text=Hello%2C%20I%20am%20interested%20in%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  }}
  
  borderColor = "#FFFFFF" bgColor="#FFFFFF"
  textColor="#141210"
  hoverBgColor="#E9A60F"
  hoverTextColor="#" text={aboutUsContent?.hero?.btnText1}/>

<Button  onClick={() => navigate("/products")}  borderColor = "#FFFFFF" 
  textColor="#FFFFFF"
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210" text={aboutUsContent?.hero?.btnText2}/>
   

</div>

                    </div>


                    {/* <div className=" min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-[33px] md:h-full md:max-h-full md:shrink-0">
                        <img src={images.aboutUsHeroRight} alt="About Us" className="block h-auto max-h-[28vh] w-[380px] max-w-full rounded-[33px]  md:h-full md:max-h-full" />

                    </div> */}

                    {/* <AnimatedImageCard src={images.aboutUsHeroRight}
  alt="Modern elevator"
  borderRadius = "10px"
  width="380px"
  height="100%" /> */}

  <div>
     <video
        src={images?.aboutUsHeroSectionVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-[380px] h-full object-cover rounded-[20px] border-[#E9A60F] border-[2px]  transition-transform
        duration-700
        ease-in-out
        hover:-translate-y-3 "
        aria-label="NVANZ luxury elevator showcase video"
    />

  </div>
   


  {/* <video src={}/> */}
                </div>

                <div>

                </div>
                
            </div>
        </div>
    )
}
export default AboutUsHeroSection