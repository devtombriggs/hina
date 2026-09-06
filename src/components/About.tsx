import Image from "next/image";
import { Check, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

const checklist = [
  "Chartered Physiotherapist",
  "Evidence-based treatment",
  "Personalised care plans",
  "Welcoming and professional environment",
];

const stats = [
  { icon: HeartHandshake, label: "Personalised Care" },
  { icon: ShieldCheck, label: "Lasting Results" },
  { icon: Users, label: "Support Every Step" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-brand-teal">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              A Holistic Approach to <span className="text-brand-teal">Your Health</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              At {siteConfig.businessName}, we believe in more than just treating the
              symptoms. Our approach is centred around understanding the root cause of your
              condition, so we can help you move better, feel stronger and live a healthier,
              more active life.
            </p>

            <ul className="flex flex-col gap-3.5 pt-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <p className="script-text text-3xl text-brand-teal">{siteConfig.practitioner}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mt-1">
                {siteConfig.qualification}
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/clinic-room-placeholder.svg"
                alt="Modern physiotherapy treatment room"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <p className="script-text absolute top-6 left-6 text-white text-xl md:text-2xl leading-tight drop-shadow">
                Stronger
                <br />
                Movement
                <br />
                Happier
                <br />
                You
              </p>
            </div>

            <div className="relative lg:absolute lg:-bottom-8 lg:left-6 lg:right-6 mt-6 lg:mt-0 bg-brand-teal rounded-2xl shadow-[0_16px_40px_rgba(9,44,60,0.15)] px-6 py-6 grid grid-cols-3 gap-2">
              {stats.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center gap-2 px-2 ${
                    i > 0 ? "border-l border-white/25" : ""
                  }`}
                >
                  <Icon size={22} className="text-white" aria-hidden />
                  <span className="text-white text-xs md:text-sm font-semibold leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
