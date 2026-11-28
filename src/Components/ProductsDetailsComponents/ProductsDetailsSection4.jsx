
const ProductsDetailsSection4=({features})=>{
    return(
        <div className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-8 sm:py-[40px]">
            <div className="w-[90%] mx-auto">
                <p className="text-white font-bebas text-center text-[clamp(2.5rem,5vw,60px)]">{features?.heading}</p>
               


                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
    {features?.cardDetails.map((data, index) => (
        <div
            key={index}
            className="min-h-[310px] w-full min-w-0 rounded-[20px] border-[1px] border-[#E9A60F] bg-[#1E1B17] p-[20px] transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[2px] hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]"
        >
            <div className="flex items-end gap-[10px]">
                {/* <div className="h-[44px] w-[44px] rounded-full border-[2px] border-[#E9A60F]">
                    {
                        data?.img && <img className="rounded-full" src={data?.img} alt={data?.heading} />
                    }
                    
                </div> */}
                <p className="font-bebas text-[22px] text-[#E9A60F]">
                    {String(index + 1).padStart(2, "0")}
                </p>
            </div>

            <p className="mt-[10px] font-bebas text-[clamp(1.375rem,2.1vw,30px)] text-white">
                {data?.heading}
            </p>

            <p className="mt-[10px] font-inter text-[14px] text-[#D8D2C6]">
                {data?.description}
            </p>

            <p className="mt-[10px] font-inter text-[14px] font-bold text-[#E9A60F]">
                {data?.subDes}
            </p>
        </div>
    ))}
</div>

            </div>

        </div>
    )
}
export default ProductsDetailsSection4