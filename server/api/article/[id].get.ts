import { serverSupabaseServiceRole } from '#supabase/server'
import { Article } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<Article>(event)
  return client.from('Article').select('*, Category(id)').eq('id', event.context.params.id)
})
