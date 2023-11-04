import { useQuery } from 'react-query'
import { getAddressPoint } from './api'
import { toast } from 'react-toastify'

export const useGetAddressPoint = (id: string | undefined) => {
  if (!id) {
    return { address: null, isLoading: false }
  }

  const { data: address, isLoading } = useQuery({
    queryKey: ['address'],
    queryFn: () => getAddressPoint(id),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { address, isLoading } as const
}
