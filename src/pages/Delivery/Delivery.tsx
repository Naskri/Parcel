import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { DeliveryPackage } from '../../features/Packages/DeliveryPackage/DeliveryPackage'
import styled from './Delivery.module.css'

export const Delivery = () => {
  return (
    <>
      <Navigation title="Doręczaj" />
      <div className={styled.delivery}>
        <DeliveryPackage />
      </div>
    </>
  )
}
