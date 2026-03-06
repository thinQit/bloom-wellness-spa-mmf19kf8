"use client";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = 'Ready to increase conversions this month?',
  description = 'Launch a performance-focused landing page with clear messaging, persuasive design, and CTA flows built to drive action.',
  ctaLabel = 'Book a Demo',
  ctaHref = '#',
  secondaryCtaLabel = '',
  secondaryCtaHref = '#',
}: Partial<CTAVortexProps>) {
  return (
    <section className="mx-auto h-[30rem] w-full overflow-hidden rounded-md">
      <Vortex
        backgroundColor="black"
        baseHue={210}
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">{headline}</h2>
        {description && <p className="mt-6 max-w-xl text-center text-sm text-white/70 md:text-xl">{description}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white px-8 py-6 text-lg text-black hover:bg-white/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="border-white/30 px-8 py-6 text-lg text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
