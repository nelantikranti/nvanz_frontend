

const BannerSection=({content})=>{

    return(
        <div className="relative min-h-[320px] overflow-hidden bg-[#141210] sm:min-h-[360px] lg:min-h-[400px]">
            <div
                className="absolute inset-0 bg-[radial-gradient(50%_50%_at_75%_40%,rgba(233,166,15,0.35)_0%,rgba(233,166,15,0)_100%)]"
                aria-hidden="true"
            />

           <div className="mx-auto flex min-h-[320px] w-[90%] max-w-7xl flex-col justify-center py-10 sm:min-h-[360px] sm:py-12 lg:min-h-[400px] lg:py-[50px]">

            <span className="inline-block w-fit max-w-full rounded-full border-2 border-[#E9A60F] px-3 py-1 font-bebas text-[10px] font-bold text-[#E9A60F] sm:text-[11px]">{content?.capsuleText}</span>

            

<p
  className="
    m-0
    p-0
    leading-none
    break-words
    text-[clamp(3.5rem,11vw,10.625rem)]
    font-bebas
    text-transparent
    leading-[0.9]
    [-webkit-text-stroke:1.5px_#E9A60F]
    bg-[linear-gradient(110deg,transparent_35%,#E9A60F_45%,#FFF2C2_50%,#E9A60F_55%,transparent_65%)]
    bg-[length:250%_100%]
    bg-clip-text
    animate-text-flash
  "
>
  {content?.heading}
</p>
<p className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-[#D8D2C6] sm:mt-5 sm:text-lg">{content?.desc}</p>

{/* <div className="mt-[40px]">

    <Button borderColor = "#E9A60F" bgColor="#E9A60F"
  textColor="#141210"
  hoverBgColor="#FFFFFF"
  hoverTextColor="#141210" text="Choose a category "/>

</div> */}

           </div>
        </div>
    )
}

export default BannerSection