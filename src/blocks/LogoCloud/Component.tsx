import React from 'react'
import Image from 'next/image'

import type { LogoCloudBlock as LogoCloudBlockProps } from '@/payload-types'

export const LogoCloudBlock: React.FC<LogoCloudBlockProps & { id?: string }> = ({
  label,
  logos,
}) => {
  if (!logos || logos.length === 0) return null

  return (
    <div className="py-12 pt-18 border-b border-h-border bg-h-surface">
      <div className="container">
        {label && (
          <p className="text-center text-[0.72rem] font-semibold uppercase tracking-widest text-h-text-muted mb-7">
            {label}
          </p>
        )}

        <div className="flex items-center justify-center gap-13 flex-wrap">
          {logos.map((item, i) => {
            const image = item.image

            if (!image || typeof image !== 'object' || !image.url) return null

            return (
              <div
                key={i}
                className="flex items-center justify-center opacity-[0.45] transition-opacity duration-200 filter grayscale hover:opacity-[0.75] hover:grayscale-0"
              >
                <Image
                  alt={item.alt}
                  height={32}
                  src={image.url}
                  className="object-contain dark:invert dark:brightness-[2]"
                  width={120}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
