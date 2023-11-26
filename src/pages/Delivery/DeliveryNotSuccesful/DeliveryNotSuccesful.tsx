import { useTranslation } from 'react-i18next'
import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryNotSuccesfulScreen } from '../../../features/Packages/DeliveryPackage/DeliveryNotSuccesfulScreen/DeliveryNotSuccesfulScreen'
import styled from './../Delivery.module.css'

export const DeliveryNotSuccesful = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('delivery.errorDelivery')} />
      <div className={styled.delivery}>
        <DeliveryNotSuccesfulScreen />
      </div>
    </>
  )
}
