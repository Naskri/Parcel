import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { Spinner } from '../../UI/Spinner/Spinner'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import styled from './PackagesList.module.css'
import { useGetAllAddresses } from './services/useGetAllAddresses'

export const PackagesList = () => {
  const { addresses, isLoading } = useGetAllAddresses()

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
