import { ReactNode, createContext, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { toast } from 'react-toastify'

import { AddPackagePointSchemaType } from '../AddressPoint/AddAddressPoint/AddPackagePointSchema'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../Authentication/useUser'
import { SortPossibility } from '../../Packages/PackagesPlanning/PackagesPlanningSort/PackagesPlanningSortData'
import { calculateDistance } from './helpers'

export type AddressSupabaseData = {
  user_id: string
  custom_id: string
}

export type AddressPosition = {
  position: {
    latitude: number | undefined
    longitude: number | undefined
  }
}

export type Addresses = AddPackagePointSchemaType & AddressSupabaseData & AddressPosition

type AddressContextState = {
  addresses: Addresses[]
  addAddress: (address: Addresses) => void
  getAddress: (id: string | undefined | null) => Addresses | undefined
  reorderAddressPoints: (dragIndex: number, hoverIndex: number) => void
  removeAddress: (addressID: string) => void
  isAddressHasCashPackage: (addressID: string) => boolean
  filterAddresses: (
    search: string,
    searchCategory: keyof Omit<Addresses, 'position'>
  ) => Addresses[]
  hangOverAddress: (userId: string, addressId: string) => void
  reverseAddresses: () => void
  sortAddresses: (sortCategory: SortPossibility) => Addresses[]
  updateAddressPackages: (addressID: string) => void
}

export const AddressContext = createContext<AddressContextState | null>(null)

export const AddressContextProvider = ({ children }: { children: ReactNode }) => {
  const [storageAddresses, setAddresses] = useLocalStorage<Addresses[]>('addresses', [])
  const { t } = useTranslation()
  const { user } = useUser()
  const addresses = storageAddresses.filter((address) => address.user_id === user?.id)

  const { getAddressPackages } = usePackagesContext()

  const addAddress = (address: Addresses) => {
    const existAddress = addresses.find((findAddress) => findAddress.name === address.name)

    if (existAddress) return

    setAddresses((prev) => [...prev, address])
  }

  const getAddress = (id: string | undefined | null) => {
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

  const filterAddresses = (search: string, searchCategory: keyof Omit<Addresses, 'position'>) => {
    const filtered = addresses.filter(
      (address) => address[searchCategory]?.toLowerCase().includes(search.toLowerCase())
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

  const sortAddresses = (sortCategory: SortPossibility) => {
    const referencePoint = {
      latitude: 51.935619,
      longitude: 15.506186,
    }

    if (sortCategory === 'no') {
      return addresses
    }

    if (sortCategory === 'name') {
      const sortedAddresses = addresses.sort((address, nextAddress) =>
        address.name.toUpperCase() > nextAddress.name.toUpperCase() ? 1 : -1
      )

      setAddresses(sortedAddresses)
    }

    if (sortCategory === 'gps') {
      const sortedAddresses = addresses.sort((address, nextAddress) => {
        const addressDistance = calculateDistance(
          referencePoint.latitude,
          referencePoint.longitude,
          address.position.latitude,
          address.position.longitude
        )

        const nextAddressDistance = calculateDistance(
          referencePoint.latitude,
          referencePoint.longitude,
          nextAddress.position.latitude,
          nextAddress.position.longitude
        )

        return addressDistance - nextAddressDistance
      })

      setAddresses(sortedAddresses)
    }

    return addresses
  }

  const updateAddressPackages = (addressID: string) => {
    const findedAddress = getAddress(addressID)

    if (!findedAddress) return

    const mappedAddresses = addresses.map((address) =>
      address.custom_id === findedAddress.custom_id
        ? { ...address, packages: String(Number(address.packages) + 1) }
        : address
    )

    setAddresses(mappedAddresses)
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
        sortAddresses,
        updateAddressPackages,
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
