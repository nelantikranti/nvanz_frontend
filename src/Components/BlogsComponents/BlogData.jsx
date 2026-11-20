import images from "../../assets/Images"
import { IoTriangleSharp } from "react-icons/io5";

const hasContent = (value) => typeof value === "string" && value.trim().length > 0

const BlogData=({data, index, sectionId})=>{
    const points = data?.points?.filter(hasContent) ?? []
    const subSections = data?.subData?.filter((section) =>
        hasContent(section?.heading) ||
        hasContent(section?.description) ||
        section?.points?.some(hasContent) ||
        hasContent(section?.note)
    ) ?? []

    return(
        <section id={sectionId} className="scroll-mt-28 border-b border-[#D7C8A7] pb-8">
            <div className="flex items-start gap-4 sm:gap-6">
                <span className="shrink-0 font-bebas text-[38px] leading-none text-[#B8860B] sm:text-[44px]">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-bebas text-[32px] leading-[1.05] text-[#141210] sm:text-[44px]">
                    {data?.heading}
                </h2>
            </div>

            {hasContent(data?.description) && (
                <p className="mt-5 font-inter text-[16px] leading-7 text-[#3A352D] sm:text-[17px]">
                    {data.description}
                </p>
            )}

            {hasContent(data?.img) && (
                <div className="bg-[#000] rounded-[20px]">
 <img
                    src={data.img || images?.blogDataImg}
                    alt=""
                    className="mt-5 max-h-[360px] w-full rounded-[16px] object-cover"
                    loading="lazy"
                />
                </div>
               
            )}

            {points.length > 0 && (
                <ul className="mt-5 space-y-2">
                    {points.map((point, pointIndex) => (
                        <li
                            key={`${sectionId}-point-${pointIndex}`}
                            className="flex items-start gap-3 rounded-[10px] border border-[#E6DFCF] bg-white/70 px-4 py-3"
                        >
                            <IoTriangleSharp aria-hidden="true" className="mt-1 shrink-0 text-[11px] text-[#E9A60F]" />
                            <span className="font-inter text-[15px] leading-6 text-[#141210]">{point}</span>
                        </li>
                    ))}
                </ul>
            )}

            {hasContent(data?.note) && (
                <p className="mt-5 border-l-4 border-[#E9A60F] px-4 py-2 font-inter text-[15px] font-semibold leading-6 text-[#141210]">
                    {data.note}
                </p>
            )}

            {subSections.length > 0 && (
                <div className="mt-6 space-y-6">
                    {subSections.map((subSection, subIndex) => {
                        const subPoints = subSection?.points?.filter(hasContent) ?? []

                        return (
                            <section key={`${sectionId}-subsection-${subIndex}`}>
                                {hasContent(subSection?.heading) && (
                                    <h3 className="font-bebas text-[27px] leading-tight text-[#8F6809] sm:text-[30px]">
                                        {subSection.heading}
                                    </h3>
                                )}
                                {hasContent(subSection?.description) && (
                                    <p className="mt-2 font-inter text-[15px] leading-7 text-[#3A352D] sm:text-[16px]">
                                        {subSection.description}
                                    </p>
                                )}
                                {subPoints.length > 0 && (
                                    <ul className="mt-3 space-y-2">
                                        {subPoints.map((point, pointIndex) => (
                                            <li
                                                key={`${sectionId}-sub-${subIndex}-point-${pointIndex}`}
                                                className="flex items-start gap-3 rounded-[10px] border border-[#E6DFCF] bg-white/70 px-4 py-3"
                                            >
                                                <IoTriangleSharp aria-hidden="true" className="mt-1 shrink-0 text-[11px] text-[#E9A60F]" />
                                                <span className="font-inter text-[15px] leading-6 text-[#141210]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {hasContent(subSection?.note) && (
                                    <p className="mt-4 border-l-4 border-[#E9A60F] px-4 py-2 font-inter text-[15px] font-semibold leading-6 text-[#141210]">
                                        {subSection.note}
                                    </p>
                                )}
                            </section>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

export default BlogData