import { useQuery } from 'react-query'
import { geocodingReverse } from './api'
import { GeoLocation } from '../../../../pages/Map/Map'

export const useGeoreverse = ({ latitude, longitude }: GeoLocation) => {
  const { data, isLoading } = useQuery({
    queryKey: ['geo', latitude, longitude],
    queryFn: () => geocodingReverse({ latitude, longitude }),
  })

  return {
    data,
    isLoading,
  } as const
}
