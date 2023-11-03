import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { AddPackage } from '../../features/Packages/AddPackage/AddPackage'

export const NewPackage = () => {
  return (
    <>
      <Navigation title="Nowa paczka" />
      <AddPackage />
    </>
  )
}
