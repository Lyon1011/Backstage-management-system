<template>
    <PageContent :contentTableConfig="contentTableConfig" pageName="role" />
</template>

<script lang="ts" setup>
    import contentTableConfig from '../role/config/content.config'
    import PageContent from '@/components/page-content/src/PageContent.vue'
</script>

<style scoped></style>
