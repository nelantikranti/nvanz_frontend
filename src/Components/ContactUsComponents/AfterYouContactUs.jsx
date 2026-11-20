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

const AfterYouContactUs=()=>{

   


    return(
        <div style={{background:"linear-gradient(135deg, #1C150D 0%, #0C0A08 50%, #2F220B 100%)"}} className="py-[50px] ">
 <div className="mx-auto w-[90%]">
            <p className="text-white font-bebas text-[70px] leading-none">WHAT HAPPENS AFTER YOU CONTACT US?</p>

             <ScrollTimeline steps={steps} className="mt-6" />

               </div>

                

        </div>
    )
}

export default AfterYouContactUs