import { supabase } from '../../../../../lib/supabase/supabase'
import { AddPackageSchemaType } from '../AddPackageSchema'
import { PackageSupabaseData } from './useAddPackage'

export const addPackage = async (newPackage: PackageSupabaseData & AddPackageSchemaType) => {
  const { data, error } = await supabase.from('packages').insert([newPackage]).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
