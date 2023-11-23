import styled from './PackagesPlanning.module.css'
import { DnDList } from '../../UI/DnD/DnDList'
import { ButtonBack } from '../../UI/Button/ButtonBack/ButtonBack'
import { useAddressContext } from '../../Address/AddressContext/AddressContext'

export const PackagesPlanning = () => {
  const { addresses } = useAddressContext()

  return (
    <div className={styled.planning}>
      <header className={styled.planning__header}>
        <p className={styled.planning__addresses}>
          Punkty adresowe <span className={styled.planning__items}>{addresses.length}</span>
        </p>
        <ButtonBack />
      </header>
      <div className={styled.planning__list}>
        <DnDList />
      </div>
    </div>
  )
}
