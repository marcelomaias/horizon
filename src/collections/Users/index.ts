import type { CollectionConfig } from 'payload'
import { protectRoles } from '@/hooks/protectRoles'
import admin from '@/access/admin'
import { checkRole } from '@/access/checkRole'
import { ownUser } from '@/access/ownUser'
import { or } from '@/access/or'
import type { User } from '@/payload-types'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: admin,
    read: or(admin, ownUser),
    update: or(admin, ownUser),
    delete: admin,
    admin: ({ req: { user } }) => {
      if (!user) return false
      return (
        (user as User).roles?.includes('admin') || (user as User).roles?.includes('editor') || false
      )
    },
  },
  admin: {
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      access: {
        update: ({ req: { user } }) => checkRole(['admin'], user as User),
      },
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
      hooks: {
        beforeChange: [protectRoles],
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'userPicture',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  timestamps: true,
}
