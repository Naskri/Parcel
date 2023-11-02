import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../../../UI/LanguageSelect/LanguageSelect'
import styled from './FormHeader.module.css'

export const FormHeader = () => {
  const { t } = useTranslation()
  return (
    <div className={styled['form-header']}>
      <h1 className={styled['form-header__title']}>{t('form.title')}</h1>
      <LanguageSelect />
    </div>
  )
}
