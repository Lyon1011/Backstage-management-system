import registerElement from './register-element'
import type { App } from 'vue'

export default function registerApp(app: App) {
    registerElement(app)
}
