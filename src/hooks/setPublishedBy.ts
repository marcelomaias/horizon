import type { CollectionBeforeChangeHook } from 'payload'

export const setPublishedBy: CollectionBeforeChangeHook = ({ data, req, originalDoc }) => {
  // Only stamp when transitioning to published for the first time or re-publishing
  const isPublishing = data._status === 'published' && originalDoc?._status !== 'published'

  if (isPublishing && req.user) {
    data.publishedBy = req.user.id
  }

  return data
}
