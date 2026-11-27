import { useEffect, useRef } from "react"
import AboutUsSection2 from "../Components/AboutUsComponents/AboutUsSection2"
import AboutUsHeroSection from "../Components/AboutUsComponents/AboutUsHeroSection"
import AboutUsSection3 from "../Components/AboutUsComponents/AboutUsSection3"
import AboutUsSection4 from "../Components/AboutUsComponents/AboutUsSection4"
import AboutUsSection5 from "../Components/AboutUsComponents/AboutUsSection5"
import AboutUsSection6 from "../Components/AboutUsComponents/AboutUsSection6"
import AboutUsSection7 from "../Components/AboutUsComponents/AboutUsSection7"
import AboutUsSection8 from "../Components/AboutUsComponents/AboutUsSection8"
import ContactCTASection from "../Components/ContactCTASection"
import aboutUsContent from "../Content/aboutUsContent"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"




const AboutPage=()=>{
    const pageRef = useRef(null)

    const navigate = useNavigate;

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

        <>

        
          <Helmet>
          <title>About NVANZ | Premium Home Elevator Manufacturer in India</title>
        
          <meta
            name="description"
            content="Discover NVANZ Elevators, a home elevator manufacturer in India offering premium hydraulic, traction, MRL and panoramic lifts for modern homes."
          />
        
          <link
            rel="canonical"
            href="https://nvanzelevators.com/about-us"
          />
        
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
        
        
         
        
        
          <meta property="og:type" content="website" />
          <meta property="og:title" content="About NVANZ | Premium Home Elevator Manufacturer in India" />
        
          <meta
            property="og:description"
            content="Discover NVANZ Elevators, a home elevator manufacturer in India offering premium hydraulic, traction, MRL and panoramic lifts for modern homes."
          />
        
          <meta property="og:url" content="https://nvanzelevators.com/about-us" />
        
          <meta
            property="og:image"
            content="https://nvanzelevators.com/assets/compact-360°-panoramic-circular-home-elevator.webp"
          />

           <meta property="og:image:secure_url" content="https://nvanzelevators.com/assets/compact-360°-panoramic-circular-home-elevator.webp" />
  <meta property="og:image:type" content="image/webp" />
        
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="NVANZ premium home elevators" />
          <meta property="og:site_name" content="NVANZ Elevators" />
          <meta property="og:locale" content="en_IN" />
        


          <meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="About NVANZ | Premium Home Elevator Manufacturer in India"
/>

<meta
  name="twitter:description"
  content="Discover NVANZ Elevators and explore premium residential elevator solutions designed for modern homes."
/>

<meta
  name="twitter:image"
  content="https://nvanzelevators.com/assets/compact-360°-panoramic-circular-home-elevator.webp"
/>

<meta
  name="twitter:image:alt"
  content="NVANZ residential home elevator installation"
/>

        
          {/* Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nvanzelevators.com/#organization",
  "name": "NVANZ Elevators",
  "url": "https://nvanzelevators.com/",
  "description": "NVANZ Elevators provides premium residential elevator solutions, including hydraulic, traction, MRL and panoramic elevators.",
  "logo": "https://nvanzelevators.com/assets/Images/nvanz-logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/nvanz-elevators/",
    "https://www.youtube.com/@NVANZElevators",
    "https://www.facebook.com/people/NVANZ-Elevators/61595375391562/",
    "https://www.instagram.com/nvanzelevators?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw%3D%3D"
  ]
}
)}
          </script>
        
            <script type="application/ld+json">
            {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://nvanzelevators.com/about-us-#webpage",
  "url": "https://nvanzelevators.com/about-us-",
  "name": "About NVANZ Elevators",
  "description": "Learn about NVANZ Elevators, its residential elevator solutions, company vision and commitment to home mobility.",
  "isPartOf": {
    "@id": "https://nvanzelevators.com/#website"
  },
  "about": {
    "@id": "https://nvanzelevators.com/#organization"
  }
}

        )}
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
        

          <script type="application/ld+json">
            {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nvanzelevators.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://nvanzelevators.com/about-us-"
    }
  ]
}


        )}
          </script>
        </Helmet>
         <div ref={pageRef}>
            <AboutUsHeroSection/>
            
            <AboutUsSection2/>
        
            <AboutUsSection3/>
            <AboutUsSection4/>
            <AboutUsSection5/>
            <AboutUsSection6/>
            <AboutUsSection7/>
            {/* <AboutUsSection8/> */}
            <ContactCTASection contact={aboutUsContent?.section8} onClick={() => navigate('/contact-us')} onClick2={() => {
        window.location.href = `tel:${aboutUsContent?.section8?.phno}`;
    }} />
           
            

        </div>
        </>
       
    )
}

export default AboutPage