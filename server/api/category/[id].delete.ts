import { serverSupabaseServiceRole } from '#supabase/server'
import type { Category } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<Category>(event)
  return client.from('Category').delete().eq('id', event.context.params.id)
})
