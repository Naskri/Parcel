export enum ErrorPackageStatus {
  'ABSENT' = 'E-01',
  'WRONG_ADDRESS' = 'E-02',
  'REFUSAL' = 'E-03',
  'NO_COD' = 'E-04',
}

export const ErrorCodes = {
  [ErrorPackageStatus.ABSENT]: 'delivery.errorAbsent',
  [ErrorPackageStatus.WRONG_ADDRESS]: 'delivery.errorWrongAddress',
  [ErrorPackageStatus.REFUSAL]: `delivery.errorRefusal`,
  [ErrorPackageStatus.NO_COD]: 'delivery.errorNoCOD',
} as const

export const DeliveryNotSuccesfulListData = [
  {
    id: 1,
    title: ErrorCodes[ErrorPackageStatus.ABSENT],
    code: ErrorPackageStatus.ABSENT,
  },
  {
    id: 2,
    title: ErrorCodes[ErrorPackageStatus.WRONG_ADDRESS],
    code: ErrorPackageStatus.WRONG_ADDRESS,
  },
  {
    id: 3,
    title: ErrorCodes[ErrorPackageStatus.REFUSAL],
    code: ErrorPackageStatus.REFUSAL,
  },
  {
    id: 4,
    title: ErrorCodes[ErrorPackageStatus.NO_COD],
    code: ErrorPackageStatus.NO_COD,
  },
]
