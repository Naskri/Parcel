import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from './LoginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { useLogin } from './useLogin'
import { MiniSpinner } from '../../../UI/Spinner/MiniSpinner/MiniSpinner'

export const LoginForm = () => {
  const { t } = useTranslation()

  const { loginUser, isLoading } = useLogin()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  const submitHandler = (data: LoginSchemaType) => {
    loginUser(data, { onSuccess: () => reset() })
  }

  return (
    <div className={styled.form__container}>
      <FormHeader />
      <form className={styled.form} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          id="email"
          label="form.emailLabel"
          type={InputTypes.text}
          required
          disabled={isLoading}
          error={errors?.email?.message}
          {...register('email')}
        />
        <InputContainer
          id="password"
          label="form.passwordLabel"
          type={InputTypes.password}
          required
          disabled={isLoading}
          error={errors?.password?.message}
          {...register('password')}
        />
        <Button modifier="form">{isLoading ? <MiniSpinner /> : t('links.auth-login')}</Button>
      </form>
      <p className={styled.form__help}>
        {t('form.helpRegister')}{' '}
        <CustomLink path="/register" modifier="help">
          {t('links.auth-register')}
        </CustomLink>
      </p>
      <div className={styled.form__image}>
        <img src="./images/delivery.jpg" alt="" />
      </div>
    </div>
  )
}
