import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/Login/Login.vue')
    },
    {
        path: '/main',
        component: () => import('@/views/Main/Main.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
