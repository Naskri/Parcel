import z from 'zod'

const MAX_PACKAGE_WIDTH = 150
const MAX_PACKAGE_LENGTH = 75
const MAX_PACKAGE_HEIGHT = 75
const MAX_PACKAGE_WEIGHT = 31.5

export const AddPackageSchema = z.object({
  width: z
    .string({ required_error: 'Wymagane' })
    .min(1, 'Pole jest wymagane!')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'Musi być liczbą',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_WIDTH, {
      message: `Maksimum ${MAX_PACKAGE_WIDTH} cm`,
    }),
  height: z
    .string({ required_error: 'Wymagane' })
    .min(1, 'Pole jest wymagane!')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'Musi być liczbą',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_HEIGHT, {
      message: `Maksimum ${MAX_PACKAGE_HEIGHT} cm`,
    }),
  length: z
    .string({ required_error: 'Wymagane' })
    .min(1, 'Pole jest wymagane!')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'Musi być liczbą',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_LENGTH, {
      message: `Maksimum ${MAX_PACKAGE_LENGTH} cm`,
    }),
  weight: z
    .string({ required_error: 'Wymagane' })
    .min(1, 'Pole jest wymagane!')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'Musi być liczbą',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_WEIGHT, {
      message: `Maksimum ${MAX_PACKAGE_WEIGHT} kg`,
    }),
  cash: z
    .string()
    .nullable()
    .refine((value) => !isNaN(Number(value)), {
      message: 'Musi być liczbą jak coś',
      path: ['cash'],
    })
    .transform((value) => (isNaN(Number(value)) || value === '0' ? null : value)),
})

export type AddPackageSchemaType = z.infer<typeof AddPackageSchema>
