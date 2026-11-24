import { useEffect, useRef } from "react"
import ContactCTASection from "../../Components/ContactCTASection"
import ProductDetailsHeroSection from "../../Components/ProductsDetailsComponents/ProductDetailsHeroSection"
import ProductDetailsSection2 from "../../Components/ProductsDetailsComponents/ProductDetailsSection2"
import ProductDetailsSection8 from "../../Components/ProductsDetailsComponents/ProductDetailsSection8"
import ProductDetailsSection9 from "../../Components/ProductsDetailsComponents/ProductDetailsSection9"
import ProductsDetailsSection3 from "../../Components/ProductsDetailsComponents/ProductsDetailsSection3"
import ProductsDetailsSection4 from "../../Components/ProductsDetailsComponents/ProductsDetailsSection4"
import ProductsDetailsSection5 from "../../Components/ProductsDetailsComponents/ProductsDetailsSection5"
import ProductsDetailsSection6 from "../../Components/ProductsDetailsComponents/ProductsDetailsSection6"
import ProductDetailsSection7 from "../../Components/ProductsDetailsComponents/ProductsDetailsSection7"

import { products } from "../../Content/productDetials"
import { Link, useNavigate, useParams } from "react-router-dom"
import CommonFAQ from "../../Components/CommonFAQ"

const ProductsDetails=()=>{
  const { slug } = useParams()
  const pageRef = useRef(null)
  const data = Object.values(products).find((product) => product.slug === slug)
  const navigate=useNavigate()
  useEffect(() => {
    const page = pageRef.current
    if (
      !page ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return
    }

    const revealElements = page.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, button, li, table tr, img:not(.animate-elevator-door-left img):not(.animate-elevator-door-right img)"
    )

    if (revealElements.length === 0) return

    page.dataset.scrollRevealReady = "true"

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.scrollRevealed = "true"
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    )

    revealElements.forEach((element) => {
      element.dataset.scrollReveal = "true"
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      delete page.dataset.scrollRevealReady
      revealElements.forEach((element) => {
        delete element.dataset.scrollReveal
        delete element.dataset.scrollRevealed
      })
    }
  }, [slug])

  if (!data) {
    return (
      <main className="flex min-h-[50vh] flex-col items-center justify-center bg-[#141210] px-6 text-center">
        <h1 className="font-bebas text-4xl text-white">Product not found</h1>
        <p className="mt-3 font-inter text-[#D8D2C6]">
          This elevator product is unavailable or the link may be incorrect.
        </p>
        <Link
          to="/home-elevator-products"
          className="mt-6 font-inter text-[#E9A60F] underline underline-offset-4"
        >
          Browse home elevators
        </Link>
      </main>
    )
  }

    return(
        <div ref={pageRef} data-product-scroll-reveal="true">
             <ProductDetailsHeroSection key={slug} hero={data.hero} />
             <ProductDetailsSection2 section2={data?.section2} />
             <ProductsDetailsSection3 overview={data?.overview} />

             <ProductsDetailsSection4 features={data?.features} />
             <ProductsDetailsSection5 specifications={data?.specifications}/>
             <ProductsDetailsSection6 isRightForHome={data?.isRightForHome}/>
             <ProductDetailsSection7 whyChoose={data?.whyChoose}/>
             <ProductDetailsSection8 productGallery={data?.productGallery}/>
           
             <CommonFAQ heading={data?.faq?.heading} questionsAndAns={data?.faq?.questionsAndAns}   />
             <ContactCTASection contact={data.contact} onClick={() => navigate("/contact-us")} showSecondButton={false} />
        
        </div>
    )
}

export default ProductsDetails