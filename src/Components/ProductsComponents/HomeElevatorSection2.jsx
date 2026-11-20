import { homeElevatroContent } from "../../Content/homeElevatorContent"
import { useState } from "react";
import TiltCard from "../TiltCard";
const HomeElevatorSection2=()=>{

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


    return(
        <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-[30px]">

<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-6 gap-[30px]">

  {homeElevatroContent?.map((data, index) => (
//     <div
//   onMouseMove={handleCardMove}
//   onMouseLeave={resetCardTilt}
//   style={{
//     transform: `perspective(1000px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
//     transformStyle: "preserve-3d",
//   }}
//   className={`
//     border border-[#E9A60F80]
//     bg-[#1E1B17]
//     rounded-[20px]
//     flex h-[340px] p-[20px]
//     transition-[transform,border-color,box-shadow] duration-200 ease-out
//     hover:border-[#E9A60F]
//     hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
//     ${index < 2 ? "md:col-span-3" : index < 5 ? "md:col-span-2" : "md:col-span-6"}
//   `}
// >

//       <div className="flex-1 flex flex-col justify-between">

//         <div>
//           <span className="text-[11px] inline-block bg-[#E9A60F] rounded-full px-[10px] py-[5px] font-bold text-[#141210] font-inter">
//             {data?.capselText}
//           </span>

//           {data?.accessible && (
//             <p className="text-[13px] text-[#E9A60F] font-inter font-bold mt-[10px]">
//               {data?.accessible}
//             </p>
//           )}

//           {data?.subText && (
//             <p className="text-[#C9C2B4] font-inter text-[13px] mt-[10px]">
//               {data?.subText}
//             </p>
//           )}
//         </div>

//         <div>
//           <p className="text-[46px] font-bebas text-white leading-[0.85]">
//             {data?.title}
//           </p>

//           <span className="inline-block px-[10px] py-[5px] font-bold font-inter text-[14px] mt-[10px] text-[#E9A60F] border-[1px] border-[#E9A60F] rounded-full">
//             Enquire →
//           </span>
//         </div>

//       </div>

//       <div className="flex flex-1 items-end justify-center">
//        <p className="font-bebas text-transparent text-[96px] [-webkit-text-stroke:2px_#E9A60F80]">
//   {data?.no}
// </p>
//       </div>

//     </div>

<TiltCard key={data?.no ?? index}
    data={data}
    index={index}/>
  ))}

</div>

        </div>
    )
}

export default HomeElevatorSection2