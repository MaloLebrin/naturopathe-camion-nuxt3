import type { Article, BaseEntity, FileType } from '.'

export interface UserStoreState {
  currentUser: User | null
  isLoggedIn: boolean
  ui: {
    isSidebarOpen: boolean
    loading: number
    modalName: ModalNameEnum | null
    data: Record<string, any> | null
  }
}

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

export function defaultUserState(): UserStoreState {
  return {
    currentUser: null,
    isLoggedIn: false,
    ui: {
      isSidebarOpen: false,
      loading: 0,
      modalName: null,
      data: null,
    },
  }
}
