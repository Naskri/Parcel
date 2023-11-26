import { useTranslation } from 'react-i18next'
import { DeliveryNotSuccesfulList } from './DeliveryNotSuccesfulList/DeliveryNotSuccesfulList'
import styled from './DeliveryNotSuccesfulScreen.module.css'

export const DeliveryNotSuccesfulScreen = () => {
  const { t } = useTranslation()
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>{t('delivery.errorDeliveryReason')}</h2>
      <DeliveryNotSuccesfulList />
    </div>
  )
}
