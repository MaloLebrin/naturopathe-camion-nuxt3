import cloudinary from 'cloudinary'
import { serverSupabaseServiceRole } from '#supabase/server'
import { FileType } from '~~/types'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  console.log(body.files, '<==== body files')
  return body

  // cloudinary.v2.config({
  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   api_secret: process.env.CLOUDINARY_API_SECRET,
  // })

  // const resultcloudinary = await cloudinary.v2.uploader.upload(body.file.path, {
  //   folder: `naturopathe-camion-${process.env.NODE_ENV}/user-elisa-neaud/article-${body.article.id}`,
  // })

  // const result = await serverSupabaseServiceRole<FileType>(event)
  //   .from('File')
  //   .insert({
  //     url: resultcloudinary.url,
  //     public_id: resultcloudinary.public_id,
  //     secure_url: resultcloudinary.secure_url,
  //     // userId: user.id,
  //     name: `${resultcloudinary.original_filename}-${body.article.title}`,
  //     idx: body.file.idx,
  //     articleId: body.article.id,
  //   })
  //   .select()

  // return result
})
