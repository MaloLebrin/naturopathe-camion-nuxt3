import { serverSupabaseUser, serverSupabaseClient, serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // console.log(process.env.SUPABASE_SERVICE_KEY, '<==== process.env.SUPABASE_SERVICE_KEY')
  // const client = serverSupabaseClient(event)
  // console.log(client, '<==== client')
  // const { data } = await client.from('Category').select()
  // console.log(data, '<==== data')
  // const clientServiceRole = serverSupabaseServiceRole(event)
  // console.log(clientServiceRole, '<==== clientServiceRole')
  // const user = await serverSupabaseUser(event)
  // console.log(user, '<==== user')
  // return user
})
