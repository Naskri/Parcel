import { Button } from '../../../../UI/Button/Button'
import { DeliveryNotSuccesfulListData, ErrorPackageStatus } from './DeliveryNotSuccesfulListData'
import styled from './DeliveryNotSuccesfulList.module.css'
import { usePackagesContext } from '../../../PackagesContext/PackagesContext'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useAddressContext } from '../../../../Address/AddressContext/AddressContext'

export const DeliveryNotSuccesfulList = () => {
  const { id, packId } = useParams()
  const navigate = useNavigate()
  const { setPackageErrorStatus } = usePackagesContext()
  const { updateAddressPackages } = useAddressContext()
  const { t } = useTranslation()

  if (!packId) return

  const setErrorWithRedirect = (status: ErrorPackageStatus) => {
    setPackageErrorStatus(packId, status)
    if (id) {
      updateAddressPackages(id, true)
    }
    navigate('/dashboard')
  }

  return (
    <ul className={styled.list}>
      {DeliveryNotSuccesfulListData.map((deliveryStatus) => (
        <li key={deliveryStatus.id}>
          <Button
            modifier="delivery-status"
            onClick={() => setErrorWithRedirect(deliveryStatus.code)}
          >
            {t(deliveryStatus.title)}
          </Button>
        </li>
      ))}
    </ul>
  )
}
