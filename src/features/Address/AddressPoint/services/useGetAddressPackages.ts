import { useQuery } from 'react-query'
import { getAddressAllPackages } from './api'
import { toast } from 'react-toastify'

export const useGetAddressPackages = (id: string) => {
  const { data: packages, isLoading } = useQuery({
    queryKey: ['packages', id],
    queryFn: () => getAddressAllPackages(id),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { packages, isLoading } as const
}
