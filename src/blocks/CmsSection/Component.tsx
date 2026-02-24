import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'

import type { CmsSectionBlock as CmsSectionBlockProps } from '@/payload-types'

export const CmsSectionBlock: React.FC<CmsSectionBlockProps & { id?: string }> = ({
  eyebrow,
  heading,
  body,
  checklistItems,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <section className="py-24 border-b border-h-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left — text content */}
          <div>
            {eyebrow && (
              <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-h-accent mb-3.5">
                {eyebrow}
              </p>
            )}

            {heading && (
              <div className="cms-section__heading">
                <RichText data={heading} enableGutter={false} />
              </div>
            )}

            {body && (
              <div className="cms-section__body">
                <RichText data={body} enableGutter={false} />
              </div>
            )}

            {checklistItems && checklistItems.length > 0 && (
              <ul className="list-none flex flex-col gap-2.5 mb-9">
                {checklistItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[0.9rem] text-h-text-2 font-light before:content-['✓'] before:text-h-accent before:font-bold before:shrink-0 before:mt-px"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            )}

            {buttonLabel && (
              <Link className="btn-primary" href={buttonHref || '/demo'}>
                {buttonLabel}
              </Link>
            )}
          </div>

          {/* Right — mini mockup (hardcoded) */}
          <div className="bg-h-surface border border-h-border rounded-(--h-radius) overflow-hidden shadow-(--h-shadow-lg)">
            <div className="flex items-center gap-2 bg-h-surface-2 border-b border-h-border px-3.5 py-2.5">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex gap-1 ml-1">
                <div className="text-[0.7rem] px-2.5 py-0.5 rounded-full bg-h-surface border border-h-border text-h-text font-medium">
                  Layout
                </div>
                <div className="text-[0.7rem] px-2.5 py-0.5 rounded-full text-h-text-muted">
                  Settings
                </div>
                <div className="text-[0.7rem] px-2.5 py-0.5 rounded-full text-h-text-muted">
                  SEO
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1.75">
              {[
                { icon: '🦸', name: 'Hero', hint: 'Headline + CTA' },
                { icon: '⚡', name: 'Features Grid', hint: '3 cards · icon layout' },
                { icon: '💬', name: 'Testimonials', hint: '3 quotes' },
                { icon: '🚀', name: 'CTA Banner', hint: 'Primary action' },
              ].map((block) => (
                <div
                  key={block.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 bg-h-bg border border-h-border rounded-(--h-radius-sm) transition-shadow duration-150 hover:shadow-(--h-shadow-sm)"
                >
                  <div className="w-6.5 h-6.5 rounded-[6px] bg-h-surface border border-h-border grid place-items-center text-xs shrink-0">
                    {block.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.75rem] font-medium text-h-text">{block.name}</div>
                    <div className="text-[0.65rem] text-h-text-muted">{block.hint}</div>
                  </div>
                  <span className="text-[10px] text-h-text-muted">⠿</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
