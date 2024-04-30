<template>
    <div class="detail-box">
        <el-icon @click="switchCollapse" :size="20"
            ><Expand v-if="!isCollapse" />
            <Fold v-if="isCollapse" />
        </el-icon>
        <EncapsulateBreadCrumbs :breadCrumbsList="breadCrumbsList" />
    </div>
    <el-dropdown>
        <span class="el-dropdown-link">
            <div>
                <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <span> Hinwah </span>
            </div>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" name="NavHeader" setup>
    import { ref, computed } from 'vue'
    import { defineEmits } from 'vue'
    import EncapsulateBreadCrumbs from '@/encapsulate-ui/breadCrumbs'
    import { getBreadCrumbs } from '@/utils/map-menus'
    import useLoginStore from '@/store/login'
    import router from '@/router'

    const isCollapse = ref(false)
    const emit = defineEmits(['getCollapse'])
    const { menusList } = useLoginStore()

    function switchCollapse() {
        isCollapse.value = !isCollapse.value
        emit('getCollapse', isCollapse.value)
    }
    const breadCrumbsList = computed(() =>
        getBreadCrumbs(menusList, router.currentRoute.value.path)
    )
</script>

<style scoped lang="less">
    .detail-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-family: '微软雅黑';
        .el-icon {
            margin-right: 1rem;
            &:hover {
                cursor: pointer;
                color: #409eff;
            }
        }
        /deep/ .el-breadcrumb__inner {
            font-weight: bold;
        }
    }
    .el-dropdown {
        cursor: pointer;
        .el-dropdown-link {
            &:focus-visible {
                outline: none;
            }
            div {
                display: flex;
                align-items: center;
                .el-avatar--circle {
                    margin-right: 10px;
                    margin-bottom: 5px;
                    width: 2.3rem;
                    height: 2.3rem;
                }
            }
        }
    }
</style>
