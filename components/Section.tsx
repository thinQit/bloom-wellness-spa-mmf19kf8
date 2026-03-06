"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  muted?: boolean
  className?: string
  containerClassName?: string
  children?: ReactNode
}

export default function Section({
  id = '',
  muted = false,
  className = '',
  containerClassName = '',
  children = null,
}: Partial<SectionProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-24', muted && 'bg-muted/40', className)}>
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6', containerClassName)}>{children}</div>
    </section>
  )
}
