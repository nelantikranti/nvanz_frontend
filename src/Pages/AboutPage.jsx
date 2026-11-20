import { useEffect, useRef } from "react"
import AboutUsSection2 from "../Components/AboutUsComponents/AboutUsSection2"
import AboutUsHeroSection from "../Components/AboutUsComponents/AboutUsHeroSection"
import AboutUsSection3 from "../Components/AboutUsComponents/AboutUsSection3"
import AboutUsSection4 from "../Components/AboutUsComponents/AboutUsSection4"
import AboutUsSection5 from "../Components/AboutUsComponents/AboutUsSection5"
import AboutUsSection6 from "../Components/AboutUsComponents/AboutUsSection6"
import AboutUsSection7 from "../Components/AboutUsComponents/AboutUsSection7"
import AboutUsSection8 from "../Components/AboutUsComponents/AboutUsSection8"

const AboutPage=()=>{
    const pageRef = useRef(null)

    useEffect(() => {
        const page = pageRef.current
        if (
            !page ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            return
        }

        const revealElements = page.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, [data-about-card-reveal]")
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
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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

    return(

        <div ref={pageRef}>
            <AboutUsHeroSection/>
            
            <AboutUsSection2/>
        
            <AboutUsSection3/>
            <AboutUsSection4/>
            <AboutUsSection5/>
            <AboutUsSection6/>
            <AboutUsSection7/>
            <AboutUsSection8/>
           
            

        </div>
    )
}

export default AboutPage