export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import LogoCloud from "@/components/LogoCloud";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <HeroAurora
          badge="No backend required. Deploy on Vercel in minutes."
          title="Launch a high-converting landing page in a single afternoon."
          subtitle="A clean, conversion-first layout with social proof, testimonials, pricing, and FAQ—built with Next.js, Tailwind, and shadcn/ui."
          primaryCta={{ label: "Get the template", href: "#pricing" }}
          secondaryCta={{ label: "See what’s included", href: "#features" }}
        />
      </section>

      <section id="social-proof" className="py-20 md:py-24">
        <LogoCloud />
      </section>

      <section id="features">
        <FeaturesCards3D
          badge="Everything included"
          title="Everything you need to convert—nothing you don’t."
          subtitle="A focused set of sections and components that guide visitors from value → proof → decision."
          features={[
            {
              icon: "LayoutTemplate",
              title: "Conversion-first layout",
              description:
                "Hero, proof, features, testimonials, pricing, FAQ, and a final CTA—sequenced to reduce friction and increase signups.",
            },
            {
              icon: "MousePointerClick",
              title: "High-contrast CTA system",
              description:
                "Primary CTA uses vibrant blue; secondary actions use subtle outlines to keep focus on the main goal.",
            },
            {
              icon: "Component",
              title: "Reusable shadcn/ui components",
              description:
                "Buttons, cards, accordion, badges, and dialogs—consistent styling with Tailwind tokens.",
            },
            {
              icon: "Smartphone",
              title: "Responsive sections",
              description:
                "Grid and spacing tuned for mobile readability and desktop scanning, with comfortable line-length and clear hierarchy.",
            },
            {
              icon: "SearchCheck",
              title: "SEO-ready structure",
              description:
                "Semantic headings, Open Graph defaults, and clean internal anchors for fast indexing and shareable previews.",
            },
            {
              icon: "Sparkles",
              title: "Subtle motion",
              description:
                "Fade-in-up on scroll and gentle hover states to add polish without distracting from the CTA.",
            },
          ]}
        />
      </section>

      <section id="testimonials">
        <TestimonialsAnimated
          title="Clear messaging. Clean design. Better conversion."
          subtitle="What teams say after switching to a focused landing structure."
          autoplay
          testimonials={[
            {
              quote:
                "We replaced a cluttered homepage with this flow and saw a 22% lift in demo requests in the first week.",
              name: "Maya Chen",
              designation: "Growth Lead, SignalForge",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "The spacing, hierarchy, and CTA discipline are spot on. We shipped a polished page before lunch.",
              name: "Ethan Rivera",
              designation: "Product Designer, Northpeak Studio",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Pricing and FAQ sections answered objections upfront. Fewer support emails, more signups.",
              name: "Priya Nair",
              designation: "Founder, Lumen Labs",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section id="pricing">
        <PricingTable
          headline="Simple pricing that matches a simple build."
          subheadline="Pick a plan, publish your page, and start collecting leads today."
          tiers={[
            {
              name: "Starter",
              price: "$19",
              period: "/month",
              description: "Perfect for a single product or campaign.",
              features: [
                "All core landing sections",
                "Responsive layout + Tailwind tokens",
                "Basic SEO meta defaults",
                "Email capture form (static)",
              ],
              ctaLabel: "Start with Starter",
              ctaHref: "#cta",
            },
            {
              name: "Pro",
              price: "$39",
              period: "/month",
              description: "For teams running multiple experiments.",
              features: [
                "Everything in Starter",
                "A/B-ready section variants (copy + layout)",
                "Advanced testimonial + logo layouts",
                "Priority design tokens (CTA + typography presets)",
              ],
              ctaLabel: "Go Pro",
              ctaHref: "#cta",
              highlighted: true,
            },
            {
              name: "Team",
              price: "$79",
              period: "/month",
              description: "For startups shipping fast with consistent branding.",
              features: [
                "Everything in Pro",
                "Brand kit setup (colors + type scale)",
                "Reusable component library page",
                "Implementation handoff checklist",
              ],
              ctaLabel: "Choose Team",
              ctaHref: "#cta",
            },
          ]}
        />
      </section>

      <section id="faq">
        <FAQAccordion
          headline="Questions, answered."
          subheadline="Everything you need to know before you ship."
          items={[
            {
              question: "Do I need a backend or database?",
              answer:
                "No. This is a website-focused landing page. Forms can be wired to your provider later, but the default build is static and deployable.",
            },
            {
              question: "Can I swap the CTA color to purple?",
              answer:
                "Yes. The palette includes both blue and purple. You can set purple as primary for campaigns where it performs better.",
            },
            {
              question: "Is it optimized for mobile?",
              answer:
                "Yes. Sections use conversion-friendly spacing, readable type sizes, and responsive grids so the CTA remains clear on small screens.",
            },
            {
              question: "What’s included in the template?",
              answer:
                "Navbar, hero, social proof, features, testimonials, pricing, FAQ accordion, final CTA, and footer—plus reusable UI components and design tokens.",
            },
            {
              question: "Can I use this for client work?",
              answer:
                "Yes for typical commercial usage. If you need a specific license file, add it to the repo and align it with your distribution model.",
            },
          ]}
        />
      </section>

      <section id="cta">
        <CTAVortex
          title="Ready to publish a landing page that converts?"
          subtitle="Choose a plan and ship today—clean design, clear messaging, and a focused CTA flow."
          ctaLabel="Get the template"
          ctaHref="#pricing"
          secondaryCtaLabel="Email us"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
