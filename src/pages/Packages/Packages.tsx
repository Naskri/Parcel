import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesListContainer } from '../../features/Packages/PackagesList/PackagesListContainer'

export const Packages = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('navigation.packagesTitle')} />
      <PackagesListContainer />
    </>
  )
}
