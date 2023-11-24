import styled from './PackagesPlanning.module.css'
import { DnDList } from '../../UI/DnD/DnDList'
import { ButtonBack } from '../../UI/Button/ButtonBack/ButtonBack'
import { useAddressContext } from '../../Address/AddressContext/AddressContext'
import { useTranslation } from 'react-i18next'
import { PackagesPlanningSort } from './PackagesPlanningSort/PackagesPlanningSort'

export const PackagesPlanning = () => {
  const { addresses } = useAddressContext()
  const { t } = useTranslation()

  return (
    <div className={styled.planning}>
      <header className={styled.planning__header}>
        <p className={styled.planning__addresses}>
          {t('plan.addresses')} <span className={styled.planning__items}>{addresses.length}</span>
        </p>
        <ButtonBack />
      </header>
      <div className={styled.planning__list}>
        <PackagesPlanningSort />
        <DnDList />
      </div>
    </div>
  )
}
