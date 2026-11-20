
import images from "../../assets/Images"
import BlogMainSection2 from "../../Components/BlogsComponents/BlogMainSection2"
import BlogHeroSection from "../../Components/BlogsComponents/BlogsHeroSection"
import BlogCard from "../../Components/BlogsComponents/BlogCard"
import { blogArticles } from "../../Content/blogDummyData"

const Blogs=()=>{
    return(
       <div>
        <BlogHeroSection backgroundImage={images?.BlogHeroBg}  title = "BLOGS"
    badge = "BLOGS"  />

   <BlogMainSection2/>
        <section className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-12 sm:py-16">
            <div className="mx-auto w-[90%] max-w-7xl">
                <div className="mb-8">
                    <p className="font-inter text-[12px] font-bold uppercase tracking-[0.18em] text-[#E9A60F]">
                        From the NVANZ team
                    </p>
                    <h1 className="mt-2 font-bebas text-[44px] leading-none text-white sm:text-[56px]">
                        LATEST ARTICLES
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {blogArticles.map((article) => (
                        <BlogCard key={article.id} data={article} />
                    ))}
                </div>
            </div>
        </section>
       </div>
    )
}

export default Blogs