<template>
    <el-tabs class="demo-tabs" v-model="activeTab" stretch>
        <el-tab-pane name="first">
            <template #label>
                <span>
                    <el-icon>
                        <User />
                    </el-icon>
                    Account
                </span>
            </template>
            <LoginAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="second">
            <template #label>
                <span>
                    <el-icon>
                        <Iphone />
                    </el-icon>
                    Number
                </span>
            </template>
            <LoginPhone />
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" name="LoginPanel" setup>
    import { ref } from 'vue'
    import LoginAccount from './LoginAccount.vue'
    import LoginPhone from './LoginPhone.vue'

    const activeTab = ref('first')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
</script>

<style lang="less" scoped>
    .el-tabs {
        width: 100%;
        max-width: 35rem;
        font-family: 'Microsoft YaHei', sans-serif;
        margin-bottom: 0;
        .el-icon {
            margin: 2px 2px 0 0;
        }
    }
</style>
