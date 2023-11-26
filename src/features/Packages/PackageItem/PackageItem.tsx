import { useState } from 'react'
import { Button } from '../../UI/Button/Button'
import { Packages } from '../PackagesContext/PackagesContext'
import styled from './PackageItem.module.css'
import { PackageItemSummary } from './PackageItemSummary/PackageItemSummary'
import { Addresses } from '../../Address/AddressContext/AddressContext'
import { useTranslation } from 'react-i18next'

type PackageItemProps = {
  address: Addresses
  pack?: Packages
  delivery?: boolean
}

export const PackageItem = ({ address, pack, delivery }: PackageItemProps) => {
  const [isShowingMore, setIsShowingMore] = useState(false)
  const { t } = useTranslation()

  return (
    <div className={`${styled.container} ${delivery && styled['container--delivery']}`}>
      <div className={styled.informations}>
        <div>
          <strong>
            {address?.street} {address.name}
          </strong>
          <p>
            {address.zipCode} {address.city}
          </p>
          <p className={styled.data}>{address.customer}</p>
          {pack?.cash && <strong>{pack.cash}zł</strong>}
        </div>
        <p className={styled.data}>{pack?.package_id}</p>
      </div>
      {!delivery && (
        <Button onClick={() => setIsShowingMore((prev) => !prev)} modifier="summary">
          {isShowingMore ? t('package.more-on') : t('package.more-off')}
        </Button>
      )}
      {pack && isShowingMore && <PackageItemSummary address={address} pack={pack} />}
    </div>
  )
}
