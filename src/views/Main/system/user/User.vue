<template>
    <PageSearch :formItemConfig="formItemConfig" />
    <PageContent :contentTableConfig="contentTableConfig" />
</template>

<script lang="ts" name="User" setup>
    import formItemConfig from './config/form.config'
    import PageSearch from '@/components/page-search'
    import useSystemStore from '@/store/main/system'
    import PageContent from '@/components/page-content'
    import contentTableConfig from './config/content.config'

    const { getPagesList } = useSystemStore()
    getPagesList({
        url: '/users/list',
        queryInfo: {
            offset: 0,
            size: 10
        }
    })
</script>

<style scoped lang="less"></style>
