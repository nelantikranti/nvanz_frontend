import images from "../../assets/Images"
import BlogCard from "../../Components/BlogsComponents/BlogCard"
import BlogHeroSection from "../../Components/BlogsComponents/BlogsHeroSection"
import { blogArticles } from "../../Content/blogDummyData"

const TechnicalBlogs=()=>{
    const technicalArticles = blogArticles.filter((article) => article.type === "technical")

    return(
        <main>
            <BlogHeroSection
                backgroundImage={images?.BlogHeroBg}
                title="TECHNICAL"
                badge="BLOGS · TECHNICAL"
                titleSize="text-[64px] sm:text-[96px]"
            />
            <section className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-12 sm:py-16">
                <div className="mx-auto w-[90%] max-w-7xl">
                    <div className="mb-8 max-w-2xl">
                        <p className="font-inter text-[12px] font-bold uppercase tracking-[0.18em] text-[#E9A60F]">
                            Knowledge &amp; engineering
                        </p>
                        <h1 className="mt-2 font-bebas text-[42px] leading-none text-white sm:text-[54px]">
                            ALL TECHNICAL BLOGS
                        </h1>
                    </div>
                    {technicalArticles.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {technicalArticles.map((article) => (
                                <BlogCard key={article.id} data={article} />
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-xl border border-white/10 bg-white/5 p-6 font-inter text-[#D8D2C6]">
                            Technical articles will be available here soon.
                        </p>
                    )}
                </div>
            </section>
        </main>
    )
}

export default TechnicalBlogs