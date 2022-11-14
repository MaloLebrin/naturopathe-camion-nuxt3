import dayjs from 'dayjs'

export function toFormat(date: Date | string, format: string) {
  return dayjs(date).locale('fr').format(format)
}
