import { DeliveryPackageForm } from './DeliveryPackageForm/DeliveryPackageForm'
import { useSearchParams } from 'react-router-dom'

export const DeliveryPackage = () => {
  const [searchParams] = useSearchParams()

  const packId = searchParams.get('pack')

  return <DeliveryPackageForm id={packId} />
}
