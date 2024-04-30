import type { App } from 'vue'
import registerProperties from './register-properties'

export default function registerApp(app: App) {
    registerProperties(app)
}
