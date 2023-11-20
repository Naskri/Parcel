import { useTranslation } from 'react-i18next'
import { ButtonBack } from '../../../UI/Button/ButtonBack/ButtonBack'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './PackagesListAction.module.css'
import { VscAdd } from 'react-icons/vsc'

export const PackagesListAction = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.packages__action}>
      <CustomLink modifier="primary" path="/dashboard/warehouse/packages/new">
        <VscAdd /> {t('links.add-point')}
      </CustomLink>
      <ButtonBack />
    </div>
  )
}
