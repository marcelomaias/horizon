import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'

import type { CtaBannerBlock as CtaBannerBlockProps } from '@/payload-types'

export const CtaBannerBlock: React.FC<CtaBannerBlockProps & { id?: string }> = ({
  heading,
  subtext,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}) => {
  return (
    <section className="py-24 text-center  bg-[#0f0e0d]">
      <div className="container relative z-10">
        {heading && (
          <div className="cta-banner__heading">
            <RichText data={heading} enableGutter={false} />
          </div>
        )}

        {subtext && (
          <p className="text-[1rem] text-[rgba(247,246,243,0.55)] max-w-100 mx-auto mb-10 font-light leading-[1.7] text-center">
            {subtext}
          </p>
        )}

        <div className="flex gap-2.5 justify-center flex-wrap">
          {primaryButtonLabel && (
            <Link
              className="bg-[#f7f6f3] text-[#0f0e0d] px-6.5 py-3.25 rounded-full text-[0.95rem] font-medium no-underline transition-[opacity,transform] duration-180 hover:opacity-[0.88] hover:-translate-y-px"
              href={primaryButtonHref || '/demo'}
            >
              {primaryButtonLabel}
            </Link>
          )}
          {secondaryButtonLabel && (
            <Link
              className="bg-[rgba(255,255,255,0.08)] text-[rgba(247,246,243,0.75)] border border-[rgba(255,255,255,0.15)] px-6.5 py-3.25 rounded-full text-[0.95rem] font-normal no-underline transition-[background,color] duration-180 hover:bg-[rgba(255,255,255,0.14)] hover:text-[#f7f6f3]"
              href={secondaryButtonHref || '/demo'}
            >
              {secondaryButtonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
