import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import { FormHeader } from '../FormHeader/FormHeader'
import styled from './../Form.module.css'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { UpdatePINSchema, UpdatePINSchemaType } from './UpdatePINSchema'
import { useUpdatePIN } from './useUpdatePIN'
import { MiniSpinner } from '../../../UI/Spinner/MiniSpinner/MiniSpinner'

export const UpdatePIN = () => {
  const { t } = useTranslation()
  const { updateUserPIN, isLoading } = useUpdatePIN()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdatePINSchemaType>({
    resolver: zodResolver(UpdatePINSchema),
  })

  const submitHandler = ({ new_pin }: UpdatePINSchemaType) => {
    updateUserPIN({ pin: Number(new_pin) }, { onSuccess: () => reset() })
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
          disabled={isLoading}
          error={errors?.new_pin?.message}
          {...register('new_pin')}
        />

        <Button modifier="form">{isLoading ? <MiniSpinner /> : t('links.update-pin')}</Button>
      </form>
      <div className={styled.form__image}>
        <img src="./../images/delivery.jpg" alt="" />
      </div>
    </div>
  )
}
