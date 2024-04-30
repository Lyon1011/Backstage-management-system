<template>
    <el-form>
        <el-row>
            <template v-for="item in formItemOptions">
                <el-col v-bind="layoutStyle">
                    <el-form-item
                        :label="item.label"
                        :style="formItemStyle"
                        :label-width="labelWidth"
                    >
                        <template
                            v-if="
                                item.type === 'input' ||
                                item.type === 'password'
                            "
                        >
                            <el-input
                                :show-password="item.type === 'password'"
                                :rules="item.rules"
                                :placeholder="item.placeholder"
                                v-model="modelValue[`${item.field}`]"
                            />
                        </template>
                        <template v-else-if="item.type === 'select'">
                            <el-select>
                                <el-option
                                    v-for="option in item.options"
                                    :key="option.value"
                                    :value="option.value"
                                    v-model="modelValue[`${item.field}`]"
                                ></el-option>
                            </el-select>
                        </template>
                        <template v-else-if="item.type === 'datepicker'">
                            <el-date-picker
                                v-bind="item.otherOptions"
                                v-model="modelValue[`${item.field}`]"
                            ></el-date-picker>
                        </template>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
    </el-form>
</template>

<script lang="ts" name="form" setup>
    import {
        PropType,
        defineProps,
        defineEmits,
        toRefs,
        defineModel
    } from 'vue'
    import { formItemType } from '../types'

    const props = defineProps({
        labelWidth: {
            type: String,
            default: '100px'
        },
        // layout 布局样式
        layoutStyle: {
            type: Object,
            default: () => ({
                xl: 6,
                lg: 8,
                md: 12,
                sm: 24,
                xs: 24
            })
        },
        // 表单元素数据
        formItemOptions: {
            type: Array as PropType<formItemType[]>
        },
        // 表单元素样式
        formItemStyle: {
            type: Object,
            default: () => ({
                padding: '0 10px'
            })
        },
        modelValue: {
            type: Object
        }
    })

    const { formItemOptions, layoutStyle, formItemStyle } = toRefs(props)

    const emit = defineEmits(['update:modelValue'])

    const modelValue = defineModel({
        type: Object
    })
</script>

<style scoped>
    .el-form-item {
        margin: 10px 0;
    }
</style>
