import { Navigation } from '../../features/Layout/Navigation/Navigation'
import styled from './Delivery.module.css'

export const Delivery = () => {
  return (
    <>
      <Navigation title="Doręczaj" />
      <div className={styled.delivery}>
        <h1>ręczajDo</h1>
      </div>
    </>
  )
}
