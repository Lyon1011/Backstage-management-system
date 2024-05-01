<template>
    <EncapsulateTable :usersList="usersList" :propsList="propsList">
        <template #status="scope">
            <el-button
                :type="scope.row.enable ? 'success' : 'danger'"
                size="small"
                plain
                >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
            >
        </template>
        <template #createAt="scope">
            {{ $filters.formatTime(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
            {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
        <template #handler>
            <div class="handle-btns">
                <el-button type="warning">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </div>
        </template>
        <template #footer>
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            />
        </template>
    </EncapsulateTable>
</template>

<script lang="ts" name="PageContent" setup>
    import EncapsulateTable from '@/encapsulate-ui/table'
    import { defineProps, defineExpose } from 'vue'
    import useSystemStore from '@/store/main/system'

    const { contentTableConfig, pageName } = defineProps({
        contentTableConfig: {
            type: Object,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    })

    const { getPagesList } = useSystemStore()

    // 获取页面数据
    // queryParam 将用于传入查询表格的参数
    const getPagesData = (queryParam: object = {}) => {
        getPagesList({
            pageName,
            queryInfo: {
                offset: 0,
                size: 10,
                ...queryParam
            }
        })
    }
    getPagesData()

    const { usersList, propsList } = contentTableConfig

    defineExpose({
        getPagesData
    })
</script>

<style scoped></style>
