import z from 'zod'

export const GeoreverseSchema = z
  .object({
    city: z.string(),
    postcode: z.string(),
    street: z.string(),
    housenumber: z.string().transform((value) => String(value)),
    address_line1: z.string(),
    country_code: z.string(),
    lat: z.number(),
    lon: z.number(),
  })
  .nullable()

export type GeoreverseSchemaType = z.infer<typeof GeoreverseSchema>
