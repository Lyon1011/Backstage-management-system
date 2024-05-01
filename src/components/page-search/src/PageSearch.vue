<template>
    <div class="search-box">
        <EncapsulateForm v-bind="formItemConfig" v-model="formData">
            <template #footer>
                <el-button @click="handleResetClick">
                    <el-icon>
                        <RefreshRight />
                    </el-icon>
                    重置
                </el-button>
                <el-button @click="handleQueryClick">
                    <el-icon><Search /></el-icon>
                    查询
                </el-button>
            </template>
        </EncapsulateForm>
    </div>
</template>

<script lang="ts" name="PageSearch" setup>
    import EncapsulateForm from '@/encapsulate-ui/form'
    import { ref, defineProps, defineEmits } from 'vue'

    const { formItemConfig } = defineProps({
        formItemConfig: {
            type: Object
        }
    })

    const formOriginData = {}

    for (const item of formItemConfig.formItemOptions) {
        formOriginData[item.field] = ''
    }

    const formData = ref({ ...formOriginData })
    const emit = defineEmits(['handleResetBtnClick', 'handleQueryBtnClick'])

    function handleResetClick() {
        formData.value = { ...formOriginData }
        emit('handleResetBtnClick')
    }

    function handleQueryClick() {
        emit('handleQueryBtnClick', formData.value)
    }
</script>

<style scoped lang="less">
    .search-box {
        background-color: #fff;
        padding: 30px 30px 30px 0;
        .el-button {
            margin-top: 10px;
            width: 5rem;
        }
    }
</style>
