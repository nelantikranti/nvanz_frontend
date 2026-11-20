import images from "../../assets/Images"
import ContentShowcaseCard from "../ContentShowcaseCard"
import ElevatorAnimation from "../ElevatorLevels"

import AnimatedImageCard from "../AnimatedImageCard.jsx";
const technical=[
    "Technical Blogs"
]


const nonTechnical=[
    "Non-Technical"
]
const BlogMainSection2=()=>{

    return(
        <section className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-10 sm:py-14">

      <div className="mx-auto grid w-[90%] grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
 <ContentShowcaseCard
          number="01"
          label="CATEGORY"
          title="TECHNICAL"
          items={technical}
          exploreText="Read Technical blogs"
          exploreLink="/blogs/technical"
          visual={
            // <img
            //   src={images?.blogLeftImg}
            //   alt="Home Elevator"
            //   className="h-[300px] border-2 border-[#E9A60F] rounded-[10px] object-contain"
            // />

            

            <AnimatedImageCard src={images.blogLeftImg}
  alt="Modern elevator"
  borderRadius = "10px"
  width="170px"
  height="300px" />
          }
          visualClassName="w-[40%] py-5"
          contentClassName="flex-[0.6]"
        />

        
    
     <ContentShowcaseCard
          number="02"
          label="CATEGORY"
          title="Non-Technical"
          items={nonTechnical}
          exploreText="Read non-technical blogs →"
          exploreLink="/blogs/non-technical"
          visual={<ElevatorAnimation/>}
          visualClassName="w-[150px] pb-0"
        />


      </div>


      
      </section>
    )
}

export default BlogMainSection2