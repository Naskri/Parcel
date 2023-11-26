import { useTranslation } from 'react-i18next'
import styled from './Statistics.module.css'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesStatistics } from '../../features/Packages/PackagesStatistics/PackagesStatistics'
import { useUser } from '../../features/Authentication/useUser'
import { Spinner } from '../../features/UI/Spinner/Spinner'

export const Statistics = () => {
  const { t } = useTranslation()
  const { user } = useUser()

  return (
    <>
      <Navigation title={t('statistics.title')} />
      <div className={styled.statistics}>
        {user ? <PackagesStatistics id={user.id} /> : <Spinner />}
      </div>
    </>
  )
}
