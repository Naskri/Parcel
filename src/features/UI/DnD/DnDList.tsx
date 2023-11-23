import { useAddressContext } from '../../Address/AddressContext/AddressContext'
import { AddressPoint } from '../../Address/AddressPoint/AddressPoint'

export const DnDList = () => {
  const { addresses } = useAddressContext()

  return addresses.map((address, index) => (
    <AddressPoint index={index} key={address.custom_id} data={address} />
  ))
}
