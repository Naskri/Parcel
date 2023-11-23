import { useTranslation } from 'react-i18next'
import { SearchAddresses } from '../../features/Address/SearchAddresses/SearchAddresses'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import styled from './Search.module.css'

export const Search = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation title={t('search.title')} />
      <div className={styled.search}>
        <h1 className={styled.title}>{t('search.heading')}</h1>
        <SearchAddresses />
      </div>
    </>
  )
}
