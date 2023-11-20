import { useState } from 'react'
import { Button } from '../../UI/Button/Button'
import { Addresses, Packages } from '../PackagesContext/PackagesContext'
import styled from './PackageItem.module.css'
import { PackageItemSummary } from './PackageItemSummary/PackageItemSummary'

type PackageItemProps = {
  address: Addresses
  pack: Packages
}

export const PackageItem = ({ address, pack }: PackageItemProps) => {
  const [isShowingMore, setIsShowingMore] = useState(false)
  return (
    <div className={styled.container}>
      <div className={styled.informations}>
        <div>
          <strong>{address.name}</strong>
          <p>
            {address.zipCode} {address.city}
          </p>
          <p className={styled.data}>{address.customer}</p>
          {pack.cash && <strong>{pack.cash}zł</strong>}
        </div>
        <p className={styled.data}>{pack.package_id}</p>
      </div>
      <Button onClick={() => setIsShowingMore((prev) => !prev)} modifier="summary">
        {isShowingMore ? 'Hide' : 'Show more'}
      </Button>

      {isShowingMore && <PackageItemSummary address={address} pack={pack} />}
    </div>
  )
}
