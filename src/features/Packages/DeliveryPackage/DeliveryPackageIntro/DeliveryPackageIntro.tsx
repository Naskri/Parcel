import { useNavigate, useParams } from 'react-router'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'
import { PackageItem } from '../../PackageItem/PackageItem'
import { Button } from '../../../UI/Button/Button'
import styled from './DeliveryPackageIntro.module.css'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'

export const DeliveryPackageIntro = () => {
  const { id, packId } = useParams()
  const { existAddress, getPackageByID } = usePackagesContext()
  const navigate = useNavigate()

  if (!id || !packId) return

  const address = existAddress(id)
  const pack = getPackageByID(packId)

  return (
    <div className={styled.container}>
      {address && <PackageItem address={address} pack={pack} delivery={true} />}
      <div className={styled.action}>
        <Button modifier="cancel" onClick={() => navigate(-1)}>
          Anuluj
        </Button>
        <CustomLink path="choice" modifier="primary">
          Zatwierdź
        </CustomLink>
      </div>
    </div>
  )
}
