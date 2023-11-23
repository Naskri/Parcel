import z from 'zod'

export const HandOverAddressFormSchema = z.object({
  email: z.string({ required_error: 'validation.emailRequired' }).email('validation.emailInvalid'),
  address: z
    .string({ required_error: 'validation.addressIDRequired' })
    .min(0, 'validation.addressIDInvalid')
    .uuid({ message: 'validation.addressIDInvalid' }),
})

export type HandOverAddressFormSchemaType = z.infer<typeof HandOverAddressFormSchema>
