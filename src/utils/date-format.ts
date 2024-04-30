import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DAY_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCTime(
    UTCTime: string,
    format: string = DAY_TIME_FORMAT
) {
    return dayjs.utc(UTCTime).format(format)
}
