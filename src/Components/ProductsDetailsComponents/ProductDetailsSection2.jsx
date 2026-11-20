
const ProductDetailsSection2 = ({ section2 }) => {
    const specifications = [
        {
            title: "CAPACITY",
            data: section2?.capacity,
        },
        {
            title: "SPEED",
            data: section2?.speed,
        },
    ];

    return (
        <section className="w-full bg-[#120F0B] px-4 py-8 sm:px-10 sm:py-12 lg:px-[7%]">

            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-14">

                {specifications.map((item) => {

                    const [minValue, maxValue] = item.data
                        ?.split("→")
                        .map((value) => value.trim()) || [];

                    const min = parseFloat(minValue);
                    const max = parseFloat(maxValue);

                    const value = min + (max - min) * 0.5;

                    const progress = 50;

                    const unit = maxValue?.replace(/[0-9.]/g, "").trim();

                    return (
                        <div key={item.title} className="w-full min-w-0">

                            {/* Heading */}
                            <h3 className="mb-2 text-[13px] font-bold text-[#E9A60F] sm:mb-3 sm:text-sm">
                                {item.title}
                            </h3>

                            {/* Progress Bar */}
                            <div className="w-full h-3 rounded-full bg-[#FFFFFF1F] overflow-hidden">

                                <div
                                    className="h-full rounded-full bg-[#E9A60F] transition-all duration-700 ease-in-out"
                                    style={{
                                        width: `${progress}%`
                                    }}
                                />

                            </div>

                            {/* Range Text */}
                            <p className="mt-2 break-words text-[13px] text-[#C9C2B4] sm:mt-3 sm:text-sm">
                                {minValue} → {maxValue}
                            </p>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default ProductDetailsSection2;
