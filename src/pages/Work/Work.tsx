import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { PackagesList } from '../../features/Packages/PackagesList/PackagesList/PackagesList'

import styled from './Work.module.css'

export const Work = () => {
  return (
    <>
      <Navigation title="Work" />
      <div className={styled.work}>
        <PackagesList isWork={true} />
      </div>
    </>
  )
}
