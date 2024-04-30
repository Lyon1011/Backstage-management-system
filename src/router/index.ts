import localCache from '@/utils/cache'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import useSystemStore from '@/store/main/system'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue')
    },
    {
        name: 'main',
        path: '/main',
        component: () => import('@/views/main/Main.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/not-found/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if (to.path !== '/login') {
        const token = localCache.getCache('token')
        if (!token) {
            return '/login'
        }
    }
})

export default router
