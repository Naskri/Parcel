import { useNavigate, useParams } from 'react-router'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'
import { PackageItem } from '../../PackageItem/PackageItem'
import { Button } from '../../../UI/Button/Button'
import styled from './DeliveryPackageIntro.module.css'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { useAddressContext } from '../../../Address/AddressContext/AddressContext'
import { useTranslation } from 'react-i18next'

export const DeliveryPackageIntro = () => {
  const { id, packId } = useParams()
  const { getAddress } = useAddressContext()
  const { getPackageByID } = usePackagesContext()
  const { t } = useTranslation()
  const navigate = useNavigate()

  if (!id || !packId) return

  const address = getAddress(id)
  const pack = getPackageByID(packId)

  return (
    <div className={styled.container}>
      {address && <PackageItem address={address} pack={pack} delivery={true} />}
      <div className={styled.action}>
        <Button modifier="cancel" onClick={() => navigate(-1)}>
          {t('delivery.cancel')}
        </Button>
        <CustomLink path="choice" modifier="primary">
          {t('delivery.confirm')}
        </CustomLink>
      </div>
    </div>
  )
}
