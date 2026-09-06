import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-28 bg-brand-mint-light">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <SectionHeading overline="Testimonials" title="What Our Clients Say" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col bg-white rounded-2xl border border-border p-7 shadow-[0_10px_30px_rgba(9,44,60,0.06)]"
            >
              <Quote size={28} className="text-brand-teal mb-4" aria-hidden />
              <blockquote className="text-text-secondary text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-1 mt-5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-star text-star" aria-hidden />
                ))}
              </div>
              <figcaption className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal-deep font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </span>
                <span className="text-navy font-semibold text-sm">{testimonial.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
