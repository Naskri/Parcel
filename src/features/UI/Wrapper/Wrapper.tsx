import { ReactNode } from 'react'
import styled from './Wrapper.module.css'

type WrapperProps = {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styled.wrapper}>{children}</div>
}
