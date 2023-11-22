import z from 'zod'

export const DeliveryPackageFormSchema = z.object({
  pack: z
    .string({ required_error: 'wymagane' })
    .min(18, 'Minimum 18 znaków')
    .max(19, 'Maksymalnie 19 znaków')
    .startsWith('0.', 'Musi się zaczynać od 0.'),
})

export type DeliveryPackageFormSchemaType = z.infer<typeof DeliveryPackageFormSchema>
