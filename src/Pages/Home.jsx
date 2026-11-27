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
import { Helmet } from "react-helmet-async"
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

        <>
       <Helmet>
  <title>Premium Home Elevator Manufacturer in India| NVANZ Elevators</title>

  <meta
    name="description"
    content="Explore premium home elevators by NVANZ, featuring hydraulic, traction, MRL and panoramic lifts designed for comfort, safety and modern residential living."
  />

  <link
    rel="canonical"
    href="https://nvanzelevators.com/"
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />


  <meta
  name="keywords"
  content="home elevator manufacturer, home elevators, residential elevators, home lifts, luxury home elevators"
/>


  <meta property="og:type" content="website" />
  <meta property="og:title" content="Premium Home Elevator Manufacturer in India | NVANZ Elevators" />

  <meta
    property="og:description"
    content="Explore premium home elevator solutions from NVANZ, including hydraulic, traction, MRL and panoramic elevators."
  />

  <meta property="og:url" content="https://nvanzelevators.com/" />

  <meta
    property="og:image"
    content="https://nvanzelevators.com/luxury-home-elevators-nvanz-elevators.webp"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Premium residential home elevators by NVANZ Elevators" />
  <meta property="og:site_name" content="NVANZ Elevators" />
  <meta property="og:locale" content="en_IN" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Premium Home Elevator Manufacturer in India | NVANZ Elevators" />

  <meta
    name="twitter:description"
    content="Explore premium home elevator solutions from NVANZ, including hydraulic, traction, MRL and panoramic elevators."
  />

  <meta
    name="twitter:image"
    content="https://nvanzelevators.com/images/luxury-home-elevators-nvanz-elevators.webp"
  />

  {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://nvanzelevators.com/#organization",
      "name": "NVANZ Elevators",
      "url": "https://nvanzelevators.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nvanzelevators.com/NVANZLOGO.png"
      },
      "description": "NVANZ Elevators provides premium residential elevator solutions, including hydraulic, traction, MRL and panoramic elevators.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Appejay Business Center, Raj Bhavan Road",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500082",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "Home Elevators",
        "Residential Elevators",
        "Hydraulic Home Elevators",
        "Traction Home Elevators",
        "MRL Home Elevators",
        "Panoramic Home Elevators"
      ]
    })}
  </script>

    <script type="application/ld+json">
    {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nvanzelevators.com/#website",
  "url": "https://nvanzelevators.com/",
  "name": "NVANZ Elevators",
  "publisher": {
    "@id": "https://nvanzelevators.com/#organization"
  },
  "inLanguage": "en-IN"
}
)}
  </script>


</Helmet>
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
        </>
     
    )
}

export default Home