import z from 'zod'

export const SendSchema = z.object({
  email: z.string({ required_error: 'validation.emailRequired' }).email('validation.emailInvalid'),
  address: z.string({ required_error: 'wymagane' }).min(0, 'Wymagane pole'),
})

export type SendSchemaType = z.infer<typeof SendSchema>
