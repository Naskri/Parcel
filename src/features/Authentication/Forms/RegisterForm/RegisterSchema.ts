import z from 'zod'

export const RegisterSchema = z
  .object({
    email: z
      .string({ required_error: 'validation.emailRequired' })
      .email('validation.emailInvalid'),
    password: z
      .string({ required_error: 'validation.passwordRequired' })
      .min(6, 'validation.passwordMin'),
    pin: z
      .string({ required_error: 'validation.pinRequired' })
      .min(4, 'validation.pinLength')
      .max(4, 'validation.pinLength'),
  })
  .refine((data) => !Number.isNaN(Number(data.pin)), {
    message: 'validation.pinInvalid',
    path: ['pin'],
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
