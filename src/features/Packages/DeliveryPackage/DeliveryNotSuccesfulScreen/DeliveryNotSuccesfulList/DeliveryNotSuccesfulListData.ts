export const ErrorCodes = {
  'E-01': 'Recipient absent',
  'E-02': 'Wrong address',
  'E-03': `Customer's refusal to accept`,
  'E-04': 'The recipient does not have the COD amount',
}

export const DeliveryNotSuccesfulListData = [
  {
    id: 1,
    title: 'Odbiorca nieobecny',
    code: ErrorCodes['E-01'],
  },
  {
    id: 2,
    title: 'Błędny adres',
    code: ErrorCodes['E-02'],
  },
  {
    id: 3,
    title: 'Odmowa przyjęcia przez klienta',
    code: ErrorCodes['E-03'],
  },
  {
    id: 4,
    title: 'Odbiorca nie posiada kwoty COD',
    code: ErrorCodes['E-04'],
  },
]
