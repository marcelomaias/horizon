import type { Access } from 'payload'

export const own =
  (userField = 'user'): Access =>
  ({ req }) => {
    if (!req.user) return false

    return {
      [userField]: {
        equals: req.user.id,
      },
    }
  }
