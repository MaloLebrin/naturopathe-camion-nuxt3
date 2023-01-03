import { serverSupabaseServiceRole } from '#supabase/server'
import type { Category } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<Category>(event)

  if (process.env.TEST_MODE === 'true') {
    return client.from('Category').select().eq('id', event.context.params.id)
  }

  return client.from('Category').select().eq('id', event.context.params.id).eq('isTest', false)
})
