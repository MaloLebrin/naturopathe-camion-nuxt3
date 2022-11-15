
declare module '#app' {
  interface NuxtApp {
    $isProductionMode(): boolean
    $toFormat(date: Date | string, format: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $isProductionMode(): boolean
    $toFormat(date: Date | string, format: string): string
  }
}

export { }
