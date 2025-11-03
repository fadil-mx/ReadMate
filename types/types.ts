import { Sectionvalidator } from '@/lib/validator'
import { z } from 'zod'

export type sectionType = z.infer<typeof Sectionvalidator>
