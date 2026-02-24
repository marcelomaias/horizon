import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CmsSection: Block = {
  slug: 'cmsSection',
  interfaceName: 'CmsSectionBlock',
  labels: {
    singular: 'CMS Section',
    plural: 'CMS Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Label',
      defaultValue: 'Content Management',
    },
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
        description: 'Use line breaks and italic for styled headings',
      },
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Body Text',
    },
    {
      name: 'checklistItems',
      type: 'array',
      label: 'Checklist Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Item',
          required: true,
        },
      ],
    },
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'See it in action →',
    },
    {
      name: 'buttonHref',
      type: 'text',
      label: 'Button URL',
      defaultValue: '/demo',
    },
  ],
}
