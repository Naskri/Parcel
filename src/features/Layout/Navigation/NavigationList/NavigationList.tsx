import { NavigationListData } from './NavigationListData'
import styled from './NavigationList.module.css'
import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Button } from '../../../UI/Button/Button'
import { useSignout } from '../../../Authentication/useSignout'

export const NavigationList = () => {
  const { t } = useTranslation()
  const { signout } = useSignout()

  return (
    <ul className={styled['nav-list']}>
      {NavigationListData.map(({ id, title, Icon, path }) => (
        <li key={id}>
          <CustomLink path={path} modifier="navigation">
            <Icon className={styled['nav-item-icon']} /> <span>{t(title)}</span>
          </CustomLink>
        </li>
      ))}
      <Button modifier="primary" onClick={signout}>
        {t('navigation.logout')}
      </Button>
    </ul>
  )
}
