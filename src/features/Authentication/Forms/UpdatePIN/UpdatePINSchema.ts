import z from 'zod'

export const UpdatePINSchema = z
  .object({
    new_pin: z
      .string({ required_error: 'validation.pinRequired' })
      .min(4, 'validation.pinLength')
      .max(4, 'validation.pinLength'),
  })
  .refine((data) => !Number.isNaN(Number(data.new_pin)), {
    message: 'validation.pinInvalid',
    path: ['new_pin'],
  })

export type UpdatePINSchemaType = z.infer<typeof UpdatePINSchema>
