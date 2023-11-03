import { useMutation, useQueryClient } from 'react-query'
import { endWorkTime } from './apiService'
import { toast } from 'react-toastify'

export const useEndWork = () => {
  const queryClient = useQueryClient()

  const { mutate: endWork } = useMutation({
    mutationFn: endWorkTime,
    onSuccess: () => {
      toast.success('Zakończono prace')

      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { endWork } as const
}
