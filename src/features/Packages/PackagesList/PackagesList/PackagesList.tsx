import { useState } from 'react'
import { AddressPoint } from '../../AddressPoint/AddressPoint'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'

type PackagesListProps = {
  isWork?: boolean
  search?: string
}

export const PackagesList = ({ isWork, search }: PackagesListProps) => {
  const { addresses, filterAddresses } = usePackagesContext()

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
