import { menuType } from '@/service/login/types'
import type { RouteRecordRaw } from 'vue-router'
import type { breadCrumbType } from '@/encapsulate-ui/breadCrumbs/types'

function mapMenus(menusList: menuType[]): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = []

    // 用于存储模块及其路径
    const allRoutes: RouteRecordRaw[] = []

    // 获取在 src/router/main 下的所有路由的路径
    const routePath = require.context('../router/main', true, /\.ts/)

    // 通过路径获取具体模块(path & name)
    routePath.keys().forEach((key) => {
        const route = require('../router/main' + key.split('.')[1])
        allRoutes.push(route.default)
    })

    // 递归获取符合用户权限的模块
    const _recurseGetRoute = (menusList: menuType[]) => {
        for (const menu of menusList) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url)
                if (route) routes.push(route)
            } else {
                _recurseGetRoute(menu.children)
            }
        }
    }

    _recurseGetRoute(menusList)

    return routes
}

// 获取当前选中菜单
function pathMapToMenu(
    menusList: any[],
    currentPath: string,
    breadCrumbsList?: breadCrumbType[]
): any {
    for (const menu of menusList) {
        if (menu.type === 1) {
            // 递归调用,找菜单
            const childMenu = pathMapToMenu(menu.children ?? [], currentPath)
            if (childMenu) {
                breadCrumbsList?.push({ name: menu.name })
                breadCrumbsList?.push({ name: childMenu.name })
                return childMenu
            }
        } else if (menu.type === 2 && menu.url === currentPath) {
            return menu
        }
    }
}

function getBreadCrumbs(menusList: any[], currentPath: string) {
    const breadCrumbsList: breadCrumbType[] = []
    pathMapToMenu(menusList, currentPath, breadCrumbsList)
    return breadCrumbsList
}

export { mapMenus, pathMapToMenu, getBreadCrumbs }
