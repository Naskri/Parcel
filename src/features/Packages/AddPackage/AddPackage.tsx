import { useNavigate, useParams } from 'react-router'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import styled from './AddPackage.module.css'
import { useEffect } from 'react'
import { AddPackageForm } from './AddPackageForm/AddPackageForm'
import { useGetAddressPoint } from '../AddressPoint/services/useGetAddressPoint'

export const AddPackage = () => {
  const { id } = useParams()
  const { address, isLoading } = useGetAddressPoint(id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !address) {
      navigate('/dashboard/warehouse/packages')
    }
  }, [address, isLoading])

  return (
    <div className={styled.add}>
      {!isLoading && <AddressPoint data={address} />}
      {id && (
        <div className={styled['add-rest']}>
          <AddPackageForm id={id} />
        </div>
      )}
    </div>
  )
}
