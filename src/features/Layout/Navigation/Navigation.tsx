import { Button } from '../../UI/Button/Button'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseLine } from 'react-icons/ri'
import styled from './Navigation.module.css'
import { NavigationList } from './NavigationList/NavigationList'
import { useState } from 'react'

type NavigationProps = {
  title: string
}

export const Navigation = ({ title }: NavigationProps) => {
  const [isShowedList, setIsShowedList] = useState(false)

  const toggle = () => {
    setIsShowedList((prev) => !prev)
  }

  return (
    <nav className={styled.nav}>
      {isShowedList && <NavigationList />}
      <p>{title}</p>
      <Button modifier="menu" onClick={toggle}>
        {isShowedList ? <RiCloseLine /> : <RxHamburgerMenu />}
      </Button>
    </nav>
  )
}
