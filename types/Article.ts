import type { BaseEntity, Category, FileType } from '.'

export interface Article extends BaseEntity {
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  title: string
  content: string | null
  description: string | null
  instaUrl: string | null
  facebookUrl: string | null
  isPublished: boolean
  isInstaPost: boolean
  authorId: number
  files: FileType[]
  categoryId: number | null
}

export interface blogState {
  articles: Article[]
  categories: Category[]
}

export interface ArticlePayload {
  title: string
  content: string
  description: string
  categoryId: number
  instaUrl: string
  facebookUrl: string
  files: string[]
}

export function defaultBlogState(): blogState {
  return {
    articles: [],
    categories: [],
  }
}
