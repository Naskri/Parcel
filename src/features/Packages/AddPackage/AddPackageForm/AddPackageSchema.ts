import z from 'zod'
import { ErrorPackageStatus } from '../../DeliveryPackage/DeliveryNotSuccesfulScreen/DeliveryNotSuccesfulList/DeliveryNotSuccesfulListData'

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
      message: 'validation.maxPackageWidth',
    }),
  height: z
    .string({ required_error: 'validation.packageHeightRequired' })
    .min(1, 'validation.packageHeightRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_HEIGHT, {
      message: 'validation.maxPackageHeight',
    }),
  length: z
    .string({ required_error: 'validation.packageLengthRequired' })
    .min(1, 'validation.packageLengthRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_LENGTH, {
      message: 'validation.maxPackageLength',
    }),
  weight: z
    .string({ required_error: 'validation.packageWeightRequired' })
    .min(1, 'validation.packageWeightRequired')
    .refine((value) => !Number.isNaN(Number(value)), {
      message: 'validation.packageNumberInvalid',
    })
    .refine((value) => Number(value) <= MAX_PACKAGE_WEIGHT, {
      message: 'validation.maxPackageWeigth',
    }),
  cash: z
    .string()
    .nullable()
    .default('0')
    .refine(
      (value) => {
        if (!isNaN(Number(value))) return true
      },
      {
        message: 'validation.packageNumberInvalid',
      }
    )

    .transform((value) => (value?.startsWith('0') ? Number(value) : value)),
  errorStatus: z.nativeEnum(ErrorPackageStatus).optional().nullable(),
  success: z.boolean().default(false),
  transfer: z.boolean().default(false),
  prevID: z.string().default('').nullable(),
})

export type AddPackageSchemaType = z.infer<typeof AddPackageSchema>
