import { serverSupabaseServiceRole } from "#supabase/server"
import { Category } from "~~/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<Category>(event)
    .from('Category')
    .insert(body)
    .select()

  return result
})
