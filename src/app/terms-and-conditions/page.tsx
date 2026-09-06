import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.businessName}.`,
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-[18px] md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">
              Terms &amp; Conditions
            </h1>
            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                These terms govern your use of the {siteConfig.businessName} website and
                appointment booking service.
              </p>
              <p>
                Placeholder content &mdash; replace with full terms covering appointment
                cancellations, late arrivals, payment and clinic policies before launch.
              </p>
              <p>
                Contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-teal font-medium">
                  {siteConfig.email}
                </a>{" "}
                with any questions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
