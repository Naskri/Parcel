import { useQuery } from 'react-query'
import { getAllAddresses } from './api'
import { toast } from 'react-toastify'

export const useGetAllUserAddresses = (userID: string | undefined) => {
  if (!userID) {
    return { addresses: [], isLoading: false }
  }

  const { data: addresses, isLoading } = useQuery({
    queryKey: ['addresses'],
    queryFn: () => getAllAddresses(userID),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { addresses, isLoading } as const
}
