<template>
    <div class="login-box">
        <h2>
            <el-icon><HomeFilled /></el-icon>Login
        </h2>
        <LoginPanel />
    </div>
</template>

<script lang="ts" name="Login" setup>
    import LoginPanel from './cpns/LoginPanel.vue'
</script>

<style scoped lang="less">
    .login-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        flex-direction: column;
        padding: 0 10rem;
        box-sizing: border-box;

        h2 {
            display: flex;
            align-items: center;
            font-size: 2.5rem;
            color: var(--el-color-primary);
            margin: 0 0 1rem;
        }
    }
</style>
