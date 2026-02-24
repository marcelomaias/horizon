import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const HeroHome: Block = {
  slug: 'heroHome',
  interfaceName: 'HeroHomeBlock',
  labels: {
    singular: 'Hero Home',
    plural: 'Heroes Home',
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
      admin: {
        description:
          'Use italic text for the styled second line (e.g. <em>fully in your hands</em>)',
      },
    },
    {
      name: 'subtext',
      type: 'textarea',
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
