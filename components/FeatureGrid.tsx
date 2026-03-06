"use client";

import { BarChart3, Clock3, LayoutTemplate, Lock, Sparkles, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  className?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  BarChart3,
  LayoutTemplate,
  Users,
  Lock,
  Clock3,
}

export default function FeatureGrid({
  title = 'Everything you need to increase conversions',
  subtitle = 'Purpose-built features that remove friction from first click to final signup.',
  features = [
    { icon: 'LayoutTemplate', title: 'High-converting templates', description: 'Launch proven landing sections designed to guide action.' },
    { icon: 'BarChart3', title: 'Live performance insights', description: 'Track conversions, click paths, and drop-off points in real time.' },
    { icon: 'Sparkles', title: 'AI copy suggestions', description: 'Generate benefit-led headlines and CTAs tailored to your audience.' },
    { icon: 'Users', title: 'Team collaboration', description: 'Work with marketing, design, and sales in one shared workspace.' },
    { icon: 'Lock', title: 'Secure by default', description: 'Enterprise-grade security and role controls keep your data protected.' },
    { icon: 'Clock3', title: 'Fast setup', description: 'Go from idea to published page in under 30 minutes.' },
  ],
  className = '',
}: Partial<FeatureGridProps>) {
  return (
    <section id="features" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <Card key={feature.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10">
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
