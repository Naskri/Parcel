import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesList } from '../../features/Packages/PackagesList/PackagesList'

export const Packages = () => {
  return (
    <>
      <Navigation title="Paczki" />
      <PackagesList />
    </>
  )
}
