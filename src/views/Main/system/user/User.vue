<template>
    <PageSearch
        @handleResetBtnClick="handleResetBtnClick"
        @handleQueryBtnClick="handleQueryBtnClick"
        :formItemConfig="formItemConfig"
    />
    <PageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
    />
</template>

<script lang="ts" name="User" setup>
    import formItemConfig from './config/form.config'
    import PageSearch from '@/components/page-search'
    import PageContent from '@/components/page-content'
    import contentTableConfig from './config/content.config'
    import { ref } from 'vue'

    const pageContentRef = ref<InstanceType<typeof PageContent>>()

    const handleResetBtnClick = () => {
        console.log(pageContentRef.value)

        pageContentRef.value?.getPagesData()
    }

    const handleQueryBtnClick = (queryParam: object) => {
        pageContentRef.value?.getPagesData(queryParam)
    }
</script>

<style scoped lang="less"></style>
