import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import { CustomLink } from '../../../UI/CustomLink/CustomLink'
import { useAddressContext } from '../../AddressContext/AddressContext'
import styled from './AddressPointMenu.module.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoAddOutline } from 'react-icons/io5'
import { MdGridView } from 'react-icons/md'

type AddressPointMenuProps = {
  id: string
  isWork?: boolean
}

export const AddressPointMenu = ({ id, isWork }: AddressPointMenuProps) => {
  const { removeAddress } = useAddressContext()
  const { t } = useTranslation()

  return (
    <div className={styled.menu}>
      <ul className={styled.list}>
        {!isWork && (
          <li>
            <Button onClick={() => removeAddress(id)} modifier="menu">
              <AiOutlineDelete /> <span>{t('adrressmenu.delete')}</span>
            </Button>
          </li>
        )}
        {!isWork && (
          <li>
            <CustomLink path={`${id}`} modifier="menu">
              <IoAddOutline /> <span>{t('adrressmenu.add')}</span>
            </CustomLink>
          </li>
        )}
        {isWork && (
          <li>
            <CustomLink path={`../address/${id}`} modifier="menu">
              <MdGridView /> <span>{t('adrressmenu.summary')}</span>
            </CustomLink>
          </li>
        )}
        {isWork && (
          <li>
            <CustomLink path={`../send?address=${id}`} modifier="menu">
              <MdGridView /> <span>{t('adrressmenu.handover')}</span>
            </CustomLink>
          </li>
        )}
      </ul>
    </div>
  )
}
