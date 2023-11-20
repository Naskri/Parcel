import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { SearchAddresses } from '../../features/Packages/SearchAddresses/SearchAddresses'
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
