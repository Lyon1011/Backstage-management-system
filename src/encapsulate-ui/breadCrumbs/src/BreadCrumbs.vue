<template>
    <el-breadcrumb separator="/">
        <template v-for="item of breadCrumbsList">
            <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script lang="ts" name="BreadCrumbs" setup>
    import { PropType, defineProps } from 'vue'
    import { breadCrumbType } from '../types'
    const { breadCrumbsList } = defineProps({
        breadCrumbsList: Array as PropType<breadCrumbType[]>
    })
</script>

<style scoped></style>
