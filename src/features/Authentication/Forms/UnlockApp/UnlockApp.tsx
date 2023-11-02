import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { UnlockAppSchema, UnlockAppSchemaType } from './UnlockAppSchema'

import { ForgotPIN } from './ForgotPIN/ForgotPIN'

export const UnlockApp = () => {
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UnlockAppSchemaType>({
    resolver: zodResolver(UnlockAppSchema),
  })

  const submitHandler = () => {}

  return (
    <div className={styled.form__container}>
      <FormHeader />
      <form className={styled.form} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          id="email"
          label="form.pinLabel"
          type={InputTypes.text}
          required
          error={errors?.pin?.message}
          {...register('pin')}
        />

        <Button modifier="form">{t('links.auth-login')}</Button>
      </form>
      <ForgotPIN />
      <div className={styled.form__image}>
        <img src="./images/delivery.jpg" alt="" />
      </div>
    </div>
  )
}
