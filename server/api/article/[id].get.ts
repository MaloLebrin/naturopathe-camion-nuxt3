import { serverSupabaseServiceRole } from '#supabase/server'
import { Article } from '~~/server/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<Article>(event)
  return client.from('Article').select(`*, Category(*)`).eq('id', event.context.params.id)
})
