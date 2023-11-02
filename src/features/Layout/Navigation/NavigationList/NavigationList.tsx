import { NavigationListData } from './NavigationListData'
import styled from './NavigationList.module.css'
import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Button } from '../../../UI/Button/Button'

export const NavigationList = () => {
  const { t } = useTranslation()

  return (
    <ul className={styled['nav-list']}>
      {NavigationListData.map(({ id, title, Icon, path }) => (
        <CustomLink key={id} path={path} modifier="navigation">
          <Icon className={styled['nav-item-icon']} /> <span>{t(title)}</span>
        </CustomLink>
      ))}
      <Button modifier="nav-logout">{t('navigation.logout')}</Button>
    </ul>
  )
}
