import { serverSupabaseServiceRole } from '#supabase/server'
import { FileType } from '~~/types'
import cloudinary from 'cloudinary'

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole<FileType>(event)

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  const { data } = await client.from('File').select().eq('id', event.context.params.id).single()

  await cloudinary.v2.uploader.destroy(data.public_id)

  return client.from('File').delete().eq('id', event.context.params.id)
})
