import { useNavigate } from "react-router-dom"
import images from "../../assets/Images"
import { commercialElevatorContent } from "../../Content/commercialElevatorContent"


const CommercialElevatorSection2=()=>{
    const navigate=useNavigate()
    return(
        <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-[30px]">
            <div className="w-[90%] mx-auto flex flex-wrap justify-center   gap-[30px]">

                {
                    commercialElevatorContent?.map((data,index)=>(

                        <div key={index} className="border-[2px] flex min-w-0 flex-col justify-between items-start border-[#E9A60F80] w-full max-w-[400px] h-[420px] rounded-[20px] p-[20px]  transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-2
        hover:border-[#E9A60F]
        hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] ">

<div className="flex gap-[10px] flex-wrap justify-between">

    {
        data?.images.map((img,index)=>(
            <div key={index} className="w-[calc(50%-5px)] h-auto aspect-[83/52] rounded-[8px] border border-dashed border-[#E9A60F80] overflow-hidden flex items-center justify-center sm:w-[166px] sm:h-[104px] sm:aspect-auto">
  <img
    src={img}
    alt="Elevator"
    className="w-full h-full object-cover rounded-[8px]"
  />
</div>

        ))
    }
      

</div>

<p className="text-[clamp(2rem,7.2vw,46px)] text-white font-bebas ">{data?.title}</p>

<button onClick={() => navigate("/contact-us")}  className="text-[#E9A60F] px-[20px] py-[5px] inline-block font-bold font-inter border-[1px] border-[#E9A60F] rounded-full cursor-pointer">Book →</button>
                  

                </div>

                    ))
                }

              
            </div>

        </div>
    )
}

export default CommercialElevatorSection2


// const CommercialElevatorSection2 = () => {
//   const cards = [1, 2, 3, 4];

//   return (
//     <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-[30px]">

//       <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">

//         {cards.map((item, index) => {
//           const isLastSingleCard =
//             index === cards.length - 1 && cards.length % 3 === 1;

//           return (
//             <div
//               key={item}
//               className={`border-[2px] border-[#E9A60F80] w-full min-w-0 min-h-[420px] rounded-[10px] p-[20px] ${
//                 isLastSingleCard ? "lg:col-span-3" : ""
//               }`}
//             >

//               {/* Images */}
//               <div className="grid grid-cols-2 gap-[10px] w-full">

//                 {[1, 2, 3].map((image) => (
//                   <div
//                     key={image}
//                     className="w-full h-[104px]  rounded-[8px] border border-dashed border-[#E9A60F80] overflow-hidden"
//                   >
//                     <img
//                       src={images.about7elevatorImage}
//                       alt="Elevator"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}

//               </div>

//               {/* Title */}
//               <p className="text-[46px] text-white font-bebas mt-[20px]">
//                 PASSENGERS
//               </p>

//               {/* Button */}
//               <span className="text-[#E9A60F] px-[10px] py-[5px] inline-block font-bold font-inter border border-[#E9A60F] rounded-full">
//                 Book →
//               </span>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default CommercialElevatorSection2;
