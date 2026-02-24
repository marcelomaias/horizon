import type { Block } from 'payload'

export const LogoCloud: Block = {
  slug: 'logoCloud',
  interfaceName: 'LogoCloudBlock',
  labels: {
    singular: 'Logo Cloud',
    plural: 'Logo Clouds',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Label',
      defaultValue: 'Trusted by modern product teams',
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Company Name',
          required: true,
          admin: {
            description: 'Used as alt text for accessibility',
          },
        },
      ],
    },
  ],
}
