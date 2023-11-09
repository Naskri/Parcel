import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { AddPackage } from '../../features/Packages/AddPackage/AddPackage'

export const NewPackage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('navigation.newPackageTitle')} />
      <AddPackage />
    </>
  )
}
