import { useNavigate } from 'react-router'
import { useUser } from '../../features/Authentication/useUser'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesList } from '../../features/Packages/PackagesList/PackagesList/PackagesList'

import styled from './Work.module.css'
import { useEffect } from 'react'

export const Work = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) return

    const startWork = user.user_metadata.is_work

    if (!startWork) {
      navigate('/dashboard')
    }
  }, [user])

  return (
    <>
      <Navigation title="Work" />
      <div className={styled.work}>
        <PackagesList isWork={true} />
      </div>
    </>
  )
}
