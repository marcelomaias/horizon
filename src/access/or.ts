import type { Access, AccessArgs, AccessResult } from 'payload'

export const or =
  (...accessFns: Access[]): Access =>
  async (args: AccessArgs<unknown>): Promise<AccessResult> => {
    for (const fn of accessFns) {
      const result = await fn(args)

      // true → full access
      if (result === true) return true

      // where clause → filtered access
      if (typeof result === 'object') return result
    }

    return false
  }
