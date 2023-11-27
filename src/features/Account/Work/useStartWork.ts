import { useMutation, useQueryClient } from 'react-query'
import { startWorkTime } from './apiService'
import { toast } from 'react-toastify'
import { useUser } from '../../Authentication/useUser'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Errors } from '../../UI/InputContainer/InputContainer.types'

export const useStartWork = () => {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { mutate: startWork } = useMutation({
    mutationFn: () =>
      startWorkTime({
        end_work: user?.user_metadata.end_work,
      }),
    onSuccess: () => {
      toast.success(t('success.startWork'))
      navigate('..')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(t(error.message as Errors))
      }
    },
  })

  return { startWork } as const
}
