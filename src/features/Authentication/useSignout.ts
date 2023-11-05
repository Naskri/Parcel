import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { userSignout } from './apiService'

export const useSignout = () => {
  const navigate = useNavigate()
  const { mutate: signout } = useMutation({
    mutationFn: userSignout,
    onSuccess: () => {
      navigate('/')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { signout } as const
}
