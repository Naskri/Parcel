import z from 'zod'

export const DeliveryPackageFormSchema = z.object({
  pack: z
    .string({ required_error: 'validation.packNumberRequired' })
    .min(10, 'validation.packNumberMinLengthInvalid')
    .max(26, 'validation.packNumberMaxLengthInvalid')
    .startsWith('0.', 'validation.packStartsWithInvalid'),
})

export type DeliveryPackageFormSchemaType = z.infer<typeof DeliveryPackageFormSchema>
