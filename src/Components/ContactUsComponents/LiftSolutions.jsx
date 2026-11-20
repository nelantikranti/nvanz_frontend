import { contactUsContent } from "../../Content/contactusContent"

const LiftSolutions=()=>{
    return(
                <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[50px]">

                    <div className="mx-auto w-[90%] ">
                        <p className="text-[70px] font-bebas text-[#141210] leading-none ">{contactUsContent?.liftSolutions?.heading}</p>

<p className="text-[19px] font-inter text-[#3A352D] mt-[20px]">{contactUsContent?.liftSolutions?.desc}</p>


<div className="mt-[20px] flex gap-[10px] flex-wrap justify-between">
    {
        contactUsContent?.liftSolutions?.point?.map((point,index)=>(
   <span key={index} className="px-[20px] py-[5px] inline-block border-[2px] border-[#B8860B] text-[16px] font-bold text-[#141210] rounded-full">{point}</span>
        ))
    }

</div>



                    </div>

                </div>
    )
}

export default LiftSolutions