<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <NavMenu :isCollapse="isCollapse" />
            </el-aside>
            <el-container>
                <el-header>
                    <NavHeader @getCollapse="getCollapse" />
                </el-header>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" name="Main" setup>
    import NavMenu from '@/components/nav-menu'
    import NavHeader from '@/components/nav-header'
    import { ref } from 'vue'
    import { RouterView } from 'vue-router'

    const isCollapse = ref<boolean>()
    function getCollapse(nowCollapse: boolean) {
        isCollapse.value = nowCollapse
    }
</script>

<style scoped lang="less">
    .common-layout {
        height: 100%;
        width: 100%;
        .el-container {
            height: 100%;
            width: 100%;
            .el-aside {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                background-color: #1d1d1d;
                color: #f5f5f5d8;
                width: auto;
            }
            .el-container {
                .el-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #fff;
                }
                .el-main {
                    background: #eff1f6;
                }
            }
        }
    }
</style>
