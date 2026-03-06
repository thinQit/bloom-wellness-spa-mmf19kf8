"use client";

import { Star } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

interface TestimonialCardsProps {
  title?: string
  summaryText?: string
  ratingValue?: string
  testimonials?: Testimonial[]
  className?: string
}

export default function TestimonialCards({
  title = 'Loved by teams focused on growth',
  summaryText = 'Based on 800+ verified customer reviews',
  ratingValue = '4.9/5',
  testimonials = [
    { quote: 'We increased demo requests by 41% in the first month after launching with AcmeFlow.', name: 'Priya Shah', title: 'Head of Marketing', company: 'Brightline' },
    { quote: 'The structure is exactly what we needed: simple, clear, and built to convert visitors faster.', name: 'Daniel Kim', title: 'Growth Lead', company: 'NovaTech' },
    { quote: 'Our sales team noticed lead quality improved immediately. Visitors now understand value in seconds.', name: 'Mia Gonzalez', title: 'RevOps Manager', company: 'Summit AI' },
  ],
  className = '',
}: Partial<TestimonialCardsProps>) {
  return (
    <section id="testimonials" className={cn('py-20 md:py-24 bg-muted/40', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
            <p className="mt-2 text-muted-foreground">{summaryText}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={'star-' + i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#111827]">{ratingValue}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name + item.company} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-[#111827]/90">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-border">
                  <div className="flex h-full w-full items-center justify-center bg-[#2563EB]/10 text-sm font-semibold text-[#2563EB]">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.title} · {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
