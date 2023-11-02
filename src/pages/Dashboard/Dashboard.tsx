import { Navigation } from '../../features/Layout/Navigation/Navigation'
import styled from './Dashboard.module.css'

export const Dashboard = () => {
  return (
    <main className={styled.dashboard}>
      <Navigation title="Witaj!" />
    </main>
  )
}
