
const ProductsDetailsSection4=({features})=>{
    return(
        <div className="bg-[linear-gradient(135deg,#1C150D_0%,#0C0A08_50%,#2F220B_100%)] py-8 sm:py-[40px]">
            <div className="w-[90%] mx-auto">
                <p className="text-white font-bebas text-center text-[clamp(2.5rem,5vw,60px)]">{features?.title}</p>

                <div className="flex gap-[30px] flex-wrap">


{
    features?.cardDetails.map((data,index)=>(
        <div key={index} className="border-[1px] border-[#E9A60F] bg-[#1E1B17] w-full min-w-0 max-w-[400px] flex-1 basis-[280px] min-h-[310px] rounded-[20px] p-[20px] hover:border-[2px] transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)] ">

<div className="flex gap-[10px] items-end">
     <div className="w-[44px] h-[44px] rounded-full border-[1px] border-[#E9A60F]">
<img className="rounded-full" src={data?.img} alt={data?.heading}/>
                        </div>
                       <p className="text-[22px] font-bebas text-[#E9A60F]">
  {String(index + 1).padStart(2, "0")}
</p>
    
</div>

<p className="text-[clamp(1.375rem,2.1vw,30px)] font-bebas text-white mt-[10px]">{data?.heading}</p>

<p className="text-[14px] text-[#D8D2C6] font-inter mt-[10px]">{data?.description}</p>
<p className="text-[#E9A60F] font-bold font-inter text-[14px] mt-[10px]"> {data?.subDes}</p>
                       

                    </div>
    ))
}

        

                </div>

            </div>

        </div>
    )
}
export default ProductsDetailsSection4