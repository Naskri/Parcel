import { ReactNode, createContext, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { toast } from 'react-toastify'

import { AddPackagePointSchemaType } from '../AddressPoint/AddAddressPoint/AddPackagePointSchema'
import { AddressSupabaseData } from '../AddressPoint/services/useAddPoint'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../Authentication/useUser'

export type Addresses = AddPackagePointSchemaType & AddressSupabaseData

type AddressContextState = {
  addresses: Addresses[]
  addAddress: (address: Addresses) => void
  getAddress: (id: string | undefined) => Addresses | undefined
  reorderAddressPoints: (dragIndex: number, hoverIndex: number) => void
  removeAddress: (addressID: string) => void
  isAddressHasCashPackage: (addressID: string) => boolean
  filterAddresses: (search: string, searchCategory: keyof Addresses) => Addresses[]
  hangOverAddress: (userId: string, addressId: string) => void
  reverseAddresses: () => void
}

export const AddressContext = createContext<AddressContextState | null>(null)

export const AddressContextProvider = ({ children }: { children: ReactNode }) => {
  const [storageAddresses, setAddresses] = useLocalStorage<Addresses[]>('addresses', [])
  const { user } = useUser()
  const addresses = storageAddresses.filter((address) => address.user_id === user?.id)
  const { t } = useTranslation()

  const { getAddressPackages } = usePackagesContext()

  const addAddress = (address: Addresses) => {
    const existAddress = addresses.find((findAddress) => findAddress.name === address.name)

    if (existAddress) return

    setAddresses((prev) => [...prev, address])
  }

  const getAddress = (id: string | undefined) => {
    if (!id) return

    const existAddress = addresses.find((findAddress) => findAddress.custom_id === id)

    if (!existAddress) return
    return existAddress
  }

  const reorderAddressPoints = (dragIndex: number, hoverIndex: number) => {
    const newAddresses = [...addresses]
    const [draggedItem] = newAddresses.splice(dragIndex, 1)
    newAddresses.splice(hoverIndex, 0, draggedItem)
    setAddresses(newAddresses)
  }

  const removeAddress = (addressID: string) => {
    const newAddresses = addresses.filter((address) => address.custom_id !== addressID)

    setAddresses(newAddresses)
    toast.success('Succesfuly deleted address')
  }

  const isAddressHasCashPackage = (addressID: string) => {
    const addressPackages = getAddressPackages(addressID)
    const isCashPackage = addressPackages.some((pack) => pack.cash)

    return isCashPackage
  }

  const filterAddresses = (search: string, searchCategory: keyof Addresses) => {
    const filtered = addresses.filter((address) =>
      address[searchCategory].toLowerCase().includes(search.toLowerCase())
    )

    return filtered
  }

  const hangOverAddress = (userId: string, addressId: string) => {
    const address = getAddress(addressId)

    if (!address) {
      throw new Error(t('send.address-invalid'))
    }

    const mappedAddresses = addresses.map((address) =>
      address.custom_id === addressId ? { ...address, user_id: userId } : address
    )

    setAddresses(mappedAddresses)
    toast.success(t('send.success'))
  }

  const reverseAddresses = () => {
    const reversedAddresses = addresses.reverse()

    setAddresses(reversedAddresses)
  }

  return (
    <AddressContext.Provider
      value={{
        addresses,
        isAddressHasCashPackage,
        filterAddresses,
        addAddress,
        getAddress,
        reorderAddressPoints,
        removeAddress,
        hangOverAddress,
        reverseAddresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export const useAddressContext = () => {
  const context = useContext(AddressContext)

  if (context === null) {
    throw new Error('Must be wrapped in Packages provider context!')
  }

  return context
}
