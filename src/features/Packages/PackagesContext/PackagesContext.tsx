import { ReactNode, createContext, useContext } from 'react'
import { AddPackageSchemaType } from '../AddPackage/AddPackageForm/AddPackageSchema'
import { PackageSupabaseData } from '../AddPackage/AddPackageForm/services/useAddPackage'
import { useLocalStorage } from 'usehooks-ts'
import { toast } from 'react-toastify'

export type Packages = AddPackageSchemaType & PackageSupabaseData

type PackagesContextState = {
  packages: Packages[]
  addPackage: (newPackage: Packages) => void
  getPackageByID: (packID: string) => Packages | undefined
  setPackageErrorStatus: (packId: string, errorStatus: string) => void
  getAddressPackages: (addressID: string) => Packages[]
}

export const PackagesContext = createContext<PackagesContextState | null>(null)

export const PackagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackages] = useLocalStorage<Packages[]>('packages', [])

  const addPackage = (newPackage: Packages) => {
    setPackages((prev) => [...prev, newPackage])
    toast.success('Succesfully added package')
  }

  const getPackageByID = (packID: string) => {
    const pack = packages.find((pack) => pack.package_id === packID)

    if (!pack) return

    return pack
  }

  const setPackageErrorStatus = (packId: string, errorStatus: string) => {
    const pack = getPackageByID(packId)

    if (!pack) return

    const newPackages = packages.map((pack) =>
      pack.package_id === packId ? { ...pack, address_id: null, errorStatus } : pack
    )

    setPackages(newPackages)
  }

  const getAddressPackages = (addressID: string) => {
    const addressPackages = packages.filter((pack) => pack.address_id === addressID)

    return addressPackages
  }

  return (
    <PackagesContext.Provider
      value={{
        packages,
        addPackage,
        getPackageByID,
        setPackageErrorStatus,
        getAddressPackages,
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
