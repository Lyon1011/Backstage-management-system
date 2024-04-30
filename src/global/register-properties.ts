import { formatUTCTime } from '@/utils/date-format'
import { App } from 'vue'

export default function registerProperties(app: App) {
    app.config.globalProperties.$filters = {
        formatTime(time: any) {
            return formatUTCTime(time)
        }
    }
}
