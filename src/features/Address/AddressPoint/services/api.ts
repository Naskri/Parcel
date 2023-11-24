import { GeoLocation } from '../../../../pages/Map/Map'
import { GeoreverseSchema } from './GeoreverseSchema'

const API_URL = 'https://api.geoapify.com/v1/geocode/reverse'

export const geocodingReverse = async ({ latitude, longitude }: GeoLocation) => {
  if (!latitude || !longitude) return null

  const res = await fetch(
    `${API_URL}?lat=${latitude}&lon=${longitude}&format=json&apiKey=${
      import.meta.env.VITE_GEOAPI_API_KEY
    }`
  )

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  const data = await res.json()

  const parsedData = GeoreverseSchema.parse(data.results[0])

  return parsedData
}
