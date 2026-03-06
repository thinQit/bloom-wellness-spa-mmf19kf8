'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items?: AccordionItem[]
  className?: string
}

export default function Accordion({
  items = [
    {
      question: 'How quickly can I launch?',
      answer: 'Most teams publish their first high-converting page in under one day using our guided templates.',
    },
    {
      question: 'Do I need design or development support?',
      answer: 'No. AcmeFlow is built for marketers and founders, with no-code editing and reusable section blocks.',
    },
    {
      question: 'Can I track conversion performance?',
      answer: 'Yes. You get built-in analytics for clicks, form submissions, and funnel drop-offs in one dashboard.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Absolutely. Start with a 14-day free trial, no credit card required.',
    },
  ],
  className = '',
}: Partial<AccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className={cn('w-full space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-border bg-card">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-[#111827] md:text-base">{item.question}</span>
              <ChevronDown
                className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] px-5 pb-4' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
