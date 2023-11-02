import { useMutation } from 'react-query'
import { signup } from '../../apiService'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export type RegisterProps = {
  email: string
  password: string
  pin: number
}

export const useRegister = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { mutate: registerUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, password, pin }: RegisterProps) => signup({ email, password, pin }),
    onSuccess: () => {
      navigate('/')
      toast.success(t('success.register'))
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { registerUser, isLoading } as const
}
