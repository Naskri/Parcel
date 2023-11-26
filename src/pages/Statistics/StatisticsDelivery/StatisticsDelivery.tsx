import { useSearchParams } from 'react-router-dom'
import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { IndividualPackagesStatistics } from '../../../features/Packages/PackagesStatistics/IndividualPackagesStatistics/IndividualPackagesStatistics'
import styled from './../Statistics.module.css'
import { useUser } from '../../../features/Authentication/useUser'
import { Spinner } from '../../../features/UI/Spinner/Spinner'
import { useTranslation } from 'react-i18next'

export const StatisticsDelivery = () => {
  const [searchParams] = useSearchParams()
  const { user } = useUser()
  const { t } = useTranslation()

  const category = searchParams.get('type')

  return (
    <>
      <Navigation title={t('statistics.individual-title')} />
      <div className={styled.statistics__delivery}>
        {!user && <Spinner />}
        {!category || !user ? null : (
          <IndividualPackagesStatistics category={category} id={user.id} />
        )}
      </div>
    </>
  )
}
