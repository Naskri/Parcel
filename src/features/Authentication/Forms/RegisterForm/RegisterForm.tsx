import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, RegisterSchemaType } from './RegisterSchema'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { useRegister } from './useRegister'
import { MiniSpinner } from '../../../UI/MiniSpinner/MiniSpinner'

export const RegisterForm = () => {
  const { t } = useTranslation()
  const { registerUser, isLoading } = useRegister()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  })

  const submitHandler = ({ email, password, pin }: RegisterSchemaType) => {
    registerUser({ email, password, pin: Number(pin) }, { onSuccess: () => reset() })
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
        <InputContainer
          id="pin"
          label="form.pinLabel"
          error={errors?.pin?.message}
          type={InputTypes.password}
          required
          disabled={isLoading}
          {...register('pin')}
        />
        <Button modifier="form">{isLoading ? <MiniSpinner /> : t('links.auth-register')}</Button>
      </form>
      <p className={styled.form__help}>
        {t('form.helpLogin')}{' '}
        <CustomLink path="/" modifier="help">
          {t('links.auth-login')}
        </CustomLink>
      </p>
      <div className={styled.form__image}>
        <img src="./images/delivery.jpg" alt="" />
      </div>
    </div>
  )
}
