import { serverSupabaseServiceRole } from "#supabase/server"
import { Article } from "~~/server/types"

export default defineEventHandler(async (event) => {
  const client = serverSupabaseServiceRole<Article>(event)

  const { data } = await client.from('Article').select(`*, Category(*)`).eq('id', event.context.params.id)

  const now = new Date()

  const result = await client
    .from('Article')
    .update({
      updatedAt: now,
      publishedAt: data[0] && data[0].isPublished ? null : now,
      isPublished: data[0] && data[0].isPublished ? true : true,
    })
    .eq('id', event.context.params.id)
    .select()

  return result
})
