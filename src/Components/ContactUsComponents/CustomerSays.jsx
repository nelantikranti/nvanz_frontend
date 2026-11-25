import { contactUsContent } from "../../Content/contactusContent"
import Button from "../Buttons/Button"


const CustomerSays = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[35px] sm:py-[40px] lg:py-[50px]">
      <div className="mx-auto w-[92%] sm:w-[90%]">

        <h2 className="font-bebas text-[46px] leading-[0.95] text-[#141210] sm:text-[56px] md:text-[64px] lg:text-[70px]">
          {contactUsContent?.reviews?.heading}
        </h2>

        <div className="mt-[25px] grid grid-cols-1 gap-[16px] sm:mt-[35px] sm:grid-cols-2 sm:gap-[20px] lg:mt-[50px] lg:grid-cols-3">

          {contactUsContent?.reviews?.reviews?.map((data, index) => (
            <div
              key={index}
              className="flex min-h-[260px] flex-col rounded-[16px] border border-[#E6DFCF] bg-[#FFFFFF] p-[18px] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(20,18,16,0.08)] sm:min-h-[290px] sm:p-[20px] lg:min-h-[330px] lg:rounded-[20px]"
            >
              <div className="flex items-center gap-[5px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-[21px] text-[#E9A60F] sm:text-[24px]"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-[18px] w-full font-inter text-[14px] leading-[1.7] text-[#3A352D] sm:mt-[20px] sm:text-[15px]">
                {data?.review}
              </p>

              <p className="mt-auto pt-[25px] font-inter text-[13px] font-bold text-[#141210]">
                {data?.name}{" "}
                <span className="font-normal text-[#3A352D]">
                  {data?.reviewFrom}
                </span>
              </p>
            </div>
          ))}

        </div>

        <div className="mt-[30px] flex flex-col items-start gap-[14px] sm:mt-[40px] sm:flex-row sm:items-center sm:gap-[20px] lg:mt-[50px]">
          <Button
            borderColor="#141210"
            bgColor="#141210"
            textColor="#FFFFFF"
            hoverBgColor="#FFFFFF"
            hoverTextColor="#141210"
            text="See more reviews on Google"
          />

          {/* <p className="text-left font-inter text-[10px] font-bold text-[#B8860B] sm:text-center">
            {contactUsContent?.reviews?.belowText}
          </p> */}
        </div>

      </div>
    </section>
  );
};

export default CustomerSays;