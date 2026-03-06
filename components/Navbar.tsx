'use client'

import Link from 'next/link'
import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavbarLink[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'AcmeFlow',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaText = 'Start Free Trial',
  ctaHref = '#cta',
  className = '',
}: Partial<NavbarProps>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80',
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="inline-flex items-center gap-2 text-lg font-bold text-[#111827]">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          {logoText}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm font-medium text-[#111827]/80 transition-colors hover:text-[#111827]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#2563EB] px-6 py-3 font-semibold tracking-tight text-white hover:bg-[#1D4ED8]">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-[#111827]" /> : <Menu className="h-5 w-5 text-[#111827]" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href + '-mobile'}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-[#111827]/85 hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-lg bg-[#2563EB] px-6 py-3 font-semibold tracking-tight text-white hover:bg-[#1D4ED8]"
            >
              <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                {ctaText}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
