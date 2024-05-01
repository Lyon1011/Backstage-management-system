import { getPageListData } from '@/service/main/system'
import { getPagesListParam } from '@/service/main/system/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
const useSystemStore = defineStore('system', () => {
    const usersList = ref<object[]>([])
    const usersCount = ref<number>()

    async function getPagesList(params: getPagesListParam) {
        const { pageName, queryInfo } = params

        let url = ''
        switch (pageName) {
            case 'users':
                url = '/users/list'
                break
            case 'role':
                url = '/role/list'
                break
        }

        const res = await getPageListData({
            url,
            queryInfo
        })

        const { list, totalCount } = res.data
        usersList.value = list
        usersCount.value = totalCount
    }

    return { usersList, getPagesList }
})

export default useSystemStore
