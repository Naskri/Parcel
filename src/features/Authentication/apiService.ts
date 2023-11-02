import { supabase } from '../../lib/supabase/supabase'
import { RegisterProps } from './Forms/RegisterForm/useRegister'

export const signup = async ({ email, password, pin }: RegisterProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        pin,
      },
    },
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}
