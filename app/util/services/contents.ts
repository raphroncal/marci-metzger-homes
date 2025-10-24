type ContentItem = {
  title: string;
  description: string;
  url: string;
  alt: string;
};

export const contents = {
  "Experience & Tenure": {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    url: "bg-[url(/images/services/service-1.jpg)]",
    alt: "real estate image",
  },
  "Fair Price": {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    url: "bg-[url(/images/services/service-2.jpg)]",
    alt: "real estate image",
  },
  Expertise: {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    url: "bg-[url(/images/services/service-3.jpg)]",
    alt: "real estate image",
  },
} as const satisfies Record<string, ContentItem>;

export type ContentKey = keyof typeof contents;
