import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'
import '@/assets/css/element.scss'
import 'normalize.css'
import './assets/css/index.less'
import { createPinia } from 'pinia'
import useLoginStore from '@/store/login'
import registerApp from './global'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn
})

app.use(createPinia())
useLoginStore().setupStore()
app.use(router)

app.use(registerApp)

app.mount('#app')
