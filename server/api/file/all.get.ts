import { serverSupabaseServiceRole } from '#supabase/server'
import { FileType } from '~~/types'

export default defineEventHandler(async event => {
  const client = serverSupabaseServiceRole<FileType>(event)
  return client.from('File').select()
})
