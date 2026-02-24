import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'

import type { PerformanceBlock as PerformanceBlockProps } from '@/payload-types'

export const PerformanceBlock: React.FC<PerformanceBlockProps & { id?: string }> = ({
  eyebrow,
  heading,
  body,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <section className="py-24 border-b border-h-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          {/* Left — text content */}
          <div>
            {eyebrow && (
              <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-h-accent mb-3.5">
                {eyebrow}
              </p>
            )}
            {heading && (
              <div className="performance__heading">
                <RichText data={heading} enableGutter={false} />
              </div>
            )}
            {body && (
              <div className="performance__body">
                <RichText data={body} enableGutter={false} />
              </div>
            )}
            {buttonLabel && (
              <Link className="btn-ghost" href={buttonHref || '/features'}>
                {buttonLabel}
              </Link>
            )}
          </div>

          {/* Right — metrics (hardcoded) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Metric cards */}
            <div className="bg-h-surface border border-h-border rounded-[var(--h-radius)] px-6 py-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--h-shadow-md)]">
              <div className="font-serif text-[2.4rem] tracking-[-0.04em] text-h-text leading-none mb-1.5">
                100<span className="text-[1.2rem] text-h-text-muted">/100</span>
              </div>
              <div className="text-[0.82rem] text-h-text-2 font-light">Lighthouse Performance</div>
              <span className="inline-block mt-2 text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] dark:bg-[#14532d] dark:text-[#86efac]">
                Perfect score
              </span>
            </div>

            <div className="bg-h-surface border border-h-border rounded-[var(--h-radius)] px-6 py-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--h-shadow-md)]">
              <div className="font-serif text-[2.4rem] tracking-[-0.04em] text-h-text leading-none mb-1.5">
                &lt;1<span className="text-[1.2rem] text-h-text-muted">s</span>
              </div>
              <div className="text-[0.82rem] text-h-text-2 font-light">First Contentful Paint</div>
              <span className="inline-block mt-2 text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] dark:bg-[#14532d] dark:text-[#86efac]">
                Edge CDN
              </span>
            </div>

            {/* Lighthouse row */}
            <div className="col-span-2 bg-h-surface border border-h-border rounded-[var(--h-radius)] p-6">
              <div className="text-[0.72rem] uppercase tracking-[0.07em] text-h-text-muted font-semibold mb-4">
                Lighthouse Audit — horizonplatform.com
              </div>
              <div className="flex gap-4">
                {[
                  { score: 100, label: 'Performance' },
                  { score: 100, label: 'Accessibility' },
                  { score: 100, label: 'Best Practices' },
                  { score: 100, label: 'SEO' },
                ].map((item) => (
                  <div key={item.label} className="flex-1 text-center">
                    <div className="w-[52px] h-[52px] rounded-full mx-auto mb-2 grid place-items-center font-serif text-[1rem] border-[3px] border-[#22c55e] text-[#166534] bg-[#f0fdf4] dark:bg-[#14532d] dark:text-[#86efac]">
                      {item.score}
                    </div>
                    <div className="text-[0.68rem] text-h-text-muted leading-[1.3]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
