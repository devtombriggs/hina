import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Conditions from "@/components/Conditions";
import About from "@/components/About";
import SessionPricing from "@/components/SessionPricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lynchphysiotherapy.co.uk";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  name: siteConfig.businessName,
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLines[0],
    addressLocality: "Birstall, Batley",
    postalCode: siteConfig.postcode,
    addressRegion: siteConfig.region,
    addressCountry: "GB",
  },
  areaServed: "Batley WF17",
  founder: {
    "@type": "Person",
    name: siteConfig.practitioner,
    jobTitle: siteConfig.qualification,
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Conditions />
        <About />
        <SessionPricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
