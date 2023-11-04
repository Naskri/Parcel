import { supabase } from '../../../../lib/supabase/supabase'

export const getAllAddresses = async () => {
  const { data, error } = await supabase.from('adress_points').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data
}
