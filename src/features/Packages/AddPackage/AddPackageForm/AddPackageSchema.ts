import { t } from 'i18next'
import z from 'zod'

export const MAX_PACKAGE_WIDTH = 150 // cm
export const MAX_PACKAGE_LENGTH = 75 // cm
export const MAX_PACKAGE_HEIGHT = 75 // cm
export const MAX_PACKAGE_WEIGHT = 31.5 // kg

export const AddPackageSchema = z.object({
  width: z
    .string({ required_error: 'validation.packageWidthRequired' })
    .min(1, 'validation.packageWidthRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_WIDTH, {
      message: `${t('validation.maxPackageWidth', { width: MAX_PACKAGE_WIDTH })}`,
    }),
  height: z
    .string({ required_error: 'validation.packageHeightRequired' })
    .min(1, 'validation.packageHeightRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_HEIGHT, {
      message: `${t('validation.maxPackageHeight', { height: MAX_PACKAGE_HEIGHT })}`,
    }),
  length: z
    .string({ required_error: 'validation.packageLengthRequired' })
    .min(1, 'validation.packageLengthRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_LENGTH, {
      message: `${t('validation.maxPackageLength', { length: MAX_PACKAGE_LENGTH })}`,
    }),
  weight: z
    .string({ required_error: 'validation.packageWeightRequired' })
    .min(1, 'validation.packageWeightRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_WEIGHT, {
      message: `${t('validation.maxPackageWeigth', { weight: MAX_PACKAGE_WEIGHT })}`,
    }),
  cash: z
    .string()
    .nullable()
    .refine((value) => !isNaN(Number(value)) || value === '0', {
      message: 'validation.packageNumberInvalid',
    })

    .transform((value) => (isNaN(Number(value)) || value === '0' ? null : value)),
  errorStatus: z.string().optional().nullable(),
})

export type AddPackageSchemaType = z.infer<typeof AddPackageSchema>
