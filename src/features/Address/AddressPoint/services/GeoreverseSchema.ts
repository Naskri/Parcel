import z from 'zod'

export const GeoreverseSchema = z
  .object({
    city: z.string(),
    postcode: z.string(),
    street: z.string(),
    housenumber: z.string(),
    address_line1: z.string(),
    country_code: z.string(),
  })
  .nullable()

export type GeoreverseSchemaType = z.infer<typeof GeoreverseSchema>
