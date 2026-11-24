import { useEffect, useRef } from "react"
import CommonFAQ from "../Components/CommonFAQ"
import HomePageSection2 from "../Components/HomeComponents/HomePageSection2"
import HomePageSection3 from "../Components/HomeComponents/HomePageSection3"
import HomePageSection4 from "../Components/HomeComponents/HomePageSection4"
import HomePageSection5 from "../Components/HomeComponents/HomePageSection5"
import HomeSection2 from "../Components/HomeComponents/HomeSection2"
import HomePageHeroSection from "../Components/HomePageHeroSection"
import { contactDetails, faqQuestions } from "../Content/homeContent"
import ContactCTASection from "../Components/ContactCTASection"
import HowItWorks from "../Components/HomeComponents/HowItWorks"
import HomePageHeroSectionNew from "../Components/HomeComponents/HomePageHeroSectionNew"
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const pageRef = useRef(null)

    const navigate = useNavigate();


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
            "h1, h2, h3, h4, h5, h6, p, button, a, li, article:not([data-scroll-reveal-ignore]), figure, table tr, img:not(.animate-elevator-door-left img):not(.animate-elevator-door-right img), [class*=\"rounded-\"][class*=\"border-\"]:not([data-scroll-reveal-ignore])"
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
    }, [])

    return (
        <div ref={pageRef}>
            {/* <HomePageHeroSection/> */}
            <HomePageHeroSectionNew/>
            <HomePageSection2/>

            <HomePageSection3/>

            <HomePageSection4/>
            <HowItWorks/>
            <HomePageSection5/>

            <CommonFAQ heading={faqQuestions?.heading} questionsAndAns={faqQuestions?.questionsAndAns} />

            <ContactCTASection onClick={() => navigate("/contact-us")} onClick2={() => {
    window.open(
      "https://wa.me/918978039911?text=Hello%2C%20I%20am%20interested%20in%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  }} contact={contactDetails} />

            {/* <HomeSection2  /> */}
            </div>
    )
}

export default Home