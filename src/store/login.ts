import {
    menuType,
    type Account,
    type LoginResponse,
    type ResponseType
} from '@/store/type'
import xhRequest from '@/service'
import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { reactive, ref } from 'vue'
import router from '@/router'

const useLoginStore = defineStore('login', () => {
    const UNDEFINED_NUMBER = -1
    const token = ref<string>()
    const userInfo = reactive({})
    const menusList = reactive({
        // id: UNDEFINED_NUMBER,
        // name: '',
        // sort: UNDEFINED_NUMBER,
        // type: UNDEFINED_NUMBER,
        // url: ''
    })

    async function accountLogin(data: Account) {
        // 获取 token
        const tokenRes = await xhRequest.post<ResponseType<LoginResponse>>({
            headers: {
                'Content-Type': 'application/json'
            },
            url: '/login',
            showLoading: true,
            data
        })
        const { id, token: backendToken } = tokenRes.data
        token.value = backendToken
        localCache.setCache('token', token.value)

        // 获取用户信息
        const infoRes = await xhRequest.get<ResponseType>({
            headers: {},
            url: `/users/${id}`
        })
        Object.assign(userInfo, infoRes.data)
        localCache.setCache('userInfo', userInfo)

        // 获取主页列表
        const menusRes = await xhRequest.get<ResponseType>({
            headers: {},
            url: `/role/${id}/menu`
        })
        Object.assign(menusList, menusRes.data)
        localCache.setCache('menusList', menusList)

        // 进入主页面
        router.replace('/main')
    }

    // 刷新后载入 pinia
    function setupStore() {
        token.value = localCache.getCache('token')
        Object.assign(userInfo, localCache.getCache('userInfo'))
        Object.assign(menusList, localCache.getCache('menusList'))
    }

    return { token, userInfo, menusList, accountLogin, setupStore }
})

export default useLoginStore
