<template>
    <h5>Text</h5>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#f5f5f5d8"
        background-color="#1d1d1d"
        popper-effect="dark"
        popper-class="popper-box"
    >
        <template v-for="menu in menusList" :key="menu.id">
            <template v-if="(menu as menuType).type === 1">
                <!-- 一级菜单 -->
                <el-sub-menu :index="(subIndex++).toString()">
                    <template #title>
                        <!-- <i v-if="menu.icon" :class="menu.icon"></i> -->
                        <el-icon style="width: 16px; height: 16px">
                            <Menu />
                        </el-icon>
                        <span>{{ (menu as menuType).name }}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item-group>
                        <template
                            v-for="childMenu in (menu as menuType).children"
                            :key="childMenu.id"
                        >
                            <el-menu-item
                                :index="`${subIndex}-${childIndex++}`"
                            >
                                <i
                                    v-if="childMenu.icon"
                                    :class="childMenu.icon"
                                ></i>
                                <span>{{ childMenu.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-menu-item-group>
                </el-sub-menu>
            </template>
            <template v-else>
                <el-menu-item :index="(subIndex++).toString">
                    <component
                        v-if="(menu as menuType).icon"
                        :is="(menu as menuType).icon"
                        style="width: 16px; height: 16px"
                    ></component>
                    <span>{{ (menu as menuType).name }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
    import { menuType } from '@/store/type'
    import { toRefs, defineProps } from 'vue'
    import useLoginStore from '@/store/login'

    const { menusList } = useLoginStore()
    const subIndex = 1
    const childIndex = 1
    // const isCollapse = ref<boolean>(false)
    // const iconsList = ['Menu', 'Menu', 'Menu']
    const props = defineProps({
        isCollapse: Boolean
    })

    const { isCollapse } = toRefs(props)
    console.log(props.isCollapse)
</script>

<style scoped lang="less">
    h5 {
        display: block;
        width: 100%;
        text-align: center;
        background-color: #1d1d1d;
    }
    .el-menu {
        width: 100%;
        font-weight: bold;
        font-family: '微软雅黑';
        flex: 1;
        border-right: none;
        .el-sub-menu {
            /deep/ .el-sub-menu__title:hover {
                background-color: #222f3b;
                color: #409eff;
            }
            .el-menu-item-group {
                background-color: #141414;
                /deep/ .el-menu-item-group__title {
                    display: none;
                }
                .el-menu-item {
                    font-size: 0.8rem;
                }
                .el-menu-item:hover {
                    background-color: #222f3b;
                    color: #409eff;
                }
            }
        }
    }
    .popper-box {
        .el-menu-item-group {
            /deep/ .el-menu-item-group__title {
                display: none;
            }
            ul {
                .el-menu-item:hover {
                    background-color: #222f3b;
                    color: #409eff;
                }
            }
        }
    }
</style>
