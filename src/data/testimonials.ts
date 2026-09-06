export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "James H.",
    quote:
      "Excellent care from start to finish. I was given a clear plan and could see progress after every session.",
    rating: 5,
  },
  {
    name: "Sarah C.",
    quote:
      "After struggling with persistent back pain, I finally feel like myself again. The tailored exercises and advice have made such a difference.",
    rating: 5,
  },
  {
    name: "Mark T.",
    quote:
      "Friendly, approachable and incredibly skilled. I'd highly recommend Lynch Physiotherapy to anyone.",
    rating: 5,
  },
];
