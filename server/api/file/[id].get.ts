import { serverSupabaseServiceRole } from '#supabase/server'
import { Category } from '~~/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<Category>(event)
  return client.from('File').select().eq('id', event.context.params.id)
})
