import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { AddressPointInformations } from '../../features/Packages/AddressPoint/AddressPointInformations/AddressPointInformations'

import styled from './AddressInformations.module.css'

export const AddressInformations = () => {
  return (
    <>
      <Navigation title="Informacje o adresie" />
      <div className={styled.address}>
        <AddressPointInformations />
      </div>
    </>
  )
}
