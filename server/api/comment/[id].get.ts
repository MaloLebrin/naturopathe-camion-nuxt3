import { serverSupabaseServiceRole } from '#supabase/server'
import { CommentType } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<CommentType>(event)
  return client.from('Comment').select().eq('id', event.context.params.id)
})
