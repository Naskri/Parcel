import { useParams } from 'react-router'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'
import { AddressPoint } from '../AddressPoint'
import { PackageItem } from '../../PackageItem/PackageItem'
import styled from './AddressPointInformations.module.css'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'

export const AddressPointInformations = () => {
  const { id } = useParams()
  const { existAddress, getAddressPackages } = usePackagesContext()

  const address = existAddress(id)

  if (!address) return

  const packages = getAddressPackages(address.custom_id)

  return (
    <>
      {address && <AddressPoint data={address} />}

      <CustomLink path={`/dashboard/send?address=${address.custom_id}`} modifier="primary">
        Przekaż adres
      </CustomLink>

      <h2 className={styled.title}>Address packages</h2>
      <ul className={styled.list}>
        {packages.map((pack) => (
          <li key={pack.package_id}>
            <PackageItem address={address} pack={pack} />
          </li>
        ))}
      </ul>
    </>
  )
}
