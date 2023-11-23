import { NavigationListData } from './NavigationListData'
import styled from './NavigationList.module.css'
import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Button } from '../../../UI/Button/Button'
import { useSignout } from '../../../Authentication/useSignout'
import { BsFillHousesFill } from 'react-icons/bs'
import { useAddressContext } from '../../../Address/AddressContext/AddressContext'

export const NavigationList = () => {
  const { t } = useTranslation()
  const { signout } = useSignout()
  const { reverseAddresses } = useAddressContext()

  return (
    <ul className={styled['nav-list']}>
      {NavigationListData.map(({ id, title, Icon, path }) => (
        <li key={id}>
          <CustomLink path={path} modifier="navigation">
            <Icon className={styled['nav-item-icon']} /> <span>{t(title)}</span>
          </CustomLink>
        </li>
      ))}
      <li>
        <Button modifier="navigation" onClick={reverseAddresses}>
          <BsFillHousesFill className={styled['nav-item-icon']} />
          <span>{t('navigation.item7title')}</span>
        </Button>
      </li>
      <Button modifier="primary" onClick={signout}>
        {t('navigation.logout')}
      </Button>
    </ul>
  )
}
