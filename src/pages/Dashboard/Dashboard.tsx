import styled from './Dashboard.module.css'
import { Outlet } from 'react-router'

export const Dashboard = () => {
  return (
    <main className={styled.dashboard}>
      <Outlet />
    </main>
  )
}
