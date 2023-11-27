import { useMutation, useQueryClient } from 'react-query'
import { endWorkTime } from './apiService'
import { toast } from 'react-toastify'
import { Addresses, useAddressContext } from '../../Address/AddressContext/AddressContext'
import { useTranslation } from 'react-i18next'
import { Errors } from '../../UI/InputContainer/InputContainer.types'
import { useUser } from '../../Authentication/useUser'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'

export const useEndWork = (workAddresses: Addresses[]) => {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const { removeAllUserAddresses } = useAddressContext()
  const { removeAllUserPackages } = usePackagesContext()

  const { t } = useTranslation()

  const { mutate: endWork } = useMutation({
    mutationFn: () => endWorkTime(workAddresses),
    onSuccess: () => {
      toast.success(t('success.doneWork'))

      if (!user) return

      removeAllUserAddresses(user.id)
      removeAllUserPackages(user.id)

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
