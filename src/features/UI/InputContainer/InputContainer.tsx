import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from './InputContainer.module.css'
import { VscError } from 'react-icons/vsc'
import { Errors, Label } from './InputContainer.types'

export enum InputTypes {
  'text' = 'text',
  'number' = 'number',
  'password' = 'password',
}

type InputContainerProps = {
  id: string
  label: Label
  error?: string
  type?: InputTypes
  required?: boolean
  disabled?: boolean
}

export const InputContainer = forwardRef<HTMLInputElement, InputContainerProps>(
  ({ id, error, label, disabled, ...rest }, ref) => {
    const { t } = useTranslation()

    return (
      <div className={styled.container}>
        <div className={styled.input__container}>
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            {...rest}
            className={`${styled.input} ${error && styled['input--error']} ${
              disabled && styled['input--disabled']
            }`}
          />
          {!disabled && (
            <label htmlFor={id} className={styled.input__label}>
              {t(label)}
            </label>
          )}
        </div>
        {error && (
          <span className={styled.input__error}>
            <VscError /> {t(error as Errors)}
          </span>
        )}
      </div>
    )
  }
)

InputContainer.displayName = 'Input'
