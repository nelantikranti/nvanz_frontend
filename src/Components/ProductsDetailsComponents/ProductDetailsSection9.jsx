
const ProductDetailsSection9=({faq})=>{
    return(
         <div className=" bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[30px]">

            <div className="w-[90%] mx-auto">
                 <p className="text-[#141210] font-bebas text-[60px] ">{faq?.heading}</p>
          
          
            {
              faq?.questionsAndAns?.map((data,index)=>(
                <div key={index} className="py-[20px] border-b-[2px] border-[#E6DFCF]">
                   <p className="text-[19px] font-bold text-[#141210] font-inter">{data?.question}</p>
            <p className="text-[15px] font-inter text-[#3A352D] w-[80%]">{data?.ans}</p>
                  </div>
              ))
            }
           
          </div>
           
           

        </div>
    )
}

export default ProductDetailsSection9