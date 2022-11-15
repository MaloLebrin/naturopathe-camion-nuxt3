import type { Article, BaseEntity, FileType } from '.'

export enum ModalNameEnum {
  DELETE_ARTICLE = 'DELETE_ARTICLE',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}

export interface User extends BaseEntity {
  email: string
  firstName: string | null
  lastName: string | null
  name: string | null
  token: string
  articles: Article[] | null
  files: FileType[] | null
}

export interface SessionSupabase {
  access_token: string
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: 'bearer'
  user: UserSupabase
}

export interface UserSupabase {
  aud: string
  confirmation_sent_at: Date
  confirmed_at: Date
  created_at: Date
  email: `${string}@${string}.${string}`
  email_confirmed_at: Date
  id: string
  identities: Identity[]
  last_sign_in_at: Date
  phone: string
  role: string
  updated_at: Date
}

type Identity = Record<string, any>

export interface UserStoreState {
  currentUser: UserSupabase | null
  currentSession: SessionSupabase | null
  isLoggedIn: boolean
  ui: {
    isSidebarOpen: boolean
    loading: number
    modalName: ModalNameEnum | null
    data: Record<string, any> | null
  }
}

export function defaultUserState(): UserStoreState {
  return {
    currentUser: null,
    currentSession: null,
    isLoggedIn: false,
    ui: {
      isSidebarOpen: false,
      loading: 0,
      modalName: null,
      data: null,
    },
  }
}
