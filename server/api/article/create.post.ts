import { serverSupabaseServiceRole } from "#supabase/server"
import { Article } from "~~/server/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<Article>(event)
    .from('Article')
    .insert(body)
    .select()

  return result
})
