import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { Send } from '../../features/Packages/Send/Send'
import styled from './SendPackages.module.css'

export const SendPackages = () => {
  return (
    <>
      <Navigation title="Przekaż paczkę" />
      <div className={styled.send}>
        <h1>Przekaż paczkę</h1>
        <Send />
      </div>
    </>
  )
}
