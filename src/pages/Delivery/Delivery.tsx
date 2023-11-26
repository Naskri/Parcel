import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { DeliveryPackage } from '../../features/Packages/DeliveryPackage/DeliveryPackage'
import styled from './Delivery.module.css'

export const Delivery = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('delivery.title')} />
      <div className={styled.delivery}>
        <DeliveryPackage />
      </div>
    </>
  )
}
