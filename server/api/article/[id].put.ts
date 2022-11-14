import { serverSupabaseServiceRole } from "#supabase/server"
import { Article } from "~~/server/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body, '<==== body')

  const result = await serverSupabaseServiceRole<Article>(event)
    .from('Article')
    .update({
      ...body,
      updatedAt: new Date(),
    })
    .eq('id', event.context.params.id)
    .select()

  return result
})
