import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CtaBanner: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CtaBannerBlock',
  labels: {
    singular: 'CTA Banner',
    plural: 'CTA Banners',
  },
  fields: [
    {
      name: 'heading',
      type: 'richText',
      label: 'Heading',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'subtext',
      type: 'text',
      label: 'Subtext',
    },
    {
      name: 'primaryButtonLabel',
      type: 'text',
      label: 'Primary Button Label',
      defaultValue: 'Start building free',
    },
    {
      name: 'primaryButtonHref',
      type: 'text',
      label: 'Primary Button URL',
      defaultValue: '/demo',
    },
    {
      name: 'secondaryButtonLabel',
      type: 'text',
      label: 'Secondary Button Label',
      defaultValue: 'Explore the demo →',
    },
    {
      name: 'secondaryButtonHref',
      type: 'text',
      label: 'Secondary Button URL',
      defaultValue: '/demo',
    },
  ],
}
