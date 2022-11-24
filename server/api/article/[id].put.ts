import { serverSupabaseServiceRole } from '#supabase/server'
import { Article } from '~~/types'

export default defineEventHandler(async event => {
  const body = await readBody(event)

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
