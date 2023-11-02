import z from 'zod'

export const UnlockAppSchema = z
  .object({
    pin: z.string({ required_error: 'validation.pinRequired' }).min(4, 'validation.pinLength'),
  })
  .refine((data) => !Number.isNaN(Number(data.pin)), {
    message: 'validation.pinInvalid',
    path: ['pin'],
  })

export type UnlockAppSchemaType = z.infer<typeof UnlockAppSchema>
