import { conditions } from "@/data/conditions";
import SectionHeading from "./SectionHeading";

export default function Conditions() {
  return (
    <section id="conditions" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <SectionHeading overline="What We Treat" title="Conditions We Treat" />

        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {conditions.map((condition) => (
            <span
              key={condition}
              className="px-5 py-3 rounded-full bg-brand-mint-light border border-border text-text-primary text-sm md:text-[15px] font-medium"
            >
              {condition}
            </span>
          ))}
        </div>

        <p className="mt-10 text-center text-text-secondary max-w-xl mx-auto leading-relaxed">
          If you&apos;re unsure whether physiotherapy can help, get in touch and we&apos;ll be
          happy to advise.
        </p>
      </div>
    </section>
  );
}
