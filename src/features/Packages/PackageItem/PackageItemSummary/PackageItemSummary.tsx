import { useTranslation } from 'react-i18next'
import { Addresses } from '../../../Address/AddressContext/AddressContext'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Packages } from '../../PackagesContext/PackagesContext'
import styled from './PackageItemSummary.module.css'

type PackageItemSummaryProps = {
  address: Addresses
  pack: Packages
}

export const PackageItemSummary = ({ address, pack }: PackageItemSummaryProps) => {
  const { t } = useTranslation()

  return (
    <div className={styled.summary}>
      <h2>{t('package.data')}</h2>
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
      <div className={styled.action}>
        <CustomLink path={`delivery?pack=${pack.package_id}`} modifier="primary">
          {t('package.delivery')}
        </CustomLink>
      </div>
    </div>
  )
}
