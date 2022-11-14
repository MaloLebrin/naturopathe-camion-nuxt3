import dayjs from 'dayjs'

export default defineNuxtPlugin(() => {

  function toFormat(date: Date | string, format: string) {
    return dayjs(date).locale('fr').format(format)
  }

  return {
    provide: {
      toFormat: (date: Date | string, format: string) => toFormat(date, format),
    },
  }
})
