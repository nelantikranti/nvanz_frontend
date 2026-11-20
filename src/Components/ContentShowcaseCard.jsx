

import { Link } from "react-router-dom";

const ContentShowcaseCard = ({
  number,
  label,
  title,
  items = [],
  exploreText,
  exploreLink,
  visual,
  visualClassName = "",
  contentClassName = "",
}) => {
  return (
    <div
      className="
        group relative flex min-h-[390px] overflow-hidden
        rounded-[24px] border border-[#E9A60F80]
        bg-[#1E1B17] p-6 sm:min-h-[396px] sm:p-7
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:border-2
        hover:border-[#E9A60F]
        hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
      "
    >
      <div className="relative z-10 flex min-w-0 flex-1 flex-col ">

        {/* NUMBER */}
      

        {/* CONTENT + VISUAL */}
        <div className=" flex flex-1 items-center  gap-4">

             

          {/* LEFT CONTENT */}
          <div className={`min-w-0 flex-1 ${contentClassName}`}>

             <p
          className="
            font-bebas text-[170px] leading-none
            text-transparent
            [-webkit-text-stroke:2px_#E9A60F80]
            transition-all duration-700 ease-in-out
            group-hover:[-webkit-text-stroke:2px_#E9A60F]
            group-hover:[background-image:linear-gradient(rgba(233,166,15,0.2),rgba(233,166,15,0.2))]
            group-hover:[-webkit-background-clip:text]
            group-hover:bg-clip-text
          "
        >
          {number}
        </p>

            <p className="font-inter text-[10px] font-bold uppercase tracking-[0.12em] text-[#E9A60F]">
              {label}
            </p>

            <h2 className="mt-1 font-bebas text-[34px] leading-none text-white sm:text-[40px]">
              {title}
            </h2>

            {/* ITEMS */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={typeof item === "string" ? item : item.slug}>
                  <Link
                    to={
                      typeof item === "string"
                        ? exploreLink
                        : item.slug.startsWith("/")
                          ? item.slug
                          : `/products/${item.slug}`
                    }
                    className="
                      inline-flex min-h-7 items-center
                      rounded-full border border-[#E9A60F]
                      px-3 py-1 font-inter text-[10px]
                      leading-tight text-white
                      transition-colors duration-200
                      hover:bg-[#E9A60F] hover:text-[#141210]
                      sm:text-[11px]
                    "
                  >
                    {typeof item === "string" ? item : item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* EXPLORE BUTTON */}
            <Link
              to={exploreLink}
              className="
                mt-6 inline-flex min-h-[42px] w-fit
                items-center justify-center rounded-full
                border border-[#E9A60F] px-6
                font-inter text-[12px] font-semibold
                text-[#E9A60F] transition-colors duration-200
                hover:bg-[#E9A60F] hover:text-[#141210]
              "
            >
              {exploreText} <span className="ml-1">→</span>
            </Link>

          </div>

          {/* RIGHT VISUAL - IMAGE / ANIMATION / CUSTOM JSX */}
          {visual && (
            <div
              className={`
                flex-1 shrink-0 flex  justify-center
                ${visualClassName}
              `}
            >
              {visual}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ContentShowcaseCard;


