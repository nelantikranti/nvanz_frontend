import { contactUsContent } from "../../Content/contactusContent"


const TalkToUsSection = () => {
  return (
    <div className="w-full bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)] py-[35px] sm:py-[45px] lg:py-[50px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Heading */}
        <p className="font-bebas text-[46px] leading-[0.95] text-[#FFFFFF] sm:text-[58px] md:text-[68px] lg:text-[78px]">
          {contactUsContent?.talktoUs?.heading}
        </p>

        {/* Description */}
        <p className="mt-[12px] max-w-[750px] font-inter text-[13px] leading-[1.7] text-[#D8D2C6] sm:mt-[15px] sm:text-[15px] md:text-[16px] lg:mt-[20px] lg:text-[18px]">
          {contactUsContent?.talktoUs?.desc}
        </p>

        {/* Cards */}
        <div className="mt-[25px] grid grid-cols-1 gap-[15px] sm:mt-[30px] sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-3 lg:gap-[20px]">

          {contactUsContent?.talktoUs?.cardDetails?.map((data, index) => (
            <div
              key={index}
              className="flex min-h-[165px] flex-col gap-[10px] rounded-[10px] border border-[#E9A60F66] bg-[#1E1B17] p-[18px] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#E9A60F] hover:shadow-[0_20px_55px_rgba(233,166,15,0.22),0_0_90px_rgba(233,166,15,0.16)] sm:min-h-[180px] sm:p-[20px] lg:min-h-[190px]"
            >

              {/* Icon */}
              <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#E9A60F] sm:size-[44px]">
                <div className="size-[10px] rounded-full bg-[#E9A60F] sm:size-[12px]" />
              </div>

              {/* Card Heading */}
              <p className="font-bebas text-[25px] leading-tight text-[#E9A60F] sm:text-[27px] md:text-[28px] lg:text-[30px]">
                {data?.heading}
              </p>

              {/* Card Description */}
              <p className="w-full font-inter text-[13px] leading-[1.6] text-[#E6E0D4] sm:w-[90%] sm:text-[14px] lg:w-[80%] lg:text-[15px]">
                {data?.info}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default TalkToUsSection;
