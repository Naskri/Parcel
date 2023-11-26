import { useForm } from 'react-hook-form'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import styled from './DeliveryPackageForm.module.css'
import { CiBarcode } from 'react-icons/ci'
import { DeliveryPackageFormSchema, DeliveryPackageFormSchemaType } from './DeliveryPackageSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

type DeliveryPackageFormProps = {
  id: string | null
}

export const DeliveryPackageForm = ({ id }: DeliveryPackageFormProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<DeliveryPackageFormSchemaType>({
    resolver: zodResolver(DeliveryPackageFormSchema),
    defaultValues: { pack: id || '' },
  })

  const submitHandler = (data: DeliveryPackageFormSchemaType) => {
    navigate(`${data.pack}`)
    reset()
  }

  return (
    <div className={styled.container}>
      <CiBarcode className={styled.icon} />
      <h1>{t('delivery.packNumber')}</h1>
      <form className={styled.form} onSubmit={handleSubmit(submitHandler)}>
        <InputContainer
          id="email"
          label="form.packLabel"
          type={InputTypes.text}
          required
          error={errors?.pack?.message}
          {...register('pack')}
        />
        <Button modifier="primary">{t('delivery.addPackage')}</Button>
      </form>
    </div>
  )
}
