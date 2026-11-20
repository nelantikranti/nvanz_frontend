
const ProductDetailsSection7=({whyChoose})=>{

    return(
        <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-6 sm:py-[30px]">

            <div className="w-[90%] mx-auto">
                 <p className="font-bebas text-[clamp(2.5rem,5vw,60px)] text-[#141210]">{whyChoose?.heading}</p>
            <p className="w-full font-inter text-base leading-relaxed text-[#141210] sm:text-lg md:w-[80%] lg:text-[24px]">
              {whyChoose?.description}
            </p>

            </div>
           

        </div>
    )
}

export default ProductDetailsSection7