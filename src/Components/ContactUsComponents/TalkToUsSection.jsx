import { contactUsContent } from "../../Content/contactusContent"

const TalkToUsSection=()=>{

    return(
       <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)] py-[50px] ">

        <div className="w-[90%] mx-auto">

             <p className="text-[#FFFFFF] font-bebas text-[78px] leading-none"> {contactUsContent?.talktoUs?.heading}</p>

        <p className="text-[18px] font-inter text-[#D8D2C6] mt-[10px] mt-[20px]">{contactUsContent?.talktoUs?.desc}</p>

        <div className="flex flex-wrap gap-[20px] mt-[30px]">

            {
                contactUsContent?.talktoUs?.cardDetails?.map((data,index)=>(
                          <div key={index} className="w-[400px] min-h-[190px] rounded-[10px] flex flex-col gap-[10px] border-[#E9A60F66] border-[1px] p-[20px] bg-[#1E1B17]  transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]">

                            <div className="w-[44px]  h-[44px] rounded-full border-[2px] border-[#E9A60F] rounded-full flex items-center justify-center">

                                <div className="bg-[#E9A60F] rounded-full w-[12px] h-[12px]"/>
                                </div>

                <p className="text-[#E9A60F] font-bebad text-[30px]">{data?.heading}</p>
                <p className="text-[15px] font-inter text-[#E6E0D4] w-[80%]">{data?.info}</p>

            </div>
                ))
            }

           


        </div>

        </div>

       

</div>
    )
}


export default TalkToUsSection