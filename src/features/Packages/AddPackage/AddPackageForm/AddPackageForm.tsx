import { useForm } from 'react-hook-form'
import { Button } from '../../../UI/Button/Button'
import { InputContainer, InputTypes } from '../../../UI/InputContainer/InputContainer'
import styled from './AddPackageForm.module.css'
import { AddPackageSchema, AddPackageSchemaType } from './AddPackageSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAddPackage } from './services/useAddPackage'

type AddPackageFormProps = {
  id: string
}

export const AddPackageForm = ({ id }: AddPackageFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddPackageSchemaType>({
    resolver: zodResolver(AddPackageSchema),
  })

  const { addPackageToPoint } = useAddPackage()

  const submitHandler = (data: AddPackageSchemaType) => {
    const newPackage = {
      ...data,
      address_id: id,
      package_id: Math.random().toString(),
    }

    addPackageToPoint(newPackage, { onSuccess: () => reset() })
  }

  return (
    <form className={styled['add-package__form']} onSubmit={handleSubmit(submitHandler)}>
      <div className={styled['add-package__statistic']}>
        <InputContainer
          id="width"
          label="form.widthLabel"
          type={InputTypes.text}
          required
          error={errors?.width?.message}
          {...register('width')}
        />
        <InputContainer
          id="height"
          label="form.heightLabel"
          type={InputTypes.text}
          required
          error={errors?.height?.message}
          {...register('height')}
        />{' '}
        <InputContainer
          id="length"
          label="form.lengthLabel"
          type={InputTypes.text}
          required
          error={errors?.length?.message}
          {...register('length')}
        />
        <InputContainer
          id="weight"
          label="form.weightLabel"
          type={InputTypes.text}
          required
          error={errors?.weight?.message}
          {...register('weight')}
        />
      </div>

      <Button modifier="primary">Dodaj paczkę do adresu</Button>
    </form>
  )
}
