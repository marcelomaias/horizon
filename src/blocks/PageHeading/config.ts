import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const PageHeading: Block = {
  slug: 'pageHeading',
  interfaceName: 'PageHeadingBlock',
  labels: {
    singular: 'Page Heading',
    plural: 'Page Headings',
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
        description: 'Use italic text for the styled accent portion of the heading',
      },
    },
    {
      name: 'subtext',
      type: 'textarea',
      label: 'Subtext',
      admin: {
        description: 'Optional supporting sentence shown beneath the heading',
      },
    },
  ],
}
