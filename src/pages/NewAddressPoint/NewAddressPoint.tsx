import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { AddPackagePoint } from '../../features/Address/AddressPoint/AddAddressPoint/AddPackagePoint'

export const NewAddressPoint = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navigation title={t('navigation.newAddressTitle')} />
      <AddPackagePoint />
    </>
  )
}
