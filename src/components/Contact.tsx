"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only for now. Wire up to an API route or form service later.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 bg-brand-mint-light">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <SectionHeading
          overline="Contact"
          title="Get in Touch"
          intro="Have a question, or want to check if physiotherapy is right for you? Send us a message."
        />

        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-border p-7 shadow-[0_10px_30px_rgba(9,44,60,0.06)] flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-teal" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-1">
                    Phone
                  </p>
                  <a href={siteConfig.phoneHref} className="text-navy font-semibold hover:text-brand-teal">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-teal" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-1">
                    Email
                  </p>
                  <a href={`mailto:${siteConfig.email}`} className="text-navy font-semibold hover:text-brand-teal">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-teal" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-muted font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-navy font-semibold">
                    {siteConfig.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-teal rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <p className="text-white font-semibold text-lg">Prefer to book online?</p>
              <Button
                href={siteConfig.bookingUrl}
                external
                variant="white"
                icon={<Calendar size={16} aria-hidden />}
                iconPosition="left"
              >
                Book Appointment
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-border p-7 md:p-8 shadow-[0_10px_30px_rgba(9,44,60,0.06)] flex flex-col gap-5"
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-semibold text-navy">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary focus-visible:outline-2 focus-visible:outline-brand-teal"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-semibold text-navy">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary focus-visible:outline-2 focus-visible:outline-brand-teal"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-phone" className="text-sm font-semibold text-navy">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary focus-visible:outline-2 focus-visible:outline-brand-teal"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-semibold text-navy">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary resize-y focus-visible:outline-2 focus-visible:outline-brand-teal"
              />
            </div>
            <Button type="submit">Send Enquiry</Button>
            {submitted ? (
              <p role="status" className="text-sm text-brand-teal-deep font-medium">
                Thanks &mdash; your enquiry has been noted. We&apos;ll be in touch soon.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
