import React from 'react'
import RichText from '@/components/RichText'

import type { PageHeadingBlock as PageHeadingBlockProps } from '@/payload-types'

export const PageHeadingBlock: React.FC<PageHeadingBlockProps & { id?: string }> = ({
  heading,
  subtext,
}) => {
  return (
    <section className="pt-20 pb-16 border-b border-h-border">
      <div className="container">
        <div className="max-w-2xl">
          {heading && (
            <div className="features-grid__heading">
              <RichText data={heading} enableGutter={false} />
            </div>
          )}

          {subtext && (
            <p className="text-[1rem] text-h-text-2 font-light leading-[1.7] mt-1">{subtext}</p>
          )}
        </div>
      </div>
    </section>
  )
}
