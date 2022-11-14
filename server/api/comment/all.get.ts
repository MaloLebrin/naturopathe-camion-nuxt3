import { serverSupabaseServiceRole } from '#supabase/server'
import { CommentType } from '~~/server/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<CommentType>(event)
  return client.from('Comment').select()
})
