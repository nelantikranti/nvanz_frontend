

import { useId, useState } from "react"

const CommonFAQ = ({ heading, questionsAndAns = [], bg = "linear-gradient(135deg, #1F1A14 0%, #33260F 100%)" }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const accordionId = useId()

  return (
    <div style={{background:bg}} className=" py-6 sm:py-[30px]">
      <div className="w-[90%] mx-auto">

        <h2 className="font-bebas text-[clamp(2.5rem,5vw,60px)] text-[#FFFFFF]">
          {heading}
        </h2>

        {questionsAndAns.map((data, index) => {
          const isOpen = openIndex === index
          const answerId = `${accordionId}-answer-${index}`

          return (
            <div
              key={data?.question ?? index}
              className="border-b-2 border-[#FFFFFF]/30 py-2"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 py-3 text-left font-inter text-[17px] font-bold text-[#FFFFFF] transition-colors duration-200 hover:text-[#E9A60F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6B00] sm:gap-6 sm:py-4 sm:text-[19px]"
                >
                  <span className="min-w-0 break-words">{data?.question}</span>
                  <span
                    aria-hidden="true"
                    className={`relative flex cursor-pointer size-8 shrink-0 items-center justify-center rounded-full  transition-[background-color,border-color] duration-300 
                      
                    `}
                  >
                    <span
                      className={`absolute h-[3px]  w-4.5 rounded-full bg-[#E9A60F] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute h-[3px]  w-4.5 rotate-90 rounded-full bg-[#E9A60F] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-[135deg]" : ""
                      }`}
                    />
                  </span>
                </button>
              </h3>

              <div
                id={answerId}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-in-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="w-full pb-4 pr-0 font-inter text-[15px] leading-relaxed text-[#D8D2C6] sm:w-[80%] sm:pr-12">
                    {data?.ans} 
                  </p>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default CommonFAQ;
