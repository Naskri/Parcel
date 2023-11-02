import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../../UI/CustomLink/CustomLink'
import styled from './ForgotPIN.module.css'

export const ForgotPIN = () => {
  const { t } = useTranslation()
  return (
    <div className={styled.forgot}>
      <h2 className={styled.forgot__title}>{t('form.forgot-title')}</h2>
      <CustomLink path="/pin/forgot" modifier="forgot">
        {t('links.forgot-pin')}
      </CustomLink>
    </div>
  )
}
