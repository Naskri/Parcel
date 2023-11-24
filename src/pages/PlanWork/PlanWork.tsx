import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesPlanning } from '../../features/Packages/PackagesPlanning/PackagesPlanning'

export const PlanWork = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation title={t('plan.title')} />
      <PackagesPlanning />
    </>
  )
}
