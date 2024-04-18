import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'
// import registerApp from './global'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(registerApp)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
