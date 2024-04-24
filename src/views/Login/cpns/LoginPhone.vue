<template>
    <el-form :rules="rules" :model="phone">
        <el-form-item prop="number">
            <el-input
                v-model="phone.number"
                placeholder="请输入手机号"
                clearable
            >
                <template #prepend>
                    <el-icon>
                        <Iphone />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="code">
            <div class="code-box">
                <el-input
                    v-model="phone.code"
                    placeholder="请输入验证码 "
                    clearable
                >
                    <template #prepend>
                        <el-icon><ChatDotSquare /></el-icon>
                    </template>
                    <template #suffix>
                        <el-button plain>发送验证码</el-button>
                    </template>
                </el-input>
            </div>
        </el-form-item>
    </el-form>
    <div class="login-control-box">
        <div class="code-control">
            <el-checkbox v-model="isKeepNumber">记住手机号</el-checkbox>
        </div>
        <el-button>登录</el-button>
    </div>
</template>

<script lang="ts" name="LoginPhone" setup>
    import { ref, reactive } from 'vue'
    import rules from '../config/PhoneConfig'
    interface Phone {
        number: string
        code: string
    }
    const phone = reactive<Phone>({
        number: '',
        code: ''
    })
    const isKeepNumber = ref(false)
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

            .code-box {
                display: flex;
                justify-content: space-between;
                width: 100%;
                .el-input {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;

                    /deep/ .el-input__wrapper {
                        padding-right: 0;

                        .el-input__inner {
                            flex: 2;
                        }

                        .el-input__suffix {
                            flex: 1;

                            .el-input__suffix-inner {
                                width: 100%;
                                .el-button {
                                    width: 100%;
                                    border-top-left-radius: 0;
                                    border-bottom-left-radius: 0;
                                }
                            }
                        }
                    }
                }
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
        .code-control {
            .el-checkbox {
                color: #ffffff87;
            }
        }
    }
</style>
