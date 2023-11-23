import { useParams } from 'react-router'

import { AddressPoint } from '../AddressPoint'

import styled from './AddressPointInformations.module.css'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { PackageItem } from '../../../Packages/PackageItem/PackageItem'
import { usePackagesContext } from '../../../Packages/PackagesContext/PackagesContext'
import { useAddressContext } from '../../AddressContext/AddressContext'

export const AddressPointInformations = () => {
  const { id } = useParams()
  const { getAddressPackages } = usePackagesContext()
  const { getAddress } = useAddressContext()

  const address = getAddress(id)

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
