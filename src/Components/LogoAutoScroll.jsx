
import images from "../assets/Images"

const logoPair = [images.logo3, images.logo]
const marqueeLogos = Array.from({ length: 5 }, () => logoPair).flat()

const LogoAutoScroll = () => {
    return(
        <div className=" mx-auto w-[90%] ">

          

            <div className="mt-[20px] overflow-hidden">
                <div className="flex w-max animate-logo-marquee motion-reduce:animate-none">
                    {[0, 1].map((copy) => (
                        <div
                            className="flex shrink-0 items-center gap-[20px] pr-[20px]"
                            aria-hidden={copy === 1}
                            key={copy}
                        >
                            {marqueeLogos.map((logo, index) => (
                                <img
                                    className="h-[50px] w-[100px] shrink-0 object-contain"
                                    src={logo}
                                    alt="Nvanz Elevator Logo"
                                    key={`${copy}-${index}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default LogoAutoScroll