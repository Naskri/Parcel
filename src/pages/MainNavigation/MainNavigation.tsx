import { AiOutlineFieldTime } from 'react-icons/ai'
import { LuBus, LuMapPin } from 'react-icons/lu'
import { CustomLink } from '../../features/UI/CustomLink/CustomLink'
import styled from './MainNavigation.module.css'
import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { useUser } from '../../features/Authentication/useUser'

export const MainNavigation = () => {
  const { t } = useTranslation()
  const { user } = useUser()

  const day_off = user?.user_metadata.day_off

  return (
    <>
      <Navigation title={t('navigation.homeTitle')} />
      <ul className={styled.list}>
        <li className={styled.item}>
          <CustomLink path="/dashboard/time" modifier="dashboard">
            <AiOutlineFieldTime className={styled.icon} />
            <p className={styled.title}>{t('navigation.work-time')}</p>
          </CustomLink>
        </li>
        {!day_off && (
          <li className={styled.dashboard__item}>
            <CustomLink path="/dashboard/warehouse" modifier="dashboard">
              <LuBus className={styled.icon} />
              <p className={styled.title}>{t('navigation.warehouse')}</p>
            </CustomLink>
          </li>
        )}
        <li className={styled.dashboard__item}>
          <CustomLink path="/dashboard/work" modifier="dashboard">
            <LuMapPin className={styled.icon} />
            <p className={styled.title}>{t('navigation.route')}</p>
          </CustomLink>
        </li>
      </ul>
    </>
  )
}
