import { useTranslation } from 'react-i18next'
import { Logo } from '../../UI/Logo/Logo'
import styled from './Header.module.css'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.header}>
      <Logo />
      <p className={styled.header__title}>{t('layout.title')}</p>
    </div>
  )
}
