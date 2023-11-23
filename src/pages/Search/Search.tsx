import { SearchAddresses } from '../../features/Address/SearchAddresses/SearchAddresses'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import styled from './Search.module.css'

export const Search = () => {
  return (
    <>
      <Navigation title="Wyszukaj" />
      <div className={styled.search}>
        <SearchAddresses />
      </div>
    </>
  )
}
