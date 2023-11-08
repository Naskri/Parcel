import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { CustomLink } from '../../features/UI/CustomLink/CustomLink'
import styled from './Warehouse.module.css'

export const Warehouse = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation title="Magazyn" />
      <ul className={styled.list}>
        <li className={styled.item}>
          <CustomLink path="/dashboard/warehouse/packages" modifier="primary">
            <p className={styled.title}>{t('navigation.packages')}</p>
          </CustomLink>
        </li>

        <li className={styled.dashboard__item}>
          <CustomLink path="/dashboard/warehouse/work" modifier="primary">
            <p className={styled.title}>{t('navigation.plan-route')}</p>
          </CustomLink>
        </li>
      </ul>
    </>
  )
}
