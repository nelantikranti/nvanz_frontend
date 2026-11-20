import Button from "../Buttons/Button"



const ContactUsHeroSection=()=>{

    const data=[
        "✓ Free site visit",
        "✓ Clear quote",
        "✓ Open 24 hours, Monday to Sunday",
        "✓ Service response within 24 hours"
    ]
    return(
        <div className="relative flex min-h-[calc(100svh-5rem)] w-full py-[50px]  flex-col overflow-hidden bg-cover bg-no-repeat bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)]">

            <div className="w-[90%] mx-auto">
                <div className="flex items-center justify-center">
                    <button className="px-[10px] py-[5px] border-[2px] border-[#E9A60F] text-[#E9A60F] font-inter font-bold text-[11px] rounded-full">CONTACT US</button>
                </div>

                <p className="text-[92px] font-bebas text-[#FFFFFF] leading-none text-center mx-auto mt-[10px] w-[80%]">CONTACT NVANZ ELEVATORS: YOUR PREMIUM LIFT PARTNER </p>

                <p className="text-[19px] font-inter text-[#D8D2C6] text-center w-[60%] mx-auto mt-[50px]">Planning a home lift, office lift, or lift repair? Tell us what you need. We will visit your site for free and give you a clear quote.</p>


                <div className="mt-[50px] flex flex-col justify-center gap-[10px] md:flex-row md:gap-[20px]">
 <Button borderColor = "#E9A60F" bgColor="#E9A60F"
  textColor="#141210"
  
  hoverBgColor="#FFFFFF"
  hoverTextColor="#" text="Call Now for a Free Site Visit"/>

<Button  borderColor = "#FFFFFF" 
  textColor="#FFFFFF"
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210" text="Chat on WhatsApp"/>
   


</div>


                <div className="flex justify-center gap-[20px] mt-[50px]">
                    {
                        data?.map((data,index)=>(
                            <span key={index} className="inline-block text-[13px] px-[20px] py-[5px] rounded-full border-[1px] border-[#E9A60F] text-white">{data}</span>
                        ))
                    }
                   
                </div>
            </div>

        </div>
    )
}

export default ContactUsHeroSection