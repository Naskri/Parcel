import { CustomLink } from '../CustomLink/CustomLink'
import { BsFillBoxFill } from 'react-icons/bs'
import styled from './Logo.module.css'

export const Logo = () => {
  return (
    <CustomLink path="/" modifier="logo">
      <BsFillBoxFill className={styled.logo} />
      <span>Parcel</span>
    </CustomLink>
  )
}
