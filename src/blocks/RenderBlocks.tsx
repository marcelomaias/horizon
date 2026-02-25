import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroHomeBlock } from '@/blocks/HeroHome/Component'
import { LogoCloudBlock } from './LogoCloud/Component'
import { CmsSectionBlock } from './CmsSection/Component'
import { FeaturesGridBlock } from './FeaturesGrid/Component'
import { PerformanceBlock } from './Performance/component'
import { CtaBannerBlock } from './CtaBanner/Component'
import { PageHeadingBlock } from './PageHeading/Component'
import { TextImageBlock } from './TextImage/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroHome: HeroHomeBlock,
  logoCloud: LogoCloudBlock,
  cmsSection: CmsSectionBlock,
  featuresGrid: FeaturesGridBlock,
  performance: PerformanceBlock,
  ctaBanner: CtaBannerBlock,
  pageHeading: PageHeadingBlock,
  textImage: TextImageBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className={`${blockType}`} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
