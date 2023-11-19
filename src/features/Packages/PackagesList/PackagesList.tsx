import { useTranslation } from 'react-i18next'
import { ButtonBack } from '../../UI/Button/ButtonBack/ButtonBack'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { AddressPoint } from '../AddressPoint/AddressPoint'
import { usePackagesContext } from '../PackagesContext/PackagesContext'
import { VscAdd } from 'react-icons/vsc'
import styled from './PackagesList.module.css'
import { useState } from 'react'

export const PackagesList = () => {
  const { addresses } = usePackagesContext()
  const { t } = useTranslation()
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const changeSelectedAddress = (id: string) => {
    setSelectedAddress(id === selectedAddress ? null : id)
  }

  return (
    <div className={styled.packages}>
      <div className={styled.packages__action}>
        <CustomLink modifier="primary" path="/dashboard/warehouse/packages/new">
          <VscAdd /> {t('links.add-point')}
        </CustomLink>
        <ButtonBack />
      </div>
      {addresses.map((address) => (
        <AddressPoint
          key={address.custom_id}
          data={address}
          selectedAddress={selectedAddress}
          changeAddress={changeSelectedAddress}
        />
      ))}
    </div>
  )
}
