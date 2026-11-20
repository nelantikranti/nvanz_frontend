import { useEffect, useRef, useState } from "react"
import ScrollTimeline from "../ScrollTimeline"


// const steps = [
//     "YOU CALL OR FILL THE FORM.",
//     "WE VISIT YOUR SITE (FREE).",
//     "YOU GET A CLEAR QUOTE.",
//     "WE INSTALL AND SUPPORT YOU.",
   
// ]


const steps = [
    {
    heading:"YOU CALL OR FILL THE FORM.",
    desc:"Tell us what kind of lift you need.",
    },
     {
    heading:"WE VISIT YOUR SITE (FREE).",
    desc:"Our expert checks your space and understands your needs.",
    },
     {
    heading:"YOU GET A CLEAR QUOTE.",
    desc:"We explain the options in simple words.",
    },
     {
    heading:"WE INSTALL AND SUPPORT YOU.",
    desc:"Our team handles installation and stays with you for service.",
     }
   
]


const AfterYouContactUs = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1C150D 0%, #0C0A08 50%, #2F220B 100%)",
      }}
      className="w-full overflow-hidden py-[35px] sm:py-[45px] lg:py-[50px]"
    >
      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Heading */}
        <p className="font-bebas text-[44px] leading-[0.95] text-white sm:text-[56px] md:text-[66px] lg:text-[70px]">
          WHAT HAPPENS AFTER YOU CONTACT US?
        </p>

        {/* Timeline */}
        <div className="mt-[20px] sm:mt-[25px] lg:mt-[30px]">
          <ScrollTimeline steps={steps} />
        </div>

      </div>
    </section>
  );
};

export default AfterYouContactUs;
