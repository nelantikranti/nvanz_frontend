

import { useState } from "react";

const TiltCard = ({ data, index }) => {
  const [cardTilt, setCardTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setCardTilt({
      rotateX: (0.5 - y) * 12,
      rotateY: (x - 0.5) * 12,
    });
  };

  const resetCardTilt = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      onMouseMove={handleCardMove}
      onMouseLeave={resetCardTilt}
      style={{
        transform: `perspective(1000px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`
        border border-[#E9A60F80]
        group
        bg-[#1E1B17]
        rounded-[20px]
        flex h-[300px] lg:h-[340px] p-[20px]
        transition-[transform,border-color,box-shadow] duration-200 ease-out
        hover:border-[#E9A60F]
        hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
        ${index < 2 ? "md:col-span-3" : index < 5 ? "md:col-span-2" : "md:col-span-6"}
      `}
    >
      <div className="flex-1 flex flex-col justify-between">

        <div>
          <span className="text-[11px] inline-block bg-[#E9A60F] rounded-full px-[10px] py-[5px] font-bold text-[#141210] font-inter">
            {data?.capselText}
          </span>

          {data?.accessible && (
            <p className="text-[13px] text-[#E9A60F] font-inter font-bold mt-[10px]">
              {data?.accessible}
            </p>
          )}

          {data?.subText && (
            <p className="text-[#C9C2B4] font-inter text-[13px] mt-[10px]">
              {data?.subText}
            </p>
          )}
        </div>

        <div>
          <p className="text-[46px] font-bebas text-white leading-[0.85]">
            {data?.title}
          </p>

          <span className="inline-block px-[10px] py-[5px] font-bold font-inter text-[14px] mt-[10px] text-[#E9A60F] border border-[#E9A60F] rounded-full">
            Enquire →
          </span>
        </div>

      </div>

      <div className="flex flex-1 items-end justify-center">
        <p className="  font-bebas
        text-[80px]
        md:text-[100px]
    lg:text-[140px]
    leading-none
    text-transparent
    [-webkit-text-stroke:2px_#E9A60F80]
    transition-all duration-700 ease-in-out
    group-hover:-translate-x-2
    group-hover:[-webkit-text-stroke:2px_#E9A60F]
    group-hover:[background-image:linear-gradient(rgba(233,166,15,0.2),rgba(233,166,15,0.2))]
    group-hover:[-webkit-background-clip:text]
    group-hover:bg-clip-text">
          {data?.no}
        </p>
      </div>
    </div>
  );
};

export default TiltCard