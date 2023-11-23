import { Addresses } from '../AddressContext/AddressContext'

type SelectOptions = {
  id: number
  value: keyof Addresses
}

export const SearchAddressesSelectData: SelectOptions[] = [
  {
    id: 1,
    value: 'name',
  },
  {
    id: 2,
    value: 'city',
  },
  {
    id: 3,
    value: 'zipCode',
  },
  {
    id: 4,
    value: 'street',
  },
  {
    id: 5,
    value: 'phone',
  },
  {
    id: 6,
    value: 'customer',
  },
]
