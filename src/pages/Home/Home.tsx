import { LoginForm } from '../../features/Authentication/Forms/LoginForm/LoginForm'
import { Header } from '../../features/Layout/Header/Header'
import { Wrapper } from '../../features/UI/Wrapper/Wrapper'
import styled from './Home.module.css'

export const Home = () => {
  return (
    <Wrapper>
      <div className={styled.home}>
        <Header />
        <LoginForm />
      </div>
    </Wrapper>
  )
}
