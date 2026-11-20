
import images from "../../assets/Images/index.js";
import AnimatedImageCard from "../AnimatedImageCard.jsx";
import Button from "../Buttons/Button.jsx";
const AboutUsHeroSection = () => {

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
                    NVANZ ELEVATORS | A MODERN VANTAGE
                </span>
            <p className="font-bebas text-[clamp(52px,7vw,104px)] leading-[1] text-white mt-[20px]">
  A Modern Elevator <br />
  Company in <br />
  <span className="text-[#E9A60F]">Hyderabad</span>


</p>

<p className="text-[clamp(14px,1.3vw,19px)] font-inter text-[#D8D2C6] mt-[24px] w-full max-w-[520px]">We help homeowners and residential projects explore modern elevator solutions designed around their building, space and everyday needs.</p>


<div className="mt-[30px] flex flex-col gap-[10px] md:flex-row md:gap-[20px]">
 <Button borderColor = "#FFFFFF" bgColor="#FFFFFF"
  textColor="#141210"
  hoverBgColor="#E9A60F"
  hoverTextColor="#" text="Discuss Your Elevator Project"/>

<Button  borderColor = "#FFFFFF" 
  textColor="#FFFFFF"
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210" text="Explore Our Elevator Solutions"/>
   

</div>

                    </div>


                    {/* <div className=" min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-[33px] md:h-full md:max-h-full md:shrink-0">
                        <img src={images.aboutUsHeroRight} alt="About Us" className="block h-auto max-h-[28vh] w-[380px] max-w-full rounded-[33px]  md:h-full md:max-h-full" />

                    </div> */}

                    <AnimatedImageCard src={images.aboutUsHeroRight}
  alt="Modern elevator"
  borderRadius = "10px"
  width="380px"
  height="100%" />
                </div>

                <div>

                </div>
                
            </div>
        </div>
    )
}
export default AboutUsHeroSection