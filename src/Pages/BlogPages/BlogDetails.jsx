import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import BlogData from "../../Components/BlogsComponents/BlogData"
import DetailedBlogHero from "../../Components/BlogsComponents/DetailedBlogHero"
import ContactCTASection from "../../Components/ContactCTASection"
import { blogDetails } from "../../Content/blogDummyData"

const hasContent = (value) => typeof value === "string" && value.trim().length > 0

const BlogDetails = () => {
    const { id } = useParams()
    const articleIndex = Number(id) - 1
    const blog = Number.isInteger(Number(id)) ? blogDetails[articleIndex] : null
    const articleSections = blog?.data?.filter((section) =>
        hasContent(section?.heading) ||
        hasContent(section?.description) ||
        section?.points?.some(hasContent) ||
        hasContent(section?.note) ||
        section?.subData?.some((subSection) =>
            hasContent(subSection?.heading) ||
            hasContent(subSection?.description) ||
            subSection?.points?.some(hasContent) ||
            hasContent(subSection?.note)
        )
    ) ?? []
    const faqQuestions = blog?.faq?.questions?.filter((item) =>
        hasContent(item?.question) && hasContent(item?.ans)
    ) ?? []
    const category = blog?.category === "it" ? "TECHNICAL" : "NON-TECHNICAL"
    const categoryPath = blog?.category === "it" ? "/blogs/technical" : "/blogs/non-technical"

    if (!blog) return <Navigate to="/blogs" replace />

    const contactDetails = {
        heading: "PLANNING A MORE ACCESSIBLE HOME?",
        description: "The right elevator can make a meaningful difference to everyday comfort and independence.",
        description2: "Explore residential elevator options and discuss your home's requirements with the NVANZ team.",
        btnText1: "Explore Home Elevator Solutions",
    }

    const navigate=useNavigate()

    return (
        <main>
            <DetailedBlogHero article={articleSections[0]} category={category} />

            <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)]">
                <div className="mx-auto grid w-[90%] max-w-7xl gap-10 py-12 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.5fr)] lg:gap-16 lg:py-16">
                    <aside className="self-start lg:sticky lg:top-28">
                        <Link
                            to={categoryPath}
                            className="inline-flex items-center gap-2 font-inter text-[13px] font-semibold text-[#8F6809] transition-colors hover:text-[#141210]"
                        >
                            <span aria-hidden="true">←</span> Back to {category.toLowerCase()} blogs
                        </Link>
                        {articleSections.length > 0 && (
                            <nav aria-label="Article contents" className="mt-8 border-l border-[#B8860B55] pl-4">
                                <p className="mb-4 font-inter text-[11px] font-bold uppercase tracking-[0.16em] text-[#8F6809]">
                                    In this article
                                </p>
                                <ol className="space-y-3">
                                    {articleSections.map((section, index) => (
                                        <li key={`toc-${index}`}>
                                            <a
                                                href={`#blog-section-${index + 1}`}
                                                className="font-inter text-[13px] leading-5 text-[#3A352D] transition-colors hover:text-[#8F6809]"
                                            >
                                                <span className="mr-2 font-bold text-[#B8860B]">{String(index + 1).padStart(2, "0")}</span>
                                                {section.heading}
                                            </a>
                                        </li>
                                    ))}
                                    {faqQuestions.length > 0 && (
                                        <li>
                                            <a href="#blog-faq" className="font-inter text-[13px] text-[#3A352D] hover:text-[#8F6809]">
                                                <span className="mr-2 font-bold text-[#B8860B]">{String(articleSections.length + 1).padStart(2, "0")}</span>
                                                {blog.faq.heading || "Frequently asked questions"}
                                            </a>
                                        </li>
                                    )}
                                </ol>
                            </nav>
                        )}
                    </aside>

                    <article className="min-w-0 space-y-8">
                        {articleSections.map((section, index) => (
                            <BlogData
                                key={`blog-section-${index}`}
                                data={section}
                                index={index}
                                sectionId={`blog-section-${index + 1}`}
                            />
                        ))}

                        {faqQuestions.length > 0 && (
                            <section id="blog-faq" className="scroll-mt-28 border-b border-[#D7C8A7] pb-8">
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <span className="shrink-0 font-bebas text-[38px] leading-none text-[#B8860B] sm:text-[44px]">
                                        {String(articleSections.length + 1).padStart(2, "0")}
                                    </span>
                                    <h2 className="font-bebas text-[32px] leading-[1.05] text-[#141210] sm:text-[44px]">
                                        {blog.faq.heading || "Frequently asked questions"}
                                    </h2>
                                </div>
                                <div className="mt-6 space-y-5">
                                    {faqQuestions.map((item, index) => (
                                        <div key={`faq-${index}`} className="rounded-[12px] ">
                                            <h3 className="font-inter text-[16px] font-bold leading-6 text-[#141210]">
                                                {item.question}
                                            </h3>
                                            <p className="mt-2 font-inter text-[15px] leading-7 text-[#3A352D]">{item.ans}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </div>

            <ContactCTASection onClick={() => navigate("/products")} contact={contactDetails}  />
        </main>
    )
}
export default BlogDetails