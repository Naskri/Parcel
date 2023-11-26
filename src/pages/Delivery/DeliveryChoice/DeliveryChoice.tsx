import { useTranslation } from 'react-i18next'
import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryChoiceScreen } from '../../../features/Packages/DeliveryPackage/DeliveryChoiceScreen/DeliveryChoiceScreen'
import styled from './../Delivery.module.css'

export const DeliveryChoice = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('delivery.choiceTitle')} />
      <div className={styled.delivery}>
        <DeliveryChoiceScreen />
      </div>
    </>
  )
}
