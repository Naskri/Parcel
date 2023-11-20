import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { AddressPointInformations } from '../../features/Packages/AddressPoint/AddressPointInformations/AddressPointInformations'
import { ButtonBack } from '../../features/UI/Button/ButtonBack/ButtonBack'

import styled from './AddressInformations.module.css'

export const AddressInformations = () => {
  return (
    <>
      <Navigation title="Informacje o adresie" />
      <div className={styled.address}>
        <div className={styled.action}>
          <ButtonBack />
        </div>
        <AddressPointInformations />
      </div>
    </>
  )
}
