import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { AddPackageSchemaType } from '../AddPackageSchema'
import { addPackage } from './api'

export type PackageSupabaseData = {
  package_id: string | null
  address_id: string | null
}

export const useAddPackage = () => {
  const query = useQueryClient()

  const { mutate: addPackageToPoint, isLoading } = useMutation({
    mutationFn: (data: AddPackageSchemaType & PackageSupabaseData) => addPackage(data),
    onSuccess: () => {
      toast.success('Dodano paczkę do adresu!')
      query.invalidateQueries({ queryKey: ['packages'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { addPackageToPoint, isLoading } as const
}
