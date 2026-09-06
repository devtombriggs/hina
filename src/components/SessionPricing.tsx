import { Calendar, Clock } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function SessionPricing() {
  return (
    <section id="prices" className="py-16 md:py-24 lg:py-28 bg-brand-pale">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <SectionHeading
          overline="Appointments & Sessions"
          title="Appointments & Sessions"
          intro="Simple, transparent session options. Get in touch if you're not sure which is right for you."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col bg-white rounded-2xl border border-border p-7 shadow-[0_10px_30px_rgba(9,44,60,0.06)] hover:shadow-[0_16px_40px_rgba(9,44,60,0.10)] transition-shadow duration-200"
            >
              <div className="flex items-center gap-2 text-text-muted text-xs font-semibold uppercase tracking-wide mb-3">
                <Clock size={15} aria-hidden />
                <span>{plan.duration}</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{plan.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {plan.description}
              </p>
              <p className="text-3xl font-extrabold text-brand-teal mt-6 mb-5">{plan.price}</p>
              <Button
                href={siteConfig.bookingUrl}
                external
                className="w-full"
                icon={<Calendar size={16} aria-hidden />}
                iconPosition="left"
              >
                Book
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-muted">
          Prices shown are placeholders pending final clinic pricing.
        </p>
      </div>
    </section>
  );
}
