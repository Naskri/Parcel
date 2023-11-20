import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Addresses, Packages } from '../../PackagesContext/PackagesContext'
import styled from './PackageItemSummary.module.css'

type PackageItemSummaryProps = {
  address: Addresses
  pack: Packages
}

export const PackageItemSummary = ({ address, pack }: PackageItemSummaryProps) => {
  return (
    <div className={styled.summary}>
      <h2>Dane doręczenia</h2>
      <p className={styled.name}>
        Imię i nazwisko:
        <strong>{address.customer}</strong>
      </p>
      <p className={styled.name}>
        Nazwa firmy:
        <strong>{address.customer}</strong>
      </p>
      <p className={styled.name}>
        Adres:
        <strong>{address.name},</strong>
        <strong>
          {address.city}, {address.zipCode}
        </strong>
      </p>
      <p className={styled.name}>
        Telefon:
        <strong>{address.phone}</strong>
      </p>
      <h2>Paczka</h2>
      <p className={styled.name}>
        Numer paczki:
        <strong>{pack.package_id}</strong>
      </p>
      <div className={styled.pack}>
        <p className={styled.name}>
          Waga:
          <strong>{pack.weight}kg</strong>
        </p>
        <p className={styled.name}>
          Wysokość:
          <strong>{pack.height}cm</strong>
        </p>
        <p className={styled.name}>
          Długość:
          <strong>{pack.length}cm</strong>
        </p>
        <p className={styled.name}>
          Szerokość:
          <strong>{pack.width}cm</strong>
        </p>
      </div>
      {pack.cash && (
        <p className={styled.name}>
          Pobranie:
          <strong>{pack.cash}zł</strong>
        </p>
      )}
      <div className={styled.action}>
        <CustomLink path="/" modifier="primary">
          Doręczaj
        </CustomLink>
      </div>
    </div>
  )
}
