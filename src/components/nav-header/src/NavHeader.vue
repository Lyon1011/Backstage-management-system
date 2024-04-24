<template>
    <el-icon @click="switchCollapse" :size="20"
        ><Expand v-if="!isCollapse" />
        <Fold v-if="isCollapse" />
    </el-icon>
</template>

<script lang="ts" name="NavHeader" setup>
    import { ref } from 'vue'
    import { defineEmits } from 'vue'

    const isCollapse = ref(false)
    const emit = defineEmits(['getCollapse'])
    function switchCollapse() {
        isCollapse.value = !isCollapse.value
        emit('getCollapse', isCollapse.value)
    }
</script>

<style scoped lang="less">
    .el-icon:hover {
        cursor: pointer;
        color: #409eff;
    }
</style>
