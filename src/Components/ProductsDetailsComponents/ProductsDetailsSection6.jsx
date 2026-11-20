
const ProductsDetailsSection6=({isRightForHome})=>{

    return(
        <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-[30px]">
            <div className="mx-auto w-[90%]">
 <p className="text-white font-bebas text-[60px]">{isRightForHome?.heading}</p>




 <div className="flex gap-[30px] flex-wrap justify-center">

{
    isRightForHome?.cardDetails?.map((data,index)=>(
        <div key={index} className="w-400px] h-[360px] border-[1px] border-[#E9A60F] hover:border-[2px] rounded-[20px] p-[20px] w-[400px] h-[360px] transition-[translate,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]">
                    <p className="text-[#E9A60F] text-[32px] font-bebas">{data?.title}</p>
                    {
                        data?.description ? <p className="text-[15px] font-inter text-[#D8D2C6]">{ data?.description}</p>
 :""
                    }


                   {data?.points && (
  <li>
    <ul className="list-disc pl-5 space-y-2">
      {data.points.map((point, index) => (
        <li className="text-[15px] font-inter text-[#D8D2C6]" key={index}>{point}</li>
      ))}
    </ul>
  </li>
)}
                   

                </div>

    ))
}
                

            </div>




            </div>

            
           
        </div>
    )
}

export default ProductsDetailsSection6