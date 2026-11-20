import { contactUsContent } from "../../Content/contactusContent"
import Button from "../Buttons/Button"


const CustomerSays=()=>{


    return(
        <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[50px]">

            <div className="mx-auto w-[90%]">

                <p className="text-[70px] font-bold font-bebad text-[#141210]">{contactUsContent?.reviews?.heading}</p>


                <div className="mt-[50px] flex gap-[20px] jsutify-between">

                    {
                        contactUsContent?.reviews?.reviews?.map((data,index)=>(
                                    <div key={index} className="p-[20px] rounded-[20px] bg-[#FFFFFF] w-[400px] h-[330px] border-[1px] border-[#E6DFCF] flex flex-col" >
                          <div className="flex items-center gap-[5px]">
    {[1, 2, 3, 4, 5].map((star) => (
        <span
            key={star}
            className="text-[#E9A60F] text-[24px]"
        >
            ★
        </span>
    ))}
</div>
<p className="text-[15px] font-inter text-[#3A352D] w-[80%] mt-[20px]">{data?.review}</p>

<p className="text-[13px] font-inter font-bold text-[#141210] mt-auto">{data?.name} <sapn className='font-400 text-[#3A352D] '>{data?.reviewFrom}</sapn></p>
                    </div>
                        ))
                    }
                   
                </div>


<div className="mt-[50px] flex gap-[20px] items-center">
    
     <Button borderColor = "#141210" bgColor="#141210"
  textColor="#FFFFFF"
  
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210" text="See more reviews on Google"/>     <p className="text-[10px] font-inter font-bold text-[#B8860B] text-center ">{contactUsContent?.reviews?.belowText}</p>
</div>

              

            </div>

        </div>
    )
}

export default CustomerSays