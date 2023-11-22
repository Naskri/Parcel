import { Button } from '../../../../UI/Button/Button'
import { DeliveryNotSuccesfulListData } from './DeliveryNotSuccesfulListData'
import styled from './DeliveryNotSuccesfulList.module.css'
import { usePackagesContext } from '../../../PackagesContext/PackagesContext'
import { useNavigate, useParams } from 'react-router'

export const DeliveryNotSuccesfulList = () => {
  const { packId } = useParams()
  const navigate = useNavigate()
  const { setPackageErrorStatus } = usePackagesContext()

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
            {deliveryStatus.title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
