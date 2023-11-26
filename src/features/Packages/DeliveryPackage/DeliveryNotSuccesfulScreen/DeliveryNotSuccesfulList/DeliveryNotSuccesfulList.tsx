import { Button } from '../../../../UI/Button/Button'
import { DeliveryNotSuccesfulListData } from './DeliveryNotSuccesfulListData'
import styled from './DeliveryNotSuccesfulList.module.css'
import { usePackagesContext } from '../../../PackagesContext/PackagesContext'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

export const DeliveryNotSuccesfulList = () => {
  const { packId } = useParams()
  const navigate = useNavigate()
  const { setPackageErrorStatus } = usePackagesContext()
  const { t } = useTranslation()

  if (!packId) return

  const setErrorWithRedirect = (status: string) => {
    setPackageErrorStatus(packId, status)
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
