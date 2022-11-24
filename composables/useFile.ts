import { useUserStore } from '~~/store'

export default function useFile() {
  const { IncLoading, DecLoading } = useUserStore()

  async function postMany(filesArray: string[], id: number) {
    IncLoading()
    const { data } = await $fetch(`/api/file/create`, {
      method: 'post',
      body: { files: filesArray },
    })
    console.log(data, '<==== data')
    DecLoading()
  }

  function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  async function fileArrayToBase64(fileArray: File[]) {
    return Promise.all(fileArray.map(async (file) => {
      console.log(file, '<==== file')
      if (file) {
        const string = await toBase64(file)
        console.log(string, '<==== string')
        return string
      }
    }).filter(str => str))
  }


  return {
    postMany,
    toBase64,
    fileArrayToBase64,
  }
}
