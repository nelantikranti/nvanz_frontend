
import { useEffect, useRef, useState } from "react"
import images from "../../assets/Images"

const Footer=()=>{
    const footerRef = useRef(null)
    const [watermarkSize, setWatermarkSize] = useState(80)

    useEffect(() => {
        const footer = footerRef.current
        if (!footer) return

        const resizeObserver = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect
            setWatermarkSize(Math.max(32, height * 0.65, width / 4))
        })

        resizeObserver.observe(footer)
        return () => resizeObserver.disconnect()
    }, [])

    return(
        <footer ref={footerRef} className="relative h-[480px] overflow-hidden bg-[#0A0909] py-[50px]">
            <span
                className="pointer-events-none absolute inset-0 grid select-none place-items-center whitespace-nowrap font-bebas leading-none text-[#5244242E] "
                style={{ fontSize: `${watermarkSize}px` }}
                aria-hidden="true"
            >
                NVANZ
            </span>

            <div className="relative z-10 mx-auto flex w-[90%] flex-col justify-between gap-12 md:flex-row">
                <div className="md:w-[45%]">
                    <img src={images.logo} alt='logo' className="w-[220px] h-[66px]" />
                    <p className="text-[20px] font-inter font-bold text-white mt-[10px]">NVANZ Elevators</p>
                    <p className="text-[15px] font-inter text-[#E9A60F] mt-[4px]">A Modern Vantage</p>
                </div>
                <div className="grid grid-cols-2 gap-10 md:w-[45%] md:gap-16">
                    <nav aria-label="Footer quick links">
                        <h2 className="font-inter text-[13px] font-bold leading-none text-[#E9A60F]">
                            QUICK LINKS
                        </h2>
                        <ul className="mt-6 space-y-4">
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/">Home</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/about-us">About Us</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/#elevator-solutions">Elevator Solutions</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/#services">Services</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div>
                        <h2 className="font-inter text-[13px] font-bold leading-none text-[#E9A60F]">
                            LOCATION
                        </h2>
                        <p className="mt-6 font-inter text-[16px] leading-none text-[#E6E0D4]">
                            Hyderabad, Telangana
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer