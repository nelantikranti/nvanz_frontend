
import images from "../../assets/Images"

const DetailedBlogHero=({ article, category })=>{
    return(
        <header className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#141210] py-8 sm:min-h-[620px] sm:py-12">
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(50% 60% at 78% 45%, rgba(233, 166, 15, 0.3) 0%, rgba(233, 166, 15, 0) 100%)",
                }}
                aria-hidden="true"
            />

            <div className="mx-auto grid w-[90%] max-w-7xl grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
                <div className="min-w-0">
                    <p className="font-inter text-[12px] font-bold uppercase tracking-[0.18em] text-[#E9A60F]">
                        Blogs / {category}
                    </p>
                    <h1 className="mt-4 max-w-4xl break-words font-bebas text-[clamp(2.75rem,8vw,76px)] leading-[0.98] text-white sm:mt-5">
                        {article?.heading || article?.title}
                    </h1>
                    {article?.description && (
                        <p className="mt-5 max-w-2xl font-inter text-[16px] leading-7 text-[#D8D2C6] sm:mt-6 sm:text-[18px]">
                            {article.description}
                        </p>
                    )}
                    <span className="mt-5 inline-flex max-w-full rounded-full border border-[#E9A60F] px-3 py-1.5 font-inter text-[11px] font-bold tracking-wide text-[#E9A60F] sm:mt-6">
                        {category}
                    </span>
                </div>

                <div className="flex min-w-0 justify-center lg:justify-end">
                    <img
                        src={images?.blogHeroImg}
                        alt=""
                        aria-hidden="true"
                        className="h-[clamp(240px,45vw,360px)] w-full max-w-[360px] rounded-[18px] border border-[#E9A60F55] object-cover shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
                    />
                </div>
            </div>
        </header>
    )
}

export default DetailedBlogHero