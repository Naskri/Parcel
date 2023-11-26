import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './DeliveryChoiceScreen.module.css'

export const DeliveryChoiceScreen = () => {
  const { t } = useTranslation()
  return (
    <div className={styled.container}>
      <CustomLink path="correct" modifier="primary">
        {t('delivery.correctDelivery')}
      </CustomLink>
      <CustomLink path="wrong" modifier="cancel">
        {t('delivery.errorDelivery')}
      </CustomLink>
    </div>
  )
}
