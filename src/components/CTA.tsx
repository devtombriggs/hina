import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <Image
        src="/images/cta-background-placeholder.svg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-brand-teal-deep/80" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-brand-mint">
            Take the First Step
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Ready to Move Better?
          </h2>
          <p className="text-white/85 max-w-md">
            Book your appointment today and start your journey to a healthier, stronger you.
          </p>
        </div>
        <Button
          href={siteConfig.bookingUrl}
          external
          variant="white"
          icon={<Calendar size={18} aria-hidden />}
          iconPosition="left"
          className="shrink-0"
        >
          <span className="inline-flex items-center gap-2">
            Book an Appointment <ArrowRight size={16} aria-hidden />
          </span>
        </Button>
      </div>
    </section>
  );
}
