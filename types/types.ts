import { DraftItemvalidator, Sectionvalidator } from '@/lib/validator'
import { z } from 'zod'

export type sectionType = z.infer<typeof Sectionvalidator>
export type DraftItemType = z.infer<typeof DraftItemvalidator>
