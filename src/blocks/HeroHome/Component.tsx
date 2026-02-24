import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'

import type { HeroHomeBlock as HeroHomeBlockProps } from '@/payload-types'
import ScreenShotGeneric from '@/components/ScreenShotGeneric/Component'

export const HeroHomeBlock: React.FC<HeroHomeBlockProps & { id?: string }> = ({
  heading,
  subtext,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}) => {
  return (
    <section className="hero">
      <div className="relative mx-auto max-w-275 px-10">
        {/* Heading */}
        {heading && (
          <div className="hero__heading">
            <RichText data={heading} enableGutter={false} />
          </div>
        )}

        {/* Subtext */}
        {subtext && <p className="hero__sub">{subtext}</p>}

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-18 animation-[fadeUp_0.55s_0.24s_ease_both]">
          {primaryButtonLabel && (
            <Link className="btn-primary btn-lg" href={primaryButtonHref || '/demo'}>
              {primaryButtonLabel}
            </Link>
          )}
          {secondaryButtonLabel && (
            <Link className="btn-ghost btn-lg" href={secondaryButtonHref || '/demo'}>
              {secondaryButtonLabel}
            </Link>
          )}
        </div>

        {/* Admin UI Mockup — hardcoded, updated via code when UI changes */}
        <ScreenShotGeneric />
        {/* end .hero__screenshot-wrap */}
      </div>
    </section>
  )
}
