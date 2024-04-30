<template>
    <h5>Text</h5>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#f5f5f5d8"
        background-color="#1d1d1d"
        popper-effect="dark"
        popper-class="popper-box"
        :default-active="currentMenuId"
    >
        <template v-for="menu in menusList" :key="menu.id">
            <template v-if="menu.type === 1">
                <!-- 一级菜单 -->
                <el-sub-menu :index="menu.id + ''">
                    <template #title>
                        <!-- <i v-if="menu.icon" :class="menu.icon"></i> -->
                        <el-icon style="width: 16px; height: 16px">
                            <Menu />
                        </el-icon>
                        <span>{{ menu.name }}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item-group>
                        <template
                            v-for="childMenu in menu.children"
                            :key="childMenu.id"
                        >
                            <el-menu-item
                                :class="
                                    childMenu.url ===
                                    router.currentRoute.value.path
                                        ? 'is-active'
                                        : ''
                                "
                                :index="childMenu.id + ''"
                                @click="handleMenuItemClick(childMenu)"
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
                <el-menu-item :index="menu.id + ''">
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
    import { toRefs, defineProps, ref } from 'vue'
    import { pathMapToMenu } from '@/utils/map-menus'
    import useLoginStore from '@/store/login'
    import router from '@/router'

    const { menusList } = useLoginStore()
    const props = defineProps({
        isCollapse: Boolean
    })

    const { isCollapse } = toRefs(props)

    const currentMenu = pathMapToMenu(menusList, router.currentRoute.value.path)
    const currentMenuId = ref<string>(currentMenu?.id + '')

    function handleMenuItemClick(menu: any) {
        router.push({
            path: menu.url ?? '/not-found'
        })
    }
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
                    &:hover {
                        background-color: #222f3b;
                        color: #409eff;
                    }
                }
                .el-menu-item.is-active {
                    background-color: #222f3b !important;
                    color: #409eff;
                }
            }
        }
    }

    .el-menu--collapse {
        .is-active {
            /deep/ .el-sub-menu__title {
                background-color: #222f3b;
                color: #409eff;
            }
        }
    }

    .popper-box {
        .el-menu-item-group {
            /deep/ .el-menu-item-group__title {
                display: none;
            }
            .is-active {
                background-color: #222f3b;
                color: #409eff;
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
