import { useTranslation } from 'react-i18next'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './StatisticsList.module.css'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'

type StatisticsListProps = {
  id: string
}

export const StatisticsList = ({ id }: StatisticsListProps) => {
  const { t } = useTranslation()
  const { getAllUserPackages } = usePackagesContext()

  const restAvailablePackages = getAllUserPackages(id, 'rest')
  const deliveredPackages = getAllUserPackages(id, 'success')
  const notDeliveredPackages = getAllUserPackages(id, 'error')
  const transferedPackages = getAllUserPackages(id, 'transfer')

  return (
    <div className={styled.container}>
      <div className={styled.links}>
        <CustomLink path="?type=rest" modifier="statistic">
          {t('statistics.rest')}
        </CustomLink>
        <div className={styled.links__summary}>
          <CustomLink path="?type=rest" modifier="additional">
            {restAvailablePackages.length}
          </CustomLink>
        </div>
      </div>
      <div className={`${styled.links} ${styled['links--red']}`}>
        <CustomLink path="?type=success" modifier="statistic">
          {t('statistics.delivery')}
        </CustomLink>
        <div className={styled.links__summary}>
          <CustomLink path="?type=success" modifier="additional">
            {deliveredPackages.length}
          </CustomLink>
        </div>
      </div>
      <div className={`${styled.links} ${styled['links--red']}`}>
        <CustomLink path="?type=error" modifier="statistic">
          {t('statistics.not')}
        </CustomLink>
        <div className={styled.links__summary}>
          <CustomLink path="?type=error" modifier="additional">
            {notDeliveredPackages.length}
          </CustomLink>
        </div>
      </div>
      <div className={`${styled.links} ${styled['links--red']}`}>
        <CustomLink path="?type=transfer" modifier="statistic">
          {t('statistics.handover')}
        </CustomLink>
        <div className={styled.links__summary}>
          <CustomLink path="?type=transfer" modifier="additional">
            {transferedPackages.length}
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
