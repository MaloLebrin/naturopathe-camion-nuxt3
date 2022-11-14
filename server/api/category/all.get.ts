import { serverSupabaseServiceRole } from '#supabase/server'
import { Category } from '~~/server/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<Category>(event)
  return client.from('Category').select()
})
