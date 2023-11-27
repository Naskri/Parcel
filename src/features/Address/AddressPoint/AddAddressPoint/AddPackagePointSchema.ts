import z from 'zod'
import validator from 'validator'

const zipCodePattern = /^[0-9]{2}-[0-9]{3}$/

export const AddPackagePointSchema = z.object({
  customer: z
    .string({ required_error: 'validation.addressCustomerRequired' })
    .min(1, 'validation.addressCustomerRequired')
    .regex(/^[A-Z][a-z]+ [A-Z][a-z]+$/, 'validation.addressCustomerInvalid'),
  name: z
    .string({ required_error: 'validation.addressNameRequired' })
    .min(1, 'validation.addressNameRequired'),
  street: z
    .string({ required_error: 'validation.addressStreetRequired' })
    .min(1, 'validation.addressStreetRequired'),
  city: z
    .string({ required_error: 'validation.addressCityRequired' })
    .min(1, 'validation.addressCityRequired'),
  house: z
    .string({ required_error: 'validation.addressHouseRequired' })
    .min(1, 'validation.addressHouseRequired'),
  zipCode: z
    .string({ required_error: 'validation.addressZipCodeRequired' })
    .refine((data) => zipCodePattern.test(data), {
      message: 'validation.addressZipCodeInvalid',
    }),
  phone: z
    .string({ required_error: 'validation.addressPhoneRequired' })
    .min(1, 'validation.addressPhoneRequired')
    .refine(validator.isMobilePhone, {
      message: 'validation.addressPhoneInvalid',
    }),
  packages: z.string().default('0'),
})

export type AddPackagePointSchemaType = z.infer<typeof AddPackagePointSchema>
