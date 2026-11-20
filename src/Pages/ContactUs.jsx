import CommonFAQ from "../Components/CommonFAQ"
import ContactCTASection from "../Components/ContactCTASection"
import AfterYouContactUs from "../Components/ContactUsComponents/AfterYouContactUs"
import ContactUsHeroSection from "../Components/ContactUsComponents/ContactUsHeroSection"
import CustomerSays from "../Components/ContactUsComponents/CustomerSays"
import GetFreeLiftQuote from "../Components/ContactUsComponents/GetFreeLiftQuote"
import LiftSolutions from "../Components/ContactUsComponents/LiftSolutions"
import LogoLinks from "../Components/ContactUsComponents/LogoLinks"
import OfficeLocation from "../Components/ContactUsComponents/OfficeLocation"
import ServingLocation from "../Components/ContactUsComponents/ServingLocation"
import TalkToUsSection from "../Components/ContactUsComponents/TalkToUsSection"
import Section4 from "../Components/ContactUsComponents/TalkToUsSection"
import WhyCustomerChoose from "../Components/ContactUsComponents/WhyCustomerChoose"
import { contactUsContent, faqQuestions } from "../Content/contactusContent"

import { useEffect,useRef } from "react"

const ContactUs=()=>{

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

    return(
        <div ref={pageRef} className="">
<ContactUsHeroSection/>
<GetFreeLiftQuote/>
<OfficeLocation/>

<TalkToUsSection/>

<WhyCustomerChoose/>

<AfterYouContactUs/>

<LiftSolutions/>
<ServingLocation/>

<CustomerSays />



<CommonFAQ bg="linear-gradient(135deg, #1C150D 0%, #0C0A08 50%, #2F220B 100%)" heading={faqQuestions?.heading} questionsAndAns={faqQuestions?.questionsAndAns} />
 <ContactCTASection contact={contactUsContent?.contactDetails} />

 <LogoLinks/>





        </div>
    )
}

export default ContactUs