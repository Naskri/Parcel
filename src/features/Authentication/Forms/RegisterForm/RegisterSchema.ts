import z from 'zod'

export const RegisterSchema = z
  .object({
    email: z
      .string({ required_error: 'validation.emailRequired' })
      .email('validation.emailInvalid'),
    password: z
      .string({ required_error: 'validation.passwordRequired' })
      .min(6, 'validation.passwordMin'),
    passwordConfirm: z
      .string({ required_error: 'validation.passwordConfirmRequired' })
      .min(6, 'validation.passwordMin'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'validation.passwordsNotMatch',
    path: ['passwordConfirm'],
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
