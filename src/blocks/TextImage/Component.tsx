import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RichText from '@/components/RichText'

import type { TextImageBlock as TextImageBlockProps, Media } from '@/payload-types'

export const TextImageBlock: React.FC<TextImageBlockProps & { id?: string }> = ({
  eyebrow,
  heading,
  body,
  buttonLabel,
  buttonHref,
  image,
  imageFirst,
}) => {
  const imageData = image && typeof image === 'object' ? (image as Media) : null

  return (
    <section className="py-24 border-b border-h-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text content */}
          <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
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

            {buttonLabel && (
              <Link className="btn-primary mt-6" href={buttonHref || '/demo'}>
                {buttonLabel}
              </Link>
            )}
          </div>

          {/* Image */}
          <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
            {imageData?.url ? (
              <div
                className="rounded-(--h-radius) overflow-hidden border border-h-border shadow-(--h-shadow-lg)"
                style={{
                  animation: 'screenshotRise 0.8s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
                }}
              >
                <Image
                  src={imageData.url}
                  alt={imageData.alt || ''}
                  width={imageData.width || 800}
                  height={imageData.height || 600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="rounded-(--h-radius) border border-h-border bg-h-surface-2 aspect-4/3" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
