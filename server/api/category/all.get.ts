import { serverSupabaseServiceRole } from '#supabase/server'
import { Category } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<Category>(event)
  return client.from('Category').select()
})
