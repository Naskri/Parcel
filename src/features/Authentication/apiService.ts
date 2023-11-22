import { supabase } from '../../lib/supabase/supabase'
import { LoginProps } from './Forms/LoginForm/useLogin'
import { RegisterProps } from './Forms/RegisterForm/useRegister'
import { UpdatePINProps } from './Forms/UpdatePIN/useUpdatePIN'

export const signup = async ({ email, password, pin }: RegisterProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        pin,
        start_work: null,
        end_work: null,
        is_work: false,
        day_off: false,
      },
    },
  })

  const { error: customTableUserError } = await supabase
    .from('users')
    .insert([{ email, user_id: data.user?.id }])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (customTableUserError) {
    throw new Error(customTableUserError.message)
  }

  return data
}

export const login = async ({ email, password }: LoginProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession()

  if (!session.session) return null

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message)
  }

  return user
}

export const updatePIN = async ({ pin }: UpdatePINProps) => {
  const { data, error } = await supabase.auth.updateUser({
    data: { pin },
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const userSignout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message)
  }
}
