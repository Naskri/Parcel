import { Outlet } from 'react-router'
import { Header } from '../../features/Layout/Header/Header'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import styled from './Home.module.css'

export const Home = () => {
  return (
    <Wrapper>
      <div className={styled.home}>
        <Header />
        <Outlet />
      </div>
    </Wrapper>
  )
}
