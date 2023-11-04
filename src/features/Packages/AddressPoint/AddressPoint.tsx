import styled from './AddressPoint.module.css'
import { useGetAddressPackages } from './services/useGetAddressPackages'

type AddressPointProps = {
  data: any
}

export const AddressPoint = ({ data }: AddressPointProps) => {
  const { packages, isLoading } = useGetAddressPackages(data.custom_id)

  return (
    <div className={styled.address}>
      <h1>{data?.city}</h1>
      {!isLoading && (
        <ul>{packages?.map((pack) => <li key={pack.id}> Moja paczka waży {pack.weight}</li>)}</ul>
      )}
    </div>
  )
}
