
import { contactUsContent } from "../../Content/contactusContent"
import IndiaMap from "../IndiaMap"
const ServingLocation = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1C150D 0%, #0C0A08 50%, #2F220B 100%)",
      }}
      className="w-full overflow-hidden py-[35px] sm:py-[40px] lg:py-[50px]"
    >
      <div className="mx-auto flex w-[92%] flex-col items-center gap-[30px] sm:w-[90%] md:gap-[35px] lg:flex-row lg:gap-[40px]">

        <div className="w-full lg:flex-[0.5]">
          <p className="font-bebas text-[44px] leading-[0.95] text-[#FFFFFF] sm:text-[52px] md:text-[58px]">
            {contactUsContent?.servingLocation?.heading}
          </p>

          <p className="mt-[20px] font-inter text-[14px] leading-[1.7] text-[#D8D2C6] sm:mt-[30px] sm:text-[16px] md:mt-[40px] md:text-[17px] lg:mt-[50px] lg:text-[18px]">
            {contactUsContent?.servingLocation?.desc}
          </p>
        </div>

        <div className="flex w-full items-center justify-center lg:flex-[0.5]">
          <div className="w-full flex justify-center items-center max-w-[500px] lg:max-w-none">
            <IndiaMap />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServingLocation;