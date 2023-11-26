import { ReactNode, createContext, useContext, useState } from 'react'
import { AddPackageSchemaType } from '../AddPackage/AddPackageForm/AddPackageSchema'
import { PackageSupabaseData } from '../AddPackage/AddPackageForm/services/useAddPackage'
import { useLocalStorage } from 'usehooks-ts'
import { toast } from 'react-toastify'
import { ErrorPackageStatus } from '../DeliveryPackage/DeliveryNotSuccesfulScreen/DeliveryNotSuccesfulList/DeliveryNotSuccesfulListData'

export type Packages = AddPackageSchemaType & PackageSupabaseData

type PackagesContextState = {
  packages: Packages[]
  date: Date
  addPackage: (newPackage: Packages) => void
  getPackageByID: (packID: string) => Packages | undefined
  setPackageErrorStatus: (packId: string, errorStatus: ErrorPackageStatus) => void
  getAddressPackages: (addressID: string) => Packages[]
  getAllUserPackages: (userID: string, category?: string) => Packages[]
  removeAddressPackages: (addressID: string) => void
  hangOverAddressPackages: (userID: string, currentUserID: string, addressID: string) => void
}

export const PackagesContext = createContext<PackagesContextState | null>(null)

export const PackagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackages] = useLocalStorage<Packages[]>('packages', [])
  const [date] = useState(new Date())

  const addPackage = (newPackage: Packages) => {
    setPackages((prev) => [...prev, newPackage])
    toast.success('Succesfully added package')
  }

  const getPackageByID = (packID: string) => {
    const pack = packages.find((pack) => pack.package_id === packID)

    if (!pack) return

    return pack
  }

  const setPackageErrorStatus = (packId: string, errorStatus: ErrorPackageStatus) => {
    const pack = getPackageByID(packId)

    if (!pack) return

    const newPackages = packages.map((pack) =>
      pack.package_id === packId ? { ...pack, errorStatus } : pack
    )

    setPackages(newPackages)
  }

  const getAddressPackages = (addressID: string) => {
    const addressPackages = packages.filter((pack) => {
      if (pack.errorStatus || pack.success) return
      return pack.address_id === addressID
    })

    return addressPackages
  }

  const getAllUserPackages = (userID: string, category?: string) => {
    const allPackages = packages.filter((pack) => pack.user_id === userID)

    if (category === 'rest') {
      return allPackages.filter((pack) => pack.errorStatus === null && !pack.success)
    }

    if (category === 'cod') {
      return allPackages.filter((pack) => pack.cash && pack.success)
    }

    if (category === 'success') {
      return allPackages.filter((pack) => pack.success)
    }

    if (category === 'error') {
      return allPackages.filter((pack) => pack.errorStatus)
    }

    if (category === 'transfer') {
      return packages.filter((pack) => pack.prevID === userID)
    }

    return allPackages
  }

  const removeAddressPackages = (addressID: string) => {
    const newPackages = packages.filter((pack) => pack.address_id !== addressID)

    setPackages(newPackages)
  }

  const hangOverAddressPackages = (userID: string, currentUserID: string, addressID: string) => {
    const mappedPackages = packages.map((pack) =>
      pack.address_id === addressID
        ? { ...pack, prevID: currentUserID, user_id: userID, transfer: true }
        : pack
    )

    setPackages(mappedPackages)
  }

  return (
    <PackagesContext.Provider
      value={{
        date,
        packages,
        addPackage,
        getPackageByID,
        setPackageErrorStatus,
        getAddressPackages,
        getAllUserPackages,
        removeAddressPackages,
        hangOverAddressPackages,
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
