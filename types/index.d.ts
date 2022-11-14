import type API from '~~/helpers'
// import type { UserStoreState } from './User'
// import { User } from './User'
// import type { blogState } from '.'

declare module '#app' {
  interface NuxtApp {
    $isProductionMode(): boolean
    $getApiUrl(): string
    $api(): API
    $toFormat(date: Date | string, format: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $isProductionMode(): boolean
    $getApiUrl(): string
    $api(): API
    $toFormat(date: Date | string, format: string): string
  }
}

export { }
