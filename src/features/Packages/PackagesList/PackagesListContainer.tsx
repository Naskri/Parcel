import styled from './PackagesListContainer.module.css'

import { PackagesList } from './PackagesList/PackagesList'
import { PackagesListAction } from './PackagesListAction/PackagesListAction'

export const PackagesListContainer = () => {
  return (
    <div className={styled.packages}>
      <PackagesListAction />
      <PackagesList />
    </div>
  )
}
