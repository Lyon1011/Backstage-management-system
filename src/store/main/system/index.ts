import { getPageListData } from '@/service/main/system'
import { getPagesListParam } from '@/service/main/system/types'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
const useSystemStore = defineStore('system', () => {
    const usersList = reactive<object[]>([])
    const usersCount = ref<number>()

    async function getPagesList(params: getPagesListParam) {
        const res = await getPageListData(params)
        const { list, totalCount } = res.data
        Object.assign(usersList, list)
        usersCount.value = totalCount
    }

    return { usersList, getPagesList }
})

export default useSystemStore
