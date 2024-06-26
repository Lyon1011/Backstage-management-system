<template>
    <el-form :rules="rules" :model="auth" ref="formRef">
        <el-form-item prop="name">
            <el-input v-model="auth.name" placeholder="请输入用户名" clearable>
                <template #prepend>
                    <el-icon><User /></el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                v-model="auth.password"
                type="password"
                placeholder="请输入密码"
                show-password
            >
                <template #prepend>
                    <el-icon><Lock /></el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
    <div class="login-control-box">
        <div class="password-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button @click="onLogin">登录</el-button>
    </div>
</template>

<script lang="ts" name="LoginAccount" setup>
    import { ref, reactive } from 'vue'
    import rules from '../config/AccountConfig'
    import { ElForm } from 'element-plus'
    import localCache from '@/utils/cache'
    import { Account } from '@/store/type'
    import useLoginStore from '@/store/login'

    const loginStore = useLoginStore()
    const auth = reactive<Account>({
        name: localCache.getCache('name') ?? '',
        password: localCache.getCache('password') ?? ''
    })
    const isKeepPassword = ref(localCache.getCache('isKeepPassword') ?? false)
    const formRef = ref<InstanceType<typeof ElForm>>()

    const onLogin = () => {
        formRef.value?.validate((valid) => {
            if (valid) {
                if (isKeepPassword.value) {
                    localCache.setCache('name', auth.name)
                    localCache.setCache('password', auth.password)
                    localCache.setCache('isKeepPassword', isKeepPassword.value)
                    loginStore.accountLogin({ ...auth })
                } else {
                    localCache.removeCache('name')
                    localCache.removeCache('password')
                    localCache.removeCache('isKeepPassword')
                }
            }
        })
    }
</script>

<style scoped lang="less">
    h3 {
        margin: 0 0 10px 2px;
        font-weight: lighter;
    }
    .el-form {
        .el-form-item {
            margin-bottom: 20px;
            .el-input {
                width: 100%;
                height: 2rem;
                max-width: 35rem;
            }
            :deep(.el-form-item__error) {
                display: block;
                margin-left: 2px;
            }
        }
    }

    .login-control-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2rem;
        width: 100%;
        .el-button {
            flex: 2;
            height: 2rem;
            max-width: 35rem;
            margin-left: 1rem;
        }
        .password-control {
            display: flex;
            flex: 1;
            justify-content: flex-start;

            .el-checkbox {
                margin-right: 1.8rem;
                color: #ffffff87;
            }
        }
    }
</style>
