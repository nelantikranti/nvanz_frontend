import BannerSection from "../../Components/ProductsComponents/BannerSection"
import HomeElevatorSection2 from "../../Components/ProductsComponents/HomeElevatorSection2"

const HomeElevator=()=>{

     const data={
        heading:"HOME ELEVATORS",
        desc:"Each one is planned around your space, your needs, and your safety.",
        capsuleText:"PRODUCT · HOME ELEVATORS"
    }

    return(
        <div>
<BannerSection content={data}/>
<HomeElevatorSection2/>
        </div>
    )
}

export default HomeElevator