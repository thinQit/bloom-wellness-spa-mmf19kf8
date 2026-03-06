"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface StatItem {
  label: string
  value: string
}

interface LogoCloudProps {
  title?: string
  logos?: string[]
  stats?: StatItem[]
  className?: string
}

export default function LogoCloud({
  title = 'Trusted by high-growth teams worldwide',
  logos = ['NovaTech', 'Brightline', 'Clearbit Labs', 'Summit AI', 'Northstar', 'VelocityOps'],
  stats = [
    { label: 'Avg. conversion lift', value: '38%' },
    { label: 'Active businesses', value: '2,000+' },
    { label: 'Customer satisfaction', value: '4.9/5' },
  ],
  className = '',
}: Partial<LogoCloudProps>) {
  return (
    <section id="social-proof" className={cn('py-20 md:py-24 bg-muted/40', className)}>
      <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{title}</p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-semibold text-[#111827]/70"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#111827]">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
