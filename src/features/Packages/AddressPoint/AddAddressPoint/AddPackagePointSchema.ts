import z from 'zod'
import validator from 'validator'

const zipCodePattern = /^[0-9]{2}-[0-9]{3}$/

export const AddPackagePointSchema = z.object({
  customer: z.string({ required_error: 'Wymanage' }).min(1, 'Pole wymagane'),
  name: z.string({ required_error: 'Wymanage' }).min(1, 'Pole wymagane'),
  street: z.string({ required_error: 'Wymanage' }).min(1, 'Pole wymagane'),
  city: z.string({ required_error: 'Wymanage' }).min(1, 'Pole wymagane'),
  house: z.string({ required_error: 'Wymagane!' }).min(1, 'Pole wymagane'),
  zipCode: z.string({ required_error: 'Wymagange!' }).refine((data) => zipCodePattern.test(data), {
    message: 'FORMAT ##-###',
  }),
  phone: z
    .string({ required_error: 'Wymanage' })
    .min(1, 'Pole wymagane')
    .refine(validator.isMobilePhone, {
      message: 'Zły numer telefonu',
    }),
})

export type AddPackagePointSchemaType = z.infer<typeof AddPackagePointSchema>
