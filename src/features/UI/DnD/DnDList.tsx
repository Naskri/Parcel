import { AddressPoint } from '../../Packages/AddressPoint/AddressPoint'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'

export const DnDList = () => {
  const { addresses } = usePackagesContext()

  return addresses.map((address, index) => (
    <AddressPoint index={index} key={address.custom_id} data={address} />
  ))
}
