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

<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-6 gap-[20px]">

  {homeElevatroContent?.map((data, index) => (


<TiltCard key={data?.no ?? index}
    data={data}
    index={index}/>
  ))}

</div>

        </div>
    )
}

export default HomeElevatorSection2