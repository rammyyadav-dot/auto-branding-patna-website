import type { PageCopy } from './types'
import { localCopy } from './local'
import { commercialCopy } from './commercial'
import { biharCopy } from './bihar'
import { hindiCopy } from './hindi'
import { sloganCopy } from './slogans'

export type { PageCopy }

/** Individually written copy for all 100 /advertising/[slug] pages, keyed by slug. */
export const pageCopy: Record<string, PageCopy> = {
  ...localCopy,
  ...commercialCopy,
  ...biharCopy,
  ...hindiCopy,
  ...sloganCopy,
}
