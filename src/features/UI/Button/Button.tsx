import { ReactNode } from 'react'
import styled from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  modifier?: string
  onClick?: () => void
}

export const Button = ({ children, modifier, ...rest }: ButtonProps) => {
  return (
    <button className={`${styled.button} ${modifier && styled[`button--${modifier}`]}`} {...rest}>
      {children}
    </button>
  )
}
