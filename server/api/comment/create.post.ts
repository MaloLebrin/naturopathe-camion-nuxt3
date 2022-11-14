import { serverSupabaseServiceRole } from "#supabase/server"
import { CommentType } from "~~/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<CommentType>(event)
    .from('Comment')
    .insert(body)
    .select()

  return result
})
