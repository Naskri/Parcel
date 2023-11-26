import { useState } from 'react'

import { Addresses, useAddressContext } from '../../../Address/AddressContext/AddressContext'
import { AddressPoint } from '../../../Address/AddressPoint/AddressPoint'

type PackagesListProps = {
  isWork?: boolean
  search?: string
  searchCategory?: keyof Omit<Addresses, 'position'>
}

export const PackagesList = ({ isWork, search, searchCategory }: PackagesListProps) => {
  const { addresses, filterAddresses } = useAddressContext()

  const validSearch = search && searchCategory

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const changeSelectedAddress = (id: string) => {
    setSelectedAddress(id === selectedAddress ? null : id)
  }

  return (!validSearch ? addresses : filterAddresses(search, searchCategory)).map((address) => (
    <AddressPoint
      key={address.custom_id}
      data={address}
      selectedAddress={selectedAddress}
      changeAddress={changeSelectedAddress}
      isWork={isWork}
    />
  ))
}
