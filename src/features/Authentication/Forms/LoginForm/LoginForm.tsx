import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'

export const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <div className={styled.form__container}>
      <FormHeader />
      <form className={styled.form}>
        <InputContainer id="email" label="form.emailLabel" type={InputTypes.text} required />
        <InputContainer
          id="password"
          label="form.passwordLabel"
          type={InputTypes.password}
          required
        />
      </form>
      <Button modifier="form">{t('links.auth-login')}</Button>
    </div>
  )
}
