export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import TeamGrid from "@/components/TeamGrid";
import CTAVortex from "@/components/CTAVortex";

export default function AboutPage() {
  return (
    <main>
      <HeroAurora
        badge="Built for clarity and speed"
        title="Built for clarity, speed, and conversion."
        subtitle="We believe landing pages should be easy to ship and even easier to understand—so your visitors can decide quickly."
        primaryCta={{ label: "See pricing", href: "/#pricing" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <TeamGrid
        headline="A small team obsessed with conversion details."
        subheadline="Design, copy, and engineering working together to remove friction."
        members={[
          {
            name: "Avery Collins",
            title: "Design Systems Lead",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Builds clean UI systems with strong hierarchy, spacing rhythm, and accessible contrast.",
          },
          {
            name: "Jordan Patel",
            title: "Front-End Engineer",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Ships fast Next.js builds with Tailwind tokens and performance-first patterns.",
          },
          {
            name: "Samira El-Amin",
            title: "Conversion Copywriter",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Turns product value into benefit-led messaging and objection-handling FAQs.",
          },
        ]}
      />

      <CTAVortex
        title="Want a landing page that feels effortless to use?"
        subtitle="Start with a proven structure and customize the brand in minutes."
        ctaLabel="Get the template"
        ctaHref="/#pricing"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}
