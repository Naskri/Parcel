import { useState } from 'react'

import { useAddressContext } from '../../../Address/AddressContext/AddressContext'
import { AddressPoint } from '../../../Address/AddressPoint/AddressPoint'

type PackagesListProps = {
  isWork?: boolean
  search?: string
}

export const PackagesList = ({ isWork, search }: PackagesListProps) => {
  const { addresses, filterAddresses } = useAddressContext()

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const changeSelectedAddress = (id: string) => {
    setSelectedAddress(id === selectedAddress ? null : id)
  }

  return (!search ? addresses : filterAddresses(search)).map((address) => (
    <AddressPoint
      key={address.custom_id}
      data={address}
      selectedAddress={selectedAddress}
      changeAddress={changeSelectedAddress}
      isWork={isWork}
    />
  ))
}
