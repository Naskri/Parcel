import { ReactNode, useEffect } from 'react'
import { useUser } from '../../Authentication/useUser'

import { useNavigate } from 'react-router'
import { FullPageSpinner } from '../Spinner/FullPageSpinner/FullPageSpinner'

type ProtectedRouteProps = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, isAuthenticated } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/')
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return <FullPageSpinner />
  }

  return isAuthenticated && children
}
