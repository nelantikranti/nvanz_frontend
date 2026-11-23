
import images from "../../assets/Images"
import { installedLifts } from "../../Content/homeContent"

const projectPhotos = Array.from({ length: 6 }, (_, index) => index + 1)

const HomePageSection5=()=>{
    return(
        <div
      className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-10 sm:py-12 lg:py-[50px]"
    >

<div className="mx-auto w-[min(90%,1280px)]">
<p className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] text-white">{installedLifts?.heading}</p>

        <p className="mt-4 w-full max-w-[60rem] font-inter text-base leading-relaxed text-[#D8D2C6] sm:text-lg">{installedLifts?.desc}</p>


<div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {projectPhotos.map((photoNumber) => (
        <div
            key={photoNumber}
            tabIndex={0}
            role="group"
            aria-label={`Project photo ${photoNumber}, area name to be added. Hover or focus to open the elevator doors.`}
            className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-[2px] border-dashed border-[#E9A60F8C] outline-none focus-visible:ring-2 focus-visible:ring-[#E9A60F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0A08] transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#E9A60F] hover:shadow-[0_25px_70px_rgba(233,166,15,0.40),0_0_120px_rgba(233,166,15,0.30)]"
        >
            <p className="text-center font-inter text-sm text-[#D8D2C6] sm:text-base">
                Project photo {photoNumber}
            </p>
            <p className="mt-1 text-center font-inter text-xs text-[#E9A60F] sm:text-sm">
                Area name - to be added
            </p>

            {/* <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden rounded-l-2xl bg-[#E9A60F] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full group-focus:-translate-x-full motion-reduce:transition-none sm:duration-900"
            >
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 z-10 w-1/2 overflow-hidden rounded-r-2xl bg-[#E9A60F] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-focus:translate-x-full motion-reduce:transition-none sm:duration-900"
            >
            </div> */}


{/* Left Elevator Door */}
<div
    aria-hidden="true"
    className="absolute inset-y-0 left-0 z-10 w-[calc(50%+2px)] overflow-hidden rounded-l-2xl transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full group-focus:-translate-x-full motion-reduce:transition-none sm:duration-900"
>
    <img
        src={images?.leftDoor2}
        alt=""
        className="block h-full w-full object-cover object-right"
    />
</div>

{/* Right Elevator Door */}
<div
    aria-hidden="true"
    className="absolute inset-y-0 right-0 z-10 w-[calc(50%+2px)] overflow-hidden rounded-r-2xl transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-focus:translate-x-full motion-reduce:transition-none sm:duration-900"
>
    <img
        src={images?.rightDoor2}
        alt=""
        className="block h-full w-full object-cover object-left"
    />
</div>

        </div>
    ))}
</div>



<div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">


    {
        installedLifts?.cardDetails?.map((data,indx)=>(
             <article key={indx} className="flex min-h-[170px] flex-col rounded-2xl border border-[#E9A60F66] bg-[#0000004D] p-5 transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] motion-reduce:transition-none sm:p-6">
<p aria-hidden="true" className="font-bebas text-5xl leading-none text-[#E9A60F]">“</p>

<p className="mt-2 font-inter text-sm leading-relaxed text-[#E6E0D4] sm:text-base">{data?.customerReview}</p>

<p className="mt-auto pt-4 font-inter text-xs leading-relaxed text-[#E9A60F] sm:text-sm">{data?.customerName}</p>
    </article>
            
        ))
    }

   

</div>

<p className="mt-5 w-full max-w-[56rem] font-inter text-base leading-relaxed text-[#E6E0D4] sm:text-lg">Explore our completed projects to see how elevator solutions can become part of modern residential architecture.</p>
</div>
        
    </div>
    )
}

export default HomePageSection5