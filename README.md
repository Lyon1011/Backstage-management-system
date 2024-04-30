# 后端管理系统

## 基本介绍
本项目前端使用 vue3 + ts 进行开发, 主要功能包括登录模块,信息展示模块,编辑模块以及图表展示模块

## 技术栈使用
- Vue3(Composition API)
- Pinia
- TS
- Vue-Router
- ElementPlus-UI + echarts
  
## 项目亮点
1. 项目使用 vue3 Composition API 进行前端开发,使用的版本运用了 Vue3 最新的API像是 `defineModel`
2. 对项目中频繁使用的 ElementPlus 进行了二次封装并设计了接口保证参数和返回值的严谨性
3. 针对项目中频繁使用的数据设计专用接口并剥离至专门的文件夹进行管理
4. 对 echarts 图表进行了适当的封装增加其可用性

## 目录结构
```tree
src
├─ App.vue
├─ main.ts
├─ shims-vue.d.ts
├─ views
│  ├─ not-found
│  │  └─ NotFound.vue
│  ├─ main
│  │  ├─ Main.vue
│  │  ├─ system
│  │  │  ├─ user
│  │  │  │  ├─ User.vue
│  │  │  │  └─ config
│  │  │  │     ├─ content.config.ts
│  │  │  │     └─ form.config.ts
│  │  │  ├─ role
│  │  │  │  └─ Role.vue
│  │  │  ├─ menu
│  │  │  │  └─ Menu.vue
│  │  │  └─ department
│  │  │     └─ Department.vue
│  │  ├─ story
│  │  │  ├─ list
│  │  │  │  └─ List.vue
│  │  │  └─ chat
│  │  │     └─ Chat.vue
│  │  ├─ product
│  │  │  ├─ goods
│  │  │  │  └─ Goods.vue
│  │  │  └─ category
│  │  │     └─ Category.vue
│  │  └─ analysis
│  │     ├─ overview
│  │     │  └─ Overview.vue
│  │     └─ dashboard
│  │        └─ Dashboard.vue
│  └─ login
│     ├─ Login.vue
│     ├─ cpns
│     │  ├─ LoginAccount.vue
│     │  ├─ LoginPanel.vue
│     │  └─ LoginPhone.vue
│     └─ config
│        ├─ AccountConfig.ts
│        └─ PhoneConfig.ts
├─ utils
│  ├─ cache.ts
│  ├─ date-format.ts
│  └─ map-menus.ts
├─ store
│  ├─ main
│  │  └─ system
│  │     └─ index.ts
│  └─ login
│     └─ index.ts
├─ service
│  ├─ index.ts
│  ├─ request
│  │  ├─ config.ts
│  │  ├─ index.ts
│  │  └─ type.ts
│  ├─ main
│  │  └─ system
│  │     ├─ index.ts
│  │     └─ types.ts
│  └─ login
│     ├─ index.ts
│     └─ types.ts
├─ router
│  ├─ index.ts
│  └─ main
│     ├─ system
│     │  ├─ user
│     │  │  └─ User.ts
│     │  ├─ role
│     │  │  └─ Role.ts
│     │  ├─ menu
│     │  │  └─ Menu.ts
│     │  └─ department
│     │     └─ Department.ts
│     ├─ story
│     │  ├─ list
│     │  │  └─ List.ts
│     │  └─ chat
│     │     └─ Chat.ts
│     ├─ product
│     │  ├─ goods
│     │  │  └─ Goods.ts
│     │  └─ category
│     │     └─ Category.ts
│     └─ analysis
│        ├─ overview
│        │  └─ Overview.ts
│        └─ dashboard
│           └─ Dashboard.ts
├─ global
│  ├─ index.ts
│  ├─ register-element.ts
│  └─ register-properties.ts
├─ encapsulate-ui
│  ├─ table
│  │  ├─ index.ts
│  │  └─ src
│  │     └─ Table.vue
│  ├─ form
│  │  ├─ index.ts
│  │  ├─ types
│  │  │  └─ index.ts
│  │  └─ src
│  │     └─ form.vue
│  └─ breadCrumbs
│     ├─ index.ts
│     ├─ types
│     │  └─ index.ts
│     └─ src
│        └─ BreadCrumbs.vue
├─ components
│  ├─ page-search
│  │  ├─ index.ts
│  │  └─ src
│  │     └─ PageSearch.vue
│  ├─ page-content
│  │  ├─ index.ts
│  │  └─ src
│  │     └─ PageContent.vue
│  ├─ nav-menu
│  │  ├─ index.ts
│  │  └─ src
│  │     └─ NavMenu.vue
│  └─ nav-header
│     ├─ index.ts
│     └─ src
│        └─ NavHeader.vue
└─ assets
   ├─ logo.png
   └─ css
      ├─ base.less
      ├─ element.scss
      └─ index.less
```
