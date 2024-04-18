import 'element-plus/dist/base.css'
import type { App } from 'vue'
import {
    ElAlert,
    ElAside,
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElRadio
} from 'element-plus'

const components = [
    ElAlert,
    ElAside,
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElRadio
]

export default function registerElement(app: App) {
    for (const component of components) {
        app.component(component.name as string, component)
    }
}
