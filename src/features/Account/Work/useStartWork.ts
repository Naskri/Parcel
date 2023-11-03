import { useMutation, useQueryClient } from 'react-query'
import { startWorkTime } from './apiService'
import { toast } from 'react-toastify'
import { useUser } from '../../Authentication/useUser'
import { useNavigate } from 'react-router'

export const useStartWork = () => {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const navigate = useNavigate()

  const { mutate: startWork } = useMutation({
    mutationFn: () =>
      startWorkTime({
        end_work: user?.user_metadata.end_work,
      }),
    onSuccess: () => {
      toast.success('Zaczęto prace')
      navigate('..')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { startWork } as const
}
