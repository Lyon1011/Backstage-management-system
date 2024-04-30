<template>
    <div class="search-box">
        <EncapsulateForm v-bind="formItemConfig" v-model="formData" />
    </div>
</template>

<script lang="ts" name="PageSearch" setup>
    import EncapsulateForm from '@/encapsulate-ui/form'
    import { ref, defineProps } from 'vue'

    const { formItemConfig } = defineProps({
        formItemConfig: {
            type: Object
        }
    })

    const formData = ref({
        id: '',
        name: '',
        realname: '',
        createTime: '',
        cellphone: '',
        password: '',
        enable: ''
    })
</script>

<style scoped lang="less">
    .search-box {
        background-color: #fff;
        padding: 30px 30px 30px 0;
    }
</style>
