'use client'

import Link from 'next/link'
import { ArrowUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brandName?: string
  columns?: FooterColumn[]
  address?: string
  hours?: string[]
  className?: string
}

export default function Footer({
  brandName = 'AcmeFlow',
  columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#cta' },
      ],
    },
  ],
  address = '1201 Market Street, Suite 400, San Francisco, CA 94103',
  hours = ['Mon–Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 2:00 PM', 'Sun: Closed'],
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-border bg-muted/40', className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="#" className="inline-flex items-center gap-2 text-lg font-bold text-[#111827]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              {brandName}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Turn more visitors into paying customers with a clean, conversion-focused growth system.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111827]">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-[#111827]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111827]">Visit us</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{address}</p>
            <ul className="mt-4 space-y-2">
              {hours.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-fit rounded-lg"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
