import { useTranslation } from 'react-i18next'
import { Addresses } from '../../../Address/AddressContext/AddressContext'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Packages } from '../../PackagesContext/PackagesContext'
import styled from './PackageItemSummary.module.css'
import { ErrorCodes } from '../../DeliveryPackage/DeliveryNotSuccesfulScreen/DeliveryNotSuccesfulList/DeliveryNotSuccesfulListData'

type PackageItemSummaryProps = {
  address: Addresses
  pack: Packages
  statistic?: boolean
}

export const PackageItemSummary = ({ address, pack, statistic }: PackageItemSummaryProps) => {
  const { t } = useTranslation()

  const isToDelivery = !statistic || !pack.success

  return (
    <div className={styled.summary}>
      <h2>{t('package.data')}</h2>

      {pack.success && (
        <p className={styled.name}>
          <span className={styled.success}>{t('package.success')}</span>
        </p>
      )}

      {pack.errorStatus && (
        <p className={styled.name}>
          <span className={styled.error}>{t(ErrorCodes[pack.errorStatus])}</span>
        </p>
      )}

      <p className={styled.name}>
        {t('package.name')}
        <strong>{address.customer}</strong>
      </p>
      <p className={styled.name}>
        {t('package.company')}
        <strong>{address.customer}</strong>
      </p>
      <p className={styled.name}>
        {t('package.address')}
        <strong>{address.name},</strong>
        <strong>
          {address.city}, {address.zipCode}
        </strong>
      </p>
      <p className={styled.name}>
        {t('package.phone')}
        <strong>{address.phone}</strong>
      </p>
      <h2>{t('package.title')}</h2>
      <p className={styled.name}>
        {t('package.address')}
        <strong>{pack.package_id}</strong>
      </p>
      <div className={styled.pack}>
        <p className={styled.name}>
          {t('package.weight')}
          <strong>{pack.weight}kg</strong>
        </p>
        <p className={styled.name}>
          {t('package.height')}
          <strong>{pack.height}cm</strong>
        </p>
        <p className={styled.name}>
          {t('package.length')}
          <strong>{pack.length}cm</strong>
        </p>
        <p className={styled.name}>
          {t('package.width')}
          <strong>{pack.width}cm</strong>
        </p>
      </div>
      {pack.cash && (
        <p className={styled.name}>
          {t('package.cash')}
          <strong>{pack.cash}zł</strong>
        </p>
      )}
      {isToDelivery && (
        <div className={styled.action}>
          <CustomLink
            path={`/dashboard/address/${address.custom_id}/delivery?pack=${pack.package_id}`}
            modifier="primary"
          >
            {t('package.delivery')}
          </CustomLink>
        </div>
      )}
    </div>
  )
}
