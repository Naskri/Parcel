import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesList } from '../../features/Packages/PackagesList/PackagesList'

export const Packages = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('navigation.packagesTitle')} />
      <PackagesList />
    </>
  )
}
