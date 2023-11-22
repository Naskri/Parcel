import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import styled from './DeliveryChoiceScreen.module.css'

export const DeliveryChoiceScreen = () => {
  return (
    <div className={styled.container}>
      <CustomLink path="correct" modifier="primary">
        Doręczenie skuteczne
      </CustomLink>
      <CustomLink path="wrong" modifier="cancel">
        Doręczenie nieskuteczne
      </CustomLink>
    </div>
  )
}
