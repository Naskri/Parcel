import z from 'zod'

export const LoginSchema = z.object({
  email: z.string({ required_error: 'validation.emailRequired' }).email('validation.emailInvalid'),
  password: z
    .string({ required_error: 'validation.passwordRequired' })
    .min(6, 'validation.passwordMin'),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
