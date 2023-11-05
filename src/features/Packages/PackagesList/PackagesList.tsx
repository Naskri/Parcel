import { useUser } from '../../Authentication/useUser'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { Spinner } from '../../UI/Spinner/Spinner'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import styled from './PackagesList.module.css'
import { useGetAllUserAddresses } from './services/useGetAllAddresses'

export const PackagesList = () => {
  const { user } = useUser()

  const { addresses, isLoading } = useGetAllUserAddresses(user?.id)

  if (isLoading) return <Spinner />

  return (
    <div className={styled.packages}>
      {addresses?.map((address) => <AddressPoint key={address.id} data={address} />)}
      <div className={styled.packages__action}>
        <CustomLink modifier="primary" path="/dashboard/warehouse/packages/new">
          Dodaj adres
        </CustomLink>
      </div>
    </div>
  )
}
