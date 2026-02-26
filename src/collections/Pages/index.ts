import type { CollectionConfig, FieldAccess } from 'payload'

import admin from '@/access/admin'
import editor from '@/access/editor'
import { checkRole } from '@/access/checkRole'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { HeroHome } from '@/blocks/HeroHome/config'
import { LogoCloud } from '@/blocks/LogoCloud/config'
import { FeaturesGrid } from '@/blocks/FeaturesGrid/config'
import { Performance } from '@/blocks/Performance/config'
import { PageHeading } from '@/blocks/PageHeading/config'
import { CtaBanner } from '@/blocks/CtaBanner/config'
import { TextImage } from '@/blocks/TextImage/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { setCreatedBy } from '@/hooks/setCreatedBy'
import { setPublishedBy } from '@/hooks/setPublishedBy'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
import type { User } from '@/payload-types'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { anyone } from '@/access/anyone'

const adminOnlyField: FieldAccess = ({ req: { user } }) => checkRole(['admin'], user as User)

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: editor,
    delete: admin,
    read: anyone,
    update: editor,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                PageHeading,
                TextImage,
                HeroHome,
                LogoCloud,
                FeaturesGrid,
                Performance,
                CtaBanner,
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        readOnly: true,
        condition: (data) => Boolean(data?.createdBy),
      },
      access: {
        read: adminOnlyField,
        update: (() => false) as FieldAccess,
      },
    },
    {
      name: 'publishedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        readOnly: true,
        condition: (data) => Boolean(data?.publishedBy),
      },
      access: {
        read: adminOnlyField,
        update: (() => false) as FieldAccess,
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt, setCreatedBy, setPublishedBy],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 5000, // 2 seconds instead of 100ms
      },
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
}
