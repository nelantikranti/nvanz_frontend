
const ProductDetailsSection8 = ({productGallery}) => {
    return (
        <div className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-8 sm:py-[50px]">

<div className="w-[90%] mx-auto">
<p className="font-bebas text-[clamp(2.5rem,5vw,60px)] leading-[0.85] text-white">{productGallery?.heading}</p>

<div className="mt-[30px] flex flex-wrap justify-center lg:justify-between gap-[20px]">
    {
        productGallery?.images?.map((data,index)=>(
            <div key={index} className="group flex w-full min-w-0 max-w-[228px] flex-[1_1_200px] flex-col items-center">

    <p className="
        text-[#D8D2C6]
        text-[14px]
        font-inter
        text-center
        transition-transform
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:-translate-y-2
    ">
        {data?.title}
    </p>

    <div className="
        aspect-[19/25]
        w-full
        border-[#E9A60F99]
        border-dashed
        rounded-[10px]
        border-[2px]
        flex items-center justify-center 
        mt-[5px]
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:-translate-y-2
        group-hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
    ">
        <img
            className="object-cover w-full h-full rounded-[10px]"
            src={data?.img}
            alt={data?.title}
        />
    </div>

</div>

        ))
    }
   
    
</div>

</div>
            
        </div>
    )
}

export default ProductDetailsSection8;