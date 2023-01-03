import { serverSupabaseServiceRole } from '#supabase/server'
import type { Article } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<Article>(event)

  if (process.env.TEST_MODE === 'true') {
    return client.from('Article').select()
  }
  return client.from('Article').select().eq('isTest', false)
})
