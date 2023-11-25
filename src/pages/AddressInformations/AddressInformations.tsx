import { useTranslation } from 'react-i18next'
import { AddressPointInformations } from '../../features/Address/AddressPoint/AddressPointInformations/AddressPointInformations'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { ButtonBack } from '../../features/UI/Button/ButtonBack/ButtonBack'

import styled from './AddressInformations.module.css'

export const AddressInformations = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('route.information-title')} />
      <div className={styled.address}>
        <div className={styled.action}>
          <ButtonBack />
        </div>
        <AddressPointInformations />
      </div>
    </>
  )
}
