import { contactUsContent } from "../../Content/contactusContent"

const LiftSolutions = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[35px] sm:py-[40px] lg:py-[50px]">
      <div className="mx-auto w-[92%] sm:w-[90%]">

        <p className="font-bebas text-[44px] leading-[0.95] text-[#141210] sm:text-[56px] md:text-[64px] lg:text-[70px]">
          {contactUsContent?.liftSolutions?.heading}
        </p>

        <p className="mt-[15px] max-w-[1000px] font-inter text-[14px] leading-[1.6] text-[#3A352D] sm:mt-[18px] sm:text-[16px] md:text-[17px] lg:mt-[20px] lg:text-[19px]">
          {contactUsContent?.liftSolutions?.desc}
        </p>

        <div className="mt-[20px] flex flex-wrap items-center justify-start gap-[10px] sm:mt-[24px] sm:gap-[12px] lg:mt-[25px]">
          {contactUsContent?.liftSolutions?.point?.map((point, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border-[1.5px] border-[#B8860B] px-[14px] py-[7px] font-inter text-[12px] font-bold leading-tight text-[#141210] transition-colors duration-300 hover:bg-[#B8860B]/10 sm:px-[17px] sm:py-[8px] sm:text-[14px] md:px-[20px] md:text-[15px] lg:text-[16px]"
            >
              {point}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LiftSolutions;