export type Service = {
  title: string;
  description: string;
  icon: "activity" | "spine" | "dumbbell" | "leaf" | "armchair" | "handHeart";
};

export const services: Service[] = [
  {
    title: "Musculoskeletal Physiotherapy",
    description:
      "Assessment and treatment for aches, pains and injuries affecting muscles, joints and bones.",
    icon: "activity",
  },
  {
    title: "Sports Injuries",
    description:
      "Get back to doing what you love with tailored rehabilitation programmes.",
    icon: "dumbbell",
  },
  {
    title: "Rehabilitation",
    description:
      "Structured recovery plans following surgery, injury or illness.",
    icon: "spine",
  },
  {
    title: "Wellbeing & Prevention",
    description:
      "Stay active, reduce the risk of injury and improve your long-term health.",
    icon: "leaf",
  },
  {
    title: "Posture & Ergonomics",
    description:
      "Assessment and advice to help you move better in everyday life.",
    icon: "armchair",
  },
  {
    title: "Tailored Treatment Plans",
    description:
      "Individualised care focused on your goals and lifestyle.",
    icon: "handHeart",
  },
];
