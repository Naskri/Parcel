import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { UnlockAppSchema, UnlockAppSchemaType } from './UnlockAppSchema'

import { ForgotPIN } from './ForgotPIN/ForgotPIN'
import { useUser } from '../../useUser'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const UnlockApp = () => {
  const { t } = useTranslation()
  const { user } = useUser()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UnlockAppSchemaType>({
    resolver: zodResolver(UnlockAppSchema),
  })

  const submitHandler = ({ pin }: UnlockAppSchemaType) => {
    const userPIN = Number(user?.user_metadata?.pin)

    if (!userPIN) return

    if (Number(pin) === userPIN) {
      toast.success(t('success.dashboard'))
      navigate('/dashboard')
    } else {
      toast.error(t('validation.pinNotMatch'))
    }
  }

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

        <Button modifier="form">{t('links.auth-pin')}</Button>
      </form>
      <ForgotPIN />
      <div className={styled.form__image}>
        <img src="./../images/delivery.jpg" alt="" />
      </div>
    </div>
  )
}
