import Image from "next/image";
import { Calendar, ArrowRight, HeartHandshake, Activity, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "./Button";

const valueItems = [
  { icon: HeartHandshake, label: "Personalised Care" },
  { icon: Activity, label: "Restore Movement" },
  { icon: Sparkles, label: "Enhance Wellbeing" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white to-brand-pale overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16 py-14 md:py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center lg:min-h-[700px]">
          <div className="flex flex-col gap-6 lg:gap-7 max-w-xl">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-brand-teal">
              Move Better &bull; Feel Stronger &bull; Live Well
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.08] text-navy">
              Expert Physiotherapy{" "}
              <span className="text-brand-teal">for a Healthier, Happier You</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Personalised, evidence-based care to help you recover, restore movement and
              enhance your overall wellbeing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={siteConfig.bookingUrl} external icon={<Calendar size={18} aria-hidden />} iconPosition="left">
                Book an Appointment
              </Button>
              <Button href="#about" variant="secondary" icon={<ArrowRight size={18} aria-hidden />}>
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 pt-6">
              {valueItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 w-24">
                  <span className="w-14 h-14 rounded-full bg-brand-mint flex items-center justify-center">
                    <Icon size={24} className="text-brand-teal" aria-hidden />
                  </span>
                  <span className="text-xs md:text-sm font-medium text-text-primary leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[420px] lg:h-[680px] rounded-3xl lg:rounded-none overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[46%]">
            <Image
              src="/images/hero-physio-placeholder.svg"
              alt="Physiotherapist treating a patient's knee in a modern clinic"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
              priority
            />
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-24"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
              }}
              aria-hidden
            />
            <p className="script-text absolute top-8 right-8 text-white text-2xl md:text-3xl leading-tight text-right drop-shadow">
              Move
              <br />
              Better
              <br />
              Live
              <br />
              Brighter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
