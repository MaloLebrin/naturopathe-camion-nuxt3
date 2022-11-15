import { serverSupabaseServiceRole } from "#supabase/server"
import { FileType } from "~~/types"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await serverSupabaseServiceRole<FileType>(event)
    .from('File')
    .update({
      ...body,
      updatedAt: new Date(),
    })
    .eq('id', event.context.params.id)
    .select()

  return result
})
