import { usePackagesContext } from '../PackagesContext/PackagesContext'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import styled from './PackagesStatistics.module.css'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { useTranslation } from 'react-i18next'

type PackagesStatisticsProps = {
  id: string
}

export const PackagesStatistics = ({ id }: PackagesStatisticsProps) => {
  const { date, getAllUserPackages } = usePackagesContext()
  const { t } = useTranslation()

  const allPackages = getAllUserPackages(id)
  const restAvailablePackages = getAllUserPackages(id, 'rest')
  const succesfullyDeliveredPackages = getAllUserPackages(id, 'success')
  const succesfullyCODPackages = getAllUserPackages(id, 'cod')

  const CODsum = succesfullyCODPackages.reduce((acc, next) => (acc += Number(next.cash)), 0)

  const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  const percentage =
    Math.round((succesfullyDeliveredPackages.length / allPackages.length) * 100) || 0

  return (
    <div>
      <header className={styled.header}>
        <p>{formatDate}</p>
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            styles={{
              path: {
                stroke: `var(--color-primary)`,
                strokeWidth: 5,
              },
              text: {
                fill: `var(--color-black)`,
                fontSize: '16px',
              },
            }}
            value={Number(percentage)}
            text={`${percentage}%`}
          />
          <p className={styled['chart-title']}>{t('statistics.chart-title')}</p>
        </div>
      </header>
      <div className={styled.container}>
        <div className={styled.container__additional}>
          <p className={styled.additional}>{t('statistics.additional-rest')}</p>
          <p className={styled.additional}>{t('statistics.additional-all')}</p>
        </div>
        <div className={styled.links}>
          <CustomLink path="delivery" modifier="statistic">
            {t('statistics.chart-title')}
          </CustomLink>
          <div className={styled.links__summary}>
            <CustomLink path="delivery?type=rest" modifier="additional">
              {restAvailablePackages.length}
            </CustomLink>
            <CustomLink path="delivery?type=all" modifier="additional">
              {allPackages.length}
            </CustomLink>
          </div>
        </div>
        <div className={`${styled.links} ${styled['links--red']}`}>
          <CustomLink path="delivery?type=cod" modifier="statistic">
            COD
          </CustomLink>
          <div className={styled.links__summary}>
            <CustomLink path="delivery?type=cod" modifier="additional--bigger">
              {CODsum} PLN
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  )
}
