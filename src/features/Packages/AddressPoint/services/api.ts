import { supabase } from '../../../../lib/supabase/supabase'
import { GeoLocation } from '../../../../pages/Map/Map'
import { AddPackagePointSchemaType } from '../AddAddressPoint/AddPackagePointSchema'
import { AddPoint } from './useAddPoint'

const API_URL = 'https://api.geoapify.com/v1/geocode/reverse'

export const geocodingReverse = async ({ latitude, longitude }: GeoLocation) => {
  try {
    const res = await fetch(
      `${API_URL}?lat=${latitude}&lon=${longitude}&format=json&apiKey=${
        import.meta.env.VITE_GEOAPI_API_KEY
      }`
    )

    const data = await res.json()

    return data.results[0]
  } catch (err) {
    if (err instanceof Error) {
      return err.message
    }
  }
}

export const getAddressPoint = async (id: string) => {
  const { data, error } = await supabase.from('adress_points').select('*').eq('custom_id', id)

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export const addCustomerPoint = async (data: AddPackagePointSchemaType & AddPoint) => {
  const address_point = await getAddressPoint(data.custom_id)

  if (address_point) {
    throw new Error('Masz już taki adres!')
  }

  const { data: customer, error } = await supabase.from('adress_points').insert([data]).select()

  if (error) {
    throw new Error(error.message)
  }

  return customer
}

export const getAddressAllPackages = async (id: string) => {
  const { data: packages, error } = await supabase.from('packages').select('*').eq('address_id', id)

  if (error) {
    throw new Error(error.message)
  }

  return packages
}
