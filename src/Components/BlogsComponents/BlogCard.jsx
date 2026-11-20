import images from "../../assets/Images"
import { Link } from "react-router-dom"

const BlogCard=({data})=>{
    return(
        <Link
            to={`/blogs-details/${data.id}`}
            aria-label={`Read article: ${data?.title}`}
            className="block h-full rounded-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9A60F]"
        >
            <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E9A60F33] bg-[#1E1B17] p-[12px] transition-all duration-500 hover:-translate-y-2 hover:border-[#E9A60F] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                <div className="h-[220px] overflow-hidden rounded-[10px]">
                    <img
                        src={data?.image || images?.BlogHeroBg}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-1 flex-col p-[12px]">
                    <span className="inline-flex w-fit rounded-full border border-[#E9A60F66] px-[12px] py-[5px] font-inter text-[10px] tracking-[1px] text-[#E9A60F]">
                        {data?.category}
                    </span>

                    <h2 className="mt-[16px] font-bebas text-[25px] leading-[1.15] text-white transition-colors duration-300 group-hover:text-[#E9A60F]">
                        {data?.title}
                    </h2>

                    {data?.description && (
                        <p className="mt-3 line-clamp-3 font-inter text-[13px] leading-6 text-[#D8D2C6]">
                            {data.description}
                        </p>
                    )}

                    <span className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-4 font-inter text-[13px] font-bold text-[#E9A60F] transition-colors group-hover:text-white">
                        Read Article
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </span>
                </div>
            </article>
        </Link>
    )
}
export default BlogCard
