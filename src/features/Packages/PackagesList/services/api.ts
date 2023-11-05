import { supabase } from '../../../../lib/supabase/supabase'

export const getAllAddresses = async (userID: string) => {
  const { data, error } = await supabase.from('adress_points').select('*').eq('user_id', userID)

  if (error) {
    throw new Error(error.message)
  }

  return data
}
