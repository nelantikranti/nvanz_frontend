import aboutUsContent from "../../Content/aboutUsContent"
import Button from "../Buttons/Button"


const AboutUsSection8=()=>{
    return(
    
    <div
        className="relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:py-20"
        style={{
            background: "linear-gradient(180deg, #E9A60F 0%, #B8860B 100%)",
        }}
    >
<div
    className="pointer-events-none absolute -left-1/4 top-0 z-0 h-full w-[480px] skew-x-[-20deg] animate-section-flash bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl motion-reduce:animate-none"
    aria-hidden="true"
/>
<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
<p className="max-w-4xl font-bebas text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.92] text-[#141210]">{aboutUsContent?.section8?.heading}</p>

<p className="mt-5 max-w-3xl font-inter text-base leading-relaxed text-[#141210] sm:mt-6 sm:text-lg">{aboutUsContent?.section8?.description}</p>

<div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
        
        <Button
            borderColor="#141210"
            bgColor="#141210"
            textColor="#FFFFFF"
            hoverBgColor="#FFFFFF"
            hoverTextColor="#141210"
            text={aboutUsContent?.section8?.btnText}
            expandEffect={true}
            className="w-full max-w-full px-4 text-sm sm:w-auto sm:px-8 sm:text-base"
        />
        <Button
            text={aboutUsContent?.section8?.phno}
            className="w-full max-w-full px-4 text-sm sm:w-auto sm:px-8 sm:text-base"
        />

</div>
</div>
        </div>)
}

export default AboutUsSection8