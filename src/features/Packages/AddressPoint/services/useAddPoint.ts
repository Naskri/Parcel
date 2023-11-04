import { useMutation } from 'react-query'
import { AddPackagePointSchemaType } from '../AddAddressPoint/AddPackagePointSchema'
import { toast } from 'react-toastify'
import { addCustomerPoint } from './api'

export type AddPoint = {
  user_id: string
  custom_id: string
}

export const useAddPoint = () => {
  const { mutate: addPoint, isLoading } = useMutation({
    mutationFn: (data: AddPackagePointSchemaType & AddPoint) => addCustomerPoint(data),
    onSuccess: () => {
      toast.success('Dodano adres!')
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { addPoint, isLoading } as const
}
