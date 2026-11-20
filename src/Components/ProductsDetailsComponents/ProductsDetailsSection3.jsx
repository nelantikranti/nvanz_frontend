
const ProductsDetailsSection3=({overview})=>{
    return(
        <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-8 sm:py-10 lg:py-[50px]">

            <div className="mx-auto flex w-[90%] flex-col items-stretch gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-[20px]">
                <div className="flex-1">

                    <p className="w-full max-w-full font-bebas text-[clamp(2.5rem,5vw,64px)] leading-none text-[#141210] lg:w-[60%] lg:text-[64px]">{overview?.title}</p>

                </div>
                <div className="flex-1">
                    <div className="w-full lg:w-[90%]">
                        {
                            overview?.points?.map((data,index)=>(
 <p key={index} className="mt-[10px] font-inter text-[15px] text-[#3A352D] sm:text-[16px] lg:text-[17px]"> {data}</p>
                            ))
                        }
                        
                  

                    </div>
                   

                </div>
            </div>


        </div>
    )
}

export default ProductsDetailsSection3