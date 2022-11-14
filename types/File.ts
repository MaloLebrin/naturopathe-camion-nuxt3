import type { BaseEntity } from './BaseEntity'

export interface FileType extends BaseEntity {
  name: string | null
  secure_url: string
  public_id: string
  url: string
  userId: number | null
  articleId: number | null
  idx: number | null
}
