import { supabase } from '../../../lib/supabase/supabase'
import { Addresses } from '../../Address/AddressContext/AddressContext'
import { isSameDate } from './helpers'

type WorkTimeProps = {
  end_work: string
}

export const endWorkTime = async (workAddresses: Addresses[]) => {
  if (workAddresses.length > 0) {
    throw new Error('validation.haveWorkYet')
  }

  const updateData = {
    is_work: false,
    end_work: new Date(),
    day_off: true,
  }

  const { data, error } = await supabase.auth.updateUser({
    data: updateData,
  })
  if (error) {
    throw new Error(error.message)
  }
  return data
}

export const startWorkTime = async ({ end_work }: WorkTimeProps) => {
  const current = new Date()
  const end = new Date(end_work)

  const isSameData = isSameDate(current, end)

  if (isSameData) {
    throw new Error('validation.endWorkToday')
  }
  const updateData = {
    is_work: true,
    start_work: new Date(),
    day_off: false,
  }
  const { data, error } = await supabase.auth.updateUser({
    data: updateData,
  })

  if (error) {
    throw new Error(error.message)
  }
  return data
}
