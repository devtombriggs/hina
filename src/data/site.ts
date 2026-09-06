export const siteConfig = {
  businessName: "Lynch Physiotherapy & Wellness",
  shortName: "Lynch Physiotherapy",
  practitioner: "Hina Lynch",
  qualification: "Chartered Physiotherapist",
  phone: "07471 018457",
  phoneHref: "tel:+447471018457",
  email: "info@lynchphysiotherapy.co.uk",
  address: "Mitre House Kirkgate, Birstall, Batley WF17 9HE",
  addressLines: ["Mitre House Kirkgate", "Birstall, Batley WF17 9HE"],
  town: "Batley",
  region: "West Yorkshire",
  postcode: "WF17 9HE",
  tagline: "Move Better, Live Brighter",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://replace-with-booking-link.example",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Conditions", href: "#conditions" },
    { label: "Prices", href: "#prices" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const BOOKING_URL = siteConfig.bookingUrl;
