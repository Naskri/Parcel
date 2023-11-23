import { supabase } from './../../../../lib/supabase/supabase'

export const getUserByEmail = async (email: string) => {
  const { data: user, error } = await supabase.from('users').select('user_id').eq('email', email)

  if (error) {
    throw new Error(error.message)
  }

  return user.length > 0 ? user[0].user_id : null
}
