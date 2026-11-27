import { useNavigate } from "react-router-dom"
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

        <>
        
         <Helmet>
          <title>Contact NVANZ Elevators | Home Elevator Enquiries</title>
        
          <meta
            name="description"
            content="Contact NVANZ Elevators for home elevator enquiries, product information and installation assistance. Connect with our team to discuss your requirements.  "
          />
        
          <link
            rel="canonical"
            href="https://nvanzelevators.com/contact-us"
          />
        
          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />
        
        
        
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contact NVANZ Elevators | Home Elevator Enquiries" />
        
          <meta
  property="og:description"
  content="Contact NVANZ Elevators for home elevator enquiries, product information and installation assistance. Connect with our team to discuss your requirements."
/>

        
          <meta
  property="og:url"
  content="https://nvanzelevators.com/contact-us"
/>

        
         <meta
  property="og:image"
  content="https://nvanzelevators.com/assets/nvanz-elevators-office-hyderabad.webp.webp"
/>

        
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
  property="og:image:alt"
  content="Contact NVANZ Elevators for residential elevator enquiries"
/>

          <meta property="og:site_name" content="NVANZ Elevators" />
          <meta property="og:locale" content="en_IN" />
        
          <meta name="twitter:card" content="summary_large_image" />
         <meta
  name="twitter:title"
  content="Contact NVANZ Elevators | Home Elevator Enquiries"
/>

        
        <meta
  name="twitter:description"
  content="Contact NVANZ Elevators for home elevator enquiries, product information and installation assistance."
/>

        
         <meta
  name="twitter:image"
  content="https://nvanzelevators.com/assets/nvanz-elevators-office-hyderabad.webp.webp"
/>


<meta
  name="twitter:image:alt"
  content="Contact NVANZ Elevators for home elevator enquiries"
/>

        
          {/* Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify(
               {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nvanzelevators.com/#organization",
      "name": "NVANZ Elevators",
      "url": "https://nvanzelevators.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nvanzelevators.com/assets/Images/nvanz-logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91- 8978039911",
        "email": "your-official-email@example.com",
        "areaServed": "IN",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "ContactPage",
      "@id": "https://nvanzelevators.com/contact-us#webpage",
      "url": "https://nvanzelevators.com/contact-us",
      "name": "Contact NVANZ Elevators",
      "description": "Contact NVANZ Elevators for home elevator enquiries, product information and installation assistance.",
      "isPartOf": {
        "@id": "https://nvanzelevators.com/#website"
      },
      "about": {
        "@id": "https://nvanzelevators.com/#organization"
      },
      "mainEntity": {
        "@id": "https://nvanzelevators.com/#organization"
      }
    }
  ]
}

            )}
          </script>

        
        
        </Helmet>
       
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
 <ContactCTASection onClick={() => navigate("/contact-us")} onClick2={() => {
    window.open(
      "https://wa.me/918978039911?text=Hello%2C%20I%20am%20interested%20in%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  }} contact={contactUsContent?.contactDetails} />

 <LogoLinks/>





        </div>

         </>
    )
}

export default ContactUs