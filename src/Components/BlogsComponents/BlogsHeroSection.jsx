

const BlogHeroSection = ({
    title = "BLOGS",
    badge = "BLOGS",
    backgroundImage,
    height = "min-h-[360px] sm:min-h-[420px]",
    titleSize = "text-[clamp(3rem,9vw,96px)]",
    left="left-[0px]"
}) => {
    return (
        <div
            className={`${height} flex flex-col justify-center bg-cover bg-center bg-no-repeat py-10 sm:py-12`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="mx-auto w-[90%]">

                <span className="inline-block max-w-full rounded-full border border-[#E9A60F] px-[10px] py-[5px] font-inter text-[11px] text-[#E9A60F]">
                    {badge}
                </span>

                <p
                    className={`
                        m-0 mt-5 w-fit max-w-full p-0 leading-none
                        ${titleSize}
                        relative ${left}
                        font-bebas
                        text-transparent
                        [-webkit-text-stroke:1.5px_#E9A60F]
                        bg-[linear-gradient(110deg,transparent_35%,#E9A60F_45%,#FFF2C2_50%,#E9A60F_55%,transparent_65%)]
                        bg-[length:250%_100%]
                        bg-clip-text
                        animate-text-flash
                    `}
                >
                    {title}
                </p>

            </div>
        </div>
    );
};

export default BlogHeroSection;
