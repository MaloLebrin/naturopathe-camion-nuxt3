import { serverSupabaseServiceRole } from "#supabase/server"
import { CommentType } from "~~/server/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<CommentType>(event)
    .from('Comment')
    .update({
      ...body,
      updatedAt: new Date(),
    })
    .eq('id', event.context.params.id)
    .select()

  return result
})
