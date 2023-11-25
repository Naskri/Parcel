import styled from './AddPackagePoint.module.css'

import { useSearchParams } from 'react-router-dom'
import { useGeoreverse } from '../services/useGeoreverse'

import { AddPackagePointForm } from './AddPackagePointForm'
import { Spinner } from '../../../UI/Spinner/Spinner'

export const AddPackagePoint = () => {
  const [searchParams] = useSearchParams()
  const lat = Number(searchParams.get('lat'))
  const log = Number(searchParams.get('log'))

  const { isLoading, data } = useGeoreverse({
    latitude: lat,
    longitude: log,
  })

  return (
    <div className={styled['add-package']}>
      {!isLoading ? <AddPackagePointForm data={data} /> : <Spinner />}
    </div>
  )
}
