import { useDrag, useDrop } from 'react-dnd'
import styled from './AddressPoint.module.css'

import { Button } from '../../UI/Button/Button'
import { AiOutlineMore } from 'react-icons/ai'
import { AddressPointMenu } from './AddressPointMenu/AddressPointMenu'
import { usePackagesContext } from '../../Packages/PackagesContext/PackagesContext'
import { Addresses, useAddressContext } from '../AddressContext/AddressContext'

type AddressPointProps = {
  data: Addresses
  index?: number
  isWork?: boolean
  selectedAddress?: string | null
  drag?: boolean
  changeAddress?: (id: string) => void
}

export const AddressPoint = ({
  data,
  index,
  selectedAddress,
  isWork,
  changeAddress,
  drag,
}: AddressPointProps) => {
  const { getAddressPackages } = usePackagesContext()
  const { isAddressHasCashPackage, reorderAddressPoints } = useAddressContext()
  const hasCODPackages = isAddressHasCashPackage(data.custom_id)
  const packages = getAddressPackages(data.custom_id)

  const [, ref] = useDrag({
    type: 'ADDRESS_POINT',
    item: {
      type: 'ADDRESS_POINT',
      data,
    },
  })

  const [, drop] = useDrop({
    type: 'ADDRESS_POINT',
    accept: 'ADDRESS_POINT',
    hover: (draggedItem: { index: number }) => {
      if (!index) return

      if (draggedItem.index !== index) {
        reorderAddressPoints(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })

  return (
    <div
      ref={index ? (node) => ref(drop(node)) : null}
      className={`${styled.address} ${drag && styled['address--drag']}`}
    >
      <div className={styled.address__customer}>
        <p className={styled.address__street}>
          {data.street} {data.house}
        </p>
        {changeAddress && (
          <Button
            modifier="more"
            aria-label="View more address actions"
            onClick={() => changeAddress(data.custom_id)}
          >
            <AiOutlineMore />
          </Button>
        )}
        {data.custom_id === selectedAddress && (
          <AddressPointMenu isWork={isWork} id={data.custom_id} />
        )}
      </div>
      <p>
        {data.zipCode} {data.city}
      </p>
      <p>{data.customer}</p>

      <div className={styled.address__summary}>
        {hasCODPackages && <span className={styled.address__cod}>COD</span>}
        {packages.length > 0 && <div className={styled.packages}>{packages.length}</div>}
      </div>
    </div>
  )
}
