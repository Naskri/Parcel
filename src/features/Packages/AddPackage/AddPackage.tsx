import { useNavigate, useParams } from 'react-router'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import styled from './AddPackage.module.css'
import { useEffect } from 'react'
import { AddPackageForm } from './AddPackageForm/AddPackageForm'
import { usePackagesContext } from '../PackagesContext/PackagesContext'

export const AddPackage = () => {
  const { id } = useParams()
  const { existAddress } = usePackagesContext()
  const navigate = useNavigate()

  const address = existAddress(id)

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
