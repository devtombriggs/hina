import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lynchphysiotherapy.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lynch Physiotherapy & Wellness | Chartered Physiotherapist in Birstall",
    template: "%s | Lynch Physiotherapy & Wellness",
  },
  description:
    "Personalised physiotherapy, rehabilitation and wellbeing support from Lynch Physiotherapy & Wellness in Birstall, Batley.",
  keywords: [
    "physiotherapy Batley",
    "physiotherapist Birstall",
    "physiotherapy WF17",
    "sports injury clinic Batley",
    "chartered physiotherapist West Yorkshire",
    "Lynch Physiotherapy",
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    title: "Lynch Physiotherapy & Wellness | Chartered Physiotherapist in Birstall",
    description:
      "Personalised physiotherapy, rehabilitation and wellbeing support from Lynch Physiotherapy & Wellness in Birstall, Batley.",
    url: siteUrl,
    siteName: siteConfig.businessName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynch Physiotherapy & Wellness | Chartered Physiotherapist in Birstall",
    description:
      "Personalised physiotherapy, rehabilitation and wellbeing support from Lynch Physiotherapy & Wellness in Birstall, Batley.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#007f87",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
