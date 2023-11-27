import { useTranslation } from 'react-i18next'
import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliverySuccesfulScreen } from '../../../features/Packages/DeliveryPackage/DeliverySuccesfulScreen/DeliverySuccesfulScreen'

import styled from './../Delivery.module.css'

export const DeliverySuccesful = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation title={t('delivery.correctDelivery')} />
      <div className={styled.delivery}>
        <DeliverySuccesfulScreen />
      </div>
    </>
  )
}
