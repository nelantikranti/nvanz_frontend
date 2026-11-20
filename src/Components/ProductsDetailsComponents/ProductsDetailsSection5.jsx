
const ProductsDetailsSection5=({specifications})=>{



    return(
        <div className="bg-[linear-gradient(135deg,#FFBB11_0%,#EBDDBB_55%,#FFBD18_100%)] py-6 sm:py-[30px]">
            <div className="mx-auto w-[90%]">

                <p className="font-bebas text-[clamp(2.5rem,5vw,60px)] text-[#141210]">{specifications?.title} </p>

                <p className="text-[14px] font-inter text-[#3A352D] mt-[10px]">{specifications?.desc}</p>

               <table className="mt-[30px] w-full table-fixed">
    <tbody>
        {
        specifications?.details?.map((data,index)=>(
             <tr key={index} className={`${index%2==0?"bg-[#FFFFFF59]":""}`}>
            <td className="w-[35%] break-words px-2 py-2 font-inter text-[12px] font-bold leading-relaxed text-[#B8860B] sm:w-[30%] sm:px-[10px] sm:py-[10px]">
                {data?.heading}
            </td>

            <td className="w-[65%] break-words px-2 py-2 font-inter text-[13px] leading-relaxed text-[#141210] sm:w-[70%] sm:px-[10px] sm:py-[10px] sm:text-[16px]">
                {data?.point}
            </td>
        </tr>

        ))
        }
       
    </tbody>
</table>

            </div>
        </div>
    )
}

export default ProductsDetailsSection5