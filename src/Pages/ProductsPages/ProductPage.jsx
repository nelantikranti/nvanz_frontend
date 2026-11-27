import images from "../../assets/Images"
import BannerSection from "../../Components/ProductsComponents/BannerSection"
import ProductPageSection2 from "../../Components/ProductsComponents/ProductPageSection2"


const ProductPage=()=>{
    const data={
        heading:"PRODUCT",
        desc:"Each one is planned around your space, your needs, and your safety.",
        capsuleText:"PRODUCT"
    }

    return(
        <div>
<BannerSection content={data} backgroundImage={images?.productBannerImg} imageFit="cover"/>

<ProductPageSection2/>
        </div>)
}

export default ProductPage