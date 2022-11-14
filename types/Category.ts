import type { BaseEntity } from './BaseEntity'

export interface Category extends BaseEntity {
  name: string
  color: string | null
  articles?: number[]
}

export type CategoryPayload = Omit<Category, 'id'>
