import { ChangeEvent, useEffect, useState } from 'react'
import styled from './SearchAddresses.module.css'
import { useSearchParams } from 'react-router-dom'
import { PackagesList } from '../../Packages/PackagesList/PackagesList/PackagesList'
import { SearchAddressesSelectData } from './SearchAddressesSelectData'
import { Addresses } from '../AddressContext/AddressContext'

export const SearchAddresses = () => {
  const [search, setSearch] = useState('')
  const [searchParams] = useSearchParams()
  const [selectedOption, setSelectedOption] = useState<keyof Addresses>('name')

  const query = searchParams.get('query')

  useEffect(() => {
    if (!query) return
    setSelectedOption('name')
    setSearch(query)
  }, [query])

  const setNewOption = (ev: ChangeEvent<HTMLSelectElement>) => {
    const option = ev.target.value as keyof Addresses

    setSelectedOption(option)
  }

  return (
    <div className={styled['search-container']}>
      <div className={styled.top}>
        <select className={styled.select} defaultValue={selectedOption} onChange={setNewOption}>
          {SearchAddressesSelectData.map((selectOption) => (
            <option key={selectOption.id}>{selectOption.value}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder={`Search by ${selectedOption}`}
          className={styled.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <PackagesList search={search} searchCategory={selectedOption} />
    </div>
  )
}
