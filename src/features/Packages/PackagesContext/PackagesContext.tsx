import { ReactNode, createContext, useContext } from 'react'
import { AddPackagePointSchemaType } from '../AddressPoint/AddAddressPoint/AddPackagePointSchema'
import { AddPackageSchemaType } from '../AddPackage/AddPackageForm/AddPackageSchema'
import { PackageSupabaseData } from '../AddPackage/AddPackageForm/services/useAddPackage'
import { useLocalStorage } from 'usehooks-ts'
import { AddressSupabaseData } from '../AddressPoint/services/useAddPoint'
import { toast } from 'react-toastify'

export type Packages = AddPackageSchemaType & PackageSupabaseData
export type Addresses = AddPackagePointSchemaType & AddressSupabaseData

type PackagesContextState = {
  addresses: Addresses[]
  packages: Packages[]
  addAddress: (address: Addresses) => void
  addPackage: (newPackage: Packages) => void
  removeAddress: (addressID: string) => void
  existAddress: (id: string | undefined) => Addresses | undefined
  reorderAddressPoints: (dragIndex: number, hoverIndex: number) => void
  getAddressPackages: (addressID: string) => Packages[]
  isAddressHasCashPackage: (addressID: string) => boolean
  filterAddresses: (search: string) => Addresses[]
  getPackageByID: (packID: string) => Packages | undefined
  setPackageErrorStatus: (packId: string, errorStatus: string) => void
}

export const PackagesContext = createContext<PackagesContextState | null>(null)

export const PackagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useLocalStorage<Addresses[]>('addresses', [])
  const [packages, setPackages] = useLocalStorage<Packages[]>('packages', [])

  const addAddress = (address: Addresses) => {
    const existAddress = addresses.find((findAddress) => findAddress.name === address.name)

    if (existAddress) return

    setAddresses((prev) => [...prev, address])
  }

  const addPackage = (newPackage: Packages) => {
    setPackages((prev) => [...prev, newPackage])
    toast.success('Succesfully added package')
  }

  const getPackageByID = (packID: string) => {
    const pack = packages.find((pack) => pack.package_id === packID)

    if (!pack) return

    return pack
  }

  const existAddress = (id: string | undefined) => {
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

  const getAddressPackages = (addressID: string) => {
    const addressPackages = packages.filter((pack) => pack.address_id === addressID)

    return addressPackages
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

  const filterAddresses = (search: string) => {
    const filtered = addresses.filter((address) =>
      address.name.toLowerCase().includes(search.toLowerCase())
    )

    return filtered
  }

  const setPackageErrorStatus = (packId: string, errorStatus: string) => {
    const pack = getPackageByID(packId)

    if (!pack) return

    const newPackages = packages.map((pack) =>
      pack.package_id === packId ? { ...pack, address_id: null, errorStatus } : pack
    )

    setPackages(newPackages)
  }

  return (
    <PackagesContext.Provider
      value={{
        addresses,
        packages,
        addAddress,
        existAddress,
        addPackage,
        reorderAddressPoints,
        getAddressPackages,
        removeAddress,
        isAddressHasCashPackage,
        filterAddresses,
        getPackageByID,
        setPackageErrorStatus,
      }}
    >
      {children}
    </PackagesContext.Provider>
  )
}

export const usePackagesContext = () => {
  const context = useContext(PackagesContext)

  if (context === null) {
    throw new Error('Must be wrapped in Packages provider context!')
  }

  return context
}
