import { z } from 'zod'
export const Sectionvalidator = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  markdown: z.string(),
})

export const DraftItemvalidator = z.object({
  id: z.string(),
  name: z.string(),
  sections: z.array(Sectionvalidator),
  activesection: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
