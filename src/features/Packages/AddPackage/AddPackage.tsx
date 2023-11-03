import { useTranslation } from 'react-i18next'
import { Button } from '../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'
import { MiniSpinner } from '../../UI/Spinner/MiniSpinner/MiniSpinner'
import styled from './AddPackage.module.css'
import { CustomLink } from '../../UI/CustomLink/CustomLink'

export const AddPackage = () => {
  const is = true
  const { t } = useTranslation()
  return (
    <div className={styled['add-package']}>
      <form className={styled['add-package__form']}>
        <InputContainer id="name" label="form.nameLabel" type={InputTypes.text} required />
        <div className={styled['add-package__street']}>
          <InputContainer id="street" label="form.streetLabel" type={InputTypes.text} required />
          <CustomLink path="map" modifier="street">
            {t('navigation.map')}
          </CustomLink>
        </div>
        <div className={styled['add-package__city']}>
          <InputContainer id="zipCode" label="form.zipCodeLabel" type={InputTypes.text} required />
          <InputContainer id="city" label="form.cityLabel" type={InputTypes.text} required />
          <InputContainer id="house" label="form.houseLabel" type={InputTypes.text} required />
        </div>
        <Button modifier="form">{is ? <MiniSpinner /> : t('links.auth-login')}</Button>
      </form>
    </div>
  )
}
