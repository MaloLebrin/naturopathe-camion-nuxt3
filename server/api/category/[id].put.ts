import { serverSupabaseServiceRole } from "#supabase/server"
import { Category } from "~~/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<Category>(event)
    .from('Category')
    .update(body)
    .eq('id', event.context.params.id)
    .select()

  return result
})
