import { useForm } from 'react-hook-form'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'
import styled from './Send.module.css'
import { SendSchema, SendSchemaType } from './SendSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../UI/Button/Button'
import { getUserByEmail } from './services/api'
import { useState } from 'react'
import { usePackagesContext } from '../PackagesContext/PackagesContext'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

export const Send = () => {
  const [searchParams] = useSearchParams()
  const [error, setError] = useState('')
  const { hangOverAddress } = usePackagesContext()
  const navigate = useNavigate()
  const address = searchParams.get('address')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendSchemaType>({
    resolver: zodResolver(SendSchema),
    defaultValues: { address: address || '' },
  })

  const submitHandler = async (data: SendSchemaType) => {
    try {
      setError('')

      const user = await getUserByEmail(data.email)

      if (!user) {
        setError('No user with email found.')
        return
      }

      hangOverAddress(user, data.address)
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
        <Button modifier="form">Przekaż</Button>
      </form>
      {error && <p className={styled.error}>{error}</p>}
    </div>
  )
}
