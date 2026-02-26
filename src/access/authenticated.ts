import type { Access } from 'payload'

const authenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export default authenticated
