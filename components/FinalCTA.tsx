"use client";

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FinalCTAProps {
  title?: string
  description?: string
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

export default function FinalCTA({
  title = 'Ready to turn more traffic into revenue?',
  description = 'Launch a conversion-focused experience in days, not weeks. No clutter. No guesswork. Just results.',
  bullets = ['14-day free trial', 'No credit card required', 'Cancel anytime'],
  ctaText = 'Start Free Trial',
  ctaHref = '#',
  className = '',
}: Partial<FinalCTAProps>) {
  return (
    <section id="cta" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-[#111827] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-white/80">{description}</p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="inline-flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:justify-self-end">
              <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold tracking-tight text-white hover:bg-[#1D4ED8]">
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-3 text-xs text-white/70">Join 2,000+ teams already growing with AcmeFlow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
