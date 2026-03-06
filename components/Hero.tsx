"use client";

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroProps {
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  highlights?: string[]
  imageSrc?: string
  className?: string
}

export default function Hero({
  headline = 'Convert more leads with a landing page that sells for you',
  subheadline = 'AcmeFlow helps growth teams launch high-converting funnels with clear messaging, social proof, and conversion-optimized CTAs.',
  primaryCtaText = 'Get Started Now',
  primaryCtaHref = '#pricing',
  secondaryCtaText = 'Watch Demo',
  secondaryCtaHref = '#features',
  highlights = ['No-code setup in minutes', 'Built-in conversion best practices', 'Trusted by 2,000+ teams'],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroProps>) {
  return (
    <section className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">{subheadline}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold tracking-tight text-white hover:bg-[#1D4ED8]">
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold tracking-tight">
              <Link href={secondaryCtaHref}>
                <PlayCircle className="mr-2 h-4 w-4" />
                {secondaryCtaText}
              </Link>
            </Button>
          </div>

          <ul className="grid gap-2 pt-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-sm text-[#111827]/90">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <Image
            src={imageSrc}
            alt="Hero visual showing product dashboard and conversion metrics"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
