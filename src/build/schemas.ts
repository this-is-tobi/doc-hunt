import { z } from 'zod'

export const optionsSchema = z.object({
  extraHeaderPages: z.string()
    .describe('List of comma separated additional files to process Vitepress header pages.')
    .transform(pages => pages.split(','))
    .optional(),
  extraPublicContent: z.string()
    .describe('List of comma separated additional files to process Vitepress public folder.')
    .optional(),
  vitepressConfig: z.string()
    .describe('Path to the vitepress configuration.')
    .optional(),
})

export type Options = Zod.infer<typeof optionsSchema>
