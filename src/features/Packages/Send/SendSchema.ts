import z from 'zod'

export const SendSchema = z.object({
  email: z.string({ required_error: 'validation.emailRequired' }).email('validation.emailInvalid'),
  pack: z
    .string({ required_error: 'validation.passwordRequired' })
    .min(1, 'validation.passwordRequired'),
})

export type SendSchemaType = z.infer<typeof SendSchema>
