import { serverSupabaseServiceRole } from '#supabase/server'
import { Article } from '~~/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<Article>(event)
  return client.from('Article').delete().eq('id', event.context.params.id)
})
