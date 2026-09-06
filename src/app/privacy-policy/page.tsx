import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-[18px] md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">
              Privacy Policy
            </h1>
            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                This page outlines how {siteConfig.businessName} collects, uses and protects
                any information you provide when using this website or booking an
                appointment.
              </p>
              <p>
                Placeholder content &mdash; replace with a full privacy policy covering data
                collection, storage, third-party booking providers and your rights under UK
                GDPR before launch.
              </p>
              <p>
                Contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-teal font-medium">
                  {siteConfig.email}
                </a>{" "}
                with any questions about your data.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
