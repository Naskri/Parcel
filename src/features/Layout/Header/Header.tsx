import { Logo } from '../../UI/Logo/Logo'
import styled from './Header.module.css'

export const Header = () => {
  return (
    <div className={styled.header}>
      <Logo />
      <p className={styled.header__title}>Your delivery experts!</p>
    </div>
  )
}
