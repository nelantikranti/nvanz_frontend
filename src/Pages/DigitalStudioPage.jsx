
import DigitalStudio from '../Components/DiitalStudio.jsx'

function DigitalStudioPage() {
  return (
     <div className="relative h-[calc(100svh-5rem)] w-full overflow-hidden bg-black flex items-center ">
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 75% 45%, rgba(225, 159, 13, 0.35) 0%, rgba(233, 166, 15, 0) 100%)",
                }}
              
            />

            <p className='mx-auto text-center 
    break-words
    text-[40px]
    md:text-[60px]
    lg:text-[80px]
    font-bebas
    text-transparent
    leading-[0.9]
    [-webkit-text-stroke:1.5px_#E9A60F]
    bg-[linear-gradient(110deg,transparent_35%,#E9A60F_45%,#FFF2C2_50%,#E9A60F_55%,transparent_65%)]
    bg-[length:250%_100%]
    bg-clip-text
    animate-text-flash'>Something Exciting is Coming! This page will be available soon.</p>

            </div>
  )
}

export default DigitalStudioPage