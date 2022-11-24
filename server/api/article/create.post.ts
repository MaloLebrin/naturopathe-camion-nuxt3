import { serverSupabaseServiceRole } from '#supabase/server'
import { Article, ArticlePayload } from '~~/types'

export default defineEventHandler(async event => {
  const body = await readBody<ArticlePayload>(event)

  const result = await serverSupabaseServiceRole<Article>(event)
    .from('Article')
    .insert(body)
    .select()

  return result
})
