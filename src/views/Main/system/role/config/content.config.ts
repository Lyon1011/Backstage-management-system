import { computed } from 'vue'
import useSystemStore from '@/store/main/system'

const usersList = computed(() => useSystemStore().usersList)
const propsList = [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
    },
    {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
    },
    {
        label: '操作',
        minWidth: '120',
        slotName: 'handler'
    }
]

const contentTableConfig = {
    usersList,
    propsList
}

export default contentTableConfig
