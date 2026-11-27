
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
                    <img src={images.logo} alt='NVANZ Elevator Logo' className="w-[220px] h-[66px]" />
                    <p className="text-[18px] font-inter font-bold text-[#E9A60F] mt-[20px]">A Modern Vantage</p>
                    <p className="text-[14px] font-inter text-[#C9C2B4] mt-[4px] ">Hyderabad, Telangana</p>
                </div>
                <div className="grid grid-cols-2 gap-10 md:w-[45%] md:gap-16">
                    <nav aria-label="Footer quick links">
                        <h2 className="font-inter text-[13px] font-bold leading-none text-[#E9A60F]">
                            QUICK LINKS
                        </h2>
                        <ul className="mt-6 space-y-[10px]">
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/">Home</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/about-us">About Us</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/products">Product</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/">Projects</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/">Gallery</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/blogs">Blog</a></li>
                            <li><a className="font-inter text-[16px] leading-none text-[#E6E0D4] hover:text-[#E9A60F] transition-colors" href="/contact-us">Contact</a></li>
                        </ul>
                    </nav>
                    <div>
                        <h2 className="font-inter text-[13px] font-bold leading-none text-[#E9A60F]">
                            LEGAL
                        </h2>
                        <p className="mt-6 font-inter text-[16px] leading-none text-[#E6E0D4]">
                            Terms & Conditions
                        </p>
                         <p className="mt-[10px] font-inter text-[16px] leading-none text-[#E6E0D4]">
                           Privacy & Policy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer