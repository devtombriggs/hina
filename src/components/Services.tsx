import {
  Activity,
  Dumbbell,
  PersonStanding,
  Leaf,
  Armchair,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import SectionHeading from "./SectionHeading";

const iconMap: Record<Service["icon"], LucideIcon> = {
  activity: Activity,
  spine: PersonStanding,
  dumbbell: Dumbbell,
  leaf: Leaf,
  armchair: Armchair,
  handHeart: HandHeart,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-28"
      style={{
        background: "linear-gradient(to bottom, #ffffff, var(--brand-mint-light))",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16">
        <SectionHeading
          overline="Our Services"
          title="How We Can Help"
          intro="A range of physiotherapy and wellness services tailored to your goals, whether you're recovering from injury, managing a long-term condition, or simply want to move and feel better."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-border p-7 md:p-8 shadow-[0_10px_30px_rgba(9,44,60,0.06)] hover:shadow-[0_16px_40px_rgba(9,44,60,0.10)] hover:border-brand-teal/40 transition-all duration-200"
              >
                <span className="w-14 h-14 rounded-full bg-brand-mint flex items-center justify-center mb-5">
                  <Icon size={26} className="text-brand-teal" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
