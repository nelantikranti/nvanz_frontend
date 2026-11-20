import Button from "../../Components/Buttons/Button"
import BannerSection from "../../Components/ProductsComponents/BannerSection"
import CommercialElevatorSection2 from "../../Components/ProductsComponents/CommercialElevatorSection2"

const CommercialPage=()=>{
    const data={
        heading:"COMMERCIAL ELEVATORS",
        desc:"Each one is planned around your space, your needs, and your safety.",
        capsuleText:"PRODUCT · COMMERCIAL ELEVATORS"
    }
    return(
        <div>
            <BannerSection content={data} />
            <CommercialElevatorSection2/>
        </div>
    )
}

export default CommercialPage