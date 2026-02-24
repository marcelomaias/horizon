import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import type { FeaturesGridBlock as FeaturesGridBlockProps, Media } from '@/payload-types'

export const FeaturesGridBlock: React.FC<FeaturesGridBlockProps & { id?: string }> = ({
  eyebrow,
  heading,
  subtext,
  features,
}) => {
  if (!features || features.length === 0) return null

  return (
    <section className="py-24 border-b border-h-border">
      <div className="container">
        {/* Section header */}
        <div className="mb-14">
          {eyebrow && (
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-h-accent mb-3">
              {eyebrow}
            </p>
          )}
          {heading && (
            <div className="features-grid__heading">
              <RichText data={heading} enableGutter={false} />
            </div>
          )}
          {subtext && (
            <p className="text-[1rem] text-h-text-2 max-w-[440px] font-light leading-[1.7]">
              {subtext}
            </p>
          )}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-h-border border border-h-border rounded-(--h-radius) overflow-hidden">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-h-surface px-8 py-9 transition-colors duration-200 hover:bg-h-surface-2 cursor-default"
            >
              {feature.icon && typeof feature.icon === 'object' && (feature.icon as Media).url && (
                <Image
                  alt={(feature.icon as Media).alt || ''}
                  height={28}
                  src={(feature.icon as Media).url!}
                  className="mb-2 object-contain dark:invert dark:brightness-200"
                  width={28}
                />
              )}
              <h3 className="font-serif text-[1.1rem] tracking-[-0.02em] text-h-text mb-2">
                {feature.title}
              </h3>
              <p className="text-[0.875rem] text-h-text-2 leading-[1.65] font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
