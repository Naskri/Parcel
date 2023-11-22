import { DeliveryNotSuccesfulList } from './DeliveryNotSuccesfulList/DeliveryNotSuccesfulList'
import styled from './DeliveryNotSuccesfulScreen.module.css'

export const DeliveryNotSuccesfulScreen = () => {
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Wybierz powód</h2>
      <DeliveryNotSuccesfulList />
    </div>
  )
}
