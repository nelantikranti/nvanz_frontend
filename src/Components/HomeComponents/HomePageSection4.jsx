import { useEffect, useState } from "react"
import { whyChooseNvanz } from "../../Content/homeContent"

const HomePageSection4 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectionRevision, setSelectionRevision] = useState(0)
  const selectedItem = whyChooseNvanz.cardDetails[selectedIndex]

  useEffect(() => {
    const optionsCount = whyChooseNvanz.cardDetails.length
    if (optionsCount < 2) return

    const timeoutId = window.setTimeout(() => {
      setSelectedIndex((currentIndex) => (currentIndex + 1) % optionsCount)
    }, 3000)

    return () => window.clearTimeout(timeoutId)
  }, [selectedIndex, selectionRevision])

  const handleOptionSelect = (index) => {
    setSelectedIndex(index)
    setSelectionRevision((revision) => revision + 1)
  }

  return (
    <section className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-10 sm:py-12 lg:py-[50px]">
      <div className="mx-auto w-[min(90%,1280px)]">
        <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-white">
          {whyChooseNvanz.heading}
          <span className="text-[#E9A60F]">{whyChooseNvanz.highlightHeading}</span>
        </h2>
        <p className="mt-3 max-w-[60rem] font-inter text-base leading-relaxed text-[#D8D2C6] sm:text-lg">
          {whyChooseNvanz.desc}
        </p>
        <p className="mt-3 font-inter text-base font-bold text-[#E9A60F] sm:text-lg">
          {whyChooseNvanz.subHeading}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-7">
          <article
            aria-live="polite"
            className="flex min-h-[300px] flex-col justify-center rounded-[20px] border-2 border-[#E9A60FB2] p-5 transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] motion-reduce:transition-none sm:min-h-[340px] sm:p-8 lg:min-h-[380px] lg:p-10"
          >
            <div key={selectedIndex} className="animate-content-change motion-reduce:animate-none">
              <p className="font-bebas text-[clamp(4rem,12vw,7.5rem)] leading-none text-[#E9A60F]">
                {String(selectedIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-bebas text-[clamp(2.5rem,5vw,3.375rem)] leading-none text-white">
                {selectedItem.heading}
              </h3>
              <p className="mt-4 max-w-[42rem] font-inter text-base leading-relaxed text-[#D8D2C6] sm:text-lg lg:text-xl">
                {selectedItem.desc}
              </p>
            </div>
          </article>

          <div
            role="group"
            aria-label="Reasons to choose NVANZ Elevators"
            className="flex min-w-0 flex-col justify-center gap-1 rounded-[20px] border-2 border-[#5A4A30] bg-[linear-gradient(135deg,#3A3126_0%,#17130E_100%)] p-3 sm:gap-2 sm:p-5 lg:min-h-[380px]"
          >
            {whyChooseNvanz.cardDetails.map((item, index) => {
              const isSelected = selectedIndex === index
              const isHighlighted = isSelected || hoveredIndex === index

              return (
                <button
                  key={item.heading}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleOptionSelect(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex min-h-12 w-full min-w-0 cursor-pointer items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-left transition-[transform,background-color,border-color] duration-300 ease-out hover:translate-x-1 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9A60F] motion-reduce:transition-none motion-reduce:transform-none sm:min-h-14 sm:px-4 ${
                    isSelected ? "border-[#E9A60F]/40 bg-black/20" : ""
                  }`}
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xl font-semibold transition-[background,box-shadow,color,transform] duration-300 ease-out motion-reduce:transition-none sm:size-11 sm:text-[22px] ${
                      isHighlighted
                        ? "scale-105 bg-[radial-gradient(50%_50%_at_35%_30%,#FFE9A8_0%,#E9A60F_100%)] text-[#141210] shadow-[0_0_15px_rgba(233,166,15,0.55),0_0_35px_rgba(233,166,15,0.3)]"
                        : "bg-[radial-gradient(50%_50%_at_35%_30%,#4A4030_0%,#1A150E_100%)] text-white shadow-[0_0_15px_rgba(74,64,48,0.45),0_0_30px_rgba(74,64,48,0.2)]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`min-w-0 font-inter text-sm font-bold leading-snug transition-colors duration-300 sm:text-base ${
                      isHighlighted ? "text-[#E9A60F]" : "text-white"
                    }`}
                  >
                    {item.heading}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <p className="mt-5 w-full max-w-[56rem] font-inter text-base leading-relaxed text-[#E6E0D4] sm:text-lg">Our goal is to help customers make informed decisions and choose elevator solutions that suit their properties.</p>
      </div>
    </section>
  )
}

export default HomePageSection4
