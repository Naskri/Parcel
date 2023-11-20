import { useEffect, useState } from 'react'
import { PackagesList } from '../PackagesList/PackagesList/PackagesList'
import styled from './SearchAddresses.module.css'
import { useSearchParams } from 'react-router-dom'

export const SearchAddresses = () => {
  const [search, setSearch] = useState('')
  const [searchParams] = useSearchParams()

  const query = searchParams.get('query')

  useEffect(() => {
    if (!query) return
    setSearch(query)
  }, [query])

  return (
    <div className={styled['search-container']}>
      <input
        type="text"
        placeholder="Search by title"
        className={styled.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PackagesList search={search} />
    </div>
  )
}
