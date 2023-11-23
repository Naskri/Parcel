import { useNavigate, useParams } from 'react-router'

import styled from './AddPackage.module.css'
import { useEffect } from 'react'
import { AddPackageForm } from './AddPackageForm/AddPackageForm'
import { AddressPoint } from '../../Address/AddressPoint/AddressPoint'
import { useAddressContext } from '../../Address/AddressContext/AddressContext'

export const AddPackage = () => {
  const { id } = useParams()
  const { getAddress } = useAddressContext()
  const navigate = useNavigate()

  const address = getAddress(id)

  useEffect(() => {
    if (!address) {
      navigate('/dashboard/warehouse/packages')
    }
  }, [address])

  return (
    <div className={styled.add}>
      {address && <AddressPoint data={address} />}
      {id && (
        <div className={styled['add-rest']}>
          <AddPackageForm id={id} />
        </div>
      )}
    </div>
  )
}
