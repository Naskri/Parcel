import { useDrag, useDrop } from 'react-dnd'
import styled from './AddressPoint.module.css'
import { Addresses, usePackagesContext } from '../PackagesContext/PackagesContext'

type AddressPointProps = {
  data: Addresses
  index?: number
}

export const AddressPoint = ({ data, index }: AddressPointProps) => {
  const { reorderAddressPoints, getAddressPackages } = usePackagesContext()
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
    <div ref={index ? (node) => ref(drop(node)) : null} className={styled.address}>
      <div className={styled.address__customer}>
        <p className={styled.address__street}>
          {data.street} {data.house}
        </p>
        <p>
          {data.zipCode} {data.city}
        </p>
        <p>{data.customer}</p>
      </div>
      <div className={styled.address__summary}>
        <span>COD</span>
        {packages.length > 0 && <div className={styled.packages}>{packages.length}</div>}
      </div>
    </div>
  )
}
