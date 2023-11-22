import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryChoiceScreen } from '../../../features/Packages/DeliveryPackage/DeliveryChoiceScreen/DeliveryChoiceScreen'
import styled from './../Delivery.module.css'

export const DeliveryChoice = () => {
  return (
    <>
      <Navigation title="Doręczenie" />
      <div className={styled.delivery}>
        <DeliveryChoiceScreen />
      </div>
    </>
  )
}
