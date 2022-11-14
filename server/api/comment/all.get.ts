import { serverSupabaseServiceRole } from '#supabase/server'
import { CommentType } from '~~/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<CommentType>(event)
  return client.from('Comment').select()
})
