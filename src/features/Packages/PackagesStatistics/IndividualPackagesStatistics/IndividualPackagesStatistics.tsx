import { useNavigate } from 'react-router'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'
import styled from './IndividualPackagesStatistics.module.css'
import { useAddressContext } from '../../../Address/AddressContext/AddressContext'
import { PackageItem } from '../../PackageItem/PackageItem'
import { useEffect } from 'react'

type IndividualPackagesStatisticsProps = {
  id: string
  category: string
}

export const IndividualPackagesStatistics = ({
  id,
  category,
}: IndividualPackagesStatisticsProps) => {
  const { getAllUserPackages } = usePackagesContext()
  const { getAddress } = useAddressContext()
  const navigate = useNavigate()

  const categoryPackages = getAllUserPackages(id, category)

  useEffect(() => {
    if (categoryPackages.length === 0) {
      navigate('/dashboard/stats')
    }
  }, [categoryPackages.length])

  return (
    <div className={styled.default}>
      {categoryPackages.map((pack) => {
        const address = getAddress(pack.address_id)

        if (!address) return null

        return <PackageItem key={pack.package_id} statistic={true} address={address} pack={pack} />
      })}
    </div>
  )
}
