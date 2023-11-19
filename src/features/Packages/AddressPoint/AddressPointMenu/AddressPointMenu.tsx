import { Button } from '../../../UI/Button/Button'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'
import styled from './AddressPointMenu.module.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaArrowsLeftRight } from 'react-icons/fa6'
import { IoAddOutline } from 'react-icons/io5'
import { MdGridView } from 'react-icons/md'

type AddressPointMenuProps = {
  id: string
}

export const AddressPointMenu = ({ id }: AddressPointMenuProps) => {
  const { removeAddress } = usePackagesContext()
  return (
    <div className={styled.menu}>
      <ul className={styled.list}>
        <li>
          <Button onClick={() => removeAddress(id)} modifier="menu">
            <AiOutlineDelete /> <span>Delete address</span>
          </Button>
        </li>
        <li>
          <CustomLink path={`warehouse/packages/${id}`} modifier="menu">
            <FaArrowsLeftRight /> <span>Doręczaj</span>
          </CustomLink>
        </li>
        <li>
          <CustomLink path={`${id}`} modifier="menu">
            <IoAddOutline /> <span>Dodaj paczki</span>
          </CustomLink>
        </li>
        <li>
          <CustomLink path={`${id}`} modifier="menu">
            <MdGridView /> <span>Podsumowanie</span>
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}
