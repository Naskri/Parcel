import { useTranslation } from 'react-i18next'
import styled from './../PackagesPlanning.module.css'
import { PackagesPlanningSortData, SortPossibility } from './PackagesPlanningSortData'
import { ChangeEvent } from 'react'
import { useAddressContext } from '../../../Address/AddressContext/AddressContext'

export const PackagesPlanningSort = () => {
  const { t } = useTranslation()
  const { sortAddresses } = useAddressContext()

  const handleSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    const sort = ev.target.value

    const isValidSort = (sort: string): sort is SortPossibility => {
      return sort === 'no' || sort === 'gps' || sort === 'name'
    }

    if (!isValidSort(sort)) return

    sortAddresses(sort)
  }

  return (
    <div className={styled.planning__sort}>
      <select className={styled['planning__sort-select']} onChange={handleSelect}>
        {PackagesPlanningSortData.map((sort) => (
          <option key={sort.id} value={sort.sort}>
            {t(sort.title)}
          </option>
        ))}
      </select>
    </div>
  )
}
