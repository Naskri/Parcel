import { useMutation, useQueryClient } from 'react-query'
import { endWorkTime } from './apiService'
import { toast } from 'react-toastify'
import { Addresses } from '../../Address/AddressContext/AddressContext'
import { useTranslation } from 'react-i18next'
import { Errors } from '../../UI/InputContainer/InputContainer.types'

export const useEndWork = (workAddresses: Addresses[]) => {
  const queryClient = useQueryClient()

  const { t } = useTranslation()

  const { mutate: endWork } = useMutation({
    mutationFn: () => endWorkTime(workAddresses),
    onSuccess: () => {
      toast.success(t('success.doneWork'))

      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(t(error.message as Errors))
      }
    },
  })

  return { endWork } as const
}
