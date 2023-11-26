import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import styled from './HandOverAddressForm.module.css'
import { getUserByEmail } from './services/api'
import { useAddressContext } from '../AddressContext/AddressContext'
import {
  HandOverAddressFormSchema,
  HandOverAddressFormSchemaType,
} from './HandOverAddressFormSchema'

import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'
import { Button } from '../../UI/Button/Button'
import { useTranslation } from 'react-i18next'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'
import { useUser } from '../../Authentication/useUser'

export const HandOverAddressForm = () => {
  const { hangOverAddress } = useAddressContext()
  const { hangOverAddressPackages } = usePackagesContext()
  const [searchParams] = useSearchParams()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { user } = useUser()
  const address = searchParams.get('address')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<HandOverAddressFormSchemaType>({
    resolver: zodResolver(HandOverAddressFormSchema),
    defaultValues: { address: address || '' },
  })

  const submitHandler = async (data: HandOverAddressFormSchemaType) => {
    try {
      setError('')

      const userToTransform = await getUserByEmail(data.email)

      if (!userToTransform) {
        return setError(t('send.user-invalid'))
      }

      if (!user) return

      hangOverAddressPackages(userToTransform, user.id, data.address)
      hangOverAddress(userToTransform, data.address)
      navigate('/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }

  return (
    <div>
      <form className={styled.form} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          id="email"
          label="form.emailLabel"
          type={InputTypes.text}
          required
          error={errors?.email?.message}
          {...register('email')}
        />
        <InputContainer
          id="address"
          label="form.adresLabel"
          type={InputTypes.text}
          required
          error={errors?.address?.message}
          {...register('address')}
        />
        <Button modifier="form">{t('send.title')}</Button>
      </form>
      {error && <p className={styled.error}>{error}</p>}
    </div>
  )
}
