
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://nvanzelevators.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "NVANZ Elevators",
  url: `${BASE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/NVANZLOGO.png`
  },
  description:
    "NVANZ Elevators provides residential elevator solutions, including hydraulic, traction, MRL and panoramic elevators.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Apeejay Business Center, Raj Bhavan Road",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500082",
    addressCountry: "IN"
  },
  knowsAbout: [
    "Home Elevators",
    "Residential Elevators",
    "Hydraulic Home Elevators",
    "Traction Home Elevators",
    "MRL Home Elevators",
    "Panoramic Home Elevators"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: "NVANZ Elevators",
  publisher: {
    "@id": `${BASE_URL}/#organization`
  },
  inLanguage: "en-IN"
};

const safeJsonLd = (data) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const SEO = ({ product }) => {
  const seo = product?.seo;

//   console.log(seo)

  if (!seo) return null;

  const pageUrl = seo.canonical;
  const productName = seo.schema.productName;
  const productDescription = seo.schema.description;
  const productImage = seo.openGraph.image;

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: productName,
    description: productDescription,

    brand: {
      "@type": "Brand",
      name: "NVANZ Elevators"
    },

    manufacturer: {
      "@id": `${BASE_URL}/#organization`
    },

    category: seo.schema.category,
    url: pageUrl,
    image: [productImage]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${BASE_URL}/products`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: pageUrl
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <html lang="en" />

      <title>{seo.title}</title>

      <meta
        name="description"
        content={seo.description}
      />
<meta
  name="keywords"
  content={[
    seo.focusKeyword,
    ...(seo.secondaryKeywords || [])
  ].filter(Boolean).join(", ")}
/>
      <link rel="canonical" href={pageUrl} />

      <meta
        name="robots"
        content={seo.robots || "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={seo.openGraph.type} />

      <meta
        property="og:title"
        content={seo.openGraph.title}
      />

      <meta
        property="og:description"
        content={seo.openGraph.description}
      />

      <meta property="og:url" content={pageUrl} />

      <meta
        property="og:image"
        content={productImage}
      />

      <meta
        property="og:image:alt"
        content={seo.openGraph.imageAlt}
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta
        property="og:site_name"
        content="NVANZ Elevators"
      />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta
        name="twitter:card"
        content={seo.twitter.card}
      />

      <meta
        name="twitter:title"
        content={seo.twitter.title}
      />

      <meta
        name="twitter:description"
        content={seo.twitter.description}
      />

      <meta
        name="twitter:image"
        content={seo.twitter.image}
      />

      <meta
        name="twitter:image:alt"
        content={seo.twitter.imageAlt}
      />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {safeJsonLd(organizationSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {safeJsonLd(websiteSchema)}
      </script>

      {/* Product Schema */}
      <script type="application/ld+json">
        {safeJsonLd(productSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {safeJsonLd(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
