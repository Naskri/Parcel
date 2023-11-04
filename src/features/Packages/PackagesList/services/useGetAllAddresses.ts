import { useQuery } from 'react-query'
import { getAllAddresses } from './api'
import { toast } from 'react-toastify'

export const useGetAllAddresses = () => {
  const { data: addresses, isLoading } = useQuery({
    queryKey: ['addresses'],
    queryFn: getAllAddresses,
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { addresses, isLoading } as const
}
