import { useForm } from 'react-hook-form'
import { InputContainer, InputTypes } from '../../UI/InputContainer/InputContainer'
import styled from './Send.module.css'
import { SendSchema, SendSchemaType } from './SendSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../UI/Button/Button'
import { toast } from 'react-toastify'

export const Send = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendSchemaType>({
    resolver: zodResolver(SendSchema),
  })

  const submitHandler = async (data: SendSchemaType) => {
    try {
      return data
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
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
          id="pack"
          label="form.packLabel"
          type={InputTypes.text}
          required
          error={errors?.pack?.message}
          {...register('pack')}
        />
        <Button modifier="form">Przekaż</Button>
      </form>
    </div>
  )
}
