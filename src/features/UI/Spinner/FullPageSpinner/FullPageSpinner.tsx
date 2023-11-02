import { Spinner } from '../Spinner'
import styled from './../Spinner.module.css'

export const FullPageSpinner = () => {
  return (
    <div className={styled.fullpagespinner}>
      <Spinner />
    </div>
  )
}
