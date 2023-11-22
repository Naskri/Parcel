import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliverySuccesfulScreen } from '../../../features/Packages/DeliveryPackage/DeliverySuccesfulScreen/DeliverySuccesfulScreen'

import styled from './../Delivery.module.css'

export const DeliverySuccesful = () => {
  return (
    <>
      <Navigation title="Doręczenie skuteczne" />
      <div className={styled.delivery}>
        <DeliverySuccesfulScreen />
      </div>
    </>
  )
}
