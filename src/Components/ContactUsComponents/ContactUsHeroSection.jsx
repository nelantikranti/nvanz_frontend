import Button from "../Buttons/Button"



// const ContactUsHeroSection=()=>{

//     const data=[
//         "✓ Free site visit",
//         "✓ Clear quote",
//         "✓ Open 24 hours, Monday to Sunday",
//         "✓ Service response within 24 hours"
//     ]
//     return(
//         <div className="relative flex min-h-[calc(100svh-5rem)] w-full py-[50px]  flex-col overflow-hidden bg-cover bg-no-repeat bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)]">

//             <div className="w-[90%] mx-auto">
//                 <div className="flex items-center justify-center">
//                     <button className="px-[10px] py-[5px] border-[2px] border-[#E9A60F] text-[#E9A60F] font-inter font-bold text-[11px] rounded-full">CONTACT US</button>
//                 </div>

//                 <p className="text-[92px] font-bebas text-[#FFFFFF] leading-none text-center mx-auto mt-[10px] w-[80%]">CONTACT NVANZ ELEVATORS: YOUR PREMIUM LIFT PARTNER </p>

//                 <p className="text-[19px] font-inter text-[#D8D2C6] text-center w-[60%] mx-auto mt-[50px]">Planning a home lift, office lift, or lift repair? Tell us what you need. We will visit your site for free and give you a clear quote.</p>


//                 <div className="mt-[50px] flex flex-col justify-center gap-[10px] md:flex-row md:gap-[20px]">
//  <Button borderColor = "#E9A60F" bgColor="#E9A60F"
//   textColor="#141210"
  
//   hoverBgColor="#FFFFFF"
//   hoverTextColor="#" text="Call Now for a Free Site Visit"/>

// <Button  borderColor = "#FFFFFF" 
//   textColor="#FFFFFF"
//   hoverBgColor="#FFFFFF"
//   hoverTextColor="#141210" text="Chat on WhatsApp"/>
   


// </div>


//                 <div className="flex justify-center gap-[20px] mt-[50px]">
//                     {
//                         data?.map((data,index)=>(
//                             <span key={index} className="inline-block text-[13px] px-[20px] py-[5px] rounded-full border-[1px] border-[#E9A60F] text-white">{data}</span>
//                         ))
//                     }
                   
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ContactUsHeroSection





const ContactUsHeroSection = () => {
  const data = [
    "✓ Free site visit",
    "✓ Clear quote",
    "✓ Open 24 hours, Monday to Sunday",
    "✓ Service response within 24 hours",
  ];

  return (
    <div className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-cover bg-no-repeat bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)] py-[35px] sm:py-[45px] lg:py-[50px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Label */}
        <div className="flex items-center justify-center">
          <button className="rounded-full border-[2px] border-[#E9A60F] px-[10px] py-[5px] font-inter text-[10px] font-bold text-[#E9A60F] sm:text-[11px]">
            CONTACT US
          </button>
        </div>

        {/* Heading */}
        <p className="mx-auto mt-[15px] w-full text-center font-bebas leading-[0.95] text-white text-[42px] sm:text-[56px] md:w-[90%] md:text-[68px] lg:mt-[10px] lg:w-[80%] lg:text-[92px]">
          CONTACT NVANZ ELEVATORS: YOUR PREMIUM LIFT PARTNER
        </p>

        {/* Description */}
        <p className="mx-auto mt-[25px] w-full text-center font-inter text-[14px] leading-[1.7] text-[#D8D2C6] sm:mt-[30px] sm:w-[90%] sm:text-[16px] md:w-[75%] md:text-[17px] lg:mt-[50px] lg:w-[60%] lg:text-[19px]">
          Planning a home lift, office lift, or lift repair? Tell us what you need. We will visit your site for free and give you a clear quote.
        </p>

        {/* CTA Buttons */}
        <div className="mt-[30px] flex flex-col items-center justify-center gap-[12px] sm:mt-[35px] sm:flex-row sm:gap-[15px] lg:mt-[50px] lg:gap-[20px]">
          <Button
            borderColor="#E9A60F"
            bgColor="#E9A60F"
            textColor="#141210"
            hoverBgColor="#FFFFFF"
            hoverTextColor="#141210"
            text="Call Now for a Free Site Visit"
            onClick={() => {
        window.location.href = "tel:+918978039911";
    }}
          />

          <Button
            borderColor="#FFFFFF"
            textColor="#FFFFFF"
            hoverBgColor="#FFFFFF"
            hoverTextColor="#141210"
            text="Chat on WhatsApp" 
            onClick={() => {
        window.open("https://wa.me/918978039911", "_blank");
    }}
          />
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-[35px] flex w-full flex-wrap items-center justify-center gap-[10px] sm:mt-[40px] sm:gap-[12px] lg:mt-[50px] lg:gap-[20px]">
          {data.map((item, index) => (
            <span
              key={index}
              className="inline-block rounded-full border border-[#E9A60F] px-[12px] py-[6px] text-center font-inter text-[11px] text-white sm:px-[15px] sm:text-[12px] md:px-[18px] md:text-[13px] lg:px-[20px] lg:py-[5px]"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactUsHeroSection;
