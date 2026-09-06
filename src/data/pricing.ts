export type PricingPlan = {
  title: string;
  duration: string;
  description: string;
  price: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "Initial Physiotherapy Assessment",
    duration: "45–60 minutes",
    description:
      "A thorough assessment of your condition, history and goals, plus hands-on treatment and a personalised plan.",
    price: "£XX",
  },
  {
    title: "Follow-up Physiotherapy",
    duration: "30–45 minutes",
    description:
      "Continued hands-on treatment and progression of your personalised care plan.",
    price: "£XX",
  },
  {
    title: "Rehabilitation Session",
    duration: "30–45 minutes",
    description:
      "Structured, goal-led rehabilitation following surgery, injury or illness.",
    price: "£XX",
  },
  {
    title: "Wellness / Movement Assessment",
    duration: "45 minutes",
    description:
      "A proactive assessment to help you move better, prevent injury and support long-term wellbeing.",
    price: "£XX",
  },
];
