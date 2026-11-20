import images from "../assets/Images";

const renderAnimatedLetters = (text, startIndex = 0) =>
    [...text].map((letter, index) =>
        letter === " " ? (
            " "
        ) : (
            <span
                className="inline-block animate-hero-letter motion-reduce:animate-none motion-reduce:opacity-100"
                style={{ animationDelay: `${(startIndex + index) * 45}ms` }}
                aria-hidden="true"
                key={`${startIndex + index}-${letter}`}
            >
                {letter}
            </span>
        )
    );

const HomePageHeroSection = () => {
    return (
        <div
      className="min-h-[calc(100svh-5rem)] w-full bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${images.HomePageBanner})`,
      }}
    >

        <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-[90%] max-w-[1400px] items-end justify-between pb-[clamp(2rem,8vh,5rem)] pt-10">
            
            <div>

               <span className="inline-flex items-center gap-[6px] border border-white/50 bg-white/5 px-[10px] py-[7px] rounded-full text-white font-semibold mt-[20px]">

  <span className="w-[7px] h-[7px] shrink-0 bg-[#FFB700] rounded-full"></span>

  Home Elevator

</span>

                <h1
                    className="text-[clamp(2.5rem,7vw,4.375rem)] font-[700] leading-[1.05] text-white"
                    aria-label="ELEVATORS A MODERN VANTAGE"
                >
                    <span className="flex flex-wrap gap-x-[0.25em]">
                        <span className="whitespace-nowrap text-[#FFB700]">
                            {renderAnimatedLetters("ELEVATORS")}
                        </span>
                        <span className="whitespace-nowrap">
                            {renderAnimatedLetters("A", 10)}
                        </span>
                    </span>
                    <span className="flex flex-wrap gap-x-[0.25em]">
                        <span className="whitespace-nowrap">
                            {renderAnimatedLetters("MODERN", 12)}
                        </span>
                        <span className="whitespace-nowrap">
                            {renderAnimatedLetters("VANTAGE", 18)}
                        </span>
                    </span>
                </h1>


                <div className="mt-8 flex flex-wrap gap-3 sm:mt-[60px] sm:gap-[20px]">
                    <button className="bg-white text-black  py-2 px-4 rounded-full">
                        Book Call
                    </button>

                    <button className="border-[1px] text-white border-[#CBB682] py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </div>

            </div>
            <div>

            </div>
        </div>

    </div>

    )

}

export default HomePageHeroSection