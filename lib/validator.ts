import { z } from 'zod'
export const Sectionvalidator = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  markdown: z.string(),
})
