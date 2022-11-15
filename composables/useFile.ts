import { useUserStore } from '~~/store'

export default function useFile() {
  const { IncLoading, DecLoading } = useUserStore()

  async function postMany(files: FormData, id: number) {
    IncLoading()
    // await $api().post(`article-pictures/${id}`, files)
    DecLoading()
  }
  return {
    postMany,
  }
}
