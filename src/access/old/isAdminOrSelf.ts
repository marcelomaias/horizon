import type { Access } from 'payload'
import type { User } from '@/payload-types'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false

  const role = (user as User)?.role
  if (role === 'admin') return true

  // Return a query constraint so the user can only access their own document
  return {
    id: {
      equals: user.id,
    },
  }
}
