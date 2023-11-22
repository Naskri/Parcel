import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryNotSuccesfulScreen } from '../../../features/Packages/DeliveryPackage/DeliveryNotSuccesfulScreen/DeliveryNotSuccesfulScreen'
import styled from './../Delivery.module.css'

export const DeliveryNotSuccesful = () => {
  return (
    <>
      <Navigation title="Doręczenie nieskuteczne" />
      <div className={styled.delivery}>
        <DeliveryNotSuccesfulScreen />
      </div>
    </>
  )
}
