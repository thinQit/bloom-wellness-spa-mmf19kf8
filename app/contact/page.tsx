export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import ContactForm from "@/components/ContactForm";
import CTAVortex from "@/components/CTAVortex";

export default function ContactPage() {
  return (
    <main>
      <HeroAurora
        badge="Replies within 1 business day"
        title="Talk to a human—get answers fast."
        subtitle="Questions about setup, customization, or which plan fits? Send a message and we’ll reply within 1 business day."
        primaryCta={{ label: "Email us", href: "mailto:hello@conversionlanding.studio" }}
        secondaryCta={{ label: "See FAQ", href: "/#faq" }}
      />

      <section id="contact-form">
        <ContactForm
          headline="Send a message"
          subheadline="We’ll help you get live quickly with a clean, conversion-first setup."
          contactInfo={[
            { icon: "Mail", label: "Email", value: "hello@conversionlanding.studio" },
            { icon: "Phone", label: "Phone", value: "+1 (415) 555-0138" },
            { icon: "Clock3", label: "Hours", value: "Mon–Fri, 9:00am–5:00pm PT" },
          ]}
        />
      </section>

      <CTAVortex
        title="Prefer to decide now?"
        subtitle="Pick a plan and start shipping your landing page today."
        ctaLabel="View pricing"
        ctaHref="/#pricing"
        secondaryCtaLabel="Back to home"
        secondaryCtaHref="/"
      />
    </main>
  );
}
