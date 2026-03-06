export const dynamic = 'force-dynamic';

import CTAVortex from "@/components/CTAVortex";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <main className="py-20 md:py-24">
      <section className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          A plain-language overview of what we collect and why.
        </p>
        <p className="mt-4 text-sm text-gray-500">Effective date: January 15, 2026</p>

        <Separator className="my-10" />

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Information you provide</h2>
            <p className="mt-2 text-gray-700">
              If you contact us, we store your name, email address, and message so we can respond.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Analytics</h2>
            <p className="mt-2 text-gray-700">
              We may use privacy-friendly analytics to measure page views and referral sources. This
              helps us improve content and performance.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Data retention</h2>
            <p className="mt-2 text-gray-700">
              We keep contact messages for up to 12 months unless you request deletion sooner.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-700">
              For privacy requests, email privacy@conversionlanding.studio.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <CTAVortex
          title="Questions about privacy?"
          subtitle="Reach out and we’ll provide a clear answer."
          ctaLabel="Contact"
          ctaHref="/contact"
          secondaryCtaLabel="Back home"
          secondaryCtaHref="/"
        />
      </section>
    </main>
  );
}
