import { useForm } from 'react-hook-form'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import styled from './AddPackagePoint.module.css'
import { AddPackagePointSchema, AddPackagePointSchemaType } from './AddPackagePointSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { Button } from '../../../UI/Button/Button'
import { MiniSpinner } from '../../../UI/Spinner/MiniSpinner/MiniSpinner'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../../Authentication/useUser'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router'

import { useState } from 'react'
import { ButtonBack } from '../../../UI/Button/ButtonBack/ButtonBack'
import { useAddressContext } from '../../AddressContext/AddressContext'
import { GeoreverseSchemaType } from '../services/GeoreverseSchema'

type AddPackagePointFormProps = {
  data?: GeoreverseSchemaType
}

export const AddPackagePointForm = ({ data }: AddPackagePointFormProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const navigate = useNavigate()
  const { addAddress } = useAddressContext()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddPackagePointSchemaType>({
    resolver: zodResolver(AddPackagePointSchema),
    defaultValues: {
      name: data?.address_line1,
      street: data?.street,
      zipCode: data?.postcode,
      city: data?.city,
      house: data?.housenumber,
    },
  })

  const submitHandler = (formData: AddPackagePointSchemaType) => {
    setIsLoading(true)
    if (!user) return
    const customID = uuidv4()
    addAddress({
      ...formData,
      user_id: user.id,
      custom_id: customID,
      position: {
        latitude: data?.lat,
        longitude: data?.lon,
      },
    })
    reset({ name: '', street: '', zipCode: '', city: '', house: '', customer: '', phone: '' })
    setIsLoading(false)
    navigate(`/dashboard/warehouse/packages/${customID}`)
  }

  return (
    <>
      <div className={styled['add-package__back']}>
        <ButtonBack />
      </div>
      <form className={styled['add-package__form']} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          id="customer"
          label="form.customerLabel"
          type={InputTypes.text}
          required
          error={errors?.customer?.message}
          disabled={isLoading}
          {...register('customer')}
        />
        <InputContainer
          id="name"
          label="form.nameLabel"
          type={InputTypes.text}
          required
          error={errors?.name?.message}
          disabled={isLoading}
          {...register('name')}
        />
        <div className={styled['add-package__street']}>
          <InputContainer
            id="street"
            label="form.streetLabel"
            type={InputTypes.text}
            required
            error={errors?.street?.message}
            disabled={isLoading}
            {...register('street')}
          />
          <CustomLink path="map" modifier="street">
            {t('navigation.map')}
          </CustomLink>
        </div>
        <div className={styled['add-package__city']}>
          <InputContainer
            id="zipCode"
            label="form.zipCodeLabel"
            type={InputTypes.text}
            required
            error={errors?.zipCode?.message}
            disabled={isLoading}
            {...register('zipCode')}
          />
          <InputContainer
            id="city"
            label="form.cityLabel"
            type={InputTypes.text}
            required
            error={errors?.city?.message}
            disabled={isLoading}
            {...register('city')}
          />
          <InputContainer
            id="house"
            label="form.houseLabel"
            type={InputTypes.text}
            required
            error={errors?.house?.message}
            disabled={isLoading}
            {...register('house')}
          />
        </div>
        <InputContainer
          id="phone"
          label="form.phoneLabel"
          type={InputTypes.text}
          required
          error={errors?.phone?.message}
          disabled={isLoading}
          {...register('phone')}
        />
        <Button modifier="form">{isLoading ? <MiniSpinner /> : t('links.add-point')}</Button>
      </form>
    </>
  )
}
