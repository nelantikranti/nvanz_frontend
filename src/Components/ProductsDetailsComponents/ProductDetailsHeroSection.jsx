import { useNavigate } from "react-router-dom";
import images from "../../assets/Images"
import Button from "../Buttons/Button"

// import AnimatedImageCard from '../AnimatedImageCard'



const ProductDetailsHeroSection = ({hero}) => {

    const navigate=useNavigate()

    const spanDetails = [
        "250–630 kg residential capacity",
        "Compact, low-noise power unit",
        "Overload protection and light curtain",
        "Emergency lowering and emergency communication, as engineered"
    ];

    return (
        <div className="
            relative isolate
            min-h-[calc(100svh-5rem)]
            overflow-hidden
            bg-[#141210]
            bg-[radial-gradient(ellipse_at_80%_45%,rgba(233,166,15,0.42)_0%,rgba(233,166,15,0.2)_35%,rgba(20,18,16,0)_75%)]
        ">

            <div className="relative z-10 mx-auto flex w-[90%] flex-col items-stretch gap-8 py-8 sm:py-10 lg:flex-row lg:items-center lg:gap-0 lg:py-[50px]">

                <div className="w-full min-w-0 flex-1 lg:w-auto">

                    <span className="inline-block max-w-full break-words rounded-full border border-[#E9A60F] px-[10px] py-[3px] font-inter text-[10px] font-bold text-[#E9A60F] sm:text-[11px]">
                        {hero?.subtitle}
                    </span>

                    <p className="mt-[10px] max-w-full break-words font-bebas text-[clamp(2.5rem,7vw,66px)] leading-none text-white lg:text-[66px]">
                       {hero?.title}
                    </p>

                    <p className="mt-5 font-inter text-[15px] text-[#D8D2C6] sm:text-[16px] lg:mt-[30px] lg:text-[17px]">
                 {hero?.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3 lg:mt-[20px] lg:gap-[20px]">
                        {hero?.points?.map((point, index) => (
                            <span
                                key={index}
                                className="inline-block max-w-full rounded-full border border-[#E9A60F] px-[10px] py-[3px] font-inter text-[12px] text-white lg:text-[13px]"
                            >
                                {point}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-[10px] md:flex-row md:flex-wrap md:gap-[20px] lg:mt-[30px]">

                        <Button  onClick={() =>navigate('/contact-us')}
                            borderColor="#FFFFFF"
                            bgColor="#FFFFFF"
                            textColor="#141210"
                            hoverBgColor="#E9A60F"
                            text="Discuss Your Elevator Project"
                            className="max-w-full px-4 text-sm sm:px-6 sm:text-base lg:px-10"
                        />

                        <Button     onClick={() =>navigate('/contact-us')}
                            borderColor="#FFFFFF"
                            textColor="#FFFFFF"
                            hoverBgColor="#FFFFFF"
                            hoverTextColor="#141210"
                            text="Explore Our Elevator Solutions"
                            className="max-w-full px-4 text-sm sm:px-6 sm:text-base lg:px-10"
                        />

                    </div>

                </div>

                
<div className="flex w-full min-w-0 flex-1 justify-center lg:w-auto">

    <div className="animate-elevator-bounce relative isolate h-[224px] w-[140px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] motion-reduce:animate-none sm:h-[256px] sm:w-[160px] lg:h-[320px] lg:w-[200px]">

    {/* Elevator interior */}
    <img
        src={hero?.image}
        alt="Signature 1101 home elevator"
        className="absolute inset-0 z-0 h-full w-full rounded-[10px] border-[2px] border-[#E9A60F] object-cover"
    />

    

    {/* Left door */}
    <div className="animate-elevator-door-left absolute inset-y-0 left-0 z-10 w-[52.5%] overflow-hidden rounded-l-[10px] motion-reduce:animate-none lg:w-[105px]">

        <img
            src={images?.leftDoor}
            alt=""
            className="h-full w-full rounded-l-[10px] object-cover"
            aria-hidden="true"
        />

    </div>

    {/* Right door */}
    <div className="animate-elevator-door-right absolute inset-y-0 right-0 z-10 w-[55%] overflow-hidden rounded-r-[10px] motion-reduce:animate-none lg:w-[110px]">

        <img
            src={images?.rightDoor}
            alt=""
            className="h-full w-full rounded-r-[10px] object-cover"
            aria-hidden="true"
        />

    </div>

</div>

</div>


            </div>
        </div>
    );
};

export default ProductDetailsHeroSection;
