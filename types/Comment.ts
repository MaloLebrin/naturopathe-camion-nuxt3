import type { BaseEntity } from './BaseEntity'

export interface CommentType extends BaseEntity {
  creatorId: string | null
  authorName: string
  content: string
  articleId: number
}

export type CommentPayload = Omit<CommentType, 'id'>
