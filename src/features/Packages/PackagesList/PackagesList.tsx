import { ButtonBack } from '../../UI/Button/ButtonBack/ButtonBack'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import { usePackagesContext } from '../PackagesContext/PackagesContext'
import styled from './PackagesList.module.css'

export const PackagesList = () => {
  const { addresses } = usePackagesContext()

  return (
    <div className={styled.packages}>
      {addresses.map((address) => (
        <AddressPoint key={address.custom_id} data={address} />
      ))}
      <div className={styled.packages__action}>
        <CustomLink modifier="primary" path="/dashboard/warehouse/packages/new">
          Dodaj adres
        </CustomLink>
        <ButtonBack />
      </div>
    </div>
  )
}
