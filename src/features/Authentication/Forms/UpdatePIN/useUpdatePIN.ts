import { useMutation } from 'react-query'

import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { updatePIN } from '../../apiService'
import { useNavigate } from 'react-router'

export type UpdatePINProps = {
  pin: number
}

export const useUpdatePIN = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutate: updateUserPIN, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ pin }: UpdatePINProps) => updatePIN({ pin }),
    onSuccess: () => {
      toast.success(t('success.pin'))
      navigate('../pin')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { updateUserPIN, isLoading } as const
}
