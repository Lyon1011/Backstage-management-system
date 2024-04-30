import { menuType, type Account } from '@/service/login/types'
import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { reactive, ref } from 'vue'
import router from '@/router'
import { mapMenus } from '@/utils/map-menus'
import { getMenusList, getUserInfo, loginByUsername } from '@/service/login'

const useLoginStore = defineStore('login', () => {
    const token = ref<string>()
    const userInfo = reactive({})
    const menusList = ref<menuType[]>([])

    async function accountLogin(data: Account) {
        // 获取 token
        const tokenRes = await loginByUsername(data)
        const { id, token: backendToken } = tokenRes.data
        token.value = backendToken
        localCache.setCache('token', token.value)

        // 获取用户信息
        const infoRes = await getUserInfo(id)
        Object.assign(userInfo, infoRes.data)
        localCache.setCache('userInfo', userInfo)

        // 获取主页列表
        const menusRes = await getMenusList(id)
        menusList.value = menusRes.data
        localCache.setCache('menusList', menusList)

        // 进入主页面
        router.replace('/main')
    }

    // 刷新后载入 pinia
    function setupStore() {
        token.value = localCache.getCache('token')
        Object.assign(userInfo, localCache.getCache('userInfo'))
        Object.assign(menusList, localCache.getCache('menusList'))

        // 将获取到 menusList 中的各级子路由加入路由
        const routes = mapMenus(menusList.value)
        routes.forEach((route) => {
            router.addRoute('main', route)
        })
    }

    return { token, userInfo, menusList, accountLogin, setupStore }
})

export default useLoginStore
