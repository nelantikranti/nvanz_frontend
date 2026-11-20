
import { contactUsContent } from "../../Content/contactusContent"
import IndiaMap from "../IndiaMap"
const ServingLocation=()=>{


    return(

        <div style={{background:"linear-gradient(135deg, #1C150D 0%, #0C0A08 50%, #2F220B 100%)"}} className="py-[50px]">
<div className="mx-auto w-[90%] flex  ">

    <div className="flex-[0.5]">
        <p className="text-[58px] font-bebas text-[#FFFFFF] leading-none">{contactUsContent?.servingLocation?.heading}</p>

        <p className="text-[#D8D2C6] font-inter text-[18px] mt-[50px]">{contactUsContent?.servingLocation?.desc}</p>

    </div>
    
    <div className="flex-[0.5] flex  justify-center items-center ">
<IndiaMap/>
    </div>

</div>
        </div>
    )
}

export default ServingLocation