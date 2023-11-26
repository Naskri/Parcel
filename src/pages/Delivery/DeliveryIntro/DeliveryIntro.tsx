import { useTranslation } from 'react-i18next'
import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryPackageIntro } from '../../../features/Packages/DeliveryPackage/DeliveryPackageIntro/DeliveryPackageIntro'
import styled from './../Delivery.module.css'

export const DeliveryIntro = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('delivery.introTitle')} />
      <div className={styled.delivery}>
        <DeliveryPackageIntro />
      </div>
    </>
  )
}
