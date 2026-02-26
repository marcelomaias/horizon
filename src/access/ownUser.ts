import type { Access } from 'payload'

export const ownUser: Access = ({ req }) => {
  if (!req.user) return false

  return {
    id: {
      equals: req.user.id,
    },
  }
}
