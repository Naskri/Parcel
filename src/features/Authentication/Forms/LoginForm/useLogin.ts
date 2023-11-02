import { useMutation } from 'react-query'
import { login } from '../../apiService'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export type LoginProps = {
  email: string
  password: string
}

export const useLogin = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { mutate: loginUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, password }: LoginProps) => login({ email, password }),
    onSuccess: () => {
      navigate('/pin')
      toast.success(t('success.login'))
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { loginUser, isLoading } as const
}
