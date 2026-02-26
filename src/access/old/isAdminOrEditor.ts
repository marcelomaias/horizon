import type { Access } from 'payload'
import type { User } from '@/payload-types'

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  const role = (user as User)?.role
  return role === 'admin' || role === 'editor'
}
