import { Navigation } from '../../../features/Layout/Navigation/Navigation'
import { DeliveryPackageIntro } from '../../../features/Packages/DeliveryPackage/DeliveryPackageIntro/DeliveryPackageIntro'
import styled from './../Delivery.module.css'

export const DeliveryIntro = () => {
  return (
    <>
      <Navigation title="Próba doręczenia" />
      <div className={styled.delivery}>
        <DeliveryPackageIntro />
      </div>
    </>
  )
}
