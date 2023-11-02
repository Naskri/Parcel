import { useQuery } from 'react-query'
import { getCurrentUser } from './apiService'

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  })

  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' } as const
}
